import styled from 'styled-components';

interface ReturnButtonProps {
  onClick: () => void;
}

export const StyledReturnButton = styled.div<ReturnButtonProps>`
  position: absolute;
  bottom: 2px;
  right: 2px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5rem;
  font-family: 'Swiss911';
  width: 150px;
  height: 70px;
  border: 3px solid black;
  color: #fca801;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1080px) {
    width: 100px;
    font-size: 1.1rem;
  }
`;
