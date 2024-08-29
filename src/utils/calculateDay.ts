import { CandidateInterest } from "../types/types"
import { Options, ProcessedInterest } from "../types/interfaces"
import { LearningStyle, Priority } from "../types/enums"
import shuffleArray from "./shuffle"

// This type is used only in the context where weight is relevant, keeping other types clean.
export type ProcessedInterestWithWeight = CandidateInterest & { weight: number }

// The main algorithm used for scheduling
export default function calculateDay(
	interests: CandidateInterest[],
	options: Options
): ProcessedInterest[] {
	// Destructure the options for clarity
	const { hoursAvailable, learningStyle } = options

	const minutesAvailable = convertTimeToMinutes(hoursAvailable)

	// Calculate total weight and map interests to include weight
	const { processedInterests, totalWeight } = preprocessInterests(interests)

	// Calculate time unit based on available minutes and total weight
	const timeUnit = minutesAvailable / totalWeight

	// Categorize interests by priority
	const {
		lowPriorityInterests,
		mediumPriorityInterests,
		highPriorityInterests,
		warmUpInterest,
	} = categorizeInterestsByPriority(learningStyle, processedInterests)

	// Order interests based on learning style
	const orderedInterests = orderInterestsByLearningStyle(learningStyle, {
		lowPriorityInterests,
		mediumPriorityInterests,
		highPriorityInterests,
		warmUpInterest,
	})

	// Process interests to add order and duration
	// this destructuring syntax separates weight from the remaining properties.
	// We then spread only the relevant properties into the new object that will be returned.
	return orderedInterests.map(({ weight, ...interest }, i) => ({
		...interest, // Spread the original interest data, excluding weight
		order: i + 1,
		duration: Math.floor(timeUnit * weight),
	}))
}

// Converts hours to minutes
function convertTimeToMinutes(hoursAvailable: number): number {
	return hoursAvailable * 60
}

// Preprocess interests to calculate weight and return total weight
function preprocessInterests(interests: CandidateInterest[]): {
	processedInterests: ProcessedInterestWithWeight[]
	totalWeight: number
} {
	let totalWeight = 0

	const processedInterests = interests.map((interest) => {
		const weight = calculateWeight(interest.priority)
		totalWeight += weight
		return {
			...interest,
			weight,
		}
	})

	return { processedInterests, totalWeight }
}

// Calculate weight based on priority
function calculateWeight(priority: Priority): number {
	switch (priority) {
		case Priority.High:
			return 3
		case Priority.Med:
			return 2
		case Priority.Low:
			return 1
		default:
			return 0
	}
}

// Categorizes interests into low, medium, and high priority arrays
function categorizeInterestsByPriority(
	learningStyle: LearningStyle,
	interests: ProcessedInterestWithWeight[]
): {
	lowPriorityInterests: ProcessedInterestWithWeight[]
	mediumPriorityInterests: ProcessedInterestWithWeight[]
	highPriorityInterests: ProcessedInterestWithWeight[]
	warmUpInterest?: ProcessedInterestWithWeight
} {
	let lowPriorityInterests: ProcessedInterestWithWeight[] = []
	let mediumPriorityInterests: ProcessedInterestWithWeight[] = []
	let highPriorityInterests: ProcessedInterestWithWeight[] = []
	let warmUpInterest: ProcessedInterestWithWeight | undefined

	interests.forEach((interest) => {
		switch (interest.priority) {
			case Priority.Low:
				lowPriorityInterests.push(interest)
				break
			case Priority.Med:
				mediumPriorityInterests.push(interest)
				break
			case Priority.High:
				highPriorityInterests.push(interest)
				break
		}
	})

	if (
		learningStyle === LearningStyle.WarmUp &&
		lowPriorityInterests.length > 0
	) {
		warmUpInterest = getRandomInterest(lowPriorityInterests)
		lowPriorityInterests = lowPriorityInterests.filter(
			(interest) => interest !== warmUpInterest
		)
	}

	return {
		lowPriorityInterests,
		mediumPriorityInterests,
		highPriorityInterests,
		warmUpInterest,
	}
}

// Get a random interest from the list
function getRandomInterest(
	interests: ProcessedInterestWithWeight[]
): ProcessedInterestWithWeight | undefined {
	if (interests.length === 0) return undefined
	const randomIndex = Math.floor(Math.random() * interests.length)
	return interests[randomIndex]
}

// Order interests based on the selected learning style
function orderInterestsByLearningStyle(
	learningStyle: LearningStyle,
	categorization: {
		lowPriorityInterests: ProcessedInterestWithWeight[]
		mediumPriorityInterests: ProcessedInterestWithWeight[]
		highPriorityInterests: ProcessedInterestWithWeight[]
		warmUpInterest?: ProcessedInterestWithWeight
	}
): ProcessedInterestWithWeight[] {
	let orderedInterests: ProcessedInterestWithWeight[] = []

	switch (learningStyle) {
		case LearningStyle.WarmUp:
			if (categorization.warmUpInterest)
				orderedInterests = [
					categorization.warmUpInterest,
					...categorization.highPriorityInterests,
					...categorization.mediumPriorityInterests,
					...categorization.lowPriorityInterests,
				]
			break
		case LearningStyle.RNG:
			orderedInterests = shuffleArray([
				...categorization.lowPriorityInterests,
				...categorization.mediumPriorityInterests,
				...categorization.highPriorityInterests,
			])
			break
		case LearningStyle.StartStrong:
			orderedInterests = [
				...categorization.highPriorityInterests,
				...categorization.mediumPriorityInterests,
				...categorization.lowPriorityInterests,
			]
			break
		case LearningStyle.EndStrong:
			orderedInterests = [
				...categorization.lowPriorityInterests,
				...categorization.mediumPriorityInterests,
				...categorization.highPriorityInterests,
			]
			break
	}

	return orderedInterests
}
