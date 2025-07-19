"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type RecipeProps = {
  data: IRecipe
}

const RecipeDetails: FC<RecipeProps> = ({ data }) => {
  const router = useRouter()
  return (
    <div className="max-w-xl mx-auto mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-gray-800 p-4">
        <Image src={data?.image} alt={data?.name} width={350}  height={350} className="object-contain rounded-xl shadow-inner" />
      </div>
      <div className="flex-1 p-6 sm:p-8 space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold">{data?.name}</h1>
        <div className="flex gap-3 text-gray-300 text-sm sm:text-base">
          <span className="font-semibold text-gray-400">Cuisine:</span> {data?.cuisine}
        </div>
        <div className="flex gap-3 text-gray-300 text-sm sm:text-base">
          <span className="font-semibold text-gray-400">Rating:</span>
          <span className="text-yellow-400">{data?.rating}</span>
        </div>
        <button onClick={()=> router.push("/recipe")} className="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-semibold shadow hover:shadow-lg transform hover:scale-105 transition duration-300">Back to recipes</button>
      </div>
    </div>
  )
}

export default RecipeDetails
