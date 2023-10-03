<template>
  <input
      class="input-component"
      v-model="inputValue.value"
      :placeholder="props.placeholder"
      :name="props.name"
      @change="emit('input', inputValue.value)"
  />
</template>

<script setup lang="ts">
import {InputType} from "../../../types/types.ts";
import {reactive} from "vue";


const props = withDefaults(defineProps<InputType>(),{
  placeholder: "Введите...",
  name: "input",
})

let inputValue = reactive({ value: "" })

const emit = defineEmits<{
  (e: "input", value: string): void
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