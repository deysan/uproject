import { ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

export const light: ComponentMeta<typeof Navbar> = {};

export const dark: ComponentMeta<typeof Navbar> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
