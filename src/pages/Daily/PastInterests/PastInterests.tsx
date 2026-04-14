import { useState, useEffect } from "react"
import axios, { AxiosError } from "axios"

import { PastInterest } from "../../../types/interfaces"
import { displayError } from "../../../utils"
import useHover from "../../../hooks/useHover"

import styles from "./PastInterests.module.scss"

interface PastInterestsProps {
	checkListAndUpdate: (interest: PastInterest) => void
}

const PastInterests: React.FC<PastInterestsProps> = ({
	checkListAndUpdate,
}) => {
	const [pastInterests, setPastInterests] = useState<PastInterest[]>([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [interestsError, setInterestsError] = useState<string | null>(null)

	const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHover()

	useEffect(() => {
		const fetchPastInterests = async () => {
			try {
				const result = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/interests`,
					{ withCredentials: true },
				)
				setPastInterests(result.data)
			} catch (err) {
				if (err instanceof AxiosError) {
					setInterestsError(displayError(err) as string)
				} else {
					setInterestsError("Could not fetch interests")
				}
			} finally {
				setIsLoaded(true)
			}
		}

		fetchPastInterests()
	}, [])

	const handleDelete = async (id: string) => {
		// native confirm dialog — consider a custom modal in the future
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this interest forever?",
		)

		if (!confirmDelete) return

		try {
			await axios.delete(
				`${import.meta.env.VITE_API_URL}/api/interests/${id}`,
				{ withCredentials: true },
			)
			// optimistic update — remove from local state immediately
			setPastInterests((prev) => prev.filter((interest) => interest._id !== id))
		} catch (err) {
			console.error("Failed to delete the interest:", err)
		}
	}

	if (interestsError) return <p>Error: {interestsError}</p>
	if (!isLoaded) return <p>Loading...</p>
	if (pastInterests.length === 0) return null

	return (
		<section>
			<header className={styles.header}>
				<h2>Past Interests...</h2>
			</header>
			<ul className={styles.pastInterests}>
				{pastInterests.map((interest, i) => (
					<li
						key={`past-${interest.topic}`}
						onMouseEnter={() => handleMouseEnter(i)}
						onMouseLeave={handleMouseLeave}
						className={styles.pastInterest}
						onClick={() => checkListAndUpdate(interest)}
					>
						{interest.topic}: {interest.priority}
						<button
							className="deleteButton"
							style={{
								visibility: i === hoveredIndex ? "visible" : "hidden",
							}}
							onClick={(e) => {
								// stop propagation so delete doesn't also trigger checkListAndUpdate
								e.stopPropagation()
								handleDelete(interest._id)
							}}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}

export default PastInterests
