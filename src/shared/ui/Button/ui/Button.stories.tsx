import { ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

export const primary: ComponentMeta<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export const clear: ComponentMeta<typeof Button> = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
};

export const outline: ComponentMeta<typeof Button> = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
};

export const outlineDark: ComponentMeta<typeof Button> = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
