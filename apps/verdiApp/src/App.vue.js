import { ref, onMounted } from 'vue';
import Welcome from './components/Welcome.vue';
import AddPlantForm from './components/AddPlantForm.vue';
import PlusButton from './components/PlusButton.vue';
import PlantList from './components/PlantList.vue';
export default (await import('vue')).defineComponent({
    components: {
        Welcome,
        AddPlantForm,
        PlusButton,
        PlantList,
    },
    setup() {
        const showForm = ref(false);
        onMounted(() => {
            const header = document.querySelector('header');
            if (header) {
                const headerHeight = header.offsetHeight;
                document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
            }
        });
        return { showForm };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Welcome,
            AddPlantForm,
            PlusButton,
            PlantList,
        },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("fixed top-0 w-full bg-white shadow-md z-10") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Welcome;
    /** @type { [typeof __VLS_components.Welcome, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ style: ({}) }, });
    if (!__VLS_ctx.showForm) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.PlusButton;
        /** @type { [typeof __VLS_components.PlusButton, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (...[$event]) => {
                if (!((!__VLS_ctx.showForm)))
                    return;
                __VLS_ctx.showForm = !__VLS_ctx.showForm;
            }
        };
        let __VLS_9;
        let __VLS_10;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    if (__VLS_ctx.showForm) {
        const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.AddPlantForm;
        /** @type { [typeof __VLS_components.AddPlantForm, ] } */
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onFormSubmitted': {} }, }));
        const __VLS_16 = __VLS_15({ ...{ 'onFormSubmitted': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        let __VLS_20;
        const __VLS_21 = {
            onFormSubmitted: (...[$event]) => {
                if (!((__VLS_ctx.showForm)))
                    return;
                __VLS_ctx.showForm = false;
            }
        };
        let __VLS_17;
        let __VLS_18;
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    if (!__VLS_ctx.showForm) {
        const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.PlantList;
        /** @type { [typeof __VLS_components.PlantList, ] } */
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({}));
        const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    }
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['z-10'];
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
