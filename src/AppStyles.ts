import styled from 'styled-components';
import background from './assets/background.jpg';

export const StyledApp = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
