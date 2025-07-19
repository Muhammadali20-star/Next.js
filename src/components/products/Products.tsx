"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type ProductsProps = {
    data: { products: IProducts[];}
}
const Products: FC<ProductsProps> = ({data}) => {
    const router = useRouter()
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product: IProducts) => (
          <div key={product.id}  className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center">
            <Image onClick={()=> router.push(`/product/${product.id}`)} src={product.thumbnail} alt={product.title} width={300} height={200} className="rounded-lg object-cover mb-4"/>
            <h3 className="text-lg font-medium mb-1">{product.title}</h3>
            <span className="text-blue-500 font-semibold">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
