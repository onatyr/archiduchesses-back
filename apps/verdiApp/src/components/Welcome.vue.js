import { ref } from 'vue';
const names = ['Claire', 'Onat'];
export default (await import('vue')).defineComponent({
    setup() {
        const randomName = ref(names[Math.floor(Math.random() * names.length)]);
        return { randomName };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col sm:flex-row justify-center items-center gap-4 p-6 bg-apple-100 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/plant.png"), ...{ class: ("w-16 h-16 sm:w-20 sm:h-20") }, alt: ("Plant icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-center text-black font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase") }, });
    (__VLS_ctx.randomName);
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['sm:flex-row'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['bg-apple-100'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['h-16'];
    __VLS_styleScopedClasses['sm:w-20'];
    __VLS_styleScopedClasses['sm:h-20'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['font-extrabold'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['sm:text-4xl'];
    __VLS_styleScopedClasses['md:text-5xl'];
    __VLS_styleScopedClasses['uppercase'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
