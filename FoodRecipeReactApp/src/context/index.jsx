import { createContext } from "react";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
        setLoading(true)
      e.preventDefault();
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) setRecipeList(data?.data?.recipes);
      setLoading(false);
      setSearchParam("");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function AddToFavorites(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favorites];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavorites(cpyFavoritesList);
  }

  console.log(loading, recipeList);
  console.log(favorites, "favorites");

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        setLoading,
        setRecipeList,
        recipeDetails,
        setRecipeDetails,
        AddToFavorites,
        favorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
