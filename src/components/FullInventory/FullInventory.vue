<template>
  <div class="full-inventory">
    <div class="full-inventory__inner-block">
      <inventory-left-block/>
      <drag-drop-block/>
    </div>
    <inventory-bottom-block/>
  </div>
</template>

<script setup lang="ts">

import InventoryLeftBlock from "./components/InventoryLeftBlock/InventoryLeftBlock.vue";
import InventoryBottomBlock from "./components/InventoryBottomBlock/InventoryBottomBlock.vue";
import DragDropBlock from "./components/DragDropBlock/DragDropBlock.vue";
</script>

<style scoped lang="scss">
.full-inventory {
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px;

  &__inner-block {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>