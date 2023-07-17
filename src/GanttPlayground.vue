<template>
  <g-gantt-chart
    :chart-start="chartStart"
    :chart-end="chartEnd"
    precision="day"
    :row-height="40"
    grid
    width="1200px"
    bar-start="beginDate"
    bar-end="endDate"
    :date-format="format"
    @click-bar="onClickBar($event.bar, $event.e, $event.datetime)"
    @mousedown-bar="onMousedownBar($event.bar, $event.e, $event.datetime)"
    @dblclick-bar="onMouseupBar($event.bar, $event.e, $event.datetime)"
    @mouseenter-bar="onMouseenterBar($event.bar, $event.e)"
    @mouseleave-bar="onMouseleaveBar($event.bar, $event.e)"
    @dragstart-bar="onDragstartBar($event.bar, $event.e)"
    @drag-bar="onDragBar($event.bar, $event.e)"
    @dragend-bar="onDragendBar($event.bar, $event.e)"
    @contextmenu-bar="onContextmenuBar($event.bar, $event.e, $event.datetime)"
    sticky

    :footer-labels="['1','2','3']"
  >
    <g-gantt-row :bars="bars1"/>
    <g-gantt-row :bars="bars2"/>
    <template #table-header>
      table header
    </template>
  </g-gantt-chart>
  {{bars2}}
</template>

<script setup lang="ts">
import {ref} from "vue"
import type {GanttBarObject} from "./types.js"
import GGanttChart from "./components/GGanttChart.vue";

const chartStart = ref("01.05.2023 00:00")
const chartEnd = ref("31.07.2023 00:00")
const format = ref("DD.MM.YYYY HH:mm")
const bars1 = ref<GanttBarObject[]>([
  {
    beginDate: "02.05.2023 00:00",
    endDate: "03.05.2023 23:59",
    ganttBarConfig: {
      hasHandles: true,
      id: "8621987329",
      label: "AAAAAAAAA",
      // bundle: "bundle2"
    }
  }
])

const bars2 = ref([
  {
    beginDate: "06.05.2023 00:00",
    endDate: "12.05.2023 23:59",
    ganttBarConfig: {
      hasHandles: true,
      id: "1592311887",
      label: "BBBBBBBBBBBB",
      // bundle: "bundle2",
      style: {
        background: "magenta"
      }
    }
  },
])


const onClickBar = (bar: GanttBarObject, e: MouseEvent, datetime?: string | Date) => {
  console.log("click-bar", bar, e, datetime)
}

const onMousedownBar = (bar: GanttBarObject, e: MouseEvent, datetime?: string | Date) => {
  console.log("mousedown-bar", bar, e, datetime)
}

const onMouseupBar = (bar: GanttBarObject, e: MouseEvent, datetime?: string | Date) => {
  console.log("mouseup-bar", bar, e, datetime)
}

const onMouseenterBar = (bar: GanttBarObject, e: MouseEvent) => {
  console.log("mouseenter-bar", bar, e)
}

const onMouseleaveBar = (bar: GanttBarObject, e: MouseEvent) => {
  console.log("mouseleave-bar", bar, e)
}

const onDragstartBar = (bar: GanttBarObject, e: MouseEvent) => {
  console.log("dragstart-bar", bar, e)
}

const onDragBar = (bar: GanttBarObject, e: MouseEvent) => {
  console.log("drag-bar", bar, e)
}

const onDragendBar = (
  bar: GanttBarObject,
  e: MouseEvent,
) => {
  console.log("dragend-bar", bar, e)
  // １日の始まりに合わせる操作
  // bar.beginDate = bar.beginDate.substring(0, 11) + "00:00"
  // bar.endDate = bar.endDate.substring(0, 11) + "00:00"
}

const onContextmenuBar = (bar: GanttBarObject, e: MouseEvent, datetime?: string | Date) => {
  console.log("contextmenu-bar", bar, e, datetime)
}
</script>
