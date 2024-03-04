import styled from 'styled-components';

interface InputProps {
  hasError?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  height: 2.4rem;

  ${(props) =>
    props.hasError &&
    `
    border-color: red;
  `}
`;