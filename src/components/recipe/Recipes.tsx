"use client"
import Image from 'next/image'
import React, { FC } from 'react'

type RecipeProps = {
  data: { recipes: IRecipe[];}
}

const Recipes: FC<RecipeProps> = ({ data }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
      {data?.recipes?.map((item: IRecipe) => (
        <div key={item.id}  className="bg-white border border-gray-200 rounded-xl shadow flex flex-col items-center gap-2 ">
          <div className="relative w-full pb-[100%] bg-gray-50">
            <Image src={item.image} alt={item.name} fill className="w-full object-contain" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">{item.name}</h2>
          <p className="text-sm text-gray-500">Cuisine: {item.cuisine}</p>
          <p className="text-sm text-gray-500 mb-2">Rating: {item.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default Recipes
