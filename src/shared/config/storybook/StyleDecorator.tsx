import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export function StyleDecorator(story: () => Story): Story {
  return story();
}
