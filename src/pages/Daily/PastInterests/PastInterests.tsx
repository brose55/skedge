import { useState, useEffect } from "react"
import axios, { AxiosError } from "axios"
import { PastInterest } from "../../../types/interfaces"
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
					`${import.meta.env.VITE_DEV_URL}/api/interests`,
					{ withCredentials: true }
				)
				setPastInterests(result.data)
			} catch (err: any) {
				if (err instanceof AxiosError) {
					setInterestsError(err.message)
				} else {
					setInterestsError("Could not store interests")
				}
			} finally {
				setIsLoaded(true)
			}
		}

		fetchPastInterests()
	}, [])

	const handleDelete = async (id: number) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this interest forever?"
		)

		if (!confirmDelete) return

		try {
			await axios.delete(
				`${import.meta.env.VITE_DEV_URL}/api/interests/${id}`,
				{ withCredentials: true }
			)

			setPastInterests((prevInterests) =>
				prevInterests.filter((interest) => interest._id !== id)
			)
		} catch (error) {
			console.error("Failed to delete the interest:", error)
		}
	}

	if (interestsError) {
		return <p>Error: {interestsError}</p>
	}

	if (!isLoaded) {
		return <p>Loading...</p>
	}

	if (pastInterests.length === 0) {
		return null
	}

	return (
		<section className={styles.dailySection}>
			<header>
				<h2>Past Interests...</h2>
			</header>
			<ul className={styles.pastInterests}>
				{pastInterests.map((interest, i) => {
					return (
						<li
							key={`past-${interest.name}`}
							onMouseEnter={() => handleMouseEnter(i)}
							onMouseLeave={handleMouseLeave}
							className={styles.pastInterest}
							onClick={() => checkListAndUpdate(interest)}
						>
							{interest.name}: {interest.priority}
							<button
								style={{
									visibility: i === hoveredIndex ? "visible" : "hidden",
								}}
								onClick={(e) => {
									e.stopPropagation() // Prevent triggering checkListAndUpdate when clicking delete
									handleDelete(interest._id)
								}}
							>
								x
							</button>
						</li>
					)
				})}
			</ul>
		</section>
	)
}

export default PastInterests
