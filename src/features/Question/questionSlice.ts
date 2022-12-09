import { createSlice } from '@reduxjs/toolkit';

export type QuestionStatus = 'board' | 'question' | 'answer';

interface QuestionSliceState {
  status: QuestionStatus;
  currentQuestion: string;
  currentAnswer: string;
}

const initialState: QuestionSliceState = {
  status: 'board',
  currentQuestion: '',
  currentAnswer: '',
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion(state, action) {
      state.status = action.payload.status;
      state.currentQuestion = action.payload.question;
      state.currentAnswer = action.payload.answer;
    },
    setBoard(state, action) {
      state.status = action.payload.status;
      state.currentQuestion = '';
    },
    showAnswer(state) {
      state.status = 'answer';
    },
    showQuestion(state) {
      state.status = 'question';
    },
  },
});

export default questionSlice.reducer;

export const { setQuestion, setBoard, showAnswer, showQuestion } =
  questionSlice.actions;
