import { StyledReturnButton } from './ReturnButtonStyles';

interface ReturnButtonProps {
  onClick: () => void;
}

function ReturnButton({ onClick }: ReturnButtonProps) {
  return (
    <StyledReturnButton onClick={onClick}>
      Return to the board
    </StyledReturnButton>
  );
}

export default ReturnButton;
