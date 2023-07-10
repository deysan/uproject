import { useState } from 'react';
import classes from './Counter.module.scss';
import { useTranslation } from 'react-i18next';

export function Counter() {
  const { t } = useTranslation();

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className={classes.btn} onClick={increment}>
        {t('increment')}
      </button>
    </div>
  );
}
