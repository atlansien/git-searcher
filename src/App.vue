<template>
  <div id="app">
    <app-header></app-header>
    <app-timeline></app-timeline>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Timeline from "./components/Timeline.vue";
export default {
  components: {
    appHeader: Header,
    appTimeline: Timeline
  }
};
</script>
