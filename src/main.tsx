import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/root.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import RoutesExact from './routes/RoutesEnum'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: RoutesExact.map(route => {
				return {
					path: route.path,
					element: route.element,
					exact: route.exact
				}
			}),
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
