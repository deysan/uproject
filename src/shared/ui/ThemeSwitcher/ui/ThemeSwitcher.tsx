import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcher) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};