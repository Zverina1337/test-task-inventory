<template>
  <div v-if="row.imageUrl !== ''">
    <transition

    >
      <div class="info-modal">
        <close-icon
            class="info-modal__close-icon"
            @click="emit('on-close')"
        />
        <img
            :src="`/images/${row.imageUrl}`"
            :alt="row.imageUrl"
            class="info-modal__image"
        >
        <hr class="info-modal__hr"/>
        <div class="info-modal__skeletons-wrapper">
          <skeleton-component height="large"/>
          <skeleton-component />
          <skeleton-component />
          <skeleton-component />
          <skeleton-component :width="160"/>
          <skeleton-component :width="80"/>
        </div>
        <button-component
            background-color="red"
            text-color="white"
            size="large"
            @click="showAcceptModal"
        >
          Удалить предмет
        </button-component>
        <div class="info-modal__accept-modal-wrapper">
          <accept-modal v-if="isShowAcceptModal" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

import CloseIcon from "../../../icons/CloseIcon.vue";
import SkeletonComponent from "../../SkeletonComponent/SkeletonComponent.vue";
import ButtonComponent from "../../buttons/ButtonComponent/ButtonComponent.vue";
import AcceptModal from "../AcceptModal/AcceptModal.vue";
import {BooleanType, PanelType} from "../../../../types/types.ts";

let isShowAcceptModal: BooleanType = reactive({value: false});

function showAcceptModal() {
    isShowAcceptModal.value = !isShowAcceptModal.value
}

const {
  row
} = defineProps<PanelType>()

const emit = defineEmits<{
  (e: "on-close"): void
}>()

</script>

<style scoped lang="scss">
.info-modal {
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

  &__accept-modal-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>