import React from "react"
import { CandidateInterest } from "../../../types/types"
import useHover from "../../../hooks/useHover"
import "./CandidateInterests.css"

interface CandidateInterestsProps {
	interests: CandidateInterest[]
	onDeleteInterest: (interest: CandidateInterest) => void
	onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CandidateInterests: React.FC<CandidateInterestsProps> = ({
	interests,
	onDeleteInterest,
	onSubmit,
}) => {
	const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover()

	return (
		<section>
			<h2>interests...</h2>
			<ul className="interests">
				{interests.map((interest, i) => (
					<li
						key={`interest-${interest.name}`}
						className="interest"
						onMouseEnter={() => handleMouseEnter(i)}
						onMouseLeave={handleMouseLeave}
					>
						<span>
							{interest.name}: {interest.priority}
						</span>
						<button
							onClick={() => onDeleteInterest(interest)}
							style={{
								visibility: i === hoveredIndex ? "visible" : "hidden",
							}}
						>
							x
						</button>
					</li>
				))}
			</ul>

			<button type="button" className="submit-button" onClick={onSubmit}>
				Submit Interests
			</button>
		</section>
	)
}

export default CandidateInterests
