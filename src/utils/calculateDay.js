import shuffleArray from "./shuffle"

const calculateDay = (interests, options) => {
	// TODO: fill out function
	// TODO: extrapolate break time do different functions or class
	const { time, breaks, learningStyle } = options;
	let breakTime = 5;
	// is the max
	if (time > 2 && time < 4) {
		breakTime = 10;
	} else if (time > 4) {
		breakTime = 15;
	}
	let minutes = time * 60;
	minutes -= breakTime * interests.length;

	let totalWeight = 0;

	const shuffledArray = shuffleArray(interests);
	let counter = 0;

	let first;
	let low = [];
	let med = [];
	let high = [];

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
	// calculate breaks
	// if breaks = suggested use 15min after each
	// if (breaks === 'suggested') {
	//   // calculateBreaks.suggested
	// } else if (breaks === ) {

	// } else {

	// }
	// if breaks = pomodoro use pomodoro style
	// if breaks = decide use 5, 10, 15min after each
	// if breaks = don't worry, don't schedule breaks

	// interests.forEach(interest => {
	//   // TODO: Extrapolate learning style functions
	// 	// if learningStyle = startStrong
	//     // high to low
	// 	// if learningStyle = endStrong
	//     // low to high
	// 	// if learningStyle = warmUpThenBusiness
	//     // one low, then high to low
	// 	// if learningStyle = rngenius
	//     // random order
	// });
};


export default calculateDay
