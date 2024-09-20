import { ref } from 'vue';
import { ApiService } from "@/services/api.service";
export default (await import('vue')).defineComponent({
    setup(props, { emit }) {
        const name = ref('');
        const room = ref('');
        const family = ref('');
        const today = new Date().toISOString().split('T')[0];
        const adoptionDate = ref(today);
        const rooms = ['Living-room', 'Bathroom', 'Bedroom 1', 'Bedroom 2', 'Kitchen'];
        const families = [
            "Flowering Plants",
            "Foliage Plants",
            "Succulents & Cacti",
            "Edible Plants",
            "Trees & Shrubs",
            "Climbers & Vines",
            "Aquatic Plants",
            "Carnivorous Plants",
            "Palms",
            "Bulbous Plants"
        ];
        const onSubmit = async () => {
            const newItem = {
                name: name.value,
            };
            console.log('Adding item:', newItem);
            const data = await new ApiService("plant")._post('new', JSON.stringify(newItem));
            name.value = '';
            family.value = '';
            room.value = '';
            adoptionDate.value = today;
            emit('formSubmitted');
        };
        const cancelAction = () => {
            console.log('Cancel clicked');
            name.value = '';
            family.value = '';
            room.value = '';
            ``;
            adoptionDate.value = today;
            emit('formSubmitted');
        };
        return { name, room, rooms, family, families, adoptionDate, onSubmit, cancelAction };
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.onSubmit) }, ...{ class: ("max-w-md mx-auto p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), ...{ class: ("block text-gray-700 font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), value: ((__VLS_ctx.name)), required: (true), ...{ class: ("w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-apple-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("type"), ...{ class: ("block text-gray-700 font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("type"), value: ((__VLS_ctx.family)), required: (true), ...{ class: ("w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-apple-500") }, });
    for (const [family] of __VLS_getVForSourceType((__VLS_ctx.families))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((family)), });
        (family);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("room"), ...{ class: ("block text-gray-700 font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("room"), value: ((__VLS_ctx.room)), required: (true), ...{ class: ("w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-apple-500") }, });
    for (const [room] of __VLS_getVForSourceType((__VLS_ctx.rooms))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((room)), });
        (room);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("date"), ...{ class: ("block text-gray-700 font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("date"), id: ("date"), required: (true), ...{ class: ("w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-apple-500") }, });
    (__VLS_ctx.adoptionDate);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex flex-row justify-center gap-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.cancelAction) }, type: ("button"), ...{ class: ("bg-gray-200 text-black font-bold py-2 px-4 rounded-md hover:bg-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-apple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-apple-800") }, });
    __VLS_styleScopedClasses['max-w-md'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:border-apple-500'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:border-apple-500'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:border-apple-500'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:border-apple-500'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-row'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-gray-600'];
    __VLS_styleScopedClasses['bg-apple-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-apple-800'];
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
