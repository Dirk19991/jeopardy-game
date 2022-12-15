import { StyledGrid } from './GridStyles';
import StartButton from './startButton/StartButton';
import { useAppDispatch } from '../../store';
import { useAppSelector } from '../../store';
import { fetchCategories } from './categorySlice';
import EmptyGrid from './gridVariations/EmptyGrid';
import Question from '../Question/Question';
import FullGrid from './gridVariations/FullGrid';

function Grid() {
  const dispatch = useAppDispatch();
  const loadStatus = useAppSelector((state) => state.category.status);
  const questionStatus = useAppSelector((state) => state.question.status);
  const currentQuestion = useAppSelector(
    (state) => state.question.currentQuestion
  );

  // во многих вопросах ответ написан курсивом, убираем соответствующие символы
  const currentAnswer = useAppSelector((state) => state.question.currentAnswer)
    .replaceAll('<i>', '')
    .replaceAll('</i>', '');

  return (
    <>
      <StartButton
        loadStatus={loadStatus}
        onClick={() => dispatch(fetchCategories())}
      />
      {(loadStatus === 'loading' ||
        loadStatus === 'idle' ||
        loadStatus === 'rejected') && (
        <>
          <StyledGrid>
            <EmptyGrid />
          </StyledGrid>
        </>
      )}
      {loadStatus === 'fulfilled' && questionStatus === 'board' && (
        <StyledGrid>
          <FullGrid />
        </StyledGrid>
      )}
      {loadStatus === 'fulfilled' &&
        (questionStatus === 'question' || questionStatus === 'answer') && (
          <Question answer={currentAnswer} question={currentQuestion} />
        )}
    </>
  );
}

export default Grid;
