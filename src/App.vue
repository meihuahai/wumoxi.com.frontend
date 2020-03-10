<template>
    <div id="app">
        <router-view name="header"/>
        <div class="wrapper">
            <router-view/>
        </div>
        <router-view name="footer"/>
    </div>
</template>
<script>
    export default {
        watch: {
            '$route'(to, from) {
                this.$router.go(0)
            }
        }
    };
</script>
