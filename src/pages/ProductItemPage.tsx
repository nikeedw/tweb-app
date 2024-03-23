import { FC, useEffect, useState } from 'react'
import { TProduct } from './ProductsPage';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const ProductItemPage: FC = () => {
	const [product, setProduct] = useState<TProduct | null>(null);

	const { id } = useParams<{ id: string }>();

	const fetchProduct = () => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then(response => response.json())
			.then(data => setProduct(data));
	};

	useEffect(() => {
		fetchProduct();
	}, []);

  return (
	<Card
		hoverable
		style={{ width: 400, height: "auto", margin: "20px auto" }}
		cover={<img alt={product?.title} src={product?.thumbnail} />}
  	>
    	<Meta title={product?.brand} description={product?.description} />
  	</Card>
  )
}

export default ProductItemPage
