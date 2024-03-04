import React from "react";
import styled from "styled-components";

const Button = styled.button<{
  color: string;
  hoverColor: string;
  padding: string;
  margin: string;
  bgColor: string;
  borderRadius: string;
  border: string;
  fontSize: string;
}>`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};

  background-color: ${(props) => props.bgColor};
  &:disabled {
    opacity: 0.5;
  }
  &:not([disabled]):hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
interface Props {
  color?: string;
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  margin?: string;
  hoverColor: string;
  onClick: () => void;
  children: any;
  disabled?: boolean;
  fontSize?: string;
  title?: string;
}

const IconButton: React.FC<Props> = ({
  color = "black",
  padding = "5px 8px",
  margin = "0",
  hoverColor,
  onClick,
  children,
  disabled,
  bgColor="white",
  borderRadius="5px",
  fontSize="16px",
  border="none",
  title
}: Props) => {
  return (
    <Button
      color={color}
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      hoverColor={hoverColor}
      onClick={onClick}
      disabled={disabled}
      borderRadius={borderRadius}
      border={border}
      fontSize={fontSize}
      title={title}
    >
      {children}
    </Button>
  );
};

export default IconButton;
