import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeByIngredient } from '../../models/recipe';
import { fetchIngredient } from '../../utils/fetchIngredient';

export interface InitialState {
  getRecipeByIngredient: RecipeByIngredient[];
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

export const fetchRecipeByIngredient: AsyncThunk<any, string, {}> = createAsyncThunk(
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
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeByIngredient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchRecipeByIngredient.fulfilled,
        (state, action: PayloadAction<RecipeByIngredient[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.getRecipeByIngredient = action.payload;
        }
      )
      .addCase(fetchRecipeByIngredient.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.getRecipeByIngredient = [];
      });
  },
});

export default fetchRecipeByIngredientSlice.reducer;
