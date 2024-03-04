import styled, { keyframes } from "styled-components";

const buttonHeight = "3rem";

const Button = styled.button`
  height: 100%;
  padding: 10px 20px;
  line-height: 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const ButtonDiagonalSwipe = styled(Button)`
  color: ${(props) => props?.theme.colors?.secondary};
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.colors?.secondary};
  font-weight: bold;
  background: ${(props) => props?.theme.colors?.secondaryText};
  position: relative;
  transition: all 1s;
  overflow: hidden;

  &:hover {
    color: ${(props) => props.theme.colors?.secondaryText};
    &::before {
      width: 160%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: ${(props) => props.theme.colors?.secondary};
    color: ${(props) => props.theme.colors?.secondaryText};
    z-index: 0;
    transition: all 1s;
  }
`;

const grow = keyframes`
from {
  transform: scale(0, 0);
  opacity: 1;
}
to {
  transform: scale(1.5, 1.5);
  opacity: 0;
}
`;

export const ButtonLeftSwipe = styled(Button)`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0;
  display: inline-block;
  background-color: transparent;
  font-family: "Dosis", sans-serif;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-right: 1px solid black;
  position: relative;
  transition: color 0.2s ease-in-out 0s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
  }

  &::before {
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 0;
  }

  &::after {
    right: -1px;
    width: 1px;
    height: 100%;
    background-color: ${(props) => props?.theme.colors?.secondary};
    z-index: 0;
    transition: width 0.3s ease-in-out, transform 0.2s ease-in-out 0.3s,
      z-index 0.15s ease-in-out;
  }

  &:hover {
    color: ${(props) => props?.theme.colors?.secondaryText};
    transition: color 0.2s ease-in-out 0.25s;

    &::after {
      z-index: 0;
      transform: rotate(0deg);
      width: 100%;
      transition: transform 0.2s ease-in-out, width 0.3s ease-in-out 0.2s;
    }
  }
`;

export const ButtonRightSwipe = styled(ButtonLeftSwipe)`
  &::after {
    left: -1px;
    right: unset;
  }
`;
export const NormalButton = styled(Button)<{ radius: string }>`
  background-color: ${(props) => props.theme.colors?.secondary};
  border: 1px solid transparent;
  border-radius: ${(props) => props.radius};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors?.secondaryText};
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  flex: 1;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
