import { createSlice } from '@reduxjs/toolkit';

export type QuestionStatus = 'board' | 'question';

interface QuestionSliceState {
  status: QuestionStatus;
  currentQuestion: string;
}

const initialState: QuestionSliceState = {
  status: 'board',
  currentQuestion: '',
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion(state, action) {
      state.status = action.payload.status;
      state.currentQuestion = action.payload.question;
    },
    setBoard(state, action) {
      state.status = action.payload.status;
      state.currentQuestion = '';
    },
  },
});

export default questionSlice.reducer;

export const { setQuestion, setBoard } = questionSlice.actions;
