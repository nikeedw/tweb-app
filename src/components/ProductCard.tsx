import { FC } from 'react'
import { EllipsisOutlined, DeleteFilled } from '@ant-design/icons';
import { Card } from 'antd';
import { TProduct } from '../pages/ProductsPage';

const { Meta } = Card;

type ProductActions = {
	handleDelete: (id: number) => void;
}

type ProductType = {
	product: TProduct
}

const ProductCard: FC<ProductType & ProductActions> = ( {product, handleDelete} ) => {

	return (
		<Card
			style={{width: 300, height: "auto"}}
			cover={
				<img
					alt={product.title}
					src={product.thumbnail}
					style={{height: "200px", objectFit: "cover"}}
				/>
			}
			actions={[
				<EllipsisOutlined key="ellipsis" />,
				<DeleteFilled key="delete" onClick={() => handleDelete(Number(product.id))} />
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
