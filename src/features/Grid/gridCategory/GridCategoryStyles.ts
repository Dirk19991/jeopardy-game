import styled from 'styled-components';

interface StyledGridCategoryProps {
  hasLongWords?: boolean;
  hasManyWords?: boolean;
}

export const StyledGridCategory = styled.div<StyledGridCategoryProps>`
  font-size: ${(props) =>
    props.hasLongWords || props.hasManyWords ? '1.2rem' : '1.5rem'};
};
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
