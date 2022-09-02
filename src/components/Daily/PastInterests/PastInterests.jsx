import axios from 'axios'
import { useState, useEffect } from 'react'
import './PastInterests.css'

const PastInterests = () => {
  const [pastInterests, setPastInterests] = useState([
		{
			value: "health",
			priority: "high",
			weight: 3,
		},
		{
			value: "python",
			priority: "high",
			weight: 3,
		},
		{
			value: "reading",
			priority: "low",
			weight: 1,
		},
	]);
  const [isLoaded, setIsLoaded] = useState(false)
  // const [displayState, setDisplayState] = useState()
  const [interestsError, setInterestsError] = useState(null)
  
  useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_DEV_URL}/api/interests`, {withCredentials: true})
        // .then(res => res.json())
        .then(result => {
          setPastInterests(result.data)
          setIsLoaded(true)
        },
        (err) => {
          setIsLoaded(true)
          setInterestsError(err.message)
        })
  }, [])

  // !isLoaded ? (
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
					<button key={`past-${interest.value}-${i}`}>
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
 