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
  >
    <g-gantt-row v-for="bar in bars" :key="bar.ganttBarConfig.id" :bars="[bar]"/>
    <!-- こっから下は上側で入れられる予定 -->
    <template #rows>
      <div class="g-gantt-row" style="height: 40px; display:flex;" v-for="row in rows"
           :key="row.bar.ganttBarConfig.id">
        <div>{{ row.taskName }}</div>
        <div><input type="number" v-model="row.numberOfWorkers"/></div>
        <div><input type="date" :value="row.workStartDate.format('YYYY-MM-DD')"/></div>
        <div><input type="date" v-model="row.workEndDate"/></div>
      </div>
    </template>
  </g-gantt-chart>
</template>

<script setup lang="ts">
import {ref} from "vue"
import type {GanttBarObject} from "./types.js"
import GGanttChart from "./components/GGanttChart.vue";
import dayjs, {Dayjs} from "dayjs";

const chartStart = ref("01.05.2023 00:00")
const chartEnd = ref("31.07.2023 00:00")
const format = ref("DD.MM.YYYY HH:mm")

type TaskName = string;
type NumberOfWorkers = Number;
type WorkStartDate = Dayjs;
type WorkEndDate = Dayjs;
type RowID = string;

type Row = {
  bar: GanttBarObject
  taskName: TaskName
  numberOfWorkers: NumberOfWorkers
  workStartDate: WorkStartDate
  workEndDate: WorkEndDate
}

const newRow = (id: RowID, taskName: TaskName, numberOfWorkers: NumberOfWorkers, workStartDate: WorkStartDate, workEndDate: WorkEndDate) => {
  const result: Row = {
    bar: {
      beginDate: workStartDate.format(format.value),
      endDate: workEndDate.format(format.value),
      ganttBarConfig: {
        hasHandles: true,
        id: id,
        label: taskName,
      }
    },
    taskName: taskName,
    numberOfWorkers: numberOfWorkers,
    workStartDate: workStartDate,
    workEndDate: workEndDate,
  }
  console.log("RESULT#########", result, workStartDate.toString())
  return result
}
const rows = ref<Row[]>([
  newRow("id-1", "作業1", 1, dayjs('2023-05-02'), dayjs('2023-05-03')),
  newRow("id-2", "作業2", 1, dayjs('2023-05-06'), dayjs('2023-05-12'))
])
const bars = rows.value.map(v => v.bar)

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
  bar.beginDate = bar.beginDate.substring(0, 11) + "00:00"
  bar.endDate = bar.endDate.substring(0, 11) + "00:00"
}

const onContextmenuBar = (bar: GanttBarObject, e: MouseEvent, datetime?: string | Date) => {
  console.log("contextmenu-bar", bar, e, datetime)
}
</script>
