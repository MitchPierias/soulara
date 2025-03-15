import type { Meta, StoryObj } from "@storybook/react";

import { PersonalImpact } from "./PersonalImpact";

const meta: Meta<typeof PersonalImpact> = {
  component: PersonalImpact,
};

export default meta;
type Story = StoryObj<typeof PersonalImpact>;

export const Primary: Story = {
  args: {},
};
