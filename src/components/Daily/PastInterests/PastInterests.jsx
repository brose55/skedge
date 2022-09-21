import axios from 'axios'
import { useState, useEffect } from 'react'
import './PastInterests.css'

const PastInterests = ({checkListAndUpdate}) => {
  const [pastInterests, setPastInterests] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  // const [displayState, setDisplayState] = useState()
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

  // !pastInterests ? (
	// 	<p className='loading'>loading...</p>
	// ) : (
    return (
    <section>
			<header><h2>past interests...</h2></header>
      {/* <p>{interestsError}</p> */}
			<section className='past-interests'>
				{pastInterests.map((interest, i) => (
          // TODO: A slim list of previous interests with their priority level
          // Each have a delete button,
          // which may trigger an alert
          // on confirmation, delete the interest from user's db
          // On click anywhere else, add the interest to the scheduling algorithm 
					<button 
            key={`past-${interest.value}-${i}`}
            onClick={() => checkListAndUpdate(interest)}
          >
						{interest.value} {interest.priority}
					</button>
				))}
				{/* {
        pastInterests ?
      } */}
			</section>
		</section>
	)

  // if (interestsError) {
  //   return <p>Error: {interestsError}</p>
  // } else if (!isLoaded) {
  //   return <p>loading...</p>
  // } else {
  //   <ul>

  //   </ul>
  // }
  
  // return (
  //   <section>
  //     <p>{interestsError}</p>
      
  //   </section>
  // )
}
 
export default PastInterests
 