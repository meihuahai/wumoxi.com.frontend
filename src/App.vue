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
                if (to.path.indexOf('/info/')  === 0) {
                    this.$router.go(0);
                }
            }
        }
    };
</script>
