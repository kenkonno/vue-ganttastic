<template>
  <div style="overflow:scroll; display:flex;"> <!-- なんかこの２重構造だとflexかつスクロールにも対応するみたい -->
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
      @bar-update="onBarUpdate($event.bar, $event.newValue)"
      sticky
      :highlighted-dates="holidays"
      @today-line-position-x="lineTestFunc"
      :displayTodayLine="true"
      @on-click-time-unit="onClickTimeUnit"

      :mile-stone-list="testMileStoneList"
      @on-click-milestone="onClickMilestone"
      :vertical-lines="verticalLines"
    >
      <g-gantt-row :bars="item" v-for="(item, index) in bars" :key="index"/>
      <template #side-menu>
        <div ref="sideMenuElement">
          <table>
            <tr style="height: 75px;">
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
            <tr>
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
            <tr>
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
            <tr>
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
            <tr>
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
            <tr>
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
            <tr>
              <td>AAAAA</td>
              <td>BBBBB</td>
            </tr>
          </table>
        </div>
      </template>
    </g-gantt-chart>
  </div>
</template>
<style>
html, body, #app, #app > div {
  height: 100vh;
  padding: 0;
  margin: 0;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

table tr {
  height: 40px;
}

tbody, td, tfoot, th, thead, tr {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

table tr td {
  border: solid 1px #eaeaea;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>


<script setup lang="ts">
import {ref} from "vue"
import type {GanttBarObject, MileStone, VerticalLine} from "./types.js"
import GGanttChart from "./components/GGanttChart.vue";
import dayjs from "dayjs";

const verticalLines: VerticalLine[] = [
  {color: "blue", date: dayjs("2023-08-19")}
]

const testMileStoneList: MileStone[] = [
  {date: new Date("2023-08-19 00:00:00"), description: "説明文説明文説明文説明文説明文"}
]

const holidays = [new Date('2023-05-20 00:00:00')]

const chartStart = ref("01.05.2023 00:00")
const chartEnd = ref("10.06.2023 00:00")
const format = ref("DD.MM.YYYY HH:mm")

const sideMenuElement = ref<HTMLDivElement>()
const syncWidth = () => {
  console.log("##### SYNC WIDTH")
  console.log(sideMenuElement.value?.clientWidth)
  const parentWidth = sideMenuElement.value?.clientWidth
  return {width: parentWidth + "px", overflow: 'scroll'}
}

const lineTestFunc = (e: { xPosition: Number }) => {
  console.log("###############", e.xPosition)
}

const onClickTimeUnit = (e: { date: Date }) => {
  console.log(e.date)
}
const onClickMilestone = (e: { milestone: MileStone }) => {
  console.log(e.milestone)
}

const bars1 = ref<GanttBarObject[]>([
  {
    beginDate: "02.05.2023 00:00",
    endDate: "03.05.2023 23:59",
    editable: true,
    ganttBarConfig: {
      hasHandles: true,
      id: "8621987329",
      label: "AAAAAAAAA",
      progress: 50,
      progressColor: "#EFEFEF"
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
      },
      progress: 30,
      progressColor: "#EFEFEF"
    }
  },
])

const bars = ref<GanttBarObject[][]>(
  [
    bars1.value,
    bars2.value,
    bars1.value,
    bars2.value,
    bars1.value,
    bars2.value
  ]
)

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

const onBarUpdate = (bar: GanttBarObject, newValue: number | undefined) => {
  console.log("bar-update", bar, newValue)
}
</script>
