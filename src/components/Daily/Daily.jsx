import { useState } from "react";
import "./Daily.css";
import Display from "./Display/Display";
import InterestsForm from "./InterestsForm/InterestForm";
import Interests from "./Interests/Interests";
import OptionsForm from "./OptionsForm/OptionsForm";

function Daily() {
	const [interests, setInterests] = useState([]);
	const [options, setOptions] = useState(null);

	return (
		<main style={{ padding: "1rem 0" }}>
			<Display interests={interests} options={options}/>
			<div className="daily-forms">
				<Interests interests={interests} />
				<InterestsForm interests={interests} setInterests={setInterests} />
				<OptionsForm setOptions={setOptions} />
			</div>
		</main>
	);
}

export default Daily;
