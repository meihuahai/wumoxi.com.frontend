<template>
    <div class="starter-page">
        <div class="section">
            <div class="container">
                <!-- 列表区域 -->
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <article-item v-for="article in articles" :key="article.id" :article="article"></article-item>
                </div>

                <!-- 侧边栏 -->
                <div class="col-md-3 ml-auto col-xl-3 mr-auto float-right right-content">
                    <sidebar></sidebar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {ArticleItem, Sidebar} from '@/components';
    import {MockLabels, MockNews} from '@/data';
    import {getArticleListPaging} from "@/api/article";
    export default {
        name: 'index',
        data() {
            return {
                articles: [],
                labels: MockLabels,
                news: MockNews,
                query: {
                    number: 1,
                    size: 20
                },
            }
        },
        components: {
            Sidebar,
            ArticleItem,
        },
        mounted() {
            getArticleListPaging(this.query).then(response => {
                this.articles = response.data;
            });
        }
    };
</script>
<style>
</style>
