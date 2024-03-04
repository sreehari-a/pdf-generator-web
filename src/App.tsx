import { ThemeProvider } from "styled-components";
import "./App.css";
import HTMLParser from "./HTMLParser";
import theme from "./theme";
import { AppContainer, AppContent, AppHeader, TextShadow, ThemeToggle } from "./styled";
import { useState } from "react";
import Toggle from "./components/ThemeToggle";

export const Themes = {
  light: theme.lightTheme2,
  dark: theme.darkTheme,
};

function App() {
  const [currentTheme, setTheme] = useState(Themes.light);

  const toggleTheme = () => {
    setTheme(currentTheme === Themes.light ? Themes.dark : Themes.light);
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer className="App">
        <AppHeader>
          <div></div>
          
          <div><TextShadow>PDF Generator</TextShadow></div>
          <ThemeToggle>
            <Toggle theme={currentTheme} toggleTheme={toggleTheme} />
          </ThemeToggle>
        </AppHeader>
        <AppContent>
          <HTMLParser />
        </AppContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
