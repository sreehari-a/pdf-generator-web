// ToggleStyles.tsx
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ToggleStylesProps {
  checked: boolean;
}

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;

export const CheckboxLabel = styled.label`
  background-color: #111;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MoonIcon = styled(FontAwesomeIcon)`
  color: #f1c40f;
`;

export const SunIcon = styled(MoonIcon)`
  color: #f39c12;
`;

export const Ball = styled.span<ToggleStylesProps>`
  background-color: #fff;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 4px;
  top: 4px;
  border-radius: 50%;
  transition: transform 0.2s linear;

  ${CheckboxLabel}:hover & {
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.5);
  }

  ${({ checked }) =>
    checked &&
    `
    transform: translateX(35px);
  `}
`;

// ... (the rest of the CSS, if any, can be added as separate styled-components)

export const Support = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const SupportLink = styled.a`
  color: #292c35;
  font-size: 32px;
  backface-visibility: hidden;
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;