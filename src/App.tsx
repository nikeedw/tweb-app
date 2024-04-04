import { FC } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App: FC = () => {
	return (
		<div className="App">
			<Navbar />
			<Outlet />
			<Footer title="New Application" />
		</div>
	);
};

export default App;
