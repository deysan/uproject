import { useTranslation } from 'react-i18next';
import { Counter } from 'shared/counter/Counter';

// eslint-disable-next-line no-restricted-exports
export default function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <>
      <h2>{t('about-page')}</h2>
      <Counter />
    </>
  );
}
