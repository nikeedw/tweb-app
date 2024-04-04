import { Button as AntButton, Input } from 'antd';
import { useEffect, useState } from 'react';
import Button from '../components/UI/button/Button';
import useAuth from '../store/useAuth';

const MainPage = () => {
	const { isLoggedIn, isRegistering, error, loginUser, registerUser, logoutUser, setIsRegistering, checkAuthStatus } = useAuth();
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
					<Button style={{
						position: 'absolute',
						top: 12,
						right: 15
					}} onClick={logoutUser}>
						Logout
					</Button>
					<h1>Welcome to Main Page</h1>
				</>
			) : (
				<div className='Auth'>
					{!isRegistering && (
						<>
							<h1>Login</h1>
							<Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
							<Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							<AntButton onClick={() => loginUser(email, password)}>Login</AntButton>
							<h5>У вас еще нет аккаунта?</h5>
							<span style={{ color: 'cornflowerblue', cursor: 'pointer' }} onClick={() => setIsRegistering(true)}>Зарегистрироваться</span>
						</>
					)}
					{isRegistering && (
						<>
							<h1>Register</h1>
							<Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
							<Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
							<Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							<AntButton onClick={() => registerUser({ username, email, password })}>Register</AntButton>
							<h5>Уже есть аккаунт?</h5>
							<span style={{ color: 'cornflowerblue', cursor: 'pointer' }} onClick={() => setIsRegistering(false)}>Войти</span>
						</>
					)}
					{error && <p>{error}</p>}
				</div>
			)}
		</div>
	);
};

export default MainPage;
