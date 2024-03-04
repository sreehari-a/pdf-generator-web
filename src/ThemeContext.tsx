import React from "react";
import theme from "./theme";
const ThemeContext = React.createContext({
  theme: theme.lightTheme,
  toggleTheme: () => {},
});
export default ThemeContext;
