<template>
  <div class="controls">
    <button :disabled="state==='started'" @click="start()" title="start">Start</button>
    <button :disabled="state!=='started'" @click="pause()" title="pause">Pause</button>
    <button :disabled="state!=='started' && state !== 'paused'" @click="stop()" title="stop">Stop</button>
  </div>
</template>

<script>
export default {
  props: ["state"],
  methods: {
    start() {
      this.$emit("started");
    },
    pause() {
      this.$emit("paused");
    },
    stop() {
      this.$emit("stopped");
    }
  }
};
</script>

<style>
button:disabled {
  color: #808080;
}
.controls {
  margin: 10px;
}
</style>
