import React from "react"
import { Routes, Route } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PublicRoutes from "./components/PublicRoutes"
import InnerContent from "./InnerContent"
// TODO: implement Lazy Loading here:
import Home from "./components/Home/Home"
import MainSignIn from "./components/SignIn/MainSignIn"
import Register from "./components/Register/Register"
import Daily from "./components/Daily/Daily"
import Success from "./components/Success/Success"
import Weekly from "./components/Weekly/Weekly"

// the main routing component
// routes are seperated between public and protected depending on if signedIn
const MainRoutes = () => {
	return (
		<Routes>
			{/* Protected Routes */}
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/" element={<InnerContent />}>
					<Route index element={<Home />} />
					<Route path="daily" element={<Daily />} />
					<Route path="weekly" element={<Weekly />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "2vh" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
					{/* TODO: Info/FAQs */}
				</Route>
			</Route>

			{/* Public Routes */}
			<Route path="pub" element={<PublicRoutes />}>
				<Route path="signin" element={<MainSignIn />} />
				<Route path="register" element={<Register />} />
				{/* TODO: About */}
				{/* TODO: Make Success Page */}
				<Route path="success" element={<Success />} />
			</Route>
		</Routes>
	)
}

export default MainRoutes
