import React from "react";

const SidePanel = () => {
	return (
		<div className="hidden md:grid grid-rows-8 grid-flow-col gap-1 col-span-2 max-w-xs bg-slate-400 rounded-lg ">
			<div className=" row-span-7 my-2 grid grid-cols-4 ">
				{" "}
				<div className=" bg-slate-300 col-span-4 pl-10">Section 1
                <a href="#" className=" block p-2 my-6 text-xs bg-slate-200 rounded-md mr-14">ListItem</a>
				<a href="#" className=" block p-2 my-6 text-xs bg-slate-200 rounded-md mr-14">ListItem</a>
				<a href="#" className=" block p-2 my-6 text-xs bg-slate-200 rounded-md mr-14">ListItem</a>
				<a href="#" className=" block p-2 my-6 text-xs bg-slate-200 rounded-md mr-14">ListItem</a>
				<a href="#" className=" block p-2 my-6 text-xs bg-slate-200 rounded-md mr-14">ListItem</a>
                </div>
			</div>
			<div className=" row-span-1 mx-auto my-2"> Section 2</div>
		</div>
	);
};

export default SidePanel;
