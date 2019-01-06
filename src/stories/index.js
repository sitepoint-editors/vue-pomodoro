import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";
import { action } from "@storybook/addon-actions";

const CenterDecorator = () => ({
  template: '<div style="textAlign: center;"><story/></div>'
});

storiesOf("State", module)
  .addDecorator(withKnobs)
  .add("state toggle", () => ({
    props: {
      isworking: {
        type: Boolean,
        default: boolean("isworking", false)
      }
    },
    template: `<state :isworking="isworking"></state>`
  }));

storiesOf("Countdown", module)
  .addDecorator(CenterDecorator)
  .add("work state", () => ({
    template: `<countdown :minute="1" :second="0" :isworking="true"></countdown>`
  }))
  .add("rest state", () => ({
    template: `<countdown :minute="5" :second="0" :isworking="false"></countdown>`
  }));

storiesOf("Controls", module)
  .add("started state", () => ({
    template: `<controls state="started" @paused="linkToPaused()" @stopped="linkToStopped()"></controls>`,
    methods: {
      linkToPaused: linkTo("Controls", "paused state"),
      linkToStopped: linkTo("Controls", "stopped state")
    }
  }))
  .add("paused state", () => ({
    template: `<controls state="paused" @started="linkToStarted()" @stopped="linkToStopped()"></controls>`,
    methods: {
      linkToStarted: linkTo("Controls", "started state"),
      linkToStopped: linkTo("Controls", "stopped state")
    }
  }))
  .add("stopped state", () => ({
    template: `<controls state="stopped" @started="linkToStarted(), action()"></controls>`,
    methods: {
      linkToStarted: linkTo("Controls", "started state"),
      action: action("Starting")
    }
  }));

storiesOf("App Screen", module)
  .addDecorator(CenterDecorator)
  .add("all components", () => ({
    template: `
      <div>
        <state :isworking="true"></state>
        <countdown minute="1" second="0" :isworking="true"></countdown>
        <controls state="stopped"></controls>
      </div>`
  }));
