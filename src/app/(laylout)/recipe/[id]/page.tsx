import RecipeDetails from '@/components/recipe-detail/RecipeDetails';
import React from 'react'

const RecipeDetail = async ({params}: {params: {id: string}}) => {

    const data = await fetch(`https://dummyjson.com/recipes/${params.id}`, { cache: "force-cache" });
    const recipe = await data.json();
  return (
    <div>
        <RecipeDetails data={recipe}/>
    </div>
  )
}

export default RecipeDetail