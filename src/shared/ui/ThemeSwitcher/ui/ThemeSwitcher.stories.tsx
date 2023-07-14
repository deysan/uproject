import { ComponentMeta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

export const normal: ComponentMeta<typeof ThemeSwitcher> = {};

export const normalDark: ComponentMeta<typeof ThemeSwitcher> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
