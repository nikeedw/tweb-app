import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { PrivateRoutes, PublicRoutes } from '../routes/RoutesEnum';
import useAuth from '../store/useAuth';
import App from '../App';

const AppRouter = () => {
	const { isLoggedIn, checkAuthStatus } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkAuthStatus();
		setLoading(false);
	}, [checkAuthStatus]);

	if (loading) {
		return null;
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: isLoggedIn === false ?
				PublicRoutes.map(route => ({
					path: route.path,
					element: route.element,
					exact: route.exact,
				})) :
				PrivateRoutes.map(route => ({
					path: route.path,
					element: route.element,
					exact: route.exact,
				})),
		}
	]);

	return (
		<RouterProvider router={router} />
	);
}

export default AppRouter;
