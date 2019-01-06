import Vue from "vue";

import { configure, addDecorator } from "@storybook/vue";
import { withOptions } from "@storybook/addon-options";

addDecorator(
  withOptions({
    name: "Vue Pomodoro"
  })
);

// Import your custom components.
import State from "../src/components/State.vue";
import Countdown from "../src/components/Countdown.vue";
import Controls from "../src/components/Controls.vue";

// Register your custom components.
Vue.component("state", State);
Vue.component("countdown", Countdown);
Vue.component("controls", Controls);

function loadStories() {
  // You can require as many stories as you need.
  require("../src/stories");
}

configure(loadStories, module);
