<template>
  <div class="app">
    <FullInventory/>
  </div>
</template>

<script setup lang="ts">
import FullInventory from "./components/FullInventory/FullInventory.vue";
</script>

<style scoped lang="scss">
.app {
  min-width: 850px;
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
