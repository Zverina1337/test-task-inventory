<template>
  <div class="inventory-bottom-block">
    <close-icon/>
    <div class="inventory-bottom-block__skeleton-wrapper">
      <skeleton-component height="large"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import SkeletonComponent from "../../../../shared/ui/SkeletonComponent/SkeletonComponent.vue";
import CloseIcon from "../../../../shared/icons/CloseIcon.vue";
</script>

<style scoped lang="scss">
.inventory-bottom-block {
  width: 100%;
  height: 100px;
  background-color: var(--secondary-bg);
  margin-top: var(--margin-24);
  border-radius: var(--border-radius-12);
  border: 1px solid var(--primary-border);
}
</style>