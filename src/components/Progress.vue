<template>
    <div :class="`progress-${type}`" class="progress-container progress-base">
    <span class="progress-badge">
      <slot name="label">
        {{ label }}
      </slot>
    </span>
        <div :style="`height: ${height}px`" class="progress">
            <div
                :aria-valuenow="value"
                :class="computedClasses"
                :style="`width: ${value}%;`"
                aria-valuemax="100"
                aria-valuemin="0"
                class="progress-bar"
                role="progressbar"
            >
                <slot>
                    <span class="progress-value" v-if="showValue"> {{ value }}% </span>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'n-progress',
        props: {
            striped: Boolean,
            showValue: Boolean,
            animated: Boolean,
            label: String,
            height: {
                type: Number,
                default: 1
            },
            type: {
                type: String,
                default: 'default'
            },
            value: {
                type: Number,
                default: 0,
                validator: value => {
                    return value >= 0 && value <= 100;
                }
            }
        },
        computed: {
            computedClasses() {
                return [
                    {'progress-bar-striped': this.striped},
                    {'progress-bar-animated': this.animated}
                ];
            }
        }
    };
</script>
<style></style>
