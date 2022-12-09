import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setQuestion } from '../../Question/questionSlice';
import { setPlayed } from '../categorySlice';
import GridCategory from '../gridCategory/GridCategory';
import GridCell from '../gridCell/GridCell';

function MobileGrid() {
  const categories = useAppSelector((state) => state.category.data).slice(0, 3);
  const dispatch = useAppDispatch();
  console.log(categories);
  return (
    <>
      {categories.map((elem, index) => {
        return (
          <Fragment key={elem.title}>
            <GridCategory title={elem.title}></GridCategory>
            <GridCell
              played={useAppSelector(
                (state) => state.category.data[index].hundred.played
              )}
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
              question={elem.hundred.info.question}
              value={100}
            />
            <GridCell
              played={useAppSelector(
                (state) => state.category.data[index].twoHundred.played
              )}
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
              question={elem.twoHundred.info.question}
              value={200}
            />
            <GridCell
              played={useAppSelector(
                (state) => state.category.data[index].threeHundred.played
              )}
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
              question={elem.threeHundred.info.question}
              value={300}
            />
            <GridCell
              played={useAppSelector(
                (state) => state.category.data[index].fourHundred.played
              )}
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
              question={elem.fourHundred.info.question}
              value={400}
            />
            <GridCell
              played={useAppSelector(
                (state) => state.category.data[index].fiveHundred.played
              )}
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
              question={elem.fiveHundred.info.question}
              value={500}
            />
          </Fragment>
        );
      })}
    </>
  );
}

export default MobileGrid;
