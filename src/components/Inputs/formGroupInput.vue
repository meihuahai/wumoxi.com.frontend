<template>
    <div
        :class="[
      { 'input-group': hasIcon },
      { 'has-danger': error },
      { 'input-group-focus': focused },
      { 'has-label': label || $slots.label }
    ]"
        class="form-group"
    >
        <slot name="label">
            <label :class="labelClasses" class="control-label" v-if="label">
                {{ label }}
                <span v-if="required">*</span>
            </label>
        </slot>

        <div :class="[{ 'input-group': hasIcon }]">
            <slot name="addonLeft">
                <div class="input-group-prepend" v-if="addonLeftIcon">
                    <i :class="addonLeftIcon" class="input-group-text"></i>
                </div>
            </slot>
            <slot>
                <input
                    :class="[{ valid: value && !error }, inputClasses]"
                    :value="value"
                    aria-describedby="addon-right addon-left"
                    class="form-control"
                    v-bind="$attrs"
                    v-on="listeners"
                />
            </slot>
            <slot name="addonRight">
        <span
            class="input-group-addon input-group-append"
            v-if="addonRightIcon"
        >
          <i :class="addonRightIcon" class="input-group-text"></i>
        </span>
            </slot>

            <slot name="infoBlock"></slot>
            <slot name="helpBlock">
                <div
                    :class="{ 'mt-2': hasIcon }"
                    class="text-danger invalid-feedback"
                    style="display: block;"
                    v-if="error"
                >
                    {{ error }}
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        inheritAttrs: false,
        name: 'fg-input',
        props: {
            required: Boolean,
            label: String,
            error: String,
            labelClasses: String,
            inputClasses: String,
            value: {
                type: [String, Number],
                default: ''
            },
            addonRightIcon: String,
            addonLeftIcon: String
        },
        data() {
            return {
                focused: false
            };
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.updateValue,
                    focus: this.onFocus,
                    blur: this.onBlur
                };
            },
            hasIcon() {
                const {addonRight, addonLeft} = this.$slots;
                return (
                    addonRight !== undefined ||
                    addonLeft !== undefined ||
                    this.addonRightIcon !== undefined ||
                    this.addonLeftIcon !== undefined
                );
            }
        },
        methods: {
            updateValue(evt) {
                let value = evt.target.value;
                this.$emit('input', value);
            },
            onFocus(value) {
                this.focused = true;
                this.$emit('focus', value);
            },
            onBlur(value) {
                this.focused = false;
                this.$emit('blur', value);
            }
        }
    };
</script>
<style></style>
