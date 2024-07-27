import React from "react";
import RecipeItem from "../../components/recipeItem/index.jsx"
import { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx"
function Favorites() {
  const { favorites } = useContext(GlobalContext);

  

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => <RecipeItem item={item} />)
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

export default Favorites;
