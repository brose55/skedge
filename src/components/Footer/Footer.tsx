import "./Footer.css"

interface FooterProps {
	theme: string
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
	// icons depending on theme
	const catIcon = `/icons/${theme}-cat.svg`
	const githubIcon = `/icons/${theme}-github.svg`
	const linkedinIcon = `/icons/${theme}-linkedin.svg`

	return (
		<footer>
			{/* TODO: replace with personal website */}
			<a
				href="https://www.linkedin.com/in/brandon-d-rose/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={catIcon} alt="" />
			</a>
			<a
				href="https://www.linkedin.com/in/brandon-d-rose/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={linkedinIcon} alt="" />
			</a>
			<a
				href="https://github.com/brose55"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={githubIcon} alt="" />
			</a>
		</footer>
	)
}

export default Footer
