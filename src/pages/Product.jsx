import React from 'react';
import ContentLayout from '../layouts/ContentLayout/ContentLayout';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../components';
import { ProductStoreProvider } from '../contexts/Product/StoreProvider';
function Product() {

	const { id, vid } = useParams();
	return (
		<ContentLayout>
			{
				<ProductStoreProvider productId={id} variantId={vid || ''}>
					<ProductDetail />
        
				</ProductStoreProvider>

			}
		</ContentLayout>
	);
}

export default Product;
