import styled from 'styled-components';

interface StartButtonProps {
  onClick: () => void;
  transparent: boolean;
}

export const StyledStartButton = styled.div<StartButtonProps>`
  font-size: 2rem;
  font-family: 'Swiss911';
  width: 350px;
  height: 70px;
  border: 3px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) =>
    props.transparent ? 'rgb(252, 168, 1, 0.3)' : 'rgb(252, 168, 1)'};
`;
