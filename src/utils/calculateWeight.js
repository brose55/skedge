// changes priority level from a string to a number
const calculateWeight = (priority) => {
	if (priority === "high") {
		return 3
	} else if (priority === "med") {
		return 2
	} else {
		return 1
	}
}

export default calculateWeight
