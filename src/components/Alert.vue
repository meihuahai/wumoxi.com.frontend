<template>
    <fade-transition>
        <div :class="[`alert-${type}`]" class="alert" role="alert" v-if="visible">
            <slot v-if="!dismissible"></slot>
            <div class="container" v-else>
                <slot></slot>
                <slot name="dismiss-icon">
                    <button
                        @click="dismissAlert"
                        aria-label="Close"
                        class="close"
                        type="button"
                    >
            <span aria-hidden="true">
              <i class="now-ui-icons ui-1_simple-remove"></i>
            </span>
                    </button>
                </slot>
            </div>
        </div>
    </fade-transition>
</template>
<script>
    import {FadeTransition} from 'vue2-transitions';

    export default {
        name: 'alert',
        components: {
            FadeTransition
        },
        props: {
            type: {
                type: String,
                default: 'default',
                description: 'Alert type'
            },
            dismissible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                visible: true
            };
        },
        methods: {
            dismissAlert() {
                this.visible = false;
            }
        }
    };
</script>
