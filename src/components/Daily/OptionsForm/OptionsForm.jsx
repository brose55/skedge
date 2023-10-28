import { useState } from "react"
import { timeOptions, learningStyleOptions } from "./options"
import "./OptionsForm.css"

const OptionsForm = ({ setOptions, storeInterests }) => {
	const [formState, setFormState] = useState({
		timeValue: "4",
		learningStyle: "startStrong",
	})

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setOptions(formState)
		storeInterests()
	}

	const { timeValue, learningStyle } = formState

	return (
		<section>
			<h2>options...</h2>
			<form id="options-form" onSubmit={handleSubmit}>
				<label htmlFor="timeInput">
					hours available:
					<select
						id="timeInput"
						name="timeValue"
						value={timeValue}
						onChange={handleChange}
					>
						{timeOptions.map((choice) => (
							<option key={`hour${choice}`} value={choice}>
								{choice} hours
							</option>
						))}
					</select>
				</label>
				<label htmlFor="learningStyleInput">
					learning style:
					<select
						id="learningStyleInput"
						name="learningStyle"
						value={learningStyle}
						onChange={handleChange}
					>
						{learningStyleOptions.map((choice) => (
							<option key={choice.value} value={choice.value}>
								{choice.label}
							</option>
						))}
					</select>
				</label>
				<button type="submit" className="daily-button">
					update
				</button>
			</form>
		</section>
	)
}

export default OptionsForm
