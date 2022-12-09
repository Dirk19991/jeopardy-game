import { useAppSelector } from '../../../store';
import { StyledGridCell } from './GridCellStyles';

interface ValueProps {
  value?: number;
  question?: string;
  onClick?: () => void;

  price?:
    | 'hundred'
    | 'twoHundred'
    | 'threeHundred'
    | 'fourHundred'
    | 'fiveHundred';
  index?: number;
}

function GridCell({
  value,
  question,
  onClick,

  price,
  index,
}: ValueProps) {
  console.log(index, price);

  let played =
    index !== undefined && price
      ? useAppSelector((state) => state.category.data[index][price].played)
      : '';

  console.log(played);
  return (
    <StyledGridCell played={played} onClick={played ? () => {} : onClick}>
      ${value}
    </StyledGridCell>
  );
}

export default GridCell;
