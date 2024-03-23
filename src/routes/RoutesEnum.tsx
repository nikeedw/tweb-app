import MainPage from "../pages/MainPage";
import { HomeOutlined, ProductOutlined } from "@ant-design/icons"
import ProductsPage from "../pages/ProductsPage";
import ProductItemPage from "../pages/ProductItemPage";

export enum RoutesEnum {
	Main = '/',
	Products = '/products',
	Product = '/products/:id'
}

export const NavRoutes = [
	{
		id: '1',
		path: RoutesEnum.Main,
		title: 'Main',
		element: <MainPage />,
		icon: <HomeOutlined />,
		exact: true,
		hideLink: false
	}, {
		id: '2',
		path: RoutesEnum.Products,
		element:  <ProductsPage />,
		title: 'Products',
		icon: <ProductOutlined />,
		exact: true,
		hideLink: false
	}
]

const RoutesExact = [
	{
		path: RoutesEnum.Main,
		element: <MainPage />,
		exact: true,
	}, {
		path: RoutesEnum.Products,
		element:  <ProductsPage />,
		exact: true,
	}, {
		path: RoutesEnum.Product,
		element:  <ProductItemPage />,
		exact: true,
	}
]


export default RoutesExact;