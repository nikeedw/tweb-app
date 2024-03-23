import { Layout as AntdLayout, Menu, MenuProps } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "../routes/RoutesEnum";

const { Header } = AntdLayout;

const items = NavRoutes.map(route => {
	return {
        key: route.id,
        icon: route.icon,
        title: route.title,
        label: route.title,
        route: route.path,
        disabled: route.hideLink
    }
})

const Navbar: FC = () => {
	
	const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        const path = items.find((item) => item.key === e.key)?.route;
        if (path) {
            navigate(path);
        }
    };

	return (
		<AntdLayout>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					items={items}
					onClick={onClick}
				/>
			</Header>
		</AntdLayout>
	)
}

export default Navbar;
