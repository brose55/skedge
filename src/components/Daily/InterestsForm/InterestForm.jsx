import { useState } from 'react';
import calculateWeight from '../../../utils/calculateWeight';
import './InterestForm.css'

const InterestForm = ({ interests, setInterests }) => {

  const [formState, setFormState] = useState({
    interest: "",
    interestLevel: "high",
  });
  const { interest, interestLevel } = formState;

  const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

  const handleSubmit = (e) => {
		e.preventDefault();
    setInterests([ 
      ...interests, 
      {
        value: interest.toLowerCase(), 
        level: interestLevel,
        weight: calculateWeight(interestLevel)
      }
    ])
    
	};


  return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Add hobbies here:</h2>
			<form id="daily-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="interest">Interest:</label>
					<input
						type="text"
						name="interest"
						defaultValue={interest}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="level">
						Interest Level:
						<select name='interestLevel' value={interestLevel} onChange={handleChange}>
							<option value="low">low</option>
							<option value="med">med</option>
							<option value="high">high</option>
						</select>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}
 
export default InterestForm
 