<template>
    <div
        :class="[inlineClass, { disabled: disabled }]"
        class="form-check form-check-radio"
    >
        <label :for="cbId" class="form-check-label">
            <input
                :disabled="disabled"
                :id="cbId"
                :value="label"
                class="form-check-input"
                type="radio"
                v-model="model"
            />
            <span class="form-check-sign"> </span>
            <slot></slot>
        </label>
    </div>
</template>
<script>
    export default {
        name: 'n-radio',
        props: {
            label: [String, Number],
            disabled: Boolean,
            value: [String, Boolean],
            inline: Boolean
        },
        data() {
            return {
                cbId: ''
            };
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                }
            },
            inlineClass() {
                if (this.inline) {
                    return `form-check-inline`;
                }
                return '';
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    };
</script>
