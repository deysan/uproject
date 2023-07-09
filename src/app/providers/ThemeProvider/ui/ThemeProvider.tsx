import { ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  themeContext,
} from '../lib/ThemeContext';

const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

const defaultTheme =
  storedTheme !== null && storedTheme !== ''
    ? (storedTheme as Theme)
    : Theme.LIGHT;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <themeContext.Provider value={defaultProps}>
      {children}
    </themeContext.Provider>
  );
}
