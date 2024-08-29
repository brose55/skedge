import { Outlet } from "react-router-dom"

// Simply the wrapper for our protected routes so they can be seen as one component
const InnerContent = () => {
	return (
		<div className="inner-content">
			<Outlet />
		</div>
	)
}

export default InnerContent
