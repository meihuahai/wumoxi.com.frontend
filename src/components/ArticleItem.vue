<template>
    <div class="row article-item">
        <router-link class="article-item-link" :to="{name: 'info', params: {id: article.id}}">
            <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                <!-- 分类 -->
                <div class="badge badge-primary badge-custom ">{{ article.category.name }}</div>

                <!-- 文章标题 -->
                <h3 class="reset-h3">{{ article.title }}</h3>

                <!-- 标签 -->
                <div class="clearfix">
                    <router-link v-for="label in article.labels" :key="label.id" :to="{name: 'labels-list', params: {name: label.name}}">
                        <span class="badge badge-default badge-type">{{ label.name }}</span>
                    </router-link>
                </div>

                <!-- 简述信息 -->
                <div class="lead markdown">
                    {{ article.summary }}
                </div>
                <hr>

                <!-- 文章信息 -->
                <div class="lead">
                    <!-- 发布时间 -->
                    <span class="pull-left">
                        <span class="oi oi-timer"><b>{{ article.date }}</b></span>
                    </span>

                    <!-- 文章属性信息 -->
                    <span class="pull-right">
                        <span class="fa fa-comment"> <b>{{ article.comment }}</b> </span>
                        <span class="fa fa-eye"> <b>{{ article.view }}</b> </span>
                        <span class="fa fa-thumbs-up"> <b>{{ article.like }}</b> </span>
                    </span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "article-item",
        props: {
            article: Object,
        }
    }
</script>

<style scoped>
    .article-item-link {
        width: 100%;
    }
</style>
