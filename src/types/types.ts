import { NewInterest, PastInterest } from "./interfaces"

// this is an example of a union type so we can be more strict
export type CandidateInterest = NewInterest | PastInterest
