<template>
    <div
        :class="[
      { 'card-plain': plain },
      { 'card-raised': raised },
      { [`card-${type}`]: type }
    ]"
        :data-background-color="color"
        class="card"
    >
        <h6 class="card-category" v-if="$slots.category || category">
            {{ category }}
        </h6>
        <div class="card-image" v-if="$slots.image">
            <slot name="image"></slot>
        </div>

        <div class="card-avatar" v-if="$slots.avatar">
            <slot name="avatar"></slot>
        </div>

        <div class="info" v-if="$slots.info">
            <slot name="info"></slot>
        </div>

        <div
            :class="headerClasses"
            class="card-header"
            v-if="$slots.header || title"
        >
            <slot name="header">
                <h1 class="card-title" v-if="title">{{ title }}</h1>
                <h3 class="card-category" v-if="subTitle">{{ subTitle }}</h3>
                <p class="card-description" v-if="description">{{ description }}</p>
            </slot>
        </div>
        <div :class="cardBodyClasses" class="card-body" v-if="$slots.default">
            <slot></slot>
        </div>

        <slot name="raw-content"></slot>

        <hr v-if="$slots.footer && !noFooterLine"/>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'card',
        props: {
            type: String,
            title: String,
            subTitle: String,
            category: String,
            color: String,
            description: String,
            noFooterLine: Boolean,
            plain: Boolean,
            raised: Boolean,
            cardBodyClasses: [String, Object, Array],
            headerClasses: [String, Object, Array]
        }
    };
</script>
<style></style>
