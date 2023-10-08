<template>
  <div class="today-line"
       :style="{left: xStart + 'px'}">
    TODAY LINE
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import useTimePositionMapping from "../composables/useTimePositionMapping";
import dayjs from "dayjs";

const {mapTimeToPosition} = useTimePositionMapping()
// FORMAT IS DD.MM.YYYY HH:mm
const xStart = computed(() => {
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
