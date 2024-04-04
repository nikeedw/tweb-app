import { FC, MouseEvent } from 'react'
import { EllipsisOutlined, DeleteFilled } from '@ant-design/icons';
import { Card } from 'antd';
import useProducts from '../store/useProducts';
import { useNavigate } from 'react-router-dom';
import { TProduct } from '../models/types';

const { Meta } = Card;

type ProductType = {
	product: TProduct
}

const ProductCard: FC<ProductType> = ( {product} ) => {

	const productStore = useProducts();
	const navigate = useNavigate();

	const handleDelete = (e: MouseEvent) => {
		e.stopPropagation();
		productStore.deleteProductById(product.id)
	}

	return (
		<Card
			onClick={() => navigate(`/products/${product.id}`)}
			style={{width: 300, height: "auto", cursor: "pointer"}}
			cover={
				<img
					alt={product.title}
					src={product.thumbnail}
					style={{height: "200px", objectFit: "cover"}}
				/>
			}
			actions={[
				<EllipsisOutlined key="ellipsis" />,
				<DeleteFilled key="delete" onClick={handleDelete} />
			  ]}
		>
			<Meta
				title={product.brand}
				description={
					product.description.length > 40 
					? `${product.description.slice(0, 40)}...` 
					: product.description 
				}
			/>
		</Card>
	)
}

export default ProductCard
