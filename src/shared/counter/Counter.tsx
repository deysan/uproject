import { useState } from 'react';
import classes from './Counter.module.scss';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className={classes.btn} onClick={increment}>
        Increment
      </button>
    </div>
  );
}
