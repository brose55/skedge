import { useState } from "react";
import "./Daily.css";
import Display from "./Display/Display";
import InterestsForm from "./InterestsForm/InterestForm";
import Interests from "./Interests/Interests";
import OptionsForm from "./OptionsForm/OptionsForm";
import PastInterests from "./PastInterests/PastInterests";

function Daily() {
	const [interests, setInterests] = useState([]);
	const [options, setOptions] = useState(null);

	const checkListAndUpdate = (candidateInterest) => {
		// do a quick loop and see if it already exists...
		// note: I don't use .includes() here because it doesn't play well with objects
		let included = false
		interests.forEach(interest => {
			if (interest.value === candidateInterest.value) {
				included = true
				return
			}
		})
		if (!included) {
			setInterests([...interests, candidateInterest])
		}
	}

	return (
		<main style={{ padding: "1rem 0" }}>
			<Display interests={interests} options={options} />
			<PastInterests checkListAndUpdate={checkListAndUpdate} />
			<div className="daily-forms">
				<Interests interests={interests} setInterests={setInterests} />
				<InterestsForm
					checkListAndUpdate={checkListAndUpdate}
				/>
				<OptionsForm setOptions={setOptions} />
			</div>
		</main>
	);
}

export default Daily;
