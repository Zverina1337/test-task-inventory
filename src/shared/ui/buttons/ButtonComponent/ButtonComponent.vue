<template>
  <button
      class="button"
      :class="`
        button__size-${props.size}
        button__text-color-${props.textColor}
        button__background-color-${props.backgroundColor}
      `"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ButtonComponentType } from "../../../../types/ButtonComponentType.ts";

const props = withDefaults(defineProps<ButtonComponentType>(), {
  size: "small",
  backgroundColor: "white",
  textColor: "black",
})
</script>

<style scoped lang="scss">
.button {
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: var(--border-radius-8);
  transition: 200ms;
  cursor: pointer;

  &__size {
    &-small {
      height: 33px;
      width: 88px;
    }

    &-medium {
      height: 33px;
      width: 112px;
    }

    &-large {
      height: 39px;
      width: 220px;
    }

    &-responsive {
      height: 100%;
      width: 100%;
    }
  }

  &__background-color {
    &-red {
      background-color: var(--primary-red);
    }

    &-red:hover {
      background-color: var(--hover-red);
      filter: drop-shadow(2px 0 5px var(--hover-red));
    }

    &-white {
      background-color: var(--primary-white);
    }

    &-white:hover {
      background-color: var(--hover-white);
      filter: drop-shadow(2px 0 5px var(--hover-white));
    }
  }

  &__text-color {
    &-white {
      color: white;
    }

    &-black {
      color: black;
    }
  }
}
.button:hover {
  transform: scale(105%);
}
</style>