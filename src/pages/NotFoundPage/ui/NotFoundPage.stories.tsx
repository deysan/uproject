import { ComponentMeta } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

export const normal: ComponentMeta<typeof NotFoundPage> = {};

export const normalDark: ComponentMeta<typeof NotFoundPage> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
