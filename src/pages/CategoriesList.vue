<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <categories-item-list :items="items"></categories-item-list>
                </div>
                <!-- Sidebar start -->
                <div class="col-md-3 ml-auto col-xl-3 mr-auto float-right right-content">
                    <sidebar></sidebar>
                </div>
                <!-- Sidebar end -->
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    import {Sidebar,CategoriesItemList} from '@/components'
    import {MockArticles, MockCategoriesOne, MockCategoriesList} from '@/data'

    export default {
        name: 'categories-list',
        components: {
            CategoriesItemList,
            VueMarkdown,
            Sidebar,
        },
        data() {
            return {
                items: {},
            }
        },
        created () {
            const categoryName = this.$route.params.name;
            console.log(categoryName);
            for (let idx in MockCategoriesList) {
                const current = MockCategoriesList[idx];
                if (current.name === categoryName) {
                    this.items = current;
                }
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
