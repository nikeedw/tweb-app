import { Button, Input } from "antd";
import { FC } from "react"
import useAuth from "../store/useAuth";

interface Props {
	username: string;
	setUsername: (value: string) => void;
	email: string;
	setEmail: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
}

const Register: FC<Props> = ({
	username,
	setUsername,
	email, 
	setEmail, 
	password, 
	setPassword,
}) => {
	const { setIsRegistering, registerUser } = useAuth();

	const register = () => {
		registerUser({ username, email, password });
		setEmail('');
		setUsername('');
		setPassword('');
	}

	return (
		<>
			<h1>Register</h1>
			<Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
			<Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<Button onClick={register}>Register</Button>
			<h5>Уже есть аккаунт?</h5>
			<span style={{ color: 'cornflowerblue', cursor: 'pointer' }} onClick={() => setIsRegistering(false)}>Войти</span>
		</>
	)
}

export default Register
