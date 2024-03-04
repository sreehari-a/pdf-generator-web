import styled from "styled-components";
import { Flex1, FlexParent } from "../styled";

const breakpoint = 790;

export const Form = styled(FlexParent)`
  justify-content: space-between;
  @media (max-width: ${breakpoint}px) {
    flex-direction: column;
    align-items: center;
  } 
`;


export const ViewerContainer = styled.div`
@media (max-width: ${breakpoint}px) {
  width: 400px
}  @media (min-width: ${breakpoint}px) {
  height: 70vh;
} 
`
export const FormElement = styled(Flex1)`
  padding: 1rem;
`;

export const TextAreaPanel = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors?.primaryLight};
  border: 0.5px solid ${(props) => props.theme.colors?.text};
  display: flex;
  align-items: start;
  justify-content: space-around;
`;
export const VariableContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors?.primaryLight};
  color: ${(props) => props.theme.colors?.text};
  border-color: grey;
`;

export const VariableSections = styled.div`
 & > ${FlexParent}:nth-child(odd) {
  padding: 5px;
  background: ${(props) => props.theme.colors?.primaryLight};
 }
 & ${FlexParent}:nth-of-type(even) {
  padding: 5px;
  background: ${(props) => props.theme.colors?.primary};
 }
`

export const SelectContainer = styled.div`
width: 40%;
`
export const ValueSection = styled.div`
width: 40%;
`
export const ButtonGroup = styled.div`
width: 20%;
display: flex;
justify-content: space-around;
align-items: center;
`

