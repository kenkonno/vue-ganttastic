import type { CSSProperties } from "vue";
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
