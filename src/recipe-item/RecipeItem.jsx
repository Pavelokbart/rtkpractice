import React from "react";
import styles from "./RecipeItem.module.css";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import { useActions } from "../hooks/useActions";

const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);

  const { toggleToFavorites } = useActions();
  console.log(favorites);

  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleToFavorites(recipe)}>
        {isExist ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default RecipeItem;
