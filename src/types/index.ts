export interface Clue {
  id: number;
  answer: string;
  category_id: number;
  question: string;
  value: number;
}

export interface Category {
  data: {
    id: number;
    clues_count: number;
    title: string;
    clues: Clue[];
  };
}
