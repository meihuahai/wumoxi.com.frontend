<template>
    <div class="starter-page">
        <div class="section">
            <div class="container">
                <!-- Content area start -->
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <article-item v-for="article in articles" :key="article.id" :article="article"></article-item>
                </div>
                <!-- Content area end -->

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
    import {ArticleItem, Sidebar} from '@/components';
    import {MockArticles, MockLabels, MockNews} from '@/data';
    export default {
        name: 'index',
        data() {
            return {
                articles: MockArticles,
                labels: MockLabels,
                news: MockNews,
            }
        },
        components: {
            Sidebar,
            ArticleItem,
        }
    };
</script>
<style>
</style>
