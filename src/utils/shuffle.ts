import { ProcessedInterestWithWeight } from "./calculateDay"

export default function shuffleArray(
	arr: ProcessedInterestWithWeight[]
): ProcessedInterestWithWeight[] {
	// create a shallow copy of the array to keep it immutable
	let shuffled = [...arr]

	// Durstenfeld Shuffle
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
	}
	return shuffled
}
