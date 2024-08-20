import "./Footer.css"

const Footer = ({ theme }) => {
	// icons depending on theme
	const catIcon = `${process.env.PUBLIC_URL}/icons/${theme}-cat.svg`
	const githubIcon = `${process.env.PUBLIC_URL}/icons/${theme}-github.svg`
	const linkedinIcon = `${process.env.PUBLIC_URL}/icons/${theme}-linkedin.svg`

	return (
		<footer>
			{/* personal website */}
			<a href="https://www.linkedin.com/in/brandon-d-rose/" target="#blank">
				<img src={catIcon} alt="" />
			</a>
			<a href="https://www.linkedin.com/in/brandon-d-rose/" target="#blank">
				<img src={linkedinIcon} alt="" />
			</a>
			<a href="https://github.com/brose55" target="#blank">
				<img src={githubIcon} alt="" />
			</a>
		</footer>
	)
}

export default Footer
