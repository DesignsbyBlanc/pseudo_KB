import React, { useState } from "react";
import { BlockNoteLoad } from "../_components/BlockNote";

const DocumentsPage = () => {
	const [loadDocument, setLoadDocument] = useState(false);

	if (!loadDocument) {
		return (
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							onClick={() => {
								setLoadDocument(true);
							}}
							className="rounded-md bg-neutral-200/50 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 backdrop-blur-xl hover:text-white"
						>
							<img
								src="https://www.svgrepo.com/download/515954/documents.svg"
								alt="Document icon"
								className=" size-24 block mx-auto"
							/>
							<p className="flex text-md text-wrap text-center max-w-24 max-h-24 py-2 ">
								{" "}
								My Document{" "}
							</p>
						</a>
					</div>
				</div>
			</div>
		);
	} else {
		return <BlockNoteLoad />;
	}
};

export default DocumentsPage;
