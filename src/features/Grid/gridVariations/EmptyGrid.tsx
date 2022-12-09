import { Fragment } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import GridCategory from '../gridCategory/GridCategory';
import GridCell from '../gridCell/GridCell';

function EmptyGrid() {
  const matches = useMediaQuery('(max-width: 1080px)');
  let emptyGridCells: number[] = matches ? Array(3).fill(0) : Array(6).fill(0);

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
