import { withKnobs } from "@storybook/addon-knobs";
import { configure, addDecorator } from "@storybook/vue";
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context("../components", true, /\.stories\.js$/), module);
