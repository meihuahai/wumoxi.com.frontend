<template>
    <component
        :is="componentType"
        :to="to"
        @click.native.stop="closeNav"
        class="nav-item"
    >
        <slot></slot>
    </component>
</template>
<script>
    export default {
        name: 'nav-link',
        inject: ['closeNavbar'],
        props: {
            to: {
                type: [String, Object],
                default: undefined
            }
        },
        computed: {
            componentType() {
                return this.to ? 'router-link' : 'a';
            }
        },
        methods: {
            closeNav() {
                if (this.closeNavbar) {
                    this.closeNavbar();
                }
            }
        }
    };
</script>
<style></style>
