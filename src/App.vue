<template>
    <div id="app" v-cloak>
        <router-view name="header"/>
        <div class="wrapper">
            <el-backtop :visibility-height="100" class="backtop" :bottom="100" :right="15">
                <el-icon class="backtop-icon" name="caret-top"></el-icon>
            </el-backtop>
            <router-view/>
        </div>
        <router-view name="footer"/>
    </div>
</template>
<script>
    import {marked} from "@/utils/mark";
    export default {
        data() {
            return {
                clientHeight: '',
            }
        },
        watch: {
            clientHeight() {
                this.changePageHeight()
            }
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
        },
        mounted() {
            if (process.env.VUE_APP_SHOW_MARK) {
                marked();
            }
        }
    };
</script>

<style scoped>
    [v-cloak] {
        display: none !important;
    }
    html,body,#app{
        min-height:100vh;
    }
    .backtop {
        background: rgba(255, 255, 255, 0.5);
        -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.6);
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.6);
    }
    .backtop-icon {
        color: #2c2c2c;
    }
</style>
