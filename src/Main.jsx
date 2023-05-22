import Header from "./components/Header/Header";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import "./Main.css";

// the actual app lives here
const Main = (props) => {
	return (
		<div className="main-app">
			<Header setTheme={props.setTheme} theme={props.theme} />
			<main>
				<MainRoutes />
			</main>
			<Footer theme={props.theme} />
		</div>
	);
};

export default Main;
