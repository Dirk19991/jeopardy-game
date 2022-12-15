interface Response {
  data: Category;
}

interface Category {
  id: number;
  clues_count: number;
  title: string;
  clues: Clue[];
}

interface Clue {
  id: number;
  answer: string;
  category_id: number;
  question: string;
  value: number;
}

interface Data {
  title: string;
  hundred: {
    info: Clue;
    played: boolean;
  };
  twoHundred: {
    info: Clue;
    played: boolean;
  };
  threeHundred: {
    info: Clue;
    played: boolean;
  };
  fourHundred: {
    info: Clue;
    played: boolean;
  };
  fiveHundred: {
    info: Clue;
    played: boolean;
  };
}

interface CategoryState {
  status: 'idle' | 'loading' | 'fulfilled';
  data: Data[];
}

interface SetPlayed {
  payload: {
    index: number;
    price:
      | 'hundred'
      | 'twoHundred'
      | 'threeHundred'
      | 'fourHundred'
      | 'fiveHundred';
  };
}
