import { Button, Input } from "antd"
import { FC } from "react"
import useAuth from "../store/useAuth";

interface Props {
	email: string;
	setEmail: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
}

const Login: FC<Props> = ({ 
	email, 
	setEmail, 
	password, 
	setPassword,
}) => {
	const { setIsRegistering, loginUser } = useAuth();

	const login = () => {
		loginUser(email, password);
		setEmail('');
		setPassword('');
	}

	return (
		<>
			<h1>Login</h1>
			<Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<Button onClick={login}>Login</Button>
			<h5>У вас еще нет аккаунта?</h5>
			<span style={{ color: 'cornflowerblue', cursor: 'pointer' }} onClick={() => setIsRegistering(true)}>Зарегистрироваться</span>
		</>
	)
}

export default Login
