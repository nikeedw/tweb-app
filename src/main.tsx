import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/root.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import { PrivateRoutes, PublicRoutes } from './routes/RoutesEnum'

const isAuth = localStorage.getItem('isAuth');

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: isAuth === 'false' ? 
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


ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
