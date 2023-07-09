import { lazy } from 'react';

export const mainPageAsync = lazy(
  async () =>
    new Promise((resolve) => {
      // TODO delete before deploy
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'));
      }, __SERVER_DELAY_MS__);
    })
);
