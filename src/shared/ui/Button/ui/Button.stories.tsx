import { ComponentStory, ComponentMeta } from '@storybook/react';

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

const template: ComponentStory<typeof Button> = function (args) {
  return <Button {...args} />;
};

export const Clear = template.bind({});
Clear.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR,
};

export const Outline = template.bind({});
Outline.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
