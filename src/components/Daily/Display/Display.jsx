import calculateDay from '../../../utils/calculateDay';
import './Display.css'

const Display = ({ interests, options }) => {
  if (options) {
		// TODO: send to calculateDay function
		// will return an array of object blocks with time in order
		const schedule = calculateDay(interests, options)
		return (
			<div style={{padding: '1rem 0'}}>
			{
				schedule.map((block, i) => {
						return (
							<p key={`daily_schedule_${i}`} className={block.level}>
								{block.value} {block.time}
							</p>
						);
				})
			}
			<p>
				{options.time} <br />
				{options.learningStyle}
			</p>	
			</div>
		);
	}
}
 
export default Display
 