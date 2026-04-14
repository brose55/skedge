import { Options, ProcessedInterest } from "../../../types/interfaces"
import styles from "./ScheduleDisplay.module.scss"

interface ScheduleDisplayProps {
	interests: ProcessedInterest[]
	options: Options | null
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({
	interests,
	options,
}) => {
	if (!options || !interests || interests.length === 0) return null

	return (
		<div className={styles.dailyDisplay}>
			<p className={styles.summary}>
				{options.hoursAvailable} hours, {options.learningStyle}
			</p>
			<ul className={styles.dailyBlocks}>
				{interests.map((interest, i) => (
					<li
						key={`daily_schedule_${i}`}
						className={`${styles.block} ${styles[interest.priority]}`}
					>
						<span>
							{interest.order}. {interest.topic}
						</span>
						<span>{interest.duration} min</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ScheduleDisplay
