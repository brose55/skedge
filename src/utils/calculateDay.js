import shuffleArray from "./shuffle"

// the main algorithm used for scheduling
const calculateDay = (interests, options) => {
	const { timeValue, learningStyle } = options
	console.log("timeValue:", timeValue)

	// convert hours to minutes
	let minutes = timeValue * 60
	// the priority levels of each topic, added together
	let totalWeight = 0
	// a variable to hold the first low priority topic
	let warmUpTopic

	// arrays for each priority level
	let low = []
	let med = []
	let high = []

	// counter used for warmUp only
	let counter = 0

	interests.forEach((interest) => {
		// if the first low priority interest, only needed for
		if (counter === 0 && interest.weight === 1 && learningStyle === "warmUp") {
			// grab the first low priority interst to start with
			warmUpTopic = interest
			// increment counter so this doesn't run again
			counter++

			// place in else so warmUpTopic doesn't get calculated twice
		} else {
			// seperate interests by priority level
			if (interest.weight === 1) {
				low.push(interest)
			} else if (interest.weight === 2) {
				med.push(interest)
			} else if (interest.weight === 3) {
				high.push(interest)
			}
		}
		// keep track of the total weight
		totalWeight += interest.weight
	})

	// this will be one unit of time for calculation
	let timeBlock = minutes / totalWeight

	// used to hold the ordered topics depending on learningStyle
	let topics

	// logic for learning styles
	if (options.learningStyle === "warmUp") {
		// start with something easy, then order topics from highest to lowest priority
		topics = [warmUpTopic, ...high, ...med, ...low]
	} else if (options.learningStyle === "rng") {
		// make it completely random
		const shuffledArray = shuffleArray(interests)
		topics = shuffledArray
	} else if (options.learningStyle === "startStrong") {
		// order topics from highest to lowest priority
		topics = [...high, ...med, ...low]
	} else if (options.learningStyle === "endStrong") {
		// order topics from lowest to highest prority
		topics = [...low, ...med, ...high]
	}

	// the final array that we will give the user
	let schedule = []

	// resructure the data to be optimal for the front end
	topics.forEach((topic, i) => {
		topic.order = i + 1
		topic.time = Math.floor(timeBlock * topic.weight)
		schedule.push(topic)
	})

	return schedule
}

export default calculateDay
