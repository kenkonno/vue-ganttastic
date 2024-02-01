import type { CSSProperties } from "vue";
import type { Dayjs } from "dayjs";
export declare type GanttBarConfig = {
    id: string;
    label?: string;
    hasHandles?: boolean;
    immobile?: boolean;
    bundle?: string;
    pushOnOverlap?: boolean;
    dragLimitLeft?: number;
    dragLimitRight?: number;
    style?: CSSProperties;
    progress?: number;
    progressColor?: string;
};
export declare type GanttBarObject = {
    [key: string]: any;
    beginDate: string;
    endDate: string;
    ganttBarConfig: GanttBarConfig;
};
export declare type MileStone = {
    date: Date;
    description: string;
};
export declare type VerticalLine = {
    date: Dayjs;
    color: string;
};
