import type {CSSProperties} from "vue"

export type GanttBarConfig = {
  id: string
  label?: string
  hasHandles?: boolean
  immobile?: boolean
  bundle?: string
  pushOnOverlap?: boolean
  dragLimitLeft?: number
  dragLimitRight?: number
  style?: CSSProperties,
  progress?: number,
  progressColor?: string
}
export type GanttBarObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  beginDate: string,
  endDate: string,
  ganttBarConfig: GanttBarConfig,
}
