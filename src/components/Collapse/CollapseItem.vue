<template>
    <div class="card card-plain">
        <div class="card-header" id="headingOne" role="tab">
            <a
                :aria-controls="`content-${itemId}`"
                :aria-expanded="active"
                :href="`#${itemId}`"
                @click.prevent="activate"
                data-parent="#accordion"
                data-toggle="collapse"
            >
                <slot name="title">
                    {{ title }}
                </slot>
                <slot name="icon">
                    <i class="now-ui-icons arrows-1_minimal-down" v-if="!noIcon"></i>
                </slot>
            </a>
        </div>
        <collapse-transition :duration="animationDuration">
            <div
                :aria-labelledby="title"
                :id="`content-${itemId}`"
                class="collapsed"
                role="tabpanel"
                v-show="active"
            >
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import {CollapseTransition} from 'vue2-transitions';

    export default {
        name: 'collapse-item',
        components: {
            CollapseTransition
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            id: String,
            noIcon: Boolean
        },
        inject: {
            animationDuration: {
                default: 250
            },
            multipleActive: {
                default: false
            },
            addItem: {
                default: () => {
                }
            },
            removeItem: {
                default: () => {
                }
            },
            deactivateAll: {
                default: () => {
                }
            }
        },
        computed: {
            itemId() {
                return this.id || this.title;
            }
        },
        data() {
            return {
                active: false
            };
        },
        methods: {
            activate() {
                if (!this.multipleActive) {
                    this.deactivateAll();
                }
                this.active = !this.active;
            }
        },
        mounted() {
            this.addItem(this);
        },
        destroyed() {
            if (this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el);
            }
            this.removeItem(this);
        }
    };
</script>
<style></style>
