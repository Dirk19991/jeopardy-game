import styled from 'styled-components';

interface QuestionStylesProps {
  length: number;
}

export const StyledQuestion = styled.div<QuestionStylesProps>`
  position: relative;
  font-family: 'Korinna';
  font-size: 4rem;
  display: grid;
  width: 75%;
  height: 80vh;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);
  border: 10px solid black;
  grid-gap: 10px;
  color: #ecf2e4;
  background-color: #060ce9;
  text-align: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1080px) {
    font-size: ${(props) => (props.length > 100 ? '1.3rem' : '2rem')};
  }
`;
