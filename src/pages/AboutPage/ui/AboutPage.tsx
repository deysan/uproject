import { useTranslation } from 'react-i18next';
import { Counter } from 'shared/counter/Counter';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <h2>{t('about')}</h2>
      <Counter />
    </>
  );
};

export default AboutPage;
