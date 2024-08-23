import { useState } from "react"
import { timeOptions, learningStyleOptions } from "./options"
import "./OptionsForm.css"
import { LearningStyle } from "../../../types/enums"
import { Options } from "../../../types/interfaces"

interface OptionsFormProps {
	setOptions: (options: Options) => void
}

interface FormState {
	hoursAvailable: number
	learningStyle: LearningStyle
}

const OptionsForm: React.FC<OptionsFormProps> = ({ setOptions }) => {
	const [formState, setFormState] = useState<FormState>({
		hoursAvailable: 4,
		learningStyle: LearningStyle.StartStrong,
	})

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target
		const updatedFormState = { ...formState, [name]: value }
		setFormState(updatedFormState)
		setOptions(updatedFormState)
	}

	const { hoursAvailable, learningStyle } = formState

	return (
		<section id="options">
			<h2>options...</h2>
			<div id="options-form">
				<label htmlFor="timeInput">
					hours available:
					<select
						id="timeInput"
						name="hoursAvailable"
						value={hoursAvailable}
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
			</div>
		</section>
	)
}

export default OptionsForm
