import { useState, useEffect } from "react"

import { LearningStyle } from "../../../types/enums"
import { Options } from "../../../types/interfaces"
import { timeOptions, learningStyleOptions } from "./options"

import styles from "./OptionsForm.module.scss"

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

	// set initial options on mount so parent has values even if user doesn't change anything
	useEffect(() => {
		setOptions(formState)
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target
		const updatedFormState = { ...formState, [name]: value }
		setFormState(updatedFormState)
		setOptions(updatedFormState)
	}

	const { hoursAvailable, learningStyle } = formState

	return (
		<section className={`dailySection ${styles.options}`}>
			<h2>options...</h2>
			<div className={styles.optionsForm}>
				<div className={styles.formGroup}>
					<label htmlFor="timeInput">hours available:</label>
					<select
						id="timeInput"
						name="hoursAvailable"
						value={hoursAvailable}
						onChange={handleChange}
						className="formField"
					>
						{timeOptions.map((choice) => (
							<option key={`hour${choice}`} value={choice}>
								{choice} hours
							</option>
						))}
					</select>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="learningStyleInput">learning style:</label>
					<select
						id="learningStyleInput"
						name="learningStyle"
						value={learningStyle}
						onChange={handleChange}
						className="formField"
					>
						{learningStyleOptions.map((choice) => (
							<option key={choice.value} value={choice.value}>
								{choice.label}
							</option>
						))}
					</select>
				</div>
			</div>
		</section>
	)
}

export default OptionsForm
