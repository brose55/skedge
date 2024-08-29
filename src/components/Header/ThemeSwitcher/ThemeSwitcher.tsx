import React from "react"
import styles from "./ThemeSwitcher.module.scss"

interface ThemeSwitcherProps {
	theme: string
	setTheme: (theme: string) => void
}

const sunIcon = "/icons/dark-sun.svg"
const moonIcon = "/icons/light-moon.svg"

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
	const iconSrc = theme === "dark" ? sunIcon : moonIcon

	const handleChangeTheme = () => {
		const userTheme = theme === "dark" ? "light" : "dark"
		setTheme(userTheme)
		localStorage.setItem("theme", userTheme)
	}

	return (
		<img
			src={iconSrc}
			alt="Toggle Theme"
			className={styles.themeButton}
			onClick={handleChangeTheme}
		/>
	)
}

export default ThemeSwitcher
