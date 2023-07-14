import { ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line no-restricted-exports
export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

export const normal: ComponentMeta<typeof Loader> = {};

export const normalDark: ComponentMeta<typeof Loader> = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
