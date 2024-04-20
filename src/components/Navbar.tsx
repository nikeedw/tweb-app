import { Layout as AntdLayout, Menu, MenuProps } from "antd";
import { FC, useEffect, useState } from "react"; // Added useState import
import { useNavigate, useLocation } from "react-router-dom";
import NavRoutes from "../routes/RoutesEnum";
import Button from "./UI/button/Button";
import useAuth from "../store/useAuth";
import { IUser } from "../models/types";

const { Header } = AntdLayout;

const Navbar: FC = () => {
	const items = NavRoutes.map(route => {
		return {
			key: route.id,
			icon: route.icon,
			title: route.title,
			label: route.title,
			route: route.path,
			disabled: route.hideLink
		}
	});

	const navigate = useNavigate();
	const location = useLocation();
	const { logoutUser, getUser, isLoggedIn } = useAuth();

	if(isLoggedIn === false) {
		items[1].disabled = true;
	}

	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		if (isLoggedIn) {
			const fetchedUser = getUser();
			setUser(fetchedUser);
		}
	}, [getUser, isLoggedIn]);
	

	const defaultSelectedKeys = location.pathname === ('/products' || '/products/:id') ? ['2'] : ['1'];

	const onClick: MenuProps['onClick'] = (e) => {
		const path = items.find((item) => item.key === e.key)?.route;
		if (path) {
			navigate(path);
		}
	};

	const handleLogout = () => {
		logoutUser();
		navigate('/');
	}

	return (
		<AntdLayout>
			<Header>
				<Menu
					defaultSelectedKeys={defaultSelectedKeys} 
					theme="dark"
					mode="horizontal"
					items={items}
					onClick={onClick}
				/>
			</Header>
			{isLoggedIn && user && <h2 style={{
				position: 'absolute',
				top: 16,
				right: 130,
				color: 'white',
				userSelect: 'none'
			}}>{user.username}</h2>} 
			{isLoggedIn &&
				<Button style={{
					position: 'absolute',
					top: 12,
					right: 15
				}} onClick={handleLogout}>
					Logout
				</Button>
			}
		</AntdLayout>
	);
};

export default Navbar;
