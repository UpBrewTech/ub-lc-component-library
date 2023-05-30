import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CallToAction } from '../features/CallToAction/CallToAction';

const meta = {
  title: 'Example/CallToAction',
  component: CallToAction,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Call to action now!",
    subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    buttonText: "Button"
  },
  render: (args) => {
    return <CallToAction {...args} />
  }
};
