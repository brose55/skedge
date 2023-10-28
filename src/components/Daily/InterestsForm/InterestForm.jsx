import { useState, useRef, useEffect } from "react"
import calculateWeight from "../../../utils/calculateWeight"
import "./InterestForm.css"

const InterestForm = ({ checkListAndUpdate }) => {
	const [formState, setFormState] = useState({
		interestValue: "",
		interestLevel: "high",
	})
	const { interestValue, interestLevel } = formState

	const interestInputRef = useRef(null)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const candidate = {
			topic: interestValue.toLowerCase(),
			priority: interestLevel,
			weight: calculateWeight(interestLevel),
		}
		checkListAndUpdate(candidate)

		// Reset the form state
		setFormState({
			interestValue: "",
			interestLevel: "high",
		})

		// refocus input for UX
		interestInputRef.current.focus()
	}

	useEffect(() => {
		// focus on rendering
		interestInputRef.current.focus()
	}, [])

	return (
		<section>
			<h2>add interest...</h2>
			<form id="daily-interest-form" onSubmit={handleSubmit}>
				<>
					<label htmlFor="interestInput">Interest:</label>
					<input
						id="interestInput"
						name="interestValue"
						type="text"
						ref={interestInputRef}
						defaultValue={interestValue}
						placeholder="coding..."
						onChange={handleChange}
						autoComplete="off"
					/>
				</>
				<br />
				<label htmlFor="priorityInput">Interest Level:</label>
				<select
					id="priorityInput"
					name="interestLevel"
					value={interestLevel}
					onChange={handleChange}
					className="dropdown"
				>
					<option value="high">high</option>
					<option value="med">med</option>
					<option value="low">low</option>
				</select>
				<button type="submit" className="daily-button">
					add
				</button>
			</form>
		</section>
	)
}

export default InterestForm
