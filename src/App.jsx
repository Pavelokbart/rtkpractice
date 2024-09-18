import React from "react";
import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div>
      <RecipeItem
        recipe={{
          id: 1,
          name: "Лазанья",
        }}
      ></RecipeItem>
      <RecipeItem
        recipe={{
          id: 2,
          name: "Каша",
        }}
      ></RecipeItem>
      <RecipeItem
        recipe={{
          id: 3,
          name: "Паста",
        }}
      ></RecipeItem>
    </div>
  );
}

export default App;
