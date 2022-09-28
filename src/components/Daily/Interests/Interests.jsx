import './Interests.css'

const Interests = ({ interests, setInterests }) => {
  
	const handleClick = (e) => {
		setInterests(
			interests.filter(
				interest => interest.value !== e.target.value
			)
		)
	}
	
	return (
		<section style={{ padding: "1rem 0" }}>
			<h2>interests...</h2>
			<ul className="interests">
				{interests.map(({ value, priority }, i) => (
					<li className="interest" key={value + i}>
						<span>{value}: {priority}</span>
						{/* TODO: change value here to be less confusing */}
						<button value={value} onClick={handleClick}>
							x
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
 
export default Interests
 