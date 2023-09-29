<template>
  <div
      class="skeleton"
      :class="`skeleton__height-${props.height}`"
  >
  </div>
</template>

<script setup lang="ts">
interface SkeletonProps {
  height: "small" | "medium" | "large" | "responsive";
}
const props = withDefaults(defineProps<SkeletonProps>(),{
  height: "small",
})

</script>

<style scoped lang="scss">
.skeleton {
  border-radius: 12px;
  background-image: linear-gradient(90deg, #3C3C3C 2%, #444 18%, #3C3C3C 33%);
  background-size: 50%;
  width: 100%;
  animation: shine-skeleton 3s infinite linear;

  &__height {
    &-small {
      height: 10px;
    }

    &-medium {
      height: 20px;
    }

    &-large {
      height: 30px;
    }

    &-responsive {
      height: 100%;
    }
  }

}

@keyframes shine-skeleton {
  0% {
    background-position: -100% 0;
  }

  40%, 100% {
    background-position: 100% 0;
  }
}
</style>