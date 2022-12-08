import { Clue } from '../types';
import { Values } from './sortValues';

export function randomQuestion(values: Values[]) {
  const randomizedValue = values.map((elem) => {
    return {
      title: elem.title,
      hundred: elem.hundred[Math.floor(Math.random() * elem.hundred.length)],
      twoHundred:
        elem.twoHundred[Math.floor(Math.random() * elem.twoHundred.length)],
      threeHundred:
        elem.threeHundred[Math.floor(Math.random() * elem.threeHundred.length)],
      fourHundred:
        elem.fourHundred[Math.floor(Math.random() * elem.fourHundred.length)],
      fiveHundred:
        elem.fiveHundred[Math.floor(Math.random() * elem.fiveHundred.length)],
    };
  });

  return randomizedValue;
}
