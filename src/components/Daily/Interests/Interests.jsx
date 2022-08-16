import './Interests.css'

const Interests = ({ interests }) => {
  return (
		<section style={{ padding: "1rem 0" }}>
			<h2>interests...</h2>
			<ul>
				{interests.map(({ value, level }, i) => (
					<li className='interests' key={value + i}>
						{value} {level}
					</li>
				))}
			</ul>
		</section>
	);
}
 
export default Interests
 