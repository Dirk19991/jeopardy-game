import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setQuestion } from '../../Question/questionSlice';
import { setPlayed } from '../categorySlice';
import GridCategory from '../gridCategory/GridCategory';
import GridCell from '../gridCell/GridCell';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { ValueProps } from '../gridCell/GridCell';

type StringPrices =
  | 'hundred'
  | 'twoHundred'
  | 'threeHundred'
  | 'fourHundred'
  | 'fiveHundred';

type NumberPrices = 100 | 200 | 300 | 400 | 500;

type Prices = [StringPrices, NumberPrices][];

function FullGrid() {
  const matches = useMediaQuery('(max-width: 1080px)');
  const dispatch = useAppDispatch();

  // Если экран маленький, грузим только три темы, а не шесть
  let categories = matches
    ? useAppSelector((state) => state.category.data).slice(0, 3)
    : useAppSelector((state) => state.category.data);

  const prices: Prices = [
    ['hundred', 100],
    ['twoHundred', 200],
    ['threeHundred', 300],
    ['fourHundred', 400],
    ['fiveHundred', 500],
  ];

  // функция показывает выбранный вопрос и затеняет его в таблице
  const handleQuestion = (
    elem: Data,
    price: typeof prices[number],
    index: number
  ) => {
    dispatch(
      setQuestion({
        status: 'question',
        question: elem[price[0]].info.question,
        answer: elem[price[0]].info.answer,
      })
    );
    dispatch(setPlayed({ price: price[0], index: index }));
  };

  return (
    <>
      {categories.map((elem, index) => {
        return (
          <Fragment key={elem.title}>
            <GridCategory title={elem.title}></GridCategory>
            {prices.map((price) => (
              <GridCell
                key={elem[price[0]].info.answer}
                index={index}
                price={price[0]}
                onClick={() => handleQuestion(elem, price, index)}
                value={price[1]}
              />
            ))}
          </Fragment>
        );
      })}
    </>
  );
}

export default FullGrid;
