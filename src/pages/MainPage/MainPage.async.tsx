import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // TODO delete before deploy
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
