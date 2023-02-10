import { useState, useRef, useEffect } from 'react';
import calculateWeight from '../../../utils/calculateWeight';
import './InterestForm.css'

const InterestForm = ({ checkListAndUpdate }) => {

  const [formState, setFormState] = useState({
    interest: "",
    interestLevel: "high",
  });
  const { interest, interestLevel } = formState;

	const interestInput = useRef(null)

  const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

  const handleSubmit = (e) => {
		e.preventDefault();
		const candidate = {
			value: interest.toLowerCase(),
			priority: interestLevel,
			weight: calculateWeight(interestLevel),
		};
		checkListAndUpdate(candidate);
		interestInput.current.value = ''
		interestInput.current.focus()
	};

	useEffect(() => {
		// focus on rendering
		interestInput.current.focus()
	}, [])
	
  return (
		<section style={{ padding: "2vh 0" }}>
			<h2>add interest...</h2>
			<form id="daily-interest-form" onSubmit={handleSubmit}>
					<label htmlFor="interest">Interest:</label>
					<input
						type="text"
						name="interest"
						ref={interestInput}
						defaultValue={interest}
						placeholder='coding...'
						onChange={handleChange}
						autoComplete='off'
					/>
					<label htmlFor="priority">
						Interest Level:
						<select name='interestLevel' value={interestLevel} onChange={handleChange} className='dropdown'>
							<option value="high">high</option>
							<option value="med">med</option>
							<option value="low">low</option>
						</select>
					</label>
				<button type="submit">add</button>
			</form>
		</section>
	);
}
 
export default InterestForm
 