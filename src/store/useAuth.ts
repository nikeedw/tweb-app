import { create } from "zustand";

interface User {
	username: string;
	email: string;
	password: string;
}

interface AuthState {
	isLoggedIn: boolean;
	isRegistering: boolean;
	error: string;
	loginUser: (email: string, password: string) => void;
	registerUser: (user: User) => void;
	logoutUser: () => void;
	setIsRegistering: (value: boolean) => void;
	checkAuthStatus: () => void; 
}

const useAuth = create<AuthState>((set) => ({
	isLoggedIn: false,
	isRegistering: false,
	error: "",

	loginUser: (email, password) => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			const parsedUser = JSON.parse(storedUser) as User;
			if (parsedUser.email === email && parsedUser.password === password) {
				set({ isLoggedIn: true, error: "", isRegistering: false });
				localStorage.setItem("isAuth", "true");
			} else {
				set({ error: "Неверное имя пользователя или пароль" });
			}
		} else {
			set({ error: "Пользователь не найден" });
		}
	},

	registerUser: (user) => {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("isAuth", "true");
		set({ isLoggedIn: true, isRegistering: false });
	},

	logoutUser: () => {
		localStorage.setItem("isAuth", "false");
		set({ isLoggedIn: false });
	},

	setIsRegistering: (value) => set({ isRegistering: value }),

	checkAuthStatus: () => {
		const storedAuth = localStorage.getItem('isAuth');
		if (storedAuth && storedAuth === 'true') {
			set({ isLoggedIn: true });
		}
	},
}));

export default useAuth;
