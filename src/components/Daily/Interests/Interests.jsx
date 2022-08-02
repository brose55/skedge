import './Interests.css'

const Interests = ({ interests }) => {
  return (
    <div>
		<ul>
			{interests.map(({ value, level }, i) => (
        <li key={value + i}>
					{value} {level}
				</li>
			))}
		</ul>
    </div>
	);
}
 
export default Interests
 