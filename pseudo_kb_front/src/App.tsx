import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import DocumentsPage from "./pages/DocumentsPage";
import Header from "./_components/_Parts/Headers";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen h-full bg-gradient-to-tl from-cyan-50 to-slate-200 sm:bg-black">
				<div className="container mx-auto ">
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/dashboard" element={<DashBoardPage />} />
						<Route path="/documents" element={<DocumentsPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
