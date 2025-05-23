<template>
  <div class="flex flex-col min-h-screen h-screen overflow-y-auto font-outfit bg-content-bg dark">
    <SoccerMain />
  </div>
</template>

<script setup>
import SoccerMain from './components/SoccerMain.vue';
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
