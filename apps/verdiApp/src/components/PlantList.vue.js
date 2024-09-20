import { onMounted, ref } from 'vue';
import PlantDetails from './PlantDetails.vue';
import { ApiService } from "@/services/api.service";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const plants = ref([]);
onMounted(async () => {
    plants.value = await new ApiService("plant").request("all");
});
const selectedPlant = ref(null);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto p-4 flex flex-col items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold text-gray-800 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("w-full md:w-3/4 lg:w-2/3") }, });
    for (const [plant, index] of __VLS_getVForSourceType((__VLS_ctx.plants))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectedPlant = (__VLS_ctx.selectedPlant === plant ? null : plant);
                } }, key: ((index)), ...{ class: ("mb-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg font-semibold pb-2") }, });
        (plant.name);
        if (__VLS_ctx.selectedPlant === plant) {
            // @ts-ignore
            [PlantDetails,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(PlantDetails, new PlantDetails({ plant: ((__VLS_ctx.selectedPlant)), }));
            const __VLS_1 = __VLS_0({ plant: ((__VLS_ctx.selectedPlant)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['md:w-3/4'];
    __VLS_styleScopedClasses['lg:w-2/3'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['pb-2'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PlantDetails: PlantDetails,
            plants: plants,
            selectedPlant: selectedPlant,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
