import { StyledStartButton } from './StartButtonStyles';

interface StartButtonProps {
  onClick: () => void;
  content: string;
}

function StartButton({ onClick, content }: StartButtonProps) {
  return <StyledStartButton onClick={onClick}>{content}</StyledStartButton>;
}

export default StartButton;
