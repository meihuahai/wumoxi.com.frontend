<template>
    <div id="app" v-cloak>
        <vue-topprogress ref="topProgress" color="red"></vue-topprogress>
        <router-view name="header"/>
        <div class="wrapper">
            <router-view/>
        </div>
        <router-view name="footer"/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                clientHeight: '',
            }
        },
        watch: {
            // '$route'(to, from) {
            //     if (to.path.indexOf('/info/')  === 0) {
            //         this.$router.go(0);
            //     }
            // }
            clientHeight() {
                this.changePageHeight()
            }
        },
        mounted () {
            this.$refs.topProgress.start();

            // Use setTimeout for demo
            setTimeout(() => {
                this.$refs.topProgress.done()
            }, 2000);
        },
        methods: {
            changePageHeight() {
                this.$refs.boss.style.height = this.clientHeight + 'px';
            },
            initPageHeight() {
                this.clientHeight = this.getPageViewHeight();
                window.onresize = () => {
                    this.clientHeight = this.getPageViewHeight();
                }
            },
            getPageViewHeight() {
                return document.body.offsetHeight || document.body.clientHeight
            }
        }
    };
</script>

<style>
    [v-cloak] {
        display: none !important;
    }
    html,body,#app{
        min-height:100vh
    }
</style>
