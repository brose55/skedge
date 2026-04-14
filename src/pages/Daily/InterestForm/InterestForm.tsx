import { useState, useRef, useEffect } from "react"

import { NewInterest } from "../../../types/interfaces"
import { Priority } from "../../../types/enums"

import styles from "./InterestForm.module.scss"

interface InterestFormProps {
	checkListAndUpdate: (candidateInterest: NewInterest) => void
}

interface InterestFormState {
	interestTopic: string
	priority: Priority
}

const InterestForm: React.FC<InterestFormProps> = ({ checkListAndUpdate }) => {
	const [formState, setFormState] = useState<InterestFormState>({
		interestTopic: "",
		priority: Priority.High,
	})

	const { interestTopic, priority } = formState

	const interestInputRef = useRef<HTMLInputElement>(null)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target
		setFormState((prevState) => ({
			...prevState,
			[name]: value as string | Priority,
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		checkListAndUpdate({
			topic: interestTopic.toLowerCase(),
			priority,
		})

		// reset topic only. keep priority so user doesn't have to reselect
		setFormState((prevState) => ({ ...prevState, interestTopic: "" }))

		// refocus input after submit for faster data entry
		interestInputRef.current?.focus()
	}

	useEffect(() => {
		// focus input on mount
		interestInputRef.current?.focus()
	}, [])

	return (
		<section className="dailySection">
			<h2>add interest...</h2>
			<form className={styles.dailyInterestForm} onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="interestInput">Interest:</label>
					<input
						id="interestInput"
						name="interestTopic"
						type="text"
						ref={interestInputRef}
						value={interestTopic}
						placeholder="coding..."
						onChange={handleChange}
						autoComplete="off"
						className="formField"
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="priorityInput">Interest Level:</label>
					<select
						id="priorityInput"
						name="priority"
						value={priority}
						onChange={handleChange}
						className="formField"
					>
						<option value={Priority.High}>high</option>
						<option value={Priority.Med}>med</option>
						<option value={Priority.Low}>low</option>
					</select>
				</div>
				<button type="submit" className="formField submitButton">
					add
				</button>
			</form>
		</section>
	)
}

export default InterestForm
