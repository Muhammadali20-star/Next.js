import React from 'react';
import ProductDetails from '@/components/products-detail/ProductDetails';

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`, { cache: "force-cache" });
  const product = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <ProductDetails data={product} />
    </div>
  );
};

export default ProductDetail;
