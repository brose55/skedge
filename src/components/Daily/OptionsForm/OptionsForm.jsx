import { useState } from "react";
import './OptionsForm.css';

const OptionsForm = ({ setOptions, storeInterests }) => {
	const [formState, setFormState] = useState({
		time: '4',
    learningStyle: 'startStrong',
		displayType: 'list'
	});
  
	const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
	};
  
	const handleSubmit = (e) => {
		e.preventDefault();
		setOptions(formState)
		storeInterests()
	};
  
  const { time, learningStyle } = formState;
  
	return (
		<section>
			<h2>options...</h2>
			<form id="options-form" onSubmit={handleSubmit}>
					<label htmlFor="time">
						hours available:
						<select name="time" value={time} onChange={handleChange}>
							<option value="2">2</option>
							<option value="2.5">2.5</option>
							<option value="3">3</option>
							<option value="3.5">3.5</option>
							<option value="4">4</option>
							<option value="4.5">4.5</option>
							<option value="5">5</option>
							<option value="5.5">5.5</option>
							<option value="6">6</option>
							<option value="6.5">6.5</option>
							<option value="7">7</option>
							<option value="7.5">7.5</option>
							<option value="8">8</option>
							<option value="8.5">8.5</option>
							<option value="9">9</option>
							<option value="9.5">9.5</option>
							<option value="10">10</option>
						</select>
					</label>
				{/* TODO: implement breaks */}
				{/* <div>
					<label htmlFor="breaks">
						Breaks:
						<select name="breaks" value={breaks} onChange={handleChange}>
							<option value="pomodoro">pomodoro</option>
							<option value="suggested">suggested</option>
							<option value="none">none</option>
						</select>
					</label>
				</div> */}
					<label htmlFor="learningStyle">
						learning style:
						<select
							name="learningStyle"
							value={learningStyle}
							onChange={handleChange}
						>
							<option value="startStrong">Start Strong</option>
							<option value="endStrong">End Strong</option>
							<option value="warmUp">Warm Up</option>
							<option value="rng">RNGenius</option>
						</select>
					</label>
				<button type="submit" className="daily-button">update</button>
			</form>
		</section>
	);
};

export default OptionsForm;
