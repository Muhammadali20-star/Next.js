import RecipeDetails from '@/components/recipe-detail/RecipeDetails';
import React from 'react'

const RecipeDetail = async ({params}: {params: {id: IRecipe}}) => {
    const id = params.id 

    const data = await fetch(`https://dummyjson.com/recipes/${id}`, { cache: "force-cache" });
    const recipe = await data.json();
  return (
    <div>
        <RecipeDetails data={recipe}/>
    </div>
  )
}

export default RecipeDetail