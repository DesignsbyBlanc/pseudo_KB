import React from "react";

const MainDash = () => {
	return (
		<div className="grid grid-rows-3 grid-flow-col gap-4 col-span-4 ">
			<div className="mx-auto">
				<h3 className=" text-sm font-semibold my-1">Media</h3>
				<div className="grid md:md:grid-cols-3 grid-rows-12 gap-4  ">
					{" "}
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/bvlnlRwWvsA/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MTk2MDg0NDR8&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">Media Title</h4>
					</div>
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/0dJsLa1YQrk/download?ixid=M3wxMjA3fDB8MXxhbGx8OHx8fHx8fDJ8fDE3MTk2MDg0NDR8&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">Media Title</h4>
					</div>
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/Tcd_UOjm5cg/download?ixid=M3wxMjA3fDB8MXxhbGx8MzF8fHx8fHwyfHwxNzE5NjA4NDQ2fA&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">Media Title</h4>
					</div>
				</div>
			</div>
			<div className="mx-auto">
				<h3 className="text-sm font-semibold my-1">Books</h3>
				<div className="grid md:grid-cols-3 gap-4 ">
					{" "}
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/bvlnlRwWvsA/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MTk2MDg0NDR8&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">Book Title</h4>
					</div>
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/0dJsLa1YQrk/download?ixid=M3wxMjA3fDB8MXxhbGx8OHx8fHx8fDJ8fDE3MTk2MDg0NDR8&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">Book Title</h4>
					</div>
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/Tcd_UOjm5cg/download?ixid=M3wxMjA3fDB8MXxhbGx8MzF8fHx8fHwyfHwxNzE5NjA4NDQ2fA&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">Book Title</h4>
					</div>
				</div>
			</div>
			<div className="mx-auto">
				<h3 className="text-sm font-semibold my-1">Custom Category</h3>
				<div className="grid md:grid-cols-3 gap-4 ">
					{" "}
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/bvlnlRwWvsA/download?ixid=M3wxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE3MTk2MDg0NDR8&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">All Media Title</h4>
					</div>
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/0dJsLa1YQrk/download?ixid=M3wxMjA3fDB8MXxhbGx8OHx8fHx8fDJ8fDE3MTk2MDg0NDR8&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">All Media Title</h4>
					</div>
					<div className=" row-span-12">
						<img
							src="https://unsplash.com/photos/Tcd_UOjm5cg/download?ixid=M3wxMjA3fDB8MXxhbGx8MzF8fHx8fHwyfHwxNzE5NjA4NDQ2fA&force=true&w=1920"
							alt=""
							className="rounded-lg size-52 object-cover"
						/>
						<h4 className="text-xs font-medium my-1">All Media Title</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainDash;
