import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/iu,
      date: /Date$/u,
    },
  },
};

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
addDecorator(StyleDecorator);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
addDecorator(ThemeDecorator(Theme.LIGHT));
