<template>
    <div class="row article-item">
        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
            <div class="badge badge-primary badge-custom ">{{ article.category }}</div>
            <router-link :to="{name: 'info', params: {id: article.id}, query: {r: Math.ceil(Math.random()*100)}}">
                <h3 class="reset-h3">{{ article.title }}</h3>
            </router-link>
            <span>
                 <span v-for="label in article.labels" :key="label" class="badge badge-success">{{ label }}</span>
            </span>
            <div class="lead markdown">
                {{ article.summary }}
            </div>
            <hr>
            <div class="lead">
                <span class="pull-left">
                    <span class="oi oi-timer">
                        <b>{{ article.date }}</b>
                    </span>
                </span>
                <span class="pull-right">
                    <span class="fa fa-comment"> <b>{{ article.comment }}</b> </span>
                    <span class="fa fa-eye"> <b>{{ article.view }}</b> </span>
                    <span class="fa fa-thumbs-up"> <b>{{ article.like }}</b> </span>
                </span>
            </div>
        </div>
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

</style>
