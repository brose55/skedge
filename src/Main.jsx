import Header from "./components/Header/Header";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import "./Main.css";

// the actual app lives here
// divided into a static header and footer
// and a dynamic main section
const Main = (props) => {

	return (
		<div className="main-app">
			<Header setTheme={props.setTheme} theme={props.theme} />
			<main>
				{/* we use a container component for routing to allow for public and protected routes */}
				<MainRoutes />
			</main>
			<Footer theme={props.theme} />
		</div>
	);
};

export default Main;
