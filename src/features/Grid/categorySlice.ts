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
  hundred: {
    info: Clue;
    played: boolean;
  };
  twoHundred: {
    info: Clue;
    played: boolean;
  };
  threeHundred: {
    info: Clue;
    played: boolean;
  };
  fourHundred: {
    info: Clue;
    played: boolean;
  };
  fiveHundred: {
    info: Clue;
    played: boolean;
  };
}

interface CategoryState {
  status: 'idle' | 'loading' | 'fulfilled';
  data: Data[];
}

interface SetPlayed {
  payload: {
    index: number;
    price:
      | 'hundred'
      | 'twoHundred'
      | 'threeHundred'
      | 'fourHundred'
      | 'fiveHundred';
  };
}

const initialState: CategoryState = {
  status: 'idle',
  data: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setPlayed(state, action: SetPlayed) {
      const index = action.payload.index;
      const price = action.payload.price;
      state.data[index][price].played = true;
    },
  },
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

export const { setPlayed } = categorySlice.actions;
