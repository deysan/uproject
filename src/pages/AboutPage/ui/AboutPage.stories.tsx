import { ComponentMeta } from '@storybook/react';

import AboutPage from './AboutPage';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

export const normal: ComponentMeta<typeof AboutPage> = {};

export const normalDark: ComponentMeta<typeof AboutPage> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
