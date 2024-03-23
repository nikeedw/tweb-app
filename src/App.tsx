import { FC } from "react";
import Layout from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App: FC = () => {
	return (
		<div className="App">
			<Layout />
			<Outlet />
			<Footer title="New Application" />
		</div>
	);
};

export default App;
