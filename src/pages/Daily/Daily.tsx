import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios, { AxiosError } from "axios"
import InterestForm from "./InterestForm/InterestForm"
import OptionsForm from "./OptionsForm/OptionsForm"
import PastInterests from "./PastInterests/PastInterests"
import { CandidateInterest } from "../../types/types"
import { Options, ProcessedInterest } from "../../types/interfaces"
import ScheduleDisplay from "./ScheduleDisplay/ScheduleDisplay"
import CandidateInterests from "./CandidateInterests/CandidateInterests"
import calculateDay from "../../utils/calculateDay"
import styles from "./Daily.module.scss"

function Daily() {
	const [candidateInterests, setCandidateInterests] = useState<
		CandidateInterest[]
	>([])
	const [processedInterests, setProcessedInterests] = useState<
		ProcessedInterest[]
	>([])
	const [options, setOptions] = useState<Options | null>(null)
	// TODO: use displayError util
	const [updateInterestsError, setUpdateInterestsError] = useState<string>("")

	const location = useLocation()

	useEffect(() => {
		localStorage.setItem("page", location.pathname)
	}, [location.pathname])

	const checkListAndUpdate = (candidateInterest: CandidateInterest) => {
		// do a quick loop and see if it already exists...
		// note: I don't use .includes() here because it doesn't play well with objects
		setCandidateInterests((interests) => {
			let included = interests.some(
				(interest) => interest.name === candidateInterest.name
			)
			if (!included) {
				return [...interests, candidateInterest]
			}
			return interests
		})
	}

	const handleDeleteInterest = (deletedInterest: CandidateInterest) => {
		setCandidateInterests(
			candidateInterests.filter(
				(interest) => interest.name !== deletedInterest.name
			)
		)
	}

	const storeInterests = async () => {
		try {
			const trimmedInterests = processedInterests.map((interest) => ({
				name: interest.name,
				priority: interest.priority,
			}))

			console.log("trimmed: ", trimmedInterests)

			await axios.put(
				`${import.meta.env.VITE_DEV_URL}/api/interests`,
				trimmedInterests,
				{
					withCredentials: true,
				}
			)
		} catch (err: any) {
			if (err instanceof AxiosError) {
				setUpdateInterestsError(err.message)
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
		setProcessedInterests(calculateDay(candidateInterests, options))
		console.log("after submit: ", processedInterests)

		storeInterests()
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
