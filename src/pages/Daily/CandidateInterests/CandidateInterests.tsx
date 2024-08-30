import React from "react"
import { CandidateInterest } from "../../../types/types"
import useHover from "../../../hooks/useHover"
import styles from "./CandidateInterests.module.scss"

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
		<section className={styles.dailySection}>
			<h2>interests...</h2>
			<ul className={`${styles.interests} ${styles.dailyForm}`}>
				{interests.map((interest, i) => (
					<li
						key={`interest-${interest.name}`}
						className="interest"
						onMouseEnter={() => handleMouseEnter(i)}
						onMouseLeave={handleMouseLeave}
					>
						{interest.name}: {interest.priority}
						<button
							className={styles.deleteButton}
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

			<button
				type="button"
				className={`${styles.formField} ${styles.submitButton}`}
				onClick={onSubmit}
			>
				Submit Interests
			</button>
		</section>
	)
}

export default CandidateInterests
