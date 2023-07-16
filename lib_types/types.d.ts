import type { CSSProperties } from "vue";
export declare type GanttBarObject = {
    [key: string]: any;
    beginDate: string;
    endDate: string;
    ganttBarConfig: {
        id: string;
        label?: string;
        hasHandles?: boolean;
        immobile?: boolean;
        bundle?: string;
        pushOnOverlap?: boolean;
        dragLimitLeft?: number;
        dragLimitRight?: number;
        style?: CSSProperties;
    };
};
export declare type Test = {
    d: string;
};
