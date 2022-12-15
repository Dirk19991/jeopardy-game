import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { sortValues } from '../../functions/sortValues';
import { randomQuestion } from '../../functions/randomQuestion';
import { generateRandomIDs } from '../../functions/generateRandomIds';

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

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const categories: Category[] = [];

    // нужны только 6 категорий, стараемся получить их в одном запросе,
    // но если одна из категорий будет "битая", делаем еще один запрос
    while (categories.length < 6) {
      const randomIDs = generateRandomIDs(6);

      let promises: Promise<AxiosResponse<Category>>[] = [];
      randomIDs.forEach((id) => {
        const promise: Promise<AxiosResponse<Category>> = axios.get<Category>(
          `https://jservice.io/api/category?id=${id}`
        );

        promises.push(promise);
      });

      const data2 = Promise.all([...promises]);
      (await data2).forEach((category) => {
        // ранний return если уже набрали 6 категорий

        if (categories.length === 6) return;
        if (category.data.clues_count >= 5) {
          categories.push({
            id: category.data.id,
            title: category.data.title,
            clues: category.data.clues,
            clues_count: category.data.clues_count,
          });
        }
      });
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
