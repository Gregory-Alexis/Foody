import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fetchRecipeByIngredientReducer from '../features/fetchRecipeByIngredientSlice';
import fetchRecipeByTypeOfMealReducer from '../features/fetchRecipeByTypeOfMealSlice';

export const store = configureStore({
  reducer: {
    fetchRecipeByIngredient: fetchRecipeByIngredientReducer,
    fetchRecipeByTypeOfMeal: fetchRecipeByTypeOfMealReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
