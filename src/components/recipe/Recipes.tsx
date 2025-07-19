"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type RecipeProps = {
  data: { recipes: IRecipe[];}
}

const Recipes: FC<RecipeProps> = ({ data }) => {
  const router = useRouter()
  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-3xl font-semibold mb-8 text-center">Recipes</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
      {data?.recipes?.map((item: IRecipe) => (
        <div key={item.id}  className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border border-gray-200 rounded-xl shadow flex flex-col items-center gap-2 ">
          <div className="relative w-full pb-[100%] bg-gray-50">
            <Image onClick={()=> router.push(`/recipe/${item.id}`)} src={item.image} alt={item.name} fill className="w-full object-contain" />
          </div>
          <h2 className="text-lg font-semibold  mb-1 text-center">{item.name}</h2>
          <p className="text-sm ">Cuisine: {item.cuisine}</p>
          <p className="text-sm  mb-2">Rating: {item.rating}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Recipes
