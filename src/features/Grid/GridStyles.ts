import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  width: 75%;
  height: 80vh;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  border: 10px solid black;
  grid-gap: 10px;
  background-color: black;
`;
