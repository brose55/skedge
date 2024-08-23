import { AxiosError } from "axios"
import React from "react"

// TODO: revisit this code

// Define the structure of expected error response data
interface ErrorResponseData {
	issues?: { message: string }[]
	[key: string]: any
}

function getErrorMessage(
	error: AxiosError<ErrorResponseData> | AxiosError<unknown> | string
): string {
	if (typeof error === "string") {
		return error
	}

	// Attempt to narrow down the type to AxiosError<ErrorResponseData>
	const { status, data } = error.response || { status: 0, data: {} }

	switch (status) {
		case 400:
			// We assert that data is of type ErrorResponseData
			return (data as ErrorResponseData).issues?.[0]?.message || "Bad Request"
		case 401:
			return (data as string) || "Unauthorized"
		case 409:
			return "User already exists with this username and/or email"
		case 0:
			return error.message?.toLowerCase() || "An error occurred"
		default:
			console.error(`Error Status: ${status}, Message: ${error.message}`, data)
			return "An unexpected error occurred"
	}
}

export default function displayError(
	error: AxiosError<ErrorResponseData> | string | AxiosError<unknown>
): React.ReactNode {
	const errorMessage = getErrorMessage(error)

	if (typeof error !== "string" && error.response?.status === 0) {
		return (
			<>
				<span>{errorMessage}</span>
				<span>... if problem persists, please submit an </span>
				<a href="https://github.com/brose55/skedge/issues">issue...</a>
			</>
		)
	}

	return <span>{errorMessage}</span>
}
