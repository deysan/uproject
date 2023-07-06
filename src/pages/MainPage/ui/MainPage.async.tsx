import { lazy } from 'react';

export const mainPageAsync = lazy(
  async () =>
    new Promise((resolve) => {
      // TODO delete before deploy
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'));
      }, 1500);
    })
);
