/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const myHeaders = new Headers();
myHeaders.append(
	"Cookie",
	".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOPWUnsryC5nvRqrcSeJgrnZUC_0Zr1IgODOGHqKptkmZ0JYNY1ZeBfpDquPOD8DkKSuYLeVLHM4CUGQblvI6mZv2Pq5i5wbQYAW6RHlZhyy-BZHHj5BG8K1bn5OIEs5kBgeczYf-HZWGOFEQa044ec1W-oPgGF1_cALJzlZMaqr2rVwb0upyNNTD19aAPBIlCQbcH-eY_8fQ09kgIlZOF42qShLyU81KGzopW1HNKsMM7n3FXLxSi_GiASmFVWXZD1fz3MPmg-o06aFOrJuscaa8E1hm_r2r2w_GcaDuRlDB6rl3c31lNzbJohg6gHTNdKojKUXmYFegVOTFGN0RHCoKgnxIT3HgdEAuRcZQN7XMIHBM-PcpcgMg-Dpu34peCR2GcYaiHrd6dzyf0CzJNoCLb0bThmlAHWUkzTCkWETGljk5AXU9AbIRG47sUkx5kuphN6h5vCRaE1DVO9dM_7sYveKcEwczls0DLmy48ei4beEPCdD3DmRwmMXaCRVC39Euui8Vpv2IPyTIilGjX_nZLbdDBG7iIQHhcbmBmAMXStvLcPFeHNHIDIi_X0kwVt0yNboVDOr1McYc1NYdM2mFFNax-v26j-DViT-RpDVHo0jYB1u-cLthWUujEUUgNTKf0boh7IGUaBkHF0U_AUT9tD4Z7WqG6S3vx0jDWCFiP6k15YwGAmHKEqO-RtKDL-iHE5bQnffV46b45HOirJHv2Tt-Eyvm-fvmuZxF_GIg5fSzzsRSazL_dduwaNKQVQOCAQUQ3DV8hox4XmCRXdYIBDjCdri0W3zVu0HwCbhnJZYtH_VoSLj8NLeXNkSyI1fvg8kw9s6Rgx8Ggd_byiVbCU8XnQyxj6fYxWGRggtz412VPLSWxS-n3rhkuTaNHySFNWbXn8gK8ZPNIk8rxNklLtTSPvhcBPjdNrC0Z5_4zPEDv2Vy87D52B1NfSWKQgJOjNjVq4YpfvZwFHk80R; csrftoken=bY4uTQugUtVLKwsylxT0hj4tCO7ZiYq3"
);

// Gets the previously stored editor contents.
// const storageString = localStorage.getItem("editorContent");

let doc_text = [];

fetch("http://localhost:8000/api/blocknotes/?format=json", {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
})
	.then((response) => response.json())
	.then((result) => {
		// for (block in result[0].content) {
		// doc_text.push(block)
		// }
		result[0].content.forEach((element) => {
			try {
				if (element.content[0]["text"]) {
					doc_text.push(element.content[0]["text"]);
				}
			} catch (err) {
				console.log("Block doesn't contain text");
			}
		});
		// console.log(doc_text)
		// console.log("fetched result:", result[0].content[0]["content"][0]["text"]);
	})
	.catch((error) => console.error(error))
	.finally(() => {
		const {
			GoogleGenerativeAI,
			HarmCategory,
			HarmBlockThreshold,
		} = require("@google/generative-ai");

		const apiKey = "AIzaSyCzqP5RBjt-371znEmypXHCoFtfBaSoKLI";
		const genAI = new GoogleGenerativeAI(apiKey);

		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-pro",
		});

		const generationConfig = {
			temperature: 1,
			topP: 0.95,
			topK: 64,
			maxOutputTokens: 8192,
			responseMimeType: "text/plain",
		};

		async function run() {
			console.log("Passing to google", doc_text);
			const chatSession = model.startChat({
				generationConfig,
				// safetySettings: Adjust safety settings
				// See https://ai.google.dev/gemini-api/docs/safety-settings
				history: [
					{
						role: "user",
						parts: [
							{
								text: String(doc_text),
							},
						],
					},
				],
			});

			const result = await chatSession.sendMessage("Explain");
			console.log(result.response.text());
		}

		run();
	});

// const {
// 	GoogleGenerativeAI,
// 	HarmCategory,
// 	HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = "AIzaSyCzqP5RBjt-371znEmypXHCoFtfBaSoKLI";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
// 	model: "gemini-1.5-pro",
// });

// const generationConfig = {
// 	temperature: 1,
// 	topP: 0.95,
// 	topK: 64,
// 	maxOutputTokens: 8192,
// 	responseMimeType: "text/plain",
// };

// async function run() {
//     console.log("Passing to google",doc_text)
// 	const chatSession = model.startChat({
// 		generationConfig,
// 		// safetySettings: Adjust safety settings
// 		// See https://ai.google.dev/gemini-api/docs/safety-settings
// 		history: [
// 			{
// 				role: "user",
// 				parts: [
// 					{
// 						text: String(doc_text),
// 					},
// 				],
// 			},

// 		],
// 	});

// 	const result = await chatSession.sendMessage("Explain");
// 	console.log(result.response.text());
// }

// run();
