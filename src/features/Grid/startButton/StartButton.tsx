import { StyledStartButton } from './StartButtonStyles';

interface StartButtonProps {
  onClick: () => void;
  content?: string;
  loadStatus?: string;
}

function StartButton({ onClick, content, loadStatus }: StartButtonProps) {
  if (loadStatus === 'idle') {
    content = 'Click to load categories';
  } else if (loadStatus === 'loading') {
    content = 'Loading...';
  } else if (loadStatus === 'fulfilled') {
    content = 'Click to change categories';
  }
  return <StyledStartButton onClick={onClick}>{content}</StyledStartButton>;
}

export default StartButton;
