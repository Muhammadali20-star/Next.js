"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type ProductsProps = {
  data: IProducts
}

const ProductDetails: FC<ProductsProps> = ({ data }) => {
    const router = useRouter()
  return (
    <div className="max-w-xs mx-auto mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="p-4 flex flex-col items-center text-center space-y-3">
        <Image src={data?.thumbnail} alt={data?.title} width={300} height={200} className="rounded-lg object-cover shadow-inner"/>
        <h3 className="text-lg font-semibold text-white">{data?.title}</h3>
        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          ${data?.price}
        </span>
        <button onClick={()=> router.push("/")} className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-medium shadow hover:shadow-md transform hover:scale-105 transition">Back to products</button>
      </div>
    </div>
  )
}

export default ProductDetails
