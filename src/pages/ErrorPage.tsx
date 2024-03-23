import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
	<div style={{
		color: 'red',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		flexDirection: 'column',
		gap: 10
	}}>
		<h1>
		Error 404. This page doesn't exist!
		</h1>
		<Link to='/'>Visit our Home Page</Link>
	</div>
  )
}

export default ErrorPage
