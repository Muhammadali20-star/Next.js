import Recipes from "@/components/recipe/Recipes";
import React from "react";

const RecipePage = async () => {
  const data = await fetch("https://dummyjson.com/recipes?limit=12", {cache: "force-cache"});
  const recipes = await data.json();

  return <div>
      <h2 className="text-2xl text-center mt-4">Recipe</h2>
      <Recipes data={recipes}/>
      </div>;
};

export default RecipePage;
