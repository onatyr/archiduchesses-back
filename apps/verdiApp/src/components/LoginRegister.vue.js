import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ApiService } from "@/services/api.service";
export default defineComponent({
    setup() {
        const router = useRouter();
        const isRegister = ref(false);
        const form = reactive({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        });
        // Track errors
        const errors = reactive({
            email: '',
            password: '',
            confirmPassword: '',
            form: '',
            name: ''
        });
        // Clear error messages
        const clearErrors = () => {
            errors.email = '';
            errors.password = '';
            errors.confirmPassword = '';
            errors.form = '';
        };
        // Login/Register handler
        const submitForm = async () => {
            clearErrors();
            if (isRegister.value) {
                // Registration validation
                if (!form.name) {
                    errors.name = 'Name is required.';
                }
                if (!form.email) {
                    errors.email = 'Email is required.';
                }
                if (!form.password) {
                    errors.password = 'Password is required.';
                }
                if (form.password !== form.confirmPassword) {
                    errors.confirmPassword = 'Passwords do not match.';
                }
                if (errors.email || errors.password || errors.confirmPassword) {
                    return;
                }
                // Register logic
                try {
                    const response = await fetch('http://localhost:3000/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: form.email,
                            password: form.password,
                            name: form.name,
                        }),
                    });
                    if (!response.ok) {
                        const data = await response.json();
                        errors.form = data.message || 'Registration failed.';
                        return;
                    }
                    alert('Registration successful');
                }
                catch (error) {
                    errors.form = 'An error occurred during registration.';
                }
            }
            else {
                // Login logic
                if (!form.email) {
                    errors.email = 'Email is required.';
                }
                if (!form.password) {
                    errors.password = 'Password is required.';
                }
                if (errors.email || errors.password) {
                    return;
                }
                try {
                    const response = await new ApiService('auth')._request('login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: form.email,
                            password: form.password,
                        })
                    });
                    // Store the token in local storage or a state management solution
                    localStorage.setItem('token', response.token);
                    router.push({ name: 'main' });
                }
                catch (error) {
                    errors.form = 'An error occurred during login.';
                }
            }
        };
        const toggleForm = () => {
            isRegister.value = !isRegister.value;
        };
        return { isRegister, form, submitForm, toggleForm, errors };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center min-h-screen bg-gray-100") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold mb-6 text-apple-500") }, });
    (__VLS_ctx.isRegister ? 'Register' : 'Login');
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, });
    if (__VLS_ctx.isRegister) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), value: ((__VLS_ctx.form.name)), required: (true), placeholder: ("Enter your name"), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
        if (__VLS_ctx.errors.email) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-xs italic") }, });
            (__VLS_ctx.errors.email);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), required: (true), placeholder: ("Enter your email"), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
    (__VLS_ctx.form.email);
    if (__VLS_ctx.errors.email) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-xs italic") }, });
        (__VLS_ctx.errors.email);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), required: (true), placeholder: ("Enter your password"), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
    (__VLS_ctx.form.password);
    if (__VLS_ctx.errors.password) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-xs italic") }, });
        (__VLS_ctx.errors.password);
    }
    if (__VLS_ctx.isRegister) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("confirmPassword"), ...{ class: ("block text-gray-700 text-sm font-bold mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("confirmPassword"), required: (true), placeholder: ("Confirm your password"), ...{ class: ("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline") }, });
        (__VLS_ctx.form.confirmPassword);
        if (__VLS_ctx.errors.confirmPassword) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500 text-xs italic") }, });
            (__VLS_ctx.errors.confirmPassword);
        }
    }
    if (__VLS_ctx.errors.form) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-red-500 text-xs italic mb-4") }, });
        (__VLS_ctx.errors.form);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-apple-500 hover:bg-apple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline") }, });
    (__VLS_ctx.isRegister ? 'Register' : 'Login');
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleForm) }, type: ("button"), ...{ class: ("inline-block align-baseline font-bold text-sm text-apple-500 hover:text-apple-600") }, });
    (__VLS_ctx.isRegister ? 'Already have an account? Login' : "Don't have an account? Register");
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-8'];
    __VLS_styleScopedClasses['pt-6'];
    __VLS_styleScopedClasses['pb-8'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-md'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-apple-500'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['appearance-none'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['bg-apple-500'];
    __VLS_styleScopedClasses['hover:bg-apple-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:shadow-outline'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['align-baseline'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-apple-500'];
    __VLS_styleScopedClasses['hover:text-apple-600'];
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
