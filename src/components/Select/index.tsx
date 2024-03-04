import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  background-color: transparent;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  appearance: none;
  outline: none;

  &:hover {
    color: #333;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotate(180deg);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #333;
  }

  ${(props) =>
    props.isOpen &&
    `
    &::after {
      transform: translateY(-50%);
    }
  `}
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export interface DropdownItem {
    label: string,
    value: string
}

export interface DropdownProps {
  options: DropdownItem[];
  onChangeOption?: (option: DropdownItem) => void;
  placeHolderText?: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChangeOption,placeHolderText =  "Select an option"}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (option: DropdownItem) => {
    setSelectedOption(option.label);
    onChangeOption?.(option);
    toggleDropdown();
  }

  return (
    <DropdownContainer>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        {selectedOption || placeHolderText}
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => onSelect(option)}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;