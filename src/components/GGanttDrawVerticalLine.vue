<template>
  <div class="vertical-line"
       :style="{left: xStart + 'px', top: 0, backgroundColor: color}">
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import useTimePositionMapping from "../composables/useTimePositionMapping";
import type {Dayjs} from "dayjs";

export interface VerticalLineIF {
  date: Dayjs
  color: string
}

const props = defineProps<VerticalLineIF>()

const {mapTimeToPosition} = useTimePositionMapping()
// FORMAT IS DD.MM.YYYY HH:mm
const xStart = computed(() => {
  return mapTimeToPosition(props.date.startOf('day').format("DD.MM.YYYY HH:mm"))
})
</script>

<style>
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
</style>
