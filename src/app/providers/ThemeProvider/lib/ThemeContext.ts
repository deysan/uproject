import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const themeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  // eslint-disable-next-line no-empty-function
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
