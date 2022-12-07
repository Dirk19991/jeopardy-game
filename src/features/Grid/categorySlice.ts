import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../../types';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    console.log('mount');
    const categories: Category[] = [];

    const randomID = Math.floor(Math.random() * 1000);

    const category: Category = await axios.get(
      `https://jservice.io/api/category?id=${randomID}`
    );
    console.log(category.data.clues_count);
    if (category.data.clues_count >= 5) {
      console.log(category.data);

      categories.push({
        data: {
          id: category.data.id,
          title: category.data.title,
          clues: category.data.clues,
          clues_count: category.data.clues_count,
        },
      });
    }

    return categories;
  }
);

const initialState: Category[] = {
  // @ts-ignore
  id: 0,
  clues_count: 0,
  title: '',
  clues: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log(action.payload[0].data);
      state = action.payload[0].data;
    });
  },
});

export default categorySlice.reducer;
