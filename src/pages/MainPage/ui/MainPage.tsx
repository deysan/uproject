import { useTranslation } from 'react-i18next';

export function MainPage() {
  const { t } = useTranslation('main');

  return (
    <>
      <h2>{t('main')}</h2>
      <p>{t('hello')}</p>
    </>
  );
}
