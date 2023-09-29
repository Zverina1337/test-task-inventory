<template>
  <div class="accept-modal">
    <div class="accept-modal__input-wrapper">
      <InputComponent
          :value="inputValue"
          placeholder="Введите количество"
          name="input-counter"
          @on-input="show"
      />
    </div>
    <div class="accept-modal__buttons-block">
      <button-component
          size="small"
          @click=""
      >
        Отмена
      </button-component>
      <button-component
          size="medium"
          background-color="red"
          text-color="white"
          @click=""
      >
        Подтвердить
      </button-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from "../../buttons/ButtonComponent/ButtonComponent.vue";
import InputComponent from "../../InputComponent/InputComponent.vue";

let inputValue = "";
// @ts-ignore
function show(value){
  console.log(value)
}
</script>

<style scoped lang="scss">
.accept-modal {
  width: 250px;
  height: 133px;
  background-color: transparent;
  backdrop-filter: blur(10px);
  overflow: hidden;
  border: 1px solid var(--primary-border);
  border-top-right-radius: var(--border-radius-12);
  border-bottom-right-radius: var(--border-radius-12);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__buttons-block {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__input-wrapper {
    margin-top: 20px;
    width: 210px;
    height: 40px;
  }
}
</style>