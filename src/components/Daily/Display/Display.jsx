// import { useState } from 'react';
import calculateDay from '../../../utils/calculateDay';
import './Display.css'

const Display = ({ interests, options }) => {
	// const [counter, setCounter] = useState(0)
  if (options) {
		const schedule = calculateDay(interests, options)
		return (
			<div className='daily-display'>
				<p>{options.time} hours, {options.learningStyle}</p>
				<div className={`daily-blocks`}>
					{
						schedule.map((block, i) => {
							return (
								// order: the order that it will be displayed
								// priority: the priority level (high, med, low)
								// topic: the name of the hobby
								// time: time in minutes
								// weight: directly related to priority, higher = more important
								<p key={`daily_schedule_${i}`} className={block.priority}>
									{block.order}. {block.topic}: {block.time} minutes, {block.priority} priority
								</p>
							);
						})
					}
				</div>
			</div>
		);
	}
}
 
export default Display
 