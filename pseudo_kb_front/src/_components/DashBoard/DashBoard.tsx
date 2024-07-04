import React from "react";
import SidePanel from "./SidePanel";
import MainDash from "./MainDash";

const DashBoard = () => {
	return (
		<>
			<div className="grid md:grid-cols-6 sm:grid-cols-none gap-6 mx-6 py-24 sm:py-32 lg:py-36">
				<SidePanel />
				<MainDash />
			</div>
		</>
	);
};

export default DashBoard;
