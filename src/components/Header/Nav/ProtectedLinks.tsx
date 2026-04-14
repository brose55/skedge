import NavLinks from "./NavLinks"

// add new protected pages here
const protectedLinks = [
	{ to: "/", label: "home" },
	{ to: "/daily", label: "daily" },
	{ to: "/weekly", label: "weekly" },
]

const ProtectedLinks = () => <NavLinks links={protectedLinks} />

export default ProtectedLinks
