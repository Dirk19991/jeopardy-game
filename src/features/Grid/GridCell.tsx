import { StyledGridCell } from './GridCellStyles';

interface ValueProps {
  value: number;
}

function GridCell({ value }: ValueProps) {
  return <StyledGridCell>${value}</StyledGridCell>;
}

export default GridCell;
