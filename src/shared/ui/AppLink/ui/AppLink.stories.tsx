import { ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

export const primary: ComponentMeta<typeof AppLink> = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const primaryDark: ComponentMeta<typeof AppLink> = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const secondary: ComponentMeta<typeof AppLink> = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const secondaryDark: ComponentMeta<typeof AppLink> = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const red: ComponentMeta<typeof AppLink> = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED,
  },
};

export const redDark: ComponentMeta<typeof AppLink> = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
