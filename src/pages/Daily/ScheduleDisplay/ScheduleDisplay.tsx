import React from "react"
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
	if (!options || !interests) return null

	return (
		<div className={styles.dailyDisplay}>
			<p>
				{options.hoursAvailable} hours, {options.learningStyle}
			</p>
			<div className={styles.dailyBlocks}>
				{interests.map((interest, i) => (
					<p key={`daily_schedule_${i}`} className={interest.priority}>
						{interest.order}. {interest.name}: {interest.duration} minutes,{" "}
						{interest.priority} priority
					</p>
				))}
			</div>
		</div>
	)
}

export default ScheduleDisplay
