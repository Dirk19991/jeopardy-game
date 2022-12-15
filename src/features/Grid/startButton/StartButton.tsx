import { useAppSelector } from '../../../store';
import { StyledStartButton } from './StartButtonStyles';

interface StartButtonProps {
  onClick: () => void;
  content?: string;
  loadStatus?: string;
}

function StartButton({ onClick, content, loadStatus }: StartButtonProps) {
  // затеняем кнопку смены категорий и дисейблим ее, если сейчас игрок читает вопрос или ответ
  const isBoard = useAppSelector((state) =>
    state.question.status === 'board' ? true : false
  );
  // затеняем и дисейблим кнопку, если сейчас вопросы грузятся
  const isLoading = useAppSelector((state) =>
    state.category.status === 'loading' ? true : false
  );

  if (loadStatus === 'idle') {
    content = 'Click to load categories';
  } else if (loadStatus === 'loading') {
    content = 'Loading...';
  } else if (loadStatus === 'fulfilled') {
    content = 'Click to change categories';
  } else if (loadStatus === 'rejected') {
    content = 'Error! Try again later';
  }
  return (
    <StyledStartButton
      transparent={!isBoard || isLoading}
      onClick={!isBoard || isLoading ? () => {} : onClick}
    >
      {content}
    </StyledStartButton>
  );
}

export default StartButton;
