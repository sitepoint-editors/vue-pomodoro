<template>
  <div id="app">
    <div class="container">
      <div class="title">POMODORO</div>
      <state v-bind:isworking="isworking"/>
      <countdown :minute="minute" :second="second" :isworking="isworking"/>
      <controls @started="start()" @paused="pause()" @stopped="stop()" :state="state"/>
    </div>
  </div>
</template>

<script>
import State from "./components/State.vue";
import Countdown from "./components/Countdown.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "app",
  components: {
    State,
    Countdown,
    Controls
  },
  data() {
    return {
      state: "stopped",
      isworking: true,
      minute: 1,
      second: 0
    };
  },
  methods: {
    start() {
      this.state = "started";
      this._tick();
      this.interval = setInterval(this._tick, 1000);
    },
    pause() {
      this.state = "paused";
      clearInterval(this.interval);
    },
    stop() {
      this.state = "stopped";
      clearInterval(this.interval);
      this.isworking = true;
      this.minute = 1;
      this.second = 0;
    },
    _tick: function() {
      //if second is not 0, just decrement second
      if (this.second !== 0) {
        this.second--;
        return;
      }
      //if second is 0 and minute is not 0, decrement minute and set second to 59
      if (this.minute !== 0) {
        this.minute--;
        this.second = 59;
        return;
      }
      //if second is 0 and minute is 0, toggle working/resting intervals
      this.isworking = this.isworking === true ? false : true;
      if (this.isworking === true) {
        this.minute = 1;
      } else {
        this.minute = 5;
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  color: rgb(20, 20, 110);
  margin: 10px;
}
.container {
  background-color: orange;
  width: 200px;
  height: 300px;
  padding: 10px;
}
.title {
  font-size: 24px;
}
</style>