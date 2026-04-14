import NavLinks from "./NavLinks"

// add new public pages here
const publicLinks = [
	{ to: "/pub/signin", label: "sign in" },
	{ to: "/pub/register", label: "register" },
	// { to: "/pub/about", label: "about" },
]

const PublicLinks = () => <NavLinks links={publicLinks} />

export default PublicLinks
