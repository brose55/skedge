import { useState } from "react";
import "./Daily.css";
import Display from "./Display/Display";
import InterestsForm from "./InterestsForm/InterestForm";
import Interests from "./Interests/Interests";
import OptionsForm from "./OptionsForm/OptionsForm";
import PastInterests from "./PastInterests/PastInterests";
import axios from "axios";

function Daily() {
	const [interests, setInterests] = useState([]);
	const [options, setOptions] = useState(null);
	const [updateInterestsError, setUpdateInterestsError] = useState(null)

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

	const storeInterests = async () => {
		try {
			axios
				.put(
					`${process.env.REACT_APP_DEV_URL}/api/interests`, 
					interests, 
					{withCredentials: true}
				)			
		} catch (err) {
			setUpdateInterestsError(err.message)
		}

	}

	return (
		<section>
			<p>{updateInterestsError}</p>
			<PastInterests checkListAndUpdate={checkListAndUpdate} className='daily-section' />
			<section className="daily-forms">
				<InterestsForm
					checkListAndUpdate={checkListAndUpdate}
				/>
				<OptionsForm setOptions={setOptions} storeInterests={storeInterests} />
				<Interests interests={interests} setInterests={setInterests} />
			</section>
			<Display interests={interests} options={options} />
		</section>
	);
}

export default Daily;
