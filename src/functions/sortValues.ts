import { Category, Clue } from './../types/index';

export interface Values {
  title: string;
  hundred: Clue[];
  twoHundred: Clue[];
  threeHundred: Clue[];
  fourHundred: Clue[];
  fiveHundred: Clue[];
}

export function sortValues(payload: Category): Values {
  const values: Values = {
    title: '',
    hundred: [],
    twoHundred: [],
    threeHundred: [],
    fourHundred: [],
    fiveHundred: [],
  };

  const fallback: Clue[] = [
    {
      id: 0,
      answer: '',
      category_id: 1,
      question:
        'Sorry, there are no questions for this category and value, please choose another question',
      value: 0,
    },
  ];

  const clues = payload.clues;
  const isDouble = clues.filter((elem) => elem.value === 100).length === 0;
  const hundred = isDouble
    ? clues.filter((elem) => elem.value === 200)
    : clues.filter((elem) => elem.value === 100);
  const twoHundred = isDouble
    ? clues.filter((elem) => elem.value === 400)
    : clues.filter((elem) => elem.value === 200);
  const threeHundred = clues.filter(
    (elem) => elem.value === 300 || elem.value === 600
  );
  const fourHundred = isDouble
    ? clues.filter((elem) => elem.value === 800)
    : clues.filter((elem) => elem.value === 400);
  const fiveHundred = clues.filter(
    (elem) => elem.value === 500 || elem.value === 1000
  );
  values.hundred = hundred.length > 0 ? hundred : fallback;
  values.twoHundred = twoHundred.length > 0 ? twoHundred : fallback;
  values.threeHundred = threeHundred.length > 0 ? threeHundred : fallback;
  values.fourHundred = fourHundred.length > 0 ? fourHundred : fallback;
  values.fiveHundred = fiveHundred.length > 0 ? fiveHundred : fallback;
  values.title = payload.title;
  return values;
}
