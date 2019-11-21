import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
//configure(require.context('../stories', true, /\.stories\.js$/), module);
//configure(require.context("../src", true, /\.stories\.js$/), module);
configure(
  require.context("../src", true, /\.stories\.(js|mdx|ts|tsx)$/),
  module
);
