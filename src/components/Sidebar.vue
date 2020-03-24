<template>
    <div>
        <sidebar-item :route-name="'info'" :items="maximum" :title="'热门'"></sidebar-item>
        <sidebar-item :route-name="'info'" :items="latest" :title="'最新'"></sidebar-item>
    </div>
</template>

<script>
    import {SidebarItem} from "@/components";
    import {getLabelListAll} from "@/api/label";
    import {getArticleLatest, getArticleMaximum} from "@/api/article";
    export default {
        name: "sidebar",
        data() {
            return {
                labels: [],
                latest: [],
                maximum: [],
            }
        },
        components: {
            SidebarItem
        },
        mounted() {
            this.handleGetArticleLatest();
            this.handleGetArticleMaximum();
        },
        methods: {
            handleGetArticleLatest() {
                getArticleLatest().then(response => {
                    this.latest = response.data;
                })
            },
            handleGetArticleMaximum() {
                getArticleMaximum().then(response => {
                    this.maximum = response.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
