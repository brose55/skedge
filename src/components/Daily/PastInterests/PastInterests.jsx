import axios from 'axios'
import { useState, useEffect } from 'react'
import './PastInterests.css'

const PastInterests = ({checkListAndUpdate}) => {
  const [pastInterests, setPastInterests] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [interestsError, setInterestsError] = useState(null)

  useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_DEV_URL}/api/interests`, {withCredentials: true})
        .then(result => {
          setPastInterests(result.data)
          setIsLoaded(true)
        },
        (err) => {
          setIsLoaded(true)
          setInterestsError(err.message)
        })
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_DEV_URL}/api/interests/${id}`, {withCredentials: true})
      if (window.confirm('are you sure you want to delete this interest forever?') === true) {
        setPastInterests(
          pastInterests.filter(interest => {
            return interest._id !== id
          })
        )        
      }
    } catch (err) {
      console.error(err)
    }
  } 


  if (interestsError) {
    return <p>Error: {interestsError}</p>
  } else if (!isLoaded) {
    return <p>loading...</p>
  } else if (pastInterests.length > 0) {
    return (
			<section>
				<header>
					<h2>past interests...</h2>
				</header>
				<section className="past-interests">
					{pastInterests.map((interest, i) => (
						<p key={`past-${interest.value}-${i}`}>
							<span className='past-interest' onClick={() => checkListAndUpdate(interest)}>
								{interest.value}: {interest.priority}
							</span>
              <button onClick={() => handleDelete(interest._id)}>X</button>
						</p>
					))}
				</section>
			</section>
		);
  } else {
    return null
  }
  
}
 
export default PastInterests
 