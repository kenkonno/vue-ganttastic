import {ref} from "vue"
import type {GGanttChartConfig} from "../components/GGanttChart.vue"
import provideConfig from "../provider/provideConfig.js"

import type {GanttBarObject} from "../types"
import useDayjsHelper from "./useDayjsHelper.js"
import useTimePositionMapping from "./useTimePositionMapping.js"
import dayjs from "dayjs";

export default function createBarDrag(
  bar: GanttBarObject,
  onDrag: (e: MouseEvent, bar: GanttBarObject) => void = () => null,
  onEndDrag: (e: MouseEvent, bar: GanttBarObject) => void = () => null,
  config: GGanttChartConfig = provideConfig()
) {
  const {barStart, barEnd, pushOnOverlap} = config

  const isDragging = ref(false)
  let cursorOffsetX = 0
  let dragCallBack: (e: MouseEvent) => void

  const {mapPositionToTime} = useTimePositionMapping(config)
  const {toDayjs} = useDayjsHelper(config)

  const initDrag = (e: MouseEvent) => {
    const barElement = document.getElementById(bar.ganttBarConfig.id)
    if (!barElement) {
      return
    }

    cursorOffsetX = e.clientX - (barElement.getBoundingClientRect().left || 0)
    const mousedownType = (e.target as Element).className
    switch (mousedownType) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize"
        dragCallBack = dragByLeftHandle
        break
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize"
        dragCallBack = dragByRightHandle
        break
      default:
        dragCallBack = drag
    }
    isDragging.value = true
    window.addEventListener("mousemove", dragCallBack)
    window.addEventListener("mouseup", endDrag)
  }

  const getBarElements = () => {
    const barElement = document.getElementById(bar.ganttBarConfig.id)
    const barContainer = barElement?.closest(".g-gantt-row-bars-container")?.getBoundingClientRect()
    return {barElement, barContainer}
  }

  const drag = (e: MouseEvent) => {
    const {barElement, barContainer} = getBarElements()
    if (!barElement || !barContainer) {
      return
    }

    const barWidth = barElement.getBoundingClientRect().width
    const xStart = e.clientX - barContainer.left - cursorOffsetX
    const xEnd = xStart + barWidth
    if (isOutOfRange(xStart, xEnd)) {
      return
    }
    if (bar[barStart.value].substring(0, 10) != mapPositionToTime(xStart).substring(0, 10)) {
      // もともとの期間を算出
      const f = toDayjs(bar[barStart.value])
      const t = toDayjs(bar[barEnd.value])
      const diff = t.diff(f, 'minute')
      const after = mapPositionToTime(xStart).substring(0, 10) + " 00:00"
      // 開始日を設定し、もともとの長さをTOにする
      bar[barStart.value] = after
      bar[barEnd.value] = toDayjs(after).add(diff, 'minute').format('DD.MM.YYYY HH:mm')
    }

    onDrag(e, bar)
  }

  const dragByLeftHandle = (e: MouseEvent) => {
    const {barElement, barContainer} = getBarElements()
    if (!barElement || !barContainer) {
      return
    }

    const xStart = e.clientX - barContainer.left
    const newBarStart = mapPositionToTime(xStart)
    if (toDayjs(newBarStart).isSameOrAfter(toDayjs(bar, "end"))) {
      return
    }
    if (bar[barStart.value].substring(0, 10) != mapPositionToTime(xStart).substring(0, 10)) {
      const after = mapPositionToTime(xStart).substring(0, 10) + " 00:00"
      bar[barStart.value] = after
    }
    onDrag(e, bar)
  }

  const dragByRightHandle = (e: MouseEvent) => {
    const {barElement, barContainer} = getBarElements()
    if (!barElement || !barContainer) {
      return
    }

    const xEnd = e.clientX - barContainer.left
    const newBarEnd = mapPositionToTime(xEnd)
    if (toDayjs(newBarEnd).isSameOrBefore(toDayjs(bar, "start"))) {
      return
    }
    if (bar[barStart.value].substring(0, 10) != mapPositionToTime(xEnd).substring(0, 10)) {
      const after = mapPositionToTime(xEnd).substring(0, 10) + " 23:00"
      bar[barEnd.value] = after
    }
    onDrag(e, bar)
  }

  const isOutOfRange = (xStart?: number, xEnd?: number) => {
    if (!pushOnOverlap.value) {
      return false
    }
    const dragLimitLeft = bar.ganttBarConfig.dragLimitLeft
    const dragLimitRight = bar.ganttBarConfig.dragLimitRight

    return (
      (xStart && dragLimitLeft != null && xStart < dragLimitLeft) ||
      (xEnd && dragLimitRight != null && xEnd > dragLimitRight)
    )
  }

  const endDrag = (e: MouseEvent) => {
    isDragging.value = false
    document.body.style.cursor = ""
    window.removeEventListener("mousemove", dragCallBack)
    window.removeEventListener("mouseup", endDrag)
    onEndDrag(e, bar)
  }

  return {
    isDragging,
    initDrag
  }
}
