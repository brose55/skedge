// Durstenfeld Shuffle
const shuffleArray = (array) => {
  // create a shallow copy of the array as to keep it immutable
	let shuffled = [...array]
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
  return shuffled
}

export default shuffleArray