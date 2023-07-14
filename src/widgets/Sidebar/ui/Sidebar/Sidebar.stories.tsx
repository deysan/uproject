import { ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

export const light: ComponentMeta<typeof Sidebar> = {};

export const dark: ComponentMeta<typeof Sidebar> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
