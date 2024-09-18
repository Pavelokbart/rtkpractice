import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favorites/favorites.slice";

import { reducer as favoritesReducer } from "./favorites/favorites.slice";


const reducers = combineReducers({
    favorites: favoritesReducer,

})

export const store = configureStore(
    {
        reducer: reducers,

    }
)