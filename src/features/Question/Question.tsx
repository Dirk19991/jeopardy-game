import { StyledQuestion } from './QuestionStyles';
import ReturnButton from './returnButton/ReturnButton';
import { useAppDispatch, useAppSelector } from '../../store/index';
import { setBoard, showQuestion } from './questionSlice';
import { showAnswer } from './questionSlice';
import AnswerButton from './answerButton/AnswerButton';

interface QuestionProps {
  question: string;
  answer: string;
}

function Question({ question, answer }: QuestionProps) {
  const dispatch = useAppDispatch();
  const questionStatus = useAppSelector((state) => state.question.status);
  const length = question.length;

  return (
    <StyledQuestion length={length}>
      {questionStatus === 'question' && question}
      {questionStatus === 'answer' && answer}
      {questionStatus === 'question' && (
        <AnswerButton
          content={'Show answer'}
          onClick={() => {
            dispatch(showAnswer());
          }}
        />
      )}
      {questionStatus === 'answer' && (
        <AnswerButton
          content={'Show question'}
          onClick={() => {
            dispatch(showQuestion());
          }}
        />
      )}
      <ReturnButton
        onClick={() => {
          dispatch(
            setBoard({
              status: 'board',
            })
          );
        }}
      />
    </StyledQuestion>
  );
}

export default Question;
