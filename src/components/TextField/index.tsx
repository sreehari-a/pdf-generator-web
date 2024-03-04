import React, { useState } from 'react';
import { StyledInput } from './styled';

interface InputProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

const Input: React.FC<InputProps> = ({ value, onChange, hasError }) => {
  return <StyledInput value={value} onChange={onChange} hasError={hasError} />;
};

export default Input;