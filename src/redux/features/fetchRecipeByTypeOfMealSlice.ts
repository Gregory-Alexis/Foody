import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MealRecipeByType } from '../../models/meal';
import { fetchTypeOfMeal } from '../../utils/fetchTypeOfMeal';

export interface InitialState {
  getTypeOfMeal: MealRecipeByType[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: any;
}

const initialState: InitialState = {
  getTypeOfMeal: [],
  isLoading: false,
  isSuccess: false,
  isError: '',
};

export const fetchRecipeByTypeOfMeal: AsyncThunk<any, string, {}> = createAsyncThunk(
  'recipe/fetchByTypeOfMeal',
  async (url: string) => {
    try {
      return await fetchTypeOfMeal(url);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const fetchRecipeByTypeOfMealSlice = createSlice({
  name: 'fetchRecipeByTypeOfMeal',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeByTypeOfMeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchRecipeByTypeOfMeal.fulfilled,
        (state, action: PayloadAction<MealRecipeByType[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.getTypeOfMeal = action.payload;
        }
      )
      .addCase(fetchRecipeByTypeOfMeal.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.getTypeOfMeal = [];
      });
  },
});

export default fetchRecipeByTypeOfMealSlice.reducer;
