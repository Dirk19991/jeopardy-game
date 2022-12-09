import { StyledAnswerButton } from './AnswerButtonStyles';
import { showAnswer } from '../questionSlice';

interface AnswerProps {
  onClick: () => void;
  content: string;
}

function AnswerButton({ onClick, content }: AnswerProps) {
  return <StyledAnswerButton onClick={onClick}>{content}</StyledAnswerButton>;
}

export default AnswerButton;
