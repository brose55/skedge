// import { useState } from 'react';
import calculateDay from '../../../utils/calculateDay';
import './Display.css'

const Display = ({ interests, options }) => {
	// const [counter, setCounter] = useState(0)
  if (options) {
		// TODO: send to calculateDay function
		// will return an array of object blocks with time in order
		const schedule = calculateDay(interests, options)
		return (
			<div className='daily-display'>
				<p>{options.time} hours, {options.learningStyle}</p>
				<div className={`daily-blocks ${options.displayType}`}>
					{
						schedule.map((block, i) => {
							return (
								// order: the order lol
								// priority: the priority level (high, med, low)
								// values: hobby value
								// time: time in minutes
								// weight: directly related to priority, higher = more important
								<p key={`daily_schedule_${i}`} className={block.priority}>
									{block.order}. {block.value}: {block.time} minutes, {block.priority} priority
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
 