import { FC, useEffect, useState } from "react"
import MovieCard from "../components/ProductCard";

export type TProduct = {
    brand: string;
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}

const ProductsPage: FC = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	const fetchProducts = () => {
		fetch('https://dummyjson.com/products')
			.then(response => response.json())
			.then(data => setProducts(data.products));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleDelete = (id: number): void => {
		const newProducts = products.filter(product => product.id !== id);
		setProducts(newProducts);
	}

	return (
		<div className="movie_container">
			{products.map((product) => (
				<MovieCard key={product.id} product={product} handleDelete={handleDelete} />
			))}
		</div>
	)
}

export default ProductsPage
