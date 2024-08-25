import { LearningStyle, Priority } from "./enums"

export interface SignInFormData {
	email: string
	password: string
}

export interface RegisterFormData {
	username: string
	email: string
	password: string
	passwordConfirmation: string
}

/**
 * BaseInterest is used to demonstrate a flexible and extendable design pattern.
 * While it may be slightly overengineered for this specific use case, it serves
 * as an example of how shared properties can be centralized and extended in more
 * complex applications.
 */
export interface BaseInterest {
	name: string
	priority: Priority
}

export interface NewInterest extends BaseInterest {}

// Represents an interest that has been saved in the database
export interface PastInterest extends BaseInterest {
	_id: number
	userId: number
}

// Represents an interest after it has been processed by the algorithm
export interface ProcessedInterest extends BaseInterest {
	order: number
	duration: number
}

export interface Options {
	hoursAvailable: number
	learningStyle: LearningStyle
}
