import styled from 'styled-components';

interface StyledGridCellProps {
  onClick?: () => void;
  played?: boolean;
}

export const StyledGridCell = styled.div<StyledGridCellProps>`
  font-size: 4rem;
  font-family: 'Swiss911';
  color: ${(props) =>
    props.played ? 'rgb(252, 168, 1, 0.3)' : 'rgb(252, 168, 1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #060ce9;
  cursor: pointer;
  @media (max-width: 1080px) {
    font-size: 2rem;
  }
`;
