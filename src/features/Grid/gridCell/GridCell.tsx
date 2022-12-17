import { useAppSelector } from '../../../store';
import { StyledGridCell } from './GridCellStyles';

export interface ValueProps {
  value?: number;
  onClick?: () => void;
  price?:
    | 'hundred'
    | 'twoHundred'
    | 'threeHundred'
    | 'fourHundred'
    | 'fiveHundred';
  index?: number;
}

function GridCell({ value, onClick, price, index }: ValueProps) {
  let played;
  let hide;

  // если вопрос уже сыгран, или вопроса не существует, затеняем его
  if (index !== undefined && price) {
    played = useAppSelector(
      (state) => state.category.data[index][price].played
    );
    hide = useAppSelector((state) => state.category.data[index][price].info.id);
  }

  return (
    <StyledGridCell
      played={played}
      hide={hide}
      onClick={played || hide === 0 ? () => {} : onClick}
    >
      ${value}
    </StyledGridCell>
  );
}

export default GridCell;
