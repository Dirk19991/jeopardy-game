import styled from 'styled-components';

interface StyledGridCellProps {
  onClick?: () => void;
}

export const StyledGridCell = styled.div<StyledGridCellProps>`
  font-size: 4rem;
  font-family: 'Swiss911';
  color: #fca801;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #060ce9;
  cursor: pointer;
`;
