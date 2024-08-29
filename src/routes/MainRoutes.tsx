import React, { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import MainSignIn from "../pages/SignIn/MainSignIn"
import Register from "../pages/Register/Register"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"

// Lazy load the components
const ProtectedRoutes = lazy(() => import("./ProtectedRoutes"))
const InnerContent = lazy(() => import("./InnerContent"))
const Home = lazy(() => import("../pages/Home/Home"))
const Daily = lazy(() => import("../pages/Daily/Daily"))
const Success = lazy(() => import("../pages/Success/Success"))
const Weekly = lazy(() => import("../pages/Weekly/Weekly"))

const MainRoutes: React.FC = () => {
	return (
		<Suspense fallback={<LoadingSpinner />}>
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
								<section style={{ padding: "2vh" }}>
									<p>There's nothing here!</p>
								</section>
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
					<Route path="success" element={<Success />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default MainRoutes
