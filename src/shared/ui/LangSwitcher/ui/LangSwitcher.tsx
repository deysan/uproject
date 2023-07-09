import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className = '' }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
  }, [i18n]);

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
    >
      {t('translate')}
    </Button>
  );
}
