import type { GanttBarObject } from "../types";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
            bars: GanttBarObject[];
            highlightOnHover?: boolean | undefined;
        }>>> & {
            onDrop?: ((value: {
                e: MouseEvent;
                datetime: string | Date;
            }) => any) | undefined;
          "onBar-update"?: ((value: {
            bar: GanttBarObject;
            newValue: number | undefined;
          }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
      $emit: ((event: "bar-update", value: {
        bar: GanttBarObject;
        newValue: number | undefined;
      }) => void) & ((event: "drop", value: {
            e: MouseEvent;
            datetime: string | Date;
      }) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
            bars: GanttBarObject[];
            highlightOnHover?: boolean | undefined;
        }>>> & {
            onDrop?: ((value: {
                e: MouseEvent;
                datetime: string | Date;
            }) => any) | undefined;
          "onBar-update"?: ((value: {
            bar: GanttBarObject;
            newValue: number | undefined;
            }) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            drop: (value: {
                e: MouseEvent;
                datetime: string | Date;
            }) => void;
        } & {
          "bar-update": (value: {
            bar: GanttBarObject;
            newValue: number | undefined;
          }) => void;
        }, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
        bars: GanttBarObject[];
        highlightOnHover?: boolean | undefined;
    }>>> & {
        onDrop?: ((value: {
            e: MouseEvent;
            datetime: string | Date;
        }) => any) | undefined;
      "onBar-update"?: ((value: {
        bar: GanttBarObject;
        newValue: number | undefined;
      }) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    bars: GanttBarObject[];
    highlightOnHover?: boolean | undefined;
}>>> & {
    onDrop?: ((value: {
        e: MouseEvent;
        datetime: string | Date;
    }) => any) | undefined;
  "onBar-update"?: ((value: {
    bar: GanttBarObject;
    newValue: number | undefined;
  }) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    drop: (value: {
        e: MouseEvent;
        datetime: string | Date;
    }) => void;
} & {
  "bar-update": (value: {
    bar: GanttBarObject;
    newValue: number | undefined;
  }) => void;
}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label: (_: {}) => any;
        'bar-label': (_: {
            bar: GanttBarObject;
        }) => any;
    };
});
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
