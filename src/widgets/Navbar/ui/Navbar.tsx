import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className = '' }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          About
        </AppLink>
      </div>
    </div>
  );
}
