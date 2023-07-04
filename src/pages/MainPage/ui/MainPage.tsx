import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <h2>{t('main')}</h2>
      <p>{t('hello')}</p>
    </>
  );
};

export default MainPage;
