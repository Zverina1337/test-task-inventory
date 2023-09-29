<template>
  <div class="inventory-item">
    <img
      :src="`/images/${props.imageUrl}`"
      :alt="props.imageUrl"
    >
    <div
        class="inventory-item__counter"
        v-if="props.value !== 0"
    >
      {{ props.value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {InventoryItemType} from "../../../../../../types/types.ts";

const props = withDefaults(defineProps<InventoryItemType>(),{
  value: 0,
  imageUrl: "",
})

</script>

<style scoped lang="scss">
.inventory-item {
  border: 1px solid var(--primary-border);
  width: 103px;
  height: 110px;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: var(--secondary-bg);

  &__counter {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 12px;
    padding: 2px 4px;
    color: white;
    border-top: 1px solid var(--primary-border);
    border-left: 1px solid var(--primary-border);
    border-top-left-radius: var(--border-radius-8);
  }
}
.inventory-item:hover {
  background: var(--hover-bg);
}
</style>