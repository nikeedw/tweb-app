import { useEffect, useState } from 'react';
import useAuth from '../store/useAuth';
import Login from '../components/Login';
import Register from '../components/Register';

const MainPage = () => {
	const { isLoggedIn, isRegistering, error, checkAuthStatus } = useAuth();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		checkAuthStatus();
	}, []);

	return (
		<div className="Main">
			{isLoggedIn ? (
				<>
					<h1>Welcome to Main Page</h1>
				</>
			) : (
				<div className='Auth'>
					{!isRegistering && (
						<Login 
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
						/>
					)}
					{isRegistering && (
						<Register 
							username={username}
							setUsername={setUsername}
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
						/>
					)}
					{error && <p>{error}</p>}
				</div>
			)}
		</div>
	);
};

export default MainPage;
