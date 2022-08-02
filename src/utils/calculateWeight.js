const calculateWeight = (level) => {
	if (level === "high") {
		return 3;
	} else if (level === "med") {
		return 2;
	} else {
		return 1;
	}
};

export default calculateWeight