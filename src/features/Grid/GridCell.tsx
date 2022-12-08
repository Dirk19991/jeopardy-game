import { StyledGridCell } from './GridCellStyles';

interface ValueProps {
  value?: number;
  question?: string;
  onClick?: () => void;
}

function GridCell({ value, question, onClick }: ValueProps) {
  return <StyledGridCell onClick={onClick}>${value}</StyledGridCell>;
}

export default GridCell;
