<template>
  <input
      class="input-component"
      :value="props.value"
      :placeholder="props.placeholder"
      :name="props.name"
      @change="emits('on-input', props.value)"
  />
</template>

<script setup lang="ts">
import {InputType} from "../../../types/InputType.ts";

const props = withDefaults(defineProps<InputType>(),{
  value: "",
  placeholder: "Введите...",
  name: "input",
})

const emits = defineEmits<{
  (e: "on-input", value: string): void
}>()

</script>

<style scoped lang="scss">
.input-component {
  width: 100%;
  height: 100%;
  color: var(--primary-border);
  background-color: var(--secondary-bg);
  font-size: 14px;
  padding-left: 5px;
  border: 1px solid var(--primary-border);
  border-radius: 4px;
  outline: none;
}
</style>