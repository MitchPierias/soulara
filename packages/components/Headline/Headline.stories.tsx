import type { Meta, StoryObj } from "@storybook/react";

import { Headline } from "./Headline";

const meta: Meta<typeof Headline> = {
  component: Headline,
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Primary: Story = {
  args: {
    title: "Hello, World!",
    subtitle: "This is a subtitle",
  },
};
