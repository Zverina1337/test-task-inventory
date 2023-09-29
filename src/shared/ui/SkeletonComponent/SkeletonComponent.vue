<template>
  <div
      class="skeleton"
      :class="`skeleton__height-${props.height}`"
      :style="`width: ${props.width}px`"
  >
  </div>
</template>

<script setup lang="ts">
import {SkeletonType} from "../../../types/types.ts";

const props = withDefaults(defineProps<SkeletonType>(),{
  height: "small",
})

</script>

<style scoped lang="scss">
.skeleton {
  border-radius: 12px;
  width: 100%;
  position: relative;
  background: linear-gradient(90deg, #3C3C3C 2%, #444 18%, #3C3C3C 33%);

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
</style>