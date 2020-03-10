<template>
    <div>
        <sidebar-item :items="news" :title="'最新'"></sidebar-item>
        <sidebar-item :items="labels" :title="'标签'"></sidebar-item>
    </div>
</template>

<script>
    import {SidebarItem} from "@/components";
    import {MockLabels, MockNews} from "@/data";
    export default {
        name: "sidebar",
        data() {
            return {
                labels: MockLabels,
                news: MockNews,
            }
        },
        components: {
            SidebarItem
        }
    }
</script>

<style scoped>

</style>
