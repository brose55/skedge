import calculateDay from '../../../utils/calculateDay';
import './Display.css'

const Display = ({ interests, options }) => {
  if (options) {
		// TODO: send to calculateDay function
		// will return an array of object blocks with time in order
		const schedule = calculateDay(interests, options)
		return (
			<div className='daily-display'>
				<p>{options.time} hours, {options.learningStyle}</p>	
				<div className='daily-blocks'>
					{
						schedule.map((block, i) => {
							return (
								// level: high, med, low
								// values: hobby value
								// time: time in minutes
								// weight: directly related to level, higher = more important
								<p key={`daily_schedule_${i}`} className={block.level}>
									{block.value}: {block.time} minutes, {block.level} priority
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
 