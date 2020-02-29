<template>
    <button
        :class="[{ toggled: toggled }, { collapsed: !toggled }]"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-target="#navbar"
        data-toggle="collapse"
        type="button"
    >
        <span class="navbar-toggler-bar top-bar"></span>
        <span class="navbar-toggler-bar middle-bar"></span>
        <span class="navbar-toggler-bar bottom-bar"></span>
    </button>
</template>
<script>
    export default {
        name: 'navbar-toggle-button',
        props: {
            toggled: Boolean
        }
    };
</script>
<style></style>
