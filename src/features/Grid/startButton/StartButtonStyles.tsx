import styled from 'styled-components';

interface StartButtonProps {
  onClick: () => void;
}

export const StyledStartButton = styled.div<StartButtonProps>`
  font-size: 2rem;
  font-family: 'Swiss911';
  width: 350px;
  height: 70px;
  border: 3px solid black;
  color: #fca801;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1080px) {
    font-size: 2rem;
  }
`;
