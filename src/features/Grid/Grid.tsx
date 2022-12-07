import styled from 'styled-components';
import { StyledGrid } from './GridStyles';
import GridCell from './GridCell';
import { board } from '../../data/board';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './categorySlice';

function Grid() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategories());
  }, []);

  return (
    <StyledGrid>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      {board.map((elem) => (
        <GridCell value={elem} />
      ))}
    </StyledGrid>
  );
}

export default Grid;
