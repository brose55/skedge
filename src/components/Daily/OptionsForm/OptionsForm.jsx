import { useState } from "react";

const OptionsForm = ({ setOptions }) => {
	const [formState, setFormState] = useState({
		time: '4',
    learningStyle: 'startStrong'
	});
  
	const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
	};
  
	const handleSubmit = (e) => {
		e.preventDefault();
		setOptions(formState)
	};
  
  const { time, learningStyle } = formState;
  
	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Options:</h2>
			<form id="options-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="time">
						Time:
						<select name="time" value={time} onChange={handleChange}>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
						</select>
					</label>
				</div>
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
				<div>
					<label htmlFor="learningStyle">
						Learning Style:
						<select name="learningStyle" value={learningStyle} onChange={handleChange}>
							<option value="startStrong">Start Strong</option>
							<option value="endStrong">End Strong</option>
							<option value="warmUp">Warm Up Then Business</option>
              <option value="rng">RNGenius</option>
						</select>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
};

export default OptionsForm;
