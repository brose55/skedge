import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios, { AxiosError } from "axios"

import { CandidateInterest } from "../../types/types"
import { Options, ProcessedInterest } from "../../types/interfaces"
import { calculateDay, displayError } from "../../utils"
import InterestForm from "./InterestForm/InterestForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import PastInterests from "./PastInterests/PastInterests"
import ScheduleDisplay from "./ScheduleDisplay/ScheduleDisplay"
import CandidateInterests from "./CandidateInterests/CandidateInterests"

import styles from "./Daily.module.scss"

function Daily() {
	const [candidateInterests, setCandidateInterests] = useState<
		CandidateInterest[]
	>([])
	const [processedInterests, setProcessedInterests] = useState<
		ProcessedInterest[]
	>([])
	const [options, setOptions] = useState<Options | null>(null)
	const [updateInterestsError, setUpdateInterestsError] = useState<string>("")

	const location = useLocation()

	useEffect(() => {
		// track current page for redirect after sign in
		localStorage.setItem("page", location.pathname)
	}, [location.pathname])

	// prevent duplicate interests by topic
	const checkListAndUpdate = (candidateInterest: CandidateInterest) => {
		// note: .includes() doesn't work reliably with objects, so we use .some()
		setCandidateInterests((interests) => {
			const included = interests.some(
				(interest) => interest.topic === candidateInterest.topic,
			)
			return included ? interests : [...interests, candidateInterest]
		})
	}

	const handleDeleteInterest = (deletedInterest: CandidateInterest) => {
		setCandidateInterests(
			candidateInterests.filter(
				(interest) => interest.topic !== deletedInterest.topic,
			),
		)
	}

	const storeInterests = async (interests: ProcessedInterest[]) => {
		try {
			// only send topic and priority to the backend
			const trimmedInterests = interests.map(({ topic, priority }) => ({
				topic,
				priority,
			}))

			await axios.put(
				`${import.meta.env.VITE_API_URL}/api/interests`,
				trimmedInterests,
				{ withCredentials: true },
			)
		} catch (err) {
			if (err instanceof AxiosError) {
				setUpdateInterestsError(displayError(err) as string)
			} else {
				setUpdateInterestsError("Could not store interests")
			}
		}
	}

	const handleSubmit = () => {
		if (!options) {
			setUpdateInterestsError("Options are required to process interests")
			return
		}

		// calculate synchronously then pass directly to storeInterests
		// avoids stale state from setProcessedInterests being async
		const calculated = calculateDay(candidateInterests, options)
		setProcessedInterests(calculated)
		storeInterests(calculated)
	}

	return (
		<section className={styles.daily}>
			{updateInterestsError && <p>{updateInterestsError}</p>}
			<PastInterests checkListAndUpdate={checkListAndUpdate} />
			<section className={styles.dailyForms}>
				<InterestForm checkListAndUpdate={checkListAndUpdate} />
				<OptionsForm setOptions={setOptions} />
				<CandidateInterests
					interests={candidateInterests}
					onDeleteInterest={handleDeleteInterest}
					onSubmit={handleSubmit}
				/>
			</section>
			<ScheduleDisplay interests={processedInterests} options={options} />
		</section>
	)
}

export default Daily
