<template>
    <div
        :class="switchClass"
        class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate"
    >
        <div @click="triggerToggle()" class="bootstrap-switch-container">
      <span class="bootstrap-switch-handle-on ">
        <slot name="on">
          {{ onText }}
        </slot>
      </span>
            <span class="bootstrap-switch-label"></span>
            <span class="bootstrap-switch-handle-off bootstrap-switch-default">
        <slot name="off">
          {{ offText }}
        </slot>
      </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'n-switch',
        props: {
            value: [Array, Boolean],
            onText: String,
            offText: String
        },
        computed: {
            switchClass() {
                let base = 'bootstrap-switch-';
                let state = this.model ? 'on' : 'off';
                let classes = base + state;
                return classes;
            },
            model: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                }
            }
        },
        methods: {
            triggerToggle() {
                this.model = !this.model;
            }
        }
    };
</script>
