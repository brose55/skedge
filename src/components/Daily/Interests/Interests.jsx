import { useState } from 'react'
import './Interests.css'

const Interests = ({ interests, setInterests }) => {

	const [style, setStyle] = useState({ visibility: 'hidden' })
  
	const handleClick = (e) => {
		setInterests(
			interests.filter(
				interest => interest.value !== e.target.value
			)
		)
	}
	
	return (
		<section>
			<h2>interests...</h2>
			<ul className="interests">
				{interests.map(({ value, priority }, i) => (
					<li
						className="interest"
						key={value + i}
						onMouseEnter={(e) => setStyle({ visibility: 'visible' })}
						onMouseLeave={(e) => setStyle({ visibility: 'hidden' })}
					>
						<span>
							{value}: {priority}
						</span>
						{/* TODO: change value here to be less confusing */}
						<button value={value} onClick={handleClick} style={style}>
							x
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
 
export default Interests
 