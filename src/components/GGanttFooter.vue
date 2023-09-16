<template>
  <div class="g-footer" v-if="labels">
    <div class="g-footer-container">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.lowerUnits"
        :key="label"
        class="g-timeunit"
        :style="{
          background: index % 2 === 0 ? colors.ternary : colors.quartenary,
          color: colors.text,
          flexDirection: precision === 'hour' ? 'column' : 'row',
          alignItems: precision === 'hour' ? '' : 'center',
          width
        }"
      >
        <slot name="timeunit" :label="label" :value="value" :date="date">
          {{ labels[index] }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

const rows: number[][] = [[1,2,3],[4,5,6]]

export interface GGanttFooterProps {
  labels?: string[]
}
</script>

<script setup lang="ts">
import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits.js"

const { precision, colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()
defineProps<GGanttFooterProps>()

</script>

<style scoped>
.g-footer {
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 45px;
  background: white;
  z-index: 4;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
}

.g-footer-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
