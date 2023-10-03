<template>
  <div class="drag-drop-block__wrapper">
    <draggable
      :list="rows"
      itemKey="value"
      class="drag-drop-block"
    >
        <inventory-item
            v-for="row in rows"
            :key="row.id"
            :id="row.id"
            :value="row.value"
            :image-url="row.imageUrl"
            @click="showPanel(row)"
        />
    </draggable>
    <panel-component
        v-if="isShowPanel.value"
        :row="row"
        @close="isShowPanel.value = false"
        @delete="changeRowValue"
    />
  </div>
</template>

<script setup lang="ts">
import InventoryItem from "./components/InventoryItem/InventoryItem.vue";
import { VueDraggableNext as draggable } from 'vue-draggable-next';
import {reactive} from "vue";
import PanelComponent from "../../../../shared/ui/modals/InfoModal/InfoModal.vue";
import {BooleanType, RowType} from "../../../../types/types.ts";
import {useStorage} from "@vueuse/core"

let row: RowType = { id: 0, value: 0, imageUrl: ""};
let isShowPanel: BooleanType = reactive({value: false})
function showPanel(currentRow: RowType): void {
  row = currentRow;
  isShowPanel.value = !isShowPanel.value;
}
let rows = useStorage("rows",[
  {id: 1, value: 4, imageUrl: "green.svg"},
  {id: 2, value: 4, imageUrl: "orange.svg"},
  {id: 3, value: 1, imageUrl: "blue.svg"},
  {id: 4, value: 0, imageUrl: ""},
  {id: 5, value: 0, imageUrl: ""},
  {id: 6, value: 0, imageUrl: ""},
  {id: 7, value: 0, imageUrl: ""},
  {id: 8, value: 0, imageUrl: ""},
  {id: 9, value: 0, imageUrl: ""},
  {id: 10, value: 0, imageUrl: ""},
  {id: 11, value: 0, imageUrl: ""},
  {id: 12, value: 0, imageUrl: ""},
  {id: 13, value: 0, imageUrl: ""},
  {id: 14, value: 0, imageUrl: ""},
  {id: 15, value: 0, imageUrl: ""},
  {id: 16, value: 0, imageUrl: ""},
  {id: 17, value: 0, imageUrl: ""},
  {id: 18, value: 0, imageUrl: ""},
  {id: 19, value: 0, imageUrl: ""},
  {id: 20, value: 0, imageUrl: ""},
  {id: 21, value: 0, imageUrl: ""},
  {id: 22, value: 0, imageUrl: ""},
  {id: 23, value: 0, imageUrl: ""},
  {id: 24, value: 0, imageUrl: ""},
  {id: 25, value: 0, imageUrl: ""},
]);

function changeRowValue(element: RowType, deleteCount: number) {
  rows.value.map((row) => {
    if (row.id === element.id) {
      if (row.value - deleteCount >= 0) {
        row.value -= deleteCount
      }
    }
  })
  isShowPanel.value = false;
}
</script>

<style scoped lang="scss">
.drag-drop-block {
  width: 525px;
  height: 550px;
  background-color: var(--secondary-bg);
  border-radius: var(--border-radius-12);
  border: 1px solid var(--primary-border);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  &__wrapper {
    position: relative;
  }
}
</style>