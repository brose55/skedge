import axios from "axios"

// custom fetching function used with useSWR hook
const fetcher = async (url: string) => {
	try {
		const { data } = await axios.get(url, {
			withCredentials: true,
		})
		return data
	} catch (err) {
		console.error(err)
		throw err // Re-throw the error to handle it in the caller
	}
}

export default fetcher
