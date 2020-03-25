<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-12 ml-auto col-xl-12 mr-auto float-left left-content">
                    <labels-item-list v-if="itemsLoaded" :items="items"></labels-item-list>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    import {Sidebar, LabelsItemList} from '@/components'
    import {getLabelArticlesDetail} from "@/api/label";
    export default {
        name: 'labels-list',
        components: {
            LabelsItemList,
            VueMarkdown,
            Sidebar,
        },
        data() {
            return {
                items: [],
                itemsLoaded: false
            }
        },
        created () {
            this.getLabelArticlesDetailHandle();
        },
        methods: {
            getLabelArticlesDetailHandle() {
                this.itemsLoaded = false;
                getLabelArticlesDetail(this.$route.params.name).then(response => {
                    this.items = response.data;
                    this.itemsLoaded = true;
                })
            }
        },
        // Ref: https://blog.csdn.net/xiaomajia029/article/details/96324558
        beforeRouteUpdate (to, from, next) {
            // 做一些想要做的处理...
            // this.errCode = to.params.code
            // this.info = formatErrorMsg(this.errCode)
            this.getLabelArticlesDetailHandle();
            next()  // 一定要有next
        },
    };
</script>
<style>
    .starter-page {
        min-height: calc(100vh - 95px);
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: rgba(255, 255, 255, 0.3) 0 1px 0, rgba(0, 0, 0, 0.3) 0 -1px 0;
        box-shadow: 0 0 3px rgba(55, 55, 55, 0.7);
    }
    .box-card-table {
        background: rgba(255, 255, 255, 0.0);
    }

</style>
