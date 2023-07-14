import { ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

export const light: ComponentMeta<typeof PageError> = {};

export const dark: ComponentMeta<typeof PageError> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
