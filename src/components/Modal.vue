<template>
    <SlideYUpTransition :duration="animationDuration">
        <div
            :aria-hidden="!show"
            :class="[
        { 'show d-block': show },
        { 'd-none': !show },
        { 'modal-mini': type === 'mini' }
      ]"
            @click.self="closeModal"
            class="modal fade"
            role="dialog"
            tabindex="-1"
            v-show="show"
        >
            <div
                :class="[{ 'modal-notice': type === 'notice' }, modalClasses]"
                class="modal-dialog"
            >
                <div class="modal-content">
                    <slot name="base-content">
                        <div :class="headerClasses" class="modal-header">
                            <slot name="close-button">
                                <button
                                    :aria-hidden="!show"
                                    @click="closeModal"
                                    class="close"
                                    data-dismiss="modal"
                                    type="button"
                                    v-if="showClose"
                                >
                                    <i class="now-ui-icons ui-1_simple-remove"></i>
                                </button>
                            </slot>
                            <slot name="header"></slot>
                        </div>

                        <div :class="bodyClasses" class="modal-body">
                            <slot></slot>
                        </div>

                        <div :class="footerClasses" class="modal-footer">
                            <slot name="footer"></slot>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </SlideYUpTransition>
</template>
<script>
    import {SlideYUpTransition} from 'vue2-transitions';

    export default {
        name: 'modal',
        components: {
            SlideYUpTransition
        },
        props: {
            show: Boolean,
            showClose: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: '',
                validator(value) {
                    let acceptedValues = ['', 'notice', 'mini'];
                    return acceptedValues.indexOf(value) !== -1;
                }
            },
            modalClasses: [Object, String],
            headerClasses: [Object, String],
            bodyClasses: [Object, String],
            footerClasses: [Object, String],
            animationDuration: {
                type: Number,
                default: 500
            }
        },
        methods: {
            closeModal() {
                this.$emit('update:show', false);
                this.$emit('close');
            }
        },
        watch: {
            show(val) {
                let documentClasses = document.body.classList;
                if (val) {
                    documentClasses.add('modal-open');
                } else {
                    documentClasses.remove('modal-open');
                }
            }
        }
    };
</script>
<style>
    .modal.show {
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>
