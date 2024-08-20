import axios from "axios"

// custom fetching function used with useSWR hook
const fetcher = async (url) => {
	try {
		const { data } = await axios.get(url, {
			withCredentials: true,
		})
		return data
	} catch (err) {
		console.error(err)
	}
}

export default fetcher
