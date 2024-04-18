
type ButtonProps = {
    type?: string;
};
declare const _default: __VLS_WithTemplateSlots<import('../../../../node_modules/vue').DefineComponent<__VLS_TypePropsToRuntimeProps<ButtonProps>, {}, unknown, {}, {}, import('../../../../node_modules/vue').ComponentOptionsMixin, import('../../../../node_modules/vue').ComponentOptionsMixin, {}, string, import('../../../../node_modules/vue').PublicProps, Readonly<import('../../../../node_modules/vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ButtonProps>>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../../node_modules/vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../../node_modules/vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
