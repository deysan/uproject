import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

export function NotFoundPage({ className = '' }: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('page-not-found')}
    </div>
  );
}
