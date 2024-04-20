import { FC, useEffect } from "react"
import useProducts from "../store/useProducts";
import ProductCard from "../components/ProductCard";

const ProductsPage: FC = () => {
	const productStore = useProducts();

	useEffect(() => {
		productStore.fetchProducts();
	}, [])

	return productStore.loading ? <h2 className="Loading">Loading...</h2> : (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			gap: '1rem',
			padding: '1rem',
			margin: '1rem'
		}}>
			<div className="product_container">
				{productStore.getProducts().map((product) => {
					return (
						<ProductCard key={product.id} product={product} />
					)
				}
				)}
			</div>
		</div>
	)
}

export default ProductsPage
