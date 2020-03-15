<template>
    <div class="row article-item">
        <router-link :to="{name: 'info', params: {id: article.id}, query: {r: Math.ceil(Math.random()*100)}}">
            <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                <div class="badge badge-primary badge-custom ">{{ article.category }}</div>

                <h3 class="reset-h3">{{ article.title }}</h3>

                <div class="clearfix">
                    <span v-for="label in article.labels" :key="label" class="badge badge-default badge-type">{{ label }}</span>
                </div>
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
        </router-link>
    </div>
</template>

<script>
    import Badge from "@/components/Badge";

    export default {
        name: "article-item",
        props: {
            article: Object,
        }
    }
</script>

<style scoped>

</style>
