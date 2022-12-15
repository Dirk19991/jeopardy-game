import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setQuestion } from '../../Question/questionSlice';
import { setPlayed } from '../categorySlice';
import GridCategory from '../gridCategory/GridCategory';
import GridCell from '../gridCell/GridCell';
import useMediaQuery from '../../../hooks/useMediaQuery';

function FullGrid() {
  const matches = useMediaQuery('(max-width: 1080px)');

  // Если экран маленький, грузим только три темы, а не шесть
  let categories = matches
    ? useAppSelector((state) => state.category.data).slice(0, 3)
    : useAppSelector((state) => state.category.data);
  const dispatch = useAppDispatch();

  return (
    <>
      {categories.map((elem, index) => {
        return (
          <Fragment key={elem.title}>
            <GridCategory title={elem.title}></GridCategory>
            <GridCell
              index={index}
              price={'hundred'}
              onClick={() => {
                dispatch(
                  setQuestion({
                    status: 'question',
                    question: elem.hundred.info.question,
                    answer: elem.hundred.info.answer,
                  })
                );
                dispatch(setPlayed({ price: 'hundred', index: index }));
              }}
              value={100}
            />
            <GridCell
              index={index}
              price={'twoHundred'}
              onClick={() => {
                dispatch(
                  setQuestion({
                    status: 'question',
                    question: elem.twoHundred.info.question,
                    answer: elem.twoHundred.info.answer,
                  })
                );
                dispatch(setPlayed({ price: 'twoHundred', index: index }));
              }}
              value={200}
            />
            <GridCell
              index={index}
              price={'threeHundred'}
              onClick={() => {
                dispatch(
                  setQuestion({
                    status: 'question',
                    question: elem.threeHundred.info.question,
                    answer: elem.threeHundred.info.answer,
                  })
                );
                dispatch(setPlayed({ price: 'threeHundred', index: index }));
              }}
              value={300}
            />
            <GridCell
              index={index}
              price={'fourHundred'}
              onClick={() => {
                dispatch(
                  setQuestion({
                    status: 'question',
                    question: elem.fourHundred.info.question,
                    answer: elem.fourHundred.info.answer,
                  })
                );
                dispatch(setPlayed({ price: 'fourHundred', index: index }));
              }}
              value={400}
            />
            <GridCell
              index={index}
              price={'fiveHundred'}
              onClick={() => {
                dispatch(
                  setQuestion({
                    status: 'question',
                    question: elem.fiveHundred.info.question,
                    answer: elem.fiveHundred.info.answer,
                  })
                );
                dispatch(setPlayed({ price: 'fiveHundred', index: index }));
              }}
              value={500}
            />
          </Fragment>
        );
      })}
    </>
  );
}

export default FullGrid;
