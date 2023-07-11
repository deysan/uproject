import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-restricted-exports
export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <>
      <h2>{t('main-page')}</h2>
      <p>{t('hello')}</p>
      <BugButton />
    </>
  );
}
