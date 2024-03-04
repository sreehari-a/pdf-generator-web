import styled from "styled-components";

const TabHeight = "3rem";

export const TabContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  height: ${TabHeight};
  align-items: end;
  border-bottom: 1px solid ${(props) => props?.theme.colors?.text};
`;

export const TabButton = styled.button<{ selected: boolean }>`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  flex: 1;
  color: ${(props) => props?.theme.colors?.secondaryText};
  border: 1px solid ${(props) => props?.theme.colors?.text};
  border-radius: 3px 3px 0 0;
  background-color: ${(props) => props?.theme.colors?.secondary};
  border-collapse: collapse;
  height: 2.75rem;

  &:hover {
    border-bottom: 0;
    height: 3rem;
    background: ${(props) => props.theme.colors?.secondaryVariant};
  }

  &.selected {
    border-bottom: 0;
    height: 3rem;
    background: ${(props) => props.theme.colors?.secondaryVariant};
  }
`;

export const TabContent = styled.div<{ selected: boolean }>`
  height: calc(100% - ${TabHeight});
  display: ${(props) => (props.selected ? "block" : "none")};
  background: ${(props) => props.theme.colors?.primary};
  border: 1px solid ${(props) => props?.theme.colors?.text};
  border-top: 0;
  color: ${(props) => props.theme.colors?.text};
`;
