<template>
  <div class="g-timeaxis">
    <div class="g-timeunits-container" :style="gTimeunitsContainerMinHeight">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.upperUnits"
        :key="date.getTime()"
        class="g-upper-timeunit"
        :style="{
          background: index % 2 === 0 ? colors.primary : colors.secondary,
          color: colors.text,
          width
        }"
      >
        <slot name="upper-timeunit" :label="label" :value="value" :date="date">
          {{ label }}
        </slot>
      </div>
    </div>

    <div class="g-timeunits-container" :style="gTimeunitsContainerMinHeight">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.lowerUnits"
        :key="date.getTime()"
        class="g-timeunit"
        :style="{
          background: index % 2 === 0 ? colors.ternary : colors.quartenary,
          color: colors.text,
          flexDirection: precision === 'hour' ? 'column' : 'row',
          alignItems: precision === 'hour' ? '' : 'center',
          width
        }"
        @click="emits('onClickTimeUnit',date)"
      >
        <slot name="timeunit" :label="label" :value="value" :date="date">
          {{ label }}
        </slot>
        <div
          v-if="precision === 'hour'"
          class="g-timeaxis-hour-pin"
          :style="{ background: colors.text }"
        />
      </div>
    </div>

    <div class="g-timeunits-container" v-if="mileStoneList?.length > 0"
         :style="gTimeunitsContainerMinHeight">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.lowerUnits"
        :key="date.getTime()"
        class="g-timeunit"
        :style="{
          color: colors.text,
          flexDirection: precision === 'hour' ? 'column' : 'row',
          alignItems: precision === 'hour' ? '' : 'center',
          width
        }"
      >
        <slot name="timeunit" :label="label" :value="value" :date="date"
              v-if="isMileStoneDate(date)">
          <p class="milestone-description">▼<span
            class="milestone-description">{{ getMilestoneDescription(date) }}</span></p>
        </slot>
        <div
          v-if="precision === 'hour'"
          class="g-timeaxis-hour-pin"
          :style="{ background: colors.text }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits.js"
import type {MileStone} from "../types";

type GGanttTimeaxisProps = {
  mileStoneList: MileStone[]
}

const emits = defineEmits(["onClickTimeUnit"])

const props = defineProps<GGanttTimeaxisProps>()
const {precision, colors} = provideConfig()
const {timeaxisUnits} = useTimeaxisUnits()

const gTimeunitsContainerMinHeight = () => {
  if (props.mileStoneList?.length > 0) {
    return {minHeight: "33%"}
  } else {
    return {height: "50%"}
  }
}

const isMileStoneDate = (date: Date) => {
  if (precision.value == "week") {
    return props.mileStoneList.map(v => getMonday(v.date).getTime()).includes(getMonday(date).getTime())
  } else {
    return props.mileStoneList.map(v => v.date.getTime()).includes(date.getTime())
  }
}
const getMilestoneDescription = (date: Date) => {
  if (precision.value == "week") {
    return props.mileStoneList.find(v => getMonday(v.date).getTime() === getMonday(date).getTime())?.description
  } else {
    return props.mileStoneList.find(v => v.date.getTime() === date.getTime())?.description
  }
}

function getMonday(d: Date) {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
</script>

<style>
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;
  min-height: 75px;
  background: white;
  z-index: 4;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
}

.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}

.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}

.milestone-description {
  margin: 0;
}

.milestone-description > span {
  position: absolute;
}

</style>
