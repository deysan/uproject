import { lazy } from 'react';

export const aboutPageAsync = lazy(
  async () =>
    new Promise((resolve) => {
      // TODO delete before deploy
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./AboutPage'));
      }, __SERVER_DELAY_MS__);
    })
);
