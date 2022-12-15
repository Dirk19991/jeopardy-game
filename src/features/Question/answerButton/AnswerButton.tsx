import { StyledAnswerButton } from './AnswerButtonStyles';
import { showAnswer } from '../questionSlice';

interface AnswerButtonProps {
  onClick: () => void;
  content: string;
}

function AnswerButton({ onClick, content }: AnswerButtonProps) {
  return <StyledAnswerButton onClick={onClick}>{content}</StyledAnswerButton>;
}

export default AnswerButton;
