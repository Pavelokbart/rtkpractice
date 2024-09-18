import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleToFavorites: (state, { payload: recipe }) => {
            const index = state.findIndex((r) => r.id === recipe.id);
            if (index !== -1) {
                console.log(`Удаляем рецепт: ${recipe.name}`);
                state.splice(index, 1);
            } else {
                console.log(`Добавляем рецепт: ${recipe.name}`);
                state.push(recipe);
            }
            console.log("Текущее состояние избранного:", state);
        },
    },
});

export const { actions, reducer } = favoriteSlice;
