import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className = '' }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('main')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
}
