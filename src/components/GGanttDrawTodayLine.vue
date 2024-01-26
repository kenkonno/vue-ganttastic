<template>
  <div class="today-line"
       :style="{left: xStart + 'px', top: 0}">
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import useTimePositionMapping from "../composables/useTimePositionMapping";
import dayjs from "dayjs";

const {mapTimeToPosition} = useTimePositionMapping()
const emit = defineEmits<{
  (e: "today-line-position-x", value: { xPosition: Number }): void
}>()
// FORMAT IS DD.MM.YYYY HH:mm
const xStart = computed(() => {
  emit("today-line-position-x", {xPosition: mapTimeToPosition(dayjs().startOf('day').format("DD.MM.YYYY HH:mm"))})
  return mapTimeToPosition(dayjs().startOf('day').format("DD.MM.YYYY HH:mm"))
})
</script>

<style>
.today-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
</style>
