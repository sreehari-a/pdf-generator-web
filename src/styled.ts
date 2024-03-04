import styled, { keyframes } from "styled-components";

const headerHeight = "4rem";



const flicker = keyframes`{
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #2962ff;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #2962ff;
  }
}`;

export const AppContainer = styled.div`
  background: ${(props) => props.theme.colors?.primary};
  color: ${(props) => props.theme.colors?.text};
  height: 100vh;
`;

export const TextShadow = styled.h1`
font-size: 20px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
  font-family: "Alumni Sans", sans-serif;
  font-style: italic;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: #fff;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px #2962ff;
  transition: all 0.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.2em;
  -webkit-animation: ${flicker} 0.5s ease-in-out infinite alternate;
          animation: ${flicker} 0.5s ease-in-out infinite alternate;
  &:hover {
    color: #fff;
  }
`
export const AppHeader = styled.div`
  background: ${(props) => props.theme.colors?.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors?.secondary};
  color: ${(props) => props.theme.colors?.secondaryText};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight};
  font-weight: bold;
  font-size: 1.5rem;
  box-shadow: ${(props) => props.theme.colors?.headerShadow};
`;
export const ThemeToggle = styled.div`
  width: 70px;
  margin-right: 1rem;
`;
export const AppContent = styled.div`
  height: calc(100% - ${headerHeight});
  overflow-y: auto;
`;

export const FlexParent = styled.div`
  display: flex;
`;

export const Flex1 = styled.div`
  flex: 1;
`;
