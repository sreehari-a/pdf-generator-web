import styled from "styled-components";

export const CustomTextArea = styled.textarea`
  height: 100%;
  width: 99%;
  padding 3px;
  background: ${(props) => props.theme.colors?.primary};
  color: ${(props) => props.theme.colors?.text};
  border: 0;
  &:focus-visible {
    outline: none;
  }
`;
