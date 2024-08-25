import { useState, useEffect, useRef, ChangeEvent } from "react"
import { PublicFormState } from "../types/types"

export function usePublicFormState(
	initialState: PublicFormState,
	focusField: keyof PublicFormState | null = null,
	focusTimer: number = 0
) {
	const [formState, setFormState] = useState<PublicFormState>(initialState)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		if (focusField && inputRef.current) {
			const timerId = setTimeout(() => {
				inputRef.current?.focus()
			}, focusTimer)

			return () => clearTimeout(timerId)
		}
	}, [focusField, focusTimer])

	return {
		formState,
		handleChange,
		inputRef,
		setFormState,
	}
}
