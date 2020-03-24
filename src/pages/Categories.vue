<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-12 ml-auto col-xl-12 mr-auto float-left left-content">
                    <categories-item :items="items"></categories-item>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    import {CategoriesItem} from '@/components'
    import {MockCategories} from '@/data'
    import {getCategoryArticlesList} from "@/api/category";

    export default {
        name: 'categories',
        data() {
            return {
                items: MockCategories
            }
        },
        components: {
            VueMarkdown,
            CategoriesItem
        },
        created() {
            this.getCategoryArticlesListHandle();
        },
        methods: {
            getCategoryArticlesListHandle() {
                getCategoryArticlesList().then(response => {
                    this.items = response.data;
                })
            }
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
