import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useMemo, useState } from "react";

const initBlockyData = {
	id: "bf9b0d1a-ac89-4f1d-b878-8d10d33e4cc1",
	type: "paragraph",
	props: {
		textColor: "default",
		backgroundColor: "default",
		textAlignment: "left",
	},
	content: [
		{
			type: "text",
			text: "",
			styles: {},
		},
	],
	children: [],
};
const BlockNote = () => {
	const [liveBlockyData, setLiveBlockyData] = useState({ editorContent: {} });
	const [savedBlockyData, setSavedBlockyData] = useState([initBlockyData]);

	async function saveToStorage(jsonBlocks: Block[]) {
		// Save contents to local storage. You might want to debounce this or replace
		// with a call to your API / database.
		setLiveBlockyData({ editorContent: JSON.stringify(jsonBlocks) });
		console.log("Save:", liveBlockyData.editorContent);

		fetch(
			"https://expert-bassoon-wrrvqqxp4qvf9w74-8000.app.github.dev/api/blocknotes/1",
			{
				headers: {
					accept: "text/html; q=1.0, */*",
					"accept-language": "en-US,en;q=0.6",
					"cache-control": "no-cache",
					"content-type": "application/json",
					pragma: "no-cache",
					priority: "u=1, i",
					"sec-ch-ua":
						'"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": '"macOS"',
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-origin",
					"sec-gpc": "1",
					"x-csrftoken":
						"SjazIqxSINninLIFCX7oXYdIDDDAcbJztNL0A97NUoWl6Nlnrr4WNRvnVWMVkqyA",
					"x-requested-with": "XMLHttpRequest",
					cookie: "csrftoken=LELB2TK5mLJdTcNSZE7I03sPstjvipZb; tunnel_phishing_protection=new-horse-5l5wmkw.use2; tabstyle=raw-tab; .Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxNvuGfQ5VhoLO-YaYt8SOsmQCn4Fm6TgtZF8bvL9_Wd9arx_cB5yHoSat16ksC1rhfaMKnxgcovL4QgqZr-ZZ-CQHP0DeTFYOAE3JVcLAtp8O-hXaHOCWyv7vwqXo5pjSTR3691PaVR5KiQOKPlA4d4vWF53QH5T1Pit-38zuSCtIl3_lnCrQ4BclHJc1tmi_tkbRTQK_5IUjVlj9RR4il7eSqAH9UypoIt0-MaHr9QuCygIlWl5CrlAAAZoxceTYK-zG0b11FXv4mTtY5juSzhqbYXExUDiB5dYZZtmSBpW0PHxyaXp4fLWTXbuqgqLAb1P7aJ1jQMEuBVXeYwWwmdLSr5-LaKOuxcsroUQoUUqpUGUvebi7k3YXz5pIsDvBdKBu4umG5LgPdE9ordi9i8pvR0xOqhsYl6p8S4j7DsryjHxjNoZWyOHiMCmxW_cArgFN_UZ94dYUSGf0TMjD5fyFrScyvarmMmXCBaOkqfqLsjiRVrkHhfyjGdAx39jcdmKIS3hyzkeA1CzgA0rfYkeKoj4Cw_T7or8usSOjHCqBr7PvVw0Ad6l3kzsz0MgBjXq59NocVUIUQbkTGvzrxux4SLEdK7Y9HK0-moY96TjxVpQLe00o1VGnFqKGbTJoVBXabq6KTvvbH3hzzmdZn2oL6CffzQnXQXHlIxlmY-ZQ4vS1dmGpZOB-LY6to8oCvO-_LaSSvbg0AhWP_KOWvU47-vS-460xPWOnQ3gBYXA1r_6JpXfXTTnaMKDYI0_kPirZt5kLTWQ4zVI-i5cUPFxACy4VfxzTFRCeeL28jN0JZ6SSWGyXYmA2tUeGnB-qEkFsn0d0GhzPG-16ic240YCUoFk00_-zf-pnUoj5skT_cwx-9m7sMZloxplrfa3A76EBxQLhAgzYtkoQqkjFfEa26ZfvP9skh9pe12qIengZBP_V0Qx48_56FGMr41jWO5HU3rn8GSfVk2RsGe67nxfIWLSQzPoWEnxjjXEmPqxYAq2OkWSGKG8r7r9v3cu1FkzHgn289AQcGMiMY1VZ_UlrKvJQViKMdpzvAZ5sZsEeavyLX5QAPd0DwjDPF3B6T7uQP4AXNCCCtUXeWGhdAr4Rem1QT1xqLE9_2Yocc7prtoPVlMXnxqV5LJBuTAgobO4la9iTyaasiZvcmjHUI-6VrzFtGUcIbhnn-EAqaKnl2XCgZLxUYvDIzO30SF-7COqwp25eb4CtpMY7N6Wj-PP7ttWEYmL3sR9aG0_Nm29fSfQFmEMO8EyB1mLy_Hn4sYgU3rqGW7s2Hzhrdh1CuZWeg4-yPENP0d6dEJNq_NO2zut-H0hrSbzUWLM8LeRPwwPr2q_znsCNOX2SPIpRLryj-fayGE3iqflfAXgd_r_oX3-MlwWuD087trh7syF4R3CAXSaOE45rIoOt8Qcy_lLP_LQiiHgwBN02SOsFo3bh0tWHQIeC8sZPmSx7IdRQXjFJdK-ioxFf739eHV1ocC2w7QN8_VfUfEeJ2JQXuGWUz2ZQrwfHcBrmCil0t-116n54UTojKSJ3HpmpN8FsaPnnJKFswxe9H-79HfNPkrRw",
					Referer:
						"https://expert-bassoon-wrrvqqxp4qvf9w74-8000.app.github.dev/api/blocknotes/1",
					"Referrer-Policy": "same-origin",
				},
				body: '{\n    "id": 1,\n    "title": "Test Post 4",\n    "user_id": "terry_ced",\n    "content": [\n        {\n            "children": [],\n            "content": [\n                {\n                    "styles": {},\n                    "text": "Welcome to this demo!",\n                    "type": "text"\n                }\n            ],\n            "id": "bf9b0d1a-ac89-4f1d-b878-8d10d33e4cc1",\n            "props": {\n                "backgroundColor": "default",\n                "textAlignment": "left",\n                "textColor": "default"\n            },\n            "type": "paragraph"\n        },\n        {\n            "children": [],\n            "content": [\n                {\n                    "styles": {},\n                    "text": "This is a heading block",\n                    "type": "text"\n                }\n            ],\n            "id": "f847c3b7-c5f9-411a-9591-8f76efa5cdb8",\n            "props": {\n                "backgroundColor": "default",\n                "level": 1,\n                "textAlignment": "left",\n                "textColor": "default"\n            },\n            "type": "heading"\n        },\n        {\n            "children": [],\n            "content": [\n                {\n                    "styles": {},\n                    "text": "This is a paragraph block",\n                    "type": "text"\n                }\n            ],\n            "id": "92fe4990-e986-470e-80ed-e307350f255f",\n            "props": {\n                "backgroundColor": "default",\n                "textAlignment": "left",\n                "textColor": "default"\n            },\n            "type": "paragraph"\n        },\n        {\n            "children": [],\n            "content": [],\n            "id": "cdcf8ff5-46dd-48b2-b322-59c40335ada0",\n            "props": {\n                "backgroundColor": "default",\n                "textAlignment": "left",\n                "textColor": "default"\n            },\n            "type": "paragraph"\n        },\n        {\n            "children": [],\n            "content": [],\n            "id": "d35b172b-ba91-4f02-8f91-d7218338160c",\n            "props": {\n                "backgroundColor": "default",\n                "textAlignment": "left",\n                "textColor": "default"\n            },\n            "type": "paragraph"\n        }\n    ],\n    "created": "2024-06-13T14:39:33.246859Z"\n}',
				method: "PUT",
			}
		);
	}

	async function loadFromStorage() {
		const myHeaders = new Headers();
		myHeaders.append(
			"Cookie",
			".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOPWUnsryC5nvRqrcSeJgrnZUC_0Zr1IgODOGHqKptkmZ0JYNY1ZeBfpDquPOD8DkKSuYLeVLHM4CUGQblvI6mZv2Pq5i5wbQYAW6RHlZhyy-BZHHj5BG8K1bn5OIEs5kBgeczYf-HZWGOFEQa044ec1W-oPgGF1_cALJzlZMaqr2rVwb0upyNNTD19aAPBIlCQbcH-eY_8fQ09kgIlZOF42qShLyU81KGzopW1HNKsMM7n3FXLxSi_GiASmFVWXZD1fz3MPmg-o06aFOrJuscaa8E1hm_r2r2w_GcaDuRlDB6rl3c31lNzbJohg6gHTNdKojKUXmYFegVOTFGN0RHCoKgnxIT3HgdEAuRcZQN7XMIHBM-PcpcgMg-Dpu34peCR2GcYaiHrd6dzyf0CzJNoCLb0bThmlAHWUkzTCkWETGljk5AXU9AbIRG47sUkx5kuphN6h5vCRaE1DVO9dM_7sYveKcEwczls0DLmy48ei4beEPCdD3DmRwmMXaCRVC39Euui8Vpv2IPyTIilGjX_nZLbdDBG7iIQHhcbmBmAMXStvLcPFeHNHIDIi_X0kwVt0yNboVDOr1McYc1NYdM2mFFNax-v26j-DViT-RpDVHo0jYB1u-cLthWUujEUUgNTKf0boh7IGUaBkHF0U_AUT9tD4Z7WqG6S3vx0jDWCFiP6k15YwGAmHKEqO-RtKDL-iHE5bQnffV46b45HOirJHv2Tt-Eyvm-fvmuZxF_GIg5fSzzsRSazL_dduwaNKQVQOCAQUQ3DV8hox4XmCRXdYIBDjCdri0W3zVu0HwCbhnJZYtH_VoSLj8NLeXNkSyI1fvg8kw9s6Rgx8Ggd_byiVbCU8XnQyxj6fYxWGRggtz412VPLSWxS-n3rhkuTaNHySFNWbXn8gK8ZPNIk8rxNklLtTSPvhcBPjdNrC0Z5_4zPEDv2Vy87D52B1NfSWKQgJOjNjVq4YpfvZwFHk80R; csrftoken=bY4uTQugUtVLKwsylxT0hj4tCO7ZiYq3"
		);

		// Gets the previously stored editor contents.
		// const storageString = localStorage.getItem("editorContent");
		fetch(
			"https://expert-bassoon-wrrvqqxp4qvf9w74-8000.app.github.dev/api/blocknotes?format=json",
			{
				method: "GET",
				headers: myHeaders,
				redirect: "follow",
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log("fetched result:", result[0].content);
				setSavedBlockyData(result[0].content);
				console.log("Blocknote Data:", savedBlockyData);
			})
			.catch((error) => console.error(error));
		return savedBlockyData[1].id ? savedBlockyData : undefined;
	}

	const [initialContent, setInitialContent] = useState<
		PartialBlock[] | undefined | "loading"
	>("loading");

	// Loads the previously stored editor contents.
	useEffect(() => {
		loadFromStorage().then((content) => {
			console.log("INITIAL CONTENT: ", content);
			setInitialContent(content);
		});
	}, []);

	// Creates a new editor instance.
	// We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
	// can delay the creation of the editor until the initial content is loaded.
	const editor = useMemo(() => {
		if (initialContent === "loading") {
			return undefined;
		}
		return BlockNoteEditor.create({ initialContent });
	}, [initialContent]);

	if (editor === undefined) {
		return (
			<button
				onClick={() => {
					loadFromStorage().then((content) => {
						console.log("INITIAL CONTENT: ", content);
						setInitialContent(content);
					});
				}}
			>
				{" "}
				Load last document
			</button>
		);
	}

	// Renders the editor instance.
	return (
		<div>
			<BlockNoteView
				editor={editor}
				onChange={() => {
					saveToStorage(editor.document);
				}}
			/>
			<hr style={{ padding: "20 rem" }}></hr>
		</div>
	);
};

export default BlockNote;
