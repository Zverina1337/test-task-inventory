<template>
  <button
      class="button"
      :class="`button__size-${props.size} button__color-${props.color}`"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

interface ButtonComponentProps {
  size: "small" | "medium" | "large" | "responsive";
  color: "red" | "white";
}
const props = withDefaults(defineProps<ButtonComponentProps>(), {
  size: "small"
})
</script>

<style scoped lang="scss">
.button {

}
</style>