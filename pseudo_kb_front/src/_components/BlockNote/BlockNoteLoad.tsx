import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

import "./styles.css";
import Hero from "../Hero";

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
const BlockNoteLoad = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [liveBlockyData, setLiveBlockyData] = useState({ editorContent: {} });
	const [savedBlockyData, setSavedBlockyData] = useState([initBlockyData]);

	async function saveToStorage(jsonBlocks: Block[]) {
		// Save contents to local storage. You might want to debounce this or replace
		// with a call to your API / database.
		setLiveBlockyData({ editorContent: jsonBlocks });
		console.log("Save:", liveBlockyData.editorContent);

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			title: "Test Doc 2",
			user_id: "terry_blanc",
			content: liveBlockyData.editorContent,
		});

		fetch("http://localhost:8000/api/blocknotes/1", {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		})
			.then((response) => response.text())
			.then((result) => console.log("ATTEMPTED TO SAVE: ", result))
			.catch((error) => console.log("error", error));
	}

	async function loadFromStorage() {
		const myHeaders = new Headers();
		myHeaders.append(
			"Cookie",
			".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOPWUnsryC5nvRqrcSeJgrnZUC_0Zr1IgODOGHqKptkmZ0JYNY1ZeBfpDquPOD8DkKSuYLeVLHM4CUGQblvI6mZv2Pq5i5wbQYAW6RHlZhyy-BZHHj5BG8K1bn5OIEs5kBgeczYf-HZWGOFEQa044ec1W-oPgGF1_cALJzlZMaqr2rVwb0upyNNTD19aAPBIlCQbcH-eY_8fQ09kgIlZOF42qShLyU81KGzopW1HNKsMM7n3FXLxSi_GiASmFVWXZD1fz3MPmg-o06aFOrJuscaa8E1hm_r2r2w_GcaDuRlDB6rl3c31lNzbJohg6gHTNdKojKUXmYFegVOTFGN0RHCoKgnxIT3HgdEAuRcZQN7XMIHBM-PcpcgMg-Dpu34peCR2GcYaiHrd6dzyf0CzJNoCLb0bThmlAHWUkzTCkWETGljk5AXU9AbIRG47sUkx5kuphN6h5vCRaE1DVO9dM_7sYveKcEwczls0DLmy48ei4beEPCdD3DmRwmMXaCRVC39Euui8Vpv2IPyTIilGjX_nZLbdDBG7iIQHhcbmBmAMXStvLcPFeHNHIDIi_X0kwVt0yNboVDOr1McYc1NYdM2mFFNax-v26j-DViT-RpDVHo0jYB1u-cLthWUujEUUgNTKf0boh7IGUaBkHF0U_AUT9tD4Z7WqG6S3vx0jDWCFiP6k15YwGAmHKEqO-RtKDL-iHE5bQnffV46b45HOirJHv2Tt-Eyvm-fvmuZxF_GIg5fSzzsRSazL_dduwaNKQVQOCAQUQ3DV8hox4XmCRXdYIBDjCdri0W3zVu0HwCbhnJZYtH_VoSLj8NLeXNkSyI1fvg8kw9s6Rgx8Ggd_byiVbCU8XnQyxj6fYxWGRggtz412VPLSWxS-n3rhkuTaNHySFNWbXn8gK8ZPNIk8rxNklLtTSPvhcBPjdNrC0Z5_4zPEDv2Vy87D52B1NfSWKQgJOjNjVq4YpfvZwFHk80R; csrftoken=bY4uTQugUtVLKwsylxT0hj4tCO7ZiYq3"
		);

		// Gets the previously stored editor contents.
		// const storageString = localStorage.getItem("editorContent");
		fetch("http://localhost:8000/api/blocknotes/?format=json", {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		})
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
			<>
				{/* <Hero /> */}
				{/* <a
					href="#"
					onClick={() => {
						loadFromStorage().then((content) => {
							console.log("INITIAL CONTENT: ", content);
							setInitialContent(content);
						});
					}}
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Load Last Document
				</a> */}
				<header className="absolute inset-x-0 top-0 z-50">
					<nav
						className="flex items-center justify-between p-6 lg:px-8"
						aria-label="Global"
					>
						<div className="flex lg:flex-1">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-sm font-semibold leading-6 text-gray-900"
								>
									{item.name}
								</a>
							))}
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Log in <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</nav>
					<Dialog
						className="lg:hidden"
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}
					>
						<div className="fixed inset-0 z-50" />
						<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
								<a href="#" className="-m-1.5 p-1.5">
									<span className="sr-only">
										Your Company
									</span>
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt=""
									/>
								</a>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-gray-700"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</a>
										))}
									</div>
									<div className="py-6">
										<a
											href="#"
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Log in
										</a>
									</div>
								</div>
							</div>
						</DialogPanel>
					</Dialog>
				</header>
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Announcing our next round of funding.{" "}
							<a
								href="#"
								className="font-semibold text-indigo-600"
							>
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								Read more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Data to enrich your online business
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Anim aute id magna aliqua ad ad non deserunt sunt.
							Qui irure qui lorem cupidatat commodo. Elit sunt
							amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								onClick={() => {
									loadFromStorage().then((content) => {
										console.log(
											"INITIAL CONTENT: ",
											content
										);
										setInitialContent(content);
									});
								}}
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Load last document
							</a>
						</div>
					</div>
				</div>

				{/* <button
					onClick={() => {
						loadFromStorage().then((content) => {
							console.log("INITIAL CONTENT: ", content);
							setInitialContent(content);
						});
					}}
				>
					{" "}
					Load last document
				</button> */}
			</>
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

export default BlockNoteLoad;
