import { StyledGridCell } from './GridCellStyles';

interface ValueProps {
  value?: number;
  question?: string;
  onClick?: () => void;
  played?: boolean;
}

function GridCell({ value, question, onClick, played }: ValueProps) {
  return (
    <StyledGridCell played={played} onClick={played ? () => {} : onClick}>
      ${value}
    </StyledGridCell>
  );
}

export default GridCell;
