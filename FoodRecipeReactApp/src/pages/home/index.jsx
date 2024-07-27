import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem";
function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <>
        <svg
          className="animate-spin h-10 w-10 mr-3 text-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            color="blue"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        Processing...
      </>
    );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to Show. Please Search Something !
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
