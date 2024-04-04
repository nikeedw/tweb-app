import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'antd';
import { TProduct } from '../models/types';

const { Meta } = Card;

const ProductItemPage: FC = () => {
	const [product, setProduct] = useState<TProduct | null>(null);
	const navigate = useNavigate();

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
		<>
			<button onClick={() => navigate(-1)} style={{
				padding: '5px 15px',
				cursor: 'pointer',
				position: 'absolute',
				top: 80,
				left: 20
			}}>Back</button>
			<div className='Card'>
				<Card
					style={{display: 'flex', flexDirection: 'row'}}
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
