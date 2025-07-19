import ProductDetails from '@/components/products-detail/ProductDetails';
import React from 'react';

const ProductDetail = async ({ params }: { params: { id: string } }) => {

  const data = await fetch(`https://dummyjson.com/products/${params.id}`, { cache: "force-cache" });
  const product = await data.json();

  return (
    <div>
      <ProductDetails data={product} />
    </div>
  );
};

export default ProductDetail;
