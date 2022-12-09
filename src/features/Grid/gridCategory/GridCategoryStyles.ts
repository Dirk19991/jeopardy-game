import styled from 'styled-components';

interface StyledGridCategoryProps {
  hasLongWords?: boolean;
}

export const StyledGridCategory = styled.div<StyledGridCategoryProps>`
  font-size: 2rem;
  font-family: 'Swiss911';
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #060ce9;
  cursor: pointer;
  text-align: center;
  @media (max-width: 1080px) {
    font-size: ${(props) => (props.hasLongWords ? '1rem' : '1.5rem')};
  }
`;
