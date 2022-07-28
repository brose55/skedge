import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes'
import InnerContent from './InnerContent';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Daily from './components/Daily/Daily';
import Success from './components/Success/Success';

const MainRoutes = () => {
  return (
		<Routes>
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/" element={<InnerContent />}>
					<Route
						index
						element={
							<Home />
						}
					/>
					<Route path="daily" element={<Daily />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Route>
      
      <Route path='pub' element={<PublicRoutes />}>
        <Route
          path="signin"
          element={
						<SignIn />
          }
        />
        <Route
          path="register"
          element={
						<Register
            />
          }
        />
				<Route path="success" element={<Success />} />
      </Route>
		</Routes>
	);
}
 
export default MainRoutes;
 