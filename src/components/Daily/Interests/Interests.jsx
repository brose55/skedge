import { useState } from "react";
import "./Interests.css";

const Interests = ({ interests, setInterests }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null)
	
	const handleClick = (topic) => {
		setInterests(
			interests.filter((interest) => interest.topic !== topic)
		)
	}
	
	return (
		<section>
			<h2>interests...</h2>
			<ul className="interests">
				{interests.map(({ topic, priority }, i) => {
					let style =
						i === hoveredIndex
							? { visibility: "visible" }
							: { visibility: "hidden" }
					return (
						<li
							key={`interest-${topic}`}
							className="interest"
							onMouseEnter={() => setHoveredIndex(i)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<span>
								{topic}: {priority}
							</span>
							<button onClick={() => handleClick(topic)} style={style}>
								x
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Interests;
