<template>
  <div class="inventory-left-block">
    <div class="inventory-left-block__image-wrapper">
      <div class="inventory-left-block__image"></div>
    </div>
    <div class="inventory-left-block__skeleton-wrapper">
      <div class="inventory-left-block__skeleton-large-margin">
        <skeleton-component height="large"/>
      </div>
      <skeleton-component
          height="small"
          :width="150"
          class="inventory-left-block__skeleton-element"
      />
      <skeleton-component
          height="small"
          :width="170"
          class="inventory-left-block__skeleton-element"
      />
      <skeleton-component
          height="small"
          :width="150"
          class="inventory-left-block__skeleton-element"
      />
      <skeleton-component
          height="small"
          :width="130"
          class="inventory-left-block__skeleton-element"
      />
      <skeleton-component
          height="small"
          :width="100"
          class="inventory-left-block__skeleton-element"
      />
      <div class="inventory-left-block__skeleton-small-margin">
        <skeleton-component height="large"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import SkeletonComponent from "../../../../shared/ui/SkeletonComponent/SkeletonComponent.vue";
</script>

<style scoped lang="scss">
.inventory-left-block {
  width: 236px;
  height: 100%;
  background-color: var(--secondary-bg);
  border-radius: var(--border-radius-12);
  border: 1px solid var(--primary-border);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__image-wrapper {
    margin: 14px;
    height: 240px;
    width: 208px;
    border-radius: var(--border-radius-8);
    overflow: hidden;
  }

  &__image {
    background: url("/images/background.png") center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    filter: blur(3px);
  }

  &__skeleton-wrapper {
    width: 190px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__skeleton-small-margin {
    margin: 5px 0;
    width: 50%;
  }

  &__skeleton-large-margin {
    margin: 5px 0;
    width: 100%;
  }

}
</style>