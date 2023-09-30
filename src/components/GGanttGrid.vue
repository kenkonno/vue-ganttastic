<template>
  <div class="g-grid-container">
    <div
      v-for="{ label, value, width, date } in timeaxisUnits.lowerUnits"
      :key="date"
      class="g-grid-line"
      :style="{
        width,
        background: highlightedTimes?.includes(date.getTime()) ? colors.hoverHighlight : undefined
      }"
    />
  </div>
</template>

<script setup lang="ts">
import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits.js"
import {computed} from "vue";

const props = defineProps<{
  highlightedDates?: Date[]
}>()

const highlightedTimes = computed(() => {
  return props.highlightedDates?.map ( v => v.getTime() )
})
const { colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()
</script>

<style>
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
</style>
