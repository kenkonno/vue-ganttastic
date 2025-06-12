<template>
  <div
    :id="barConfig.id"
    class="g-gantt-bar"
    :style="{
      ...barConfig.style,
      position: 'absolute',
      top: `${rowHeight * 0.1}px`,
      left: `${xStart}px`,
      width: `${xEnd - xStart}px`,
      height: `${rowHeight * 0.8}px`,
      zIndex: isDragging ? 3 : 2
    }"
    @mousedown="onMouseEvent"
    @click="onBarClick"
    @dblclick="onMouseEvent"
    @mouseenter="onMouseEvent"
    @mouseleave="onMouseEvent"
    @contextmenu="onMouseEvent"
  >
    <div class="g-gantt-bar-label">
      <slot :bar="bar">
        <div v-if="!isEditing" style="z-index:100">
          {{ barConfig.label || "" }}
        </div>
        <input
          v-else
          ref="inputRef"
          v-model="editValue"
          type="text"
          class="g-gantt-bar-edit-input"
          @keyup.enter="finishEdit"
          @blur="finishEdit"
          @keydown="validateInput"
        />
        <div v-if="barConfig.progress"
             style="
              position:absolute;
              height:100%;
              left: 0;
              "
             :style="{
                width:barConfig.progress + '%',
                backgroundColor: barConfig.progressColor
              }"
        >
        </div>
      </slot>
    </div>
    <template v-if="barConfig.hasHandles">
      <div class="g-gantt-bar-handle-left"/>
      <div class="g-gantt-bar-handle-right"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, toRefs, watch, onMounted, inject, nextTick} from "vue"

import useBarDragManagement from "../composables/useBarDragManagement.js"
import useTimePositionMapping from "../composables/useTimePositionMapping.js"
import useBarDragLimit from "../composables/useBarDragLimit.js"
import type {GanttBarObject} from "../types"
import provideEmitBarEvent from "../provider/provideEmitBarEvent.js"
import provideConfig from "../provider/provideConfig.js"
import {BAR_CONTAINER_KEY} from "../provider/symbols"

const props = defineProps<{
  bar: GanttBarObject
}>()
const emit = defineEmits<{
  (e: 'update', value: { bar: GanttBarObject, newValue: number | undefined }): void
}>()
const emitBarEvent = provideEmitBarEvent()
const config = provideConfig()
const {rowHeight} = config

const {bar} = toRefs(props)
const {mapTimeToPosition, mapPositionToTime} = useTimePositionMapping()
const {initDragOfBar, initDragOfBundle} = useBarDragManagement()
const {setDragLimitsOfGanttBar} = useBarDragLimit()

const isDragging = ref(false)
const isEditing = ref(false)
const editValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const barConfig = computed(() => bar.value.ganttBarConfig)

function firstMousemoveCallback(e: MouseEvent) {
  barConfig.value.bundle != null ? initDragOfBundle(bar.value, e) : initDragOfBar(bar.value, e)
  isDragging.value = true
}

const prepareForDrag = () => {
  setDragLimitsOfGanttBar(bar.value)
  if (barConfig.value.immobile) {
    return
  }

  window.addEventListener("mousemove", firstMousemoveCallback, {
    once: true
  }) // on first mousemove event
  window.addEventListener(
    "mouseup",
    () => {
      // in case user does not move the mouse after mousedown at all
      window.removeEventListener("mousemove", firstMousemoveCallback)
      isDragging.value = false
    },
    {once: true}
  )
}

const barContainerEl = inject(BAR_CONTAINER_KEY)

const onMouseEvent = (e: MouseEvent) => {
  e.preventDefault()
  if (e.type === "mousedown") {
    prepareForDrag()
  }
  const barContainer = barContainerEl?.value?.getBoundingClientRect()
  if (!barContainer) {
    return
  }
  const datetime = mapPositionToTime(e.clientX - barContainer.left)
  emitBarEvent(e, bar.value, datetime)
}

const onBarClick = (e: MouseEvent) => {
  if (isEditing.value) return

  e.stopPropagation()
  isEditing.value = true
  editValue.value = barConfig.value.label || ''

  // フォーカスを入力フィールドに設定し、全て選択する
  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus()
      inputRef.value.select() // 全て選択
    }
  })
}

const validateInput = (e: KeyboardEvent) => {
  // 数字、バックスペース、Delete、矢印キーのみを許可
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab']
  const isNumber = /^[0-9]$/.test(e.key)

  if (!isNumber && !allowedKeys.includes(e.key)) {
    e.preventDefault()
  }
}

const finishEdit = () => {
  if (!isEditing.value) return

  isEditing.value = false

  // 空文字の場合はundefinedとする
  if (editValue.value.trim() === '') {
    // バーの表示ラベルを更新
    barConfig.value.label = ''

    // 親コンポーネントに更新を通知
    emit('update', {bar: bar.value, newValue: undefined})
    return
  }

  const numValue = parseInt(editValue.value)

  // 不正な値の場合は0とする
  const validValue = isNaN(numValue) ? 0 : Math.max(0, numValue)

  // 値が変更された場合のみイベントを発火
  if (barConfig.value.label !== validValue.toString()) {
    // バーの表示ラベルを更新
    barConfig.value.label = validValue.toString()

    // 親コンポーネントに更新を通知
    emit('update', {bar: bar.value, newValue: validValue})
  }
}

const {barStart, barEnd, width, chartStart, chartEnd, chartSize} = config

const xStart = ref(0)
const xEnd = ref(0)

onMounted(() => {
  watch(
    [bar, width, chartStart, chartEnd, chartSize.width],
    () => {
      xStart.value = mapTimeToPosition(bar.value[barStart.value])
      xEnd.value = mapTimeToPosition(bar.value[barEnd.value])

      // xStart.value = mapTimeToPosition(bar.value[barStart.value].substring(0, 11) + "00:00")
      // xEnd.value = mapTimeToPosition(bar.value[barEnd.value].substring(0, 11) + "23:59")

    },
    {deep: true, immediate: true}
  )
})
</script>

<style>
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
  cursor: pointer;
}

.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}

.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.g-gantt-bar-edit-input {
  width: 80%;
  height: 70%;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 0.9em;
  padding: 0 5px;
  box-sizing: border-box;
  z-index: 100;
}

.g-gantt-bar-edit-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 3px rgba(74, 144, 226, 0.5);
}

.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}

.g-gantt-bar-handle-left {
  left: 0;
}

.g-gantt-bar-handle-right {
  right: 0;
}

.g-gantt-bar-label img {
  pointer-events: none;
}
</style>
