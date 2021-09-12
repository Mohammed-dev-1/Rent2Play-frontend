<template>
  <v-app class="app">
    <BaseNav />

    <transition name="view">
      <router-view></router-view>
    </transition>

    <BaseAlertMessage />
  </v-app>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style>
.view-enter-active,
.view-leave-active {
  transition: all 0.5s ease;
}

.view-enter-from,
.view-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>