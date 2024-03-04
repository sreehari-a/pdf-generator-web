import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {
  Ball,
  Checkbox,
  CheckboxLabel,
  MoonIcon,
  SunIcon,
} from "./styled";
import { Themes } from "../../App";

type ToggleProps = {
  theme: typeof Themes.light;
  toggleTheme: () => void;
};

const Toggle = ({ theme, toggleTheme }: ToggleProps) => {
  const checked = theme === Themes.dark;
  return (
    <div style={{width: "100%"}}>
      <Checkbox
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={toggleTheme}
      />
      <CheckboxLabel htmlFor="checkbox" className="checkbox-label">
        <MoonIcon icon={faMoon}></MoonIcon>
        <SunIcon icon={faSun}></SunIcon>
        <Ball checked={checked}></Ball>
      </CheckboxLabel>
    </div>
  );
};

export default Toggle;
