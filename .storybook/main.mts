import { join, dirname } from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const getAbsolutePath = (value) =>
  dirname(require.resolve(join(value, "package.json")));

const getProjectPath = (...args: string[]) => join(process.cwd(), ...args);

const config: StorybookConfig = {
  stories: [
    getProjectPath("packages/**/*.mdx"),
    getProjectPath("packages/**/*.stories.@(ts|tsx)"),
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    // getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    // getAbsolutePath("storybook-addon-remix-react-router"),
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: ".storybook/sb-vite.config.ts",
      },
    },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      publicDir: getProjectPath("public"),
      css: {
        postcss: {},
      },
    });
  },
};

export default config;
