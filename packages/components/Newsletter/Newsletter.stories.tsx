import type { Meta, StoryObj } from "@storybook/react";

import { Newsletter } from "./Newsletter";

const meta: Meta<typeof Newsletter> = {
  component: Newsletter,
};

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const Primary: Story = {
  args: {},
};
