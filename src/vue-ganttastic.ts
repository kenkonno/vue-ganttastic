import type {Plugin} from "vue"
import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js"
import isBetween from "dayjs/plugin/isBetween.js"
import customParseFormat from "dayjs/plugin/customParseFormat.js"

import type {GanttBarObject, MileStone} from "./types.js"
import type {ColorScheme} from "./color-schemes"

import GGanttChart from "./components/GGanttChart.vue"
import GGanttRow from "./components/GGanttRow.vue"
import GGanttLabelRow from "./components/GGanttLabelRow.vue"

export function extendDayjs() {
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  dayjs.extend(customParseFormat)
}

export type {ColorScheme, GanttBarObject, MileStone}
export {GGanttChart, GGanttRow, GGanttLabelRow}

export const ganttastic: Plugin = {
  install(app, options?) {
    extendDayjs()
    app.component("GGanttChart", GGanttChart)
    app.component("GGanttRow", GGanttRow)
    app.component("GGanttLabelRow", GGanttLabelRow)
  }
}

export default ganttastic
