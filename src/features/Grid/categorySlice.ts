import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category, Clue } from '../../types';
import { Response } from '../../types';
import { Values } from '../../functions/sortValues';
import { sortValues } from '../../functions/sortValues';
import { randomQuestion } from '../../functions/randomQuestion';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const categories: Category[] = [];

    while (categories.length < 6) {
      const randomID = Math.floor(Math.random() * 1000);

      const response: Response = await axios.get(
        `https://jservice.io/api/category?id=${randomID}`
      );
      const category: Category = response.data;

      if (category.clues_count >= 5) {
        categories.push({
          id: category.id,
          title: category.title,
          clues: category.clues,
          clues_count: category.clues_count,
        });
      }
    }

    return categories;
  }
);

interface Data {
  title: string;
  hundred: Clue;
  twoHundred: Clue;
  threeHundred: Clue;
  fourHundred: Clue;
  fiveHundred: Clue;
}

interface CategoryState {
  status: 'idle' | 'loading' | 'fulfilled';
  data: Data[];
}

const initialState: CategoryState = {
  status: 'idle',
  data: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'fulfilled';

      const values = action.payload.map((elem) => sortValues(elem));
      const randomizedValues = randomQuestion(values);

      state.data = randomizedValues;
    });
  },
});

export default categorySlice.reducer;
