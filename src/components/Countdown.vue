<template>
  <div class="timer" :class="{rest: !isworking, work: isworking}">
    <h1 class="digits">
      <span>{{ minute | formatTime }}:{{ second | formatTime }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  props: ["minute", "second", "isworking"],
  filters: {
    formatTime: function(value) {
      if (value >= 10) {
        return value;
      }
      return "0" + value;
    }
  }
};
</script>

<style>
.rest {
  background-color: green;
}
.work {
  background-color: red;
}
.timer {
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 100%;
}
.digits {
  padding-top: 40%;
}
</style>
