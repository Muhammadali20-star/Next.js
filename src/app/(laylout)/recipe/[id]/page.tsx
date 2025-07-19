import RecipeDetails from '@/components/recipe-detail/RecipeDetails';
import React from 'react';

const RecipeDetail = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`, { cache: "force-cache" });
  const recipe = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <RecipeDetails data={recipe} />
    </div>
  );
};

export default RecipeDetail;
