<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-12 ml-auto col-xl-12 mr-auto float-left left-content">
                    <categories-item-list v-if="itemsLoaded" :items="items"></categories-item-list>
                </div>
                <!-- Sidebar start -->
                <!--<div class="col-md-3 ml-auto col-xl-3 mr-auto float-right right-content">
                    <sidebar></sidebar>
                </div>-->
                <!-- Sidebar end -->
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    import {Sidebar,CategoriesItemList} from '@/components'
    import {getCategoryArticlesDetail} from "@/api/category";

    export default {
        name: 'categories-list',
        components: {
            CategoriesItemList,
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
            this.getCategoryArticlesDetailHandle();
        },
        // beforeRouteEnter(to, from, next) {
        //     const name = to.params.name;
        //     if (name !== undefined) {
        //         getCategoryArticlesDetail(name).then(response => {
        //             next(vm => {
        //                 vm.items = response.data;
        //                 vm.itemsLoaded = true;
        //             })
        //         }).catch(() => {
        //             this.$router.push('404')
        //         })
        //     } else {
        //         console.log('get article detail error');
        //     }
        // },
        methods: {
            getCategoryArticlesDetailHandle() {
                this.itemsLoaded = false;
                getCategoryArticlesDetail(this.$route.params.name).then(response => {
                    this.items = response.data;
                    this.itemsLoaded = true;
                    console.log(this.items);
                    console.log(response.data);
                    console.log(response.data.length);
                })
            }
        },
        // Ref: https://blog.csdn.net/xiaomajia029/article/details/96324558
        beforeRouteUpdate (to, from, next) {
            // 做一些想要做的处理...
            // this.errCode = to.params.code
            // this.info = formatErrorMsg(this.errCode)
            this.summaryLoaded = false;
            this.contentLoaded = false;
            this.getCategoryArticlesDetailHandle();
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
