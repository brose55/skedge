import React, { useState, useRef, useEffect } from "react"
import { NewInterest } from "../../../types/interfaces"
import { Priority } from "../../../types/enums"
import styles from "./InterestForm.module.scss"

interface InterestFormProps {
	checkListAndUpdate: (candidateInterest: NewInterest) => void
}

interface InterestFormState {
	interestName: string
	priority: Priority
}

const InterestForm: React.FC<InterestFormProps> = ({ checkListAndUpdate }) => {
	const [formState, setFormState] = useState<InterestFormState>({
		interestName: "",
		priority: Priority.High,
	})

	const { interestName, priority } = formState

	const interestInputRef = useRef<HTMLInputElement>(null)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormState((prevState) => ({
			...prevState,
			[name]: value as string | Priority, // We need to ensure the types match
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const candidateInterest: NewInterest = {
			name: interestName.toLowerCase(),
			priority: priority,
		}

		checkListAndUpdate(candidateInterest)

		// Reset the interestName formState, leaving the priority as is
		// this is to not frustrate users
		setFormState((prevState) => ({
			...prevState,
			interestName: "",
		}))

		// refocus input for UX
		if (interestInputRef.current) {
			interestInputRef.current.focus()
		}
	}

	useEffect(() => {
		if (interestInputRef.current) {
			interestInputRef.current.focus()
		}
		// focus on rendering
	}, [])

	return (
		<section className={styles.dailySection}>
			<h2>add interest...</h2>
			<form className={styles.dailyInterestForm} onSubmit={handleSubmit}>
				<>
					<label htmlFor="interestInput">Interest:</label>
					<input
						id="interestInput"
						name="interestName"
						type="text"
						ref={interestInputRef}
						value={interestName}
						placeholder="coding..."
						onChange={handleChange}
						autoComplete="off"
						className={styles.formField}
					/>
				</>
				<br />
				<label htmlFor="priorityInput">Interest Level:</label>
				<select
					id="priorityInput"
					name="priority"
					value={priority}
					onChange={handleChange}
					className={styles.formField}
				>
					<option value={Priority.High}>high</option>
					<option value={Priority.Med}>medium</option>
					<option value={Priority.Low}>low</option>
				</select>
				<button
					type="submit"
					className={`${styles.formField} ${styles.submitButton}`}
				>
					add
				</button>
			</form>
		</section>
	)
}

export default InterestForm
