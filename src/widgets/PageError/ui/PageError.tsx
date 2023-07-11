import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button } from 'shared/ui/Button';
import { useCallback } from 'react';

type PageErrorProps = {
  className?: string;
};

export function PageError({ className = '' }: PageErrorProps) {
  const { t } = useTranslation();

  const reloadPage = useCallback(() => {
    location.reload();
  }, []);

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('an-unexpected-error-has-occurred')}</p>
      <Button onClick={reloadPage}>{t('refresh-the-page')}</Button>
    </div>
  );
}
