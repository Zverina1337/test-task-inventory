<template>
  <div>
    <transition

    >
      <div class="panel-component">
        <close-icon
            class="panel-component__close-icon"
            @click="emit('on-close')"
        />
        <img
            :src="`/images/${row.imageUrl}`"
            :alt="row.imageUrl"
            class="panel-component__image"
        >
        <hr class="panel-component__hr"/>
        <div class="panel-component__skeletons-wrapper">
          <skeleton-component height="large"/>
          <skeleton-component/>
          <skeleton-component/>
          <skeleton-component/>
          <skeleton-component :width="160"/>
          <skeleton-component :width="80"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

import CloseIcon from "../../icons/CloseIcon.vue";
import SkeletonComponent from "../SkeletonComponent/SkeletonComponent.vue";

interface RowType {
  id: number;
  value: number;
  imageUrl: string;
}

interface PanelProps {
  row: RowType;
}

const {
  row
} = defineProps<PanelProps>()

const emit = defineEmits<{
    (e: "on-close"): void
}>()

</script>

<style scoped lang="scss">
.panel-component {
  width: 250px;
  height: 550px;
  position: absolute;
  background-color: transparent;
  backdrop-filter: blur(10px);
  overflow: hidden;
  border: 1px solid var(--primary-border);
  border-top-right-radius: var(--border-radius-12);
  border-bottom-right-radius: var(--border-radius-12);
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__close-icon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 5px;
  }

  &__image {
    width: 130px;
    height: 130px;
    margin: 60px 0 30px 0;
  }

  &__hr {
    width: 220px;
    color: var(--primary-border);
  }

  &__skeletons-wrapper {
    width: 200px;
    height: 230px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
}
</style>