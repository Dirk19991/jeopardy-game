import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { sortValues } from '../../functions/sortValues';
import { randomQuestion } from '../../functions/randomQuestion';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const categories: Category[] = [];

    // нужны только 6 категорий, делаем 6 запросов по случайному id категории
    while (categories.length < 6) {
      const randomID = Math.floor(Math.random() * 5000);

      const response: Response = await axios.get(
        `https://jservice.io/api/category?id=${randomID}`
      );
      const category: Category = response.data;

      // отбрасываем категории, в которых недостаточно вопросов
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

      // эта функция организует данные по 6 категориям вопросов
      const values = action.payload.map((elem) => sortValues(elem));

      // эта функция выбирает только 5 вопросов из категории, т.к. многие категории
      // имеют гораздо больше вопросов
      const randomizedValues = randomQuestion(values);

      state.data = randomizedValues;
    });
  },
});

export default categorySlice.reducer;

export const { setPlayed } = categorySlice.actions;
