import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Dashboard", href: "/dashboard" },
	{ name: "Documents", href: "/documents" },
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link to="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img
							className="h-8 w-auto"
							src="/icons/Browser/BrowserIcon.svg"
							alt=""
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							className="text-sm font-semibold leading-6 text-gray-900 hover:bg-red-400 hover:rounded-md py-2.5 px-3.5 hover:text-white"
						>
							{item.name}
						</Link>
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
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-xl shadow-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="/icons/Browser/BrowserIcon.svg"
								alt=""
							/>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-50"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-red-50"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Header;
