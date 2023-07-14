import { ComponentMeta } from '@storybook/react';

import MainPage from './MainPage';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

export const normal: ComponentMeta<typeof MainPage> = {};

export const normalDark: ComponentMeta<typeof MainPage> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
