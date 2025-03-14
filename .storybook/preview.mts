import { withRouter } from "storybook-addon-remix-react-router";

const preview = {
  parameters: {
    controls: {
      exclude: ["testID"],
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },
  decorators: [withRouter],
};

export default preview;
