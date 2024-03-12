import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Loader = styled.div`
  width: 60px;
  height: 100px;
  display: block;
  margin: 0px auto;
  position: relative;
  background: radial-gradient(
      ellipse at center,
      ${(props) => props?.theme.colors?.secondary} 69%,
      rgba(0, 0, 0, 0) 70%
    ),
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 47%,
      ${(props) => props?.theme.colors?.secondary} 48%,
      #fff 52%,
      rgba(0, 0, 0, 0) 53%
    );
  background-size: 20px 20px, 20px auto;
  background-repeat: repeat-x;
  background-position: center bottom, center -5px;
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: -20px;
    top: 0;
    width: 20px;
    height: 100px;
    background: radial-gradient(
        ellipse at center,
        ${(props) => props?.theme.colors?.secondary} 69%,
        rgba(0, 0, 0, 0) 70%
      ),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 47%,
        ${(props) => props?.theme.colors?.secondary} 48%,
        #fff 52%,
        rgba(0, 0, 0, 0) 53%
      );
    background-size: 20px 20px, 20px auto;
    background-repeat: no-repeat;
    background-position: center bottom, center -5px;
    transform: rotate(0deg);
    transform-origin: 50% 0%;
    animation: animPend 1s linear infinite alternate;
  }

  &::after {
    animation: animPend2 1s linear infinite alternate;
    left: 100%;
  }

  @keyframes animPend {
    0% {
      transform: rotate(22deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }

  @keyframes animPend2 {
    0%,
    55% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-22deg);
    }
  }
`;

export const LoadingText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  display: inline-block;
  position: relative;
  font-size: 28px;
  font-family: sans-serif;
  box-sizing: border-box;

  &::after {
    content: "";
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 6px;
    right: -6px;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
  }

  @keyframes animloader {
    0% {
      box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 10px 0 ${({ theme }) => theme.colors.secondary},
        20px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 10px 0 ${({ theme }) => theme.colors.secondary},
        20px 0 ${({ theme }) => theme.colors.secondary};
    }
  }
`;
