import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'antd';
import { TProduct } from '../models/types';
import Button from '../components/UI/button/Button';
import useProducts from '../store/useProducts';

const { Meta } = Card;

const ProductItemPage: FC = () => {
	const [product, setProduct] = useState<TProduct | null>(null);
	const navigate = useNavigate();
	const productStore = useProducts()

	const { id } = useParams<{ id: string }>();

	const fetchData = async () => {
		await productStore.fetchProducts();
		if (id) {
			const prod = productStore.getProductById(Number(id))
			setProduct(prod)
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return productStore.loading ? <h2 className="Loading">Loading...</h2> : (
		<>
			<Button onClick={() => navigate(-1)} style={{
				position: 'absolute',
				width: 40,
				top: 70,
				left: 6,
			}}> &lt; </Button>
			<div className='card-container'>
				<Card
					className='card'
					cover={<img alt={product?.title} src={product?.thumbnail} />}
				>
					<Meta title={product?.brand} description={product?.description} />
					<hr style={{ marginBlock: 10 }} />
					<Meta description={product?.category} title={product?.price + '$'} />
				</Card>
			</div>
		</>
	)
}

export default ProductItemPage
