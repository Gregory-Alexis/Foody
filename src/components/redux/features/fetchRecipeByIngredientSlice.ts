import { AsyncThunk, AsyncThunkAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../../models/recipe';
import { fetchIngredient } from '../../../utils/fetchIngredient';

export interface InitialState {
  getRecipeByIngredient: Recipe[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: any;
}

const initialState: InitialState = {
  getRecipeByIngredient: [],
  isLoading: false,
  isSuccess: false,
  isError: '',
};

export const fetchRecipeByIngredient: any = createAsyncThunk(
  'recipe/fetchByIngredient',
  async (url: string) => {
    try {
      return await fetchIngredient(url);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const fetchRecipeByIngredientSlice = createSlice({
  name: 'fetchRecipeByIngredient',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeByIngredient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecipeByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.getRecipeByIngredient = action.payload;
      })
      .addCase(fetchRecipeByIngredient.rejected, (state) => {
        state.isSuccess = false;
        state.isError = true;
        state.getRecipeByIngredient = [];
      });
  },
});

export const { reset } = fetchRecipeByIngredientSlice.actions;
export default fetchRecipeByIngredientSlice.reducer;
