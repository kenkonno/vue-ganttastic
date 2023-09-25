<template>
  <div
    class="g-gantt-row"
    :style="{height: rowHeight + 'px'}"
  >
    <div ref="barContainer" class="g-gantt-row-bars-container" v-bind="$attrs">
      <div
        v-for="({ label, width }, index) in timeaxisUnits.lowerUnits"
        :key="label"
        class="g-timeunit"
        :style="{
          color: colors.text,
          textAlign: 'center',
          width
        }"
      >
        <span :style="styles != null ? styles[index] : undefined">
          {{ labels[index] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits";
import type {StyleValue} from "vue";

const props = defineProps<{
  labels: string[]
  styles?: StyleValue[]
}>()
const {rowHeight, colors} = provideConfig()
const {timeaxisUnits} = useTimeaxisUnits()

</script>

<style>
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}

.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  height: 100%;
}

</style>
