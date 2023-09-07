import { createContext } from 'react';
import useTheme from '../hooks/useTheme';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, handleTheme] = useTheme();
  const context = {
    theme,
    handleTheme,
  };

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
