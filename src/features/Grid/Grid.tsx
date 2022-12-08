import styled from 'styled-components';
import { StyledGrid } from './GridStyles';
import GridCell from './GridCell';
import GridCategory from './GridCategory';
import StartButton from './StartButton';
import { Fragment, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { useAppSelector } from '../../store';
import { fetchCategories } from './categorySlice';
import { setQuestion } from './Question/questionSlice';
import { QuestionStatus } from './Question/questionSlice';
import { setBoard } from './Question/questionSlice';
import Question from './Question/Question';

function Grid() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.data);
  const loadStatus = useAppSelector((state) => state.category.status);
  const questionStatus = useAppSelector((state) => state.question.status);
  const currentQuestion = useAppSelector(
    (state) => state.question.currentQuestion
  );
  let emptyGridCells = Array(6).fill(0);

  return (
    <>
      <StartButton
        content={'revert'}
        onClick={() =>
          dispatch(
            setBoard({
              status: 'board',
            })
          )
        }
      />

      {loadStatus === 'idle' && (
        <StartButton
          content={'Click to load categories'}
          onClick={() => dispatch(fetchCategories())}
        />
      )}
      {loadStatus === 'fulfilled' && (
        <StartButton
          content={'Click to change categories'}
          onClick={() => dispatch(fetchCategories())}
        />
      )}
      {loadStatus === 'loading' && (
        <StartButton
          content={'Loading...'}
          onClick={() => dispatch(fetchCategories())}
        />
      )}

      {(loadStatus === 'loading' || loadStatus === 'idle') && (
        <>
          <StyledGrid>
            {emptyGridCells.map((elem, index) => (
              <Fragment key={index}>
                <GridCategory></GridCategory>
                <GridCell value={100} />
                <GridCell value={200} />
                <GridCell value={300} />
                <GridCell value={400} />
                <GridCell value={500} />
              </Fragment>
            ))}
          </StyledGrid>
        </>
      )}
      {loadStatus === 'fulfilled' && questionStatus === 'board' && (
        <StyledGrid>
          {categories.map((elem) => (
            <Fragment key={elem.title}>
              <GridCategory title={elem.title}></GridCategory>
              <GridCell
                onClick={() =>
                  dispatch(
                    setQuestion({
                      status: 'question',
                      question: elem.hundred.question,
                    })
                  )
                }
                question={elem.hundred.question}
                value={100}
              />
              <GridCell
                onClick={() => console.log(elem.twoHundred.question)}
                question={elem.twoHundred.question}
                value={200}
              />
              <GridCell
                onClick={() => console.log(elem.threeHundred.question)}
                question={elem.threeHundred.question}
                value={300}
              />
              <GridCell
                onClick={() => console.log(elem.fourHundred.question)}
                question={elem.fourHundred.question}
                value={400}
              />
              <GridCell
                onClick={() => console.log(elem.fiveHundred.question)}
                question={elem.fiveHundred.question}
                value={500}
              />
            </Fragment>
          ))}
        </StyledGrid>
      )}
      {loadStatus === 'fulfilled' && questionStatus === 'question' && (
        <Question question={currentQuestion} />
      )}
    </>
  );
}

export default Grid;
