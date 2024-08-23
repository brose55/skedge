import { useState } from "react"

function useHover() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	const handleMouseEnter = (index: number) => setHoveredIndex(index)
	const handleMouseLeave = () => setHoveredIndex(null)

	return {
		hoveredIndex,
		handleMouseEnter,
		handleMouseLeave,
	}
}

export default useHover
