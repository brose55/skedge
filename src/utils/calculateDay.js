import shuffleArray from "./shuffle"

const calculateDay = (interests, options) => {
	const { time, learningStyle } = options;
	let minutes = time * 60;
	let totalWeight = 0;
	const shuffledArray = shuffleArray(interests);
	let first;
	let low = [];
	let med = [];
	let high = [];
	let counter = 0;

	interests.forEach((interest) => {
		if (counter === 0 && interest.weight === 1 && learningStyle === "warmUp") {
			console.log("hello");
			first = interest;
			counter++;
		} else {
			// placed in else so first doesn't get calculated twice
			if (interest.weight === 1) {
				low.push(interest);
			} else if (interest.weight === 2) {
				med.push(interest);
			} else {
				high.push(interest);
			}
		}
		totalWeight += interest.weight;
	});

	let block = minutes / totalWeight;
	let topics;
	
  if (options.learningStyle === "warmUp") {
		topics = [first, ...high, ...med, ...low];
	} else if (options.learningStyle === "rng") {
		topics = shuffledArray;
	} else if (options.learningStyle === "endStrong") {
		topics = [...low, ...med, ...high];
	} else {
		topics = [...high, ...med, ...low];
	}

	let schedule = [];

	topics.forEach((topic) => {
		topic.time = block * topic.weight;
		schedule.push(topic);
		schedule.push({ level: 'break', time: breakTime });
	});

	return schedule;
};


export default calculateDay
