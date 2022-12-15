import { Values } from './sortValues';

export function randomQuestion(values: Values[]) {
  const randomizedValue = values.map((elem) => {
    return {
      title: elem.title,
      hundred: {
        info: elem.hundred[Math.floor(Math.random() * elem.hundred.length)],
        played: false,
      },
      twoHundred: {
        info: elem.twoHundred[
          Math.floor(Math.random() * elem.twoHundred.length)
        ],
        played: false,
      },

      threeHundred: {
        info: elem.threeHundred[
          Math.floor(Math.random() * elem.threeHundred.length)
        ],
        played: false,
      },

      fourHundred: {
        info: elem.fourHundred[
          Math.floor(Math.random() * elem.fourHundred.length)
        ],
        played: false,
      },

      fiveHundred: {
        info: elem.fiveHundred[
          Math.floor(Math.random() * elem.fiveHundred.length)
        ],
        played: false,
      },
    };
  });

  return randomizedValue;
}
