import { Fragment } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import GridCategory from '../gridCategory/GridCategory';
import GridCell from '../gridCell/GridCell';

function EmptyGrid() {
  // если экран маленький, заполняем только три столбца
  const matches = useMediaQuery('(max-width: 1080px)');
  let emptyGridCells: number[] = matches ? Array(3).fill(0) : Array(6).fill(0);
  const gridCellValues = [100, 200, 300, 400, 500];

  return (
    <>
      {emptyGridCells.map((elem: number, index: number) => (
        <Fragment key={index}>
          <GridCategory></GridCategory>
          {gridCellValues.map((cell) => (
            <GridCell key={index + cell} value={cell} />
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default EmptyGrid;
