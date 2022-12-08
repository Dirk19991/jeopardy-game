import { StyledQuestion } from './QuestionStyles';

interface QuestionProps {
  question: string;
}

function Question({ question }: QuestionProps) {
  return <StyledQuestion>{question}</StyledQuestion>;
}

export default Question;
