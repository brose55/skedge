import {
	NewInterest,
	PastInterest,
	RegisterFormData,
	SignInFormData,
} from "./interfaces"

// this is an example of a union type
export type CandidateInterest = NewInterest | PastInterest

export type PublicFormState = SignInFormData | RegisterFormData
