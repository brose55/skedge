import { CandidateInterest } from "../../../types/types"
import useHover from "../../../hooks/useHover"
import styles from "./CandidateInterests.module.scss"

interface CandidateInterestsProps {
	interests: CandidateInterest[]
	onDeleteInterest: (interest: CandidateInterest) => void
	onSubmit: () => void
}

const CandidateInterests: React.FC<CandidateInterestsProps> = ({
	interests,
	onDeleteInterest,
	onSubmit,
}) => {
	const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover()

	return (
		<section className={`dailySection ${styles.candidateInterests}`}>
			<h2>interests...</h2>
			<ul className={styles.interests}>
				{interests.map((interest, i) => (
					<li
						key={`interest-${interest.topic}`}
						className={styles.interest}
						onMouseEnter={() => handleMouseEnter(i)}
						onMouseLeave={handleMouseLeave}
					>
						{interest.topic}: {interest.priority}
						<button
							className="deleteButton"
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
				className="formField submitButton"
				onClick={onSubmit}
			>
				make schedule
			</button>
		</section>
	)
}

export default CandidateInterests
