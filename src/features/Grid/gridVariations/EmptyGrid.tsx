import { Fragment } from 'react';
import GridCategory from '../gridCategory/GridCategory';
import GridCell from '../gridCell/GridCell';

function EmptyGrid() {
  let emptyGridCells: number[] = Array(6).fill(0);

  return (
    <>
      {emptyGridCells.map((elem: number, index: number) => (
        <Fragment key={index}>
          <GridCategory></GridCategory>
          <GridCell value={100} />
          <GridCell value={200} />
          <GridCell value={300} />
          <GridCell value={400} />
          <GridCell value={500} />
        </Fragment>
      ))}
    </>
  );
}

export default EmptyGrid;
