import React from "react";
import Header from "../_Parts/Headers";
import SidePanel from "./SidePanel";
import MainDash from "./MainDash";

const DashBoard = () => {
	return (
		<>
			<Header />
			<div className="grid md:grid-cols-6 sm:grid-cols-none gap-6 mx-6 py-24 sm:py-34 lg:py-38">
				<SidePanel />
				<MainDash />
			</div>
		</>
	);
};

export default DashBoard;
