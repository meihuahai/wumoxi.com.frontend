<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <div class="row left-row" v-if="article !== {}">
                        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                            <div class="badge badge-primary badge-custom ">{{ article.category }}</div>
                            <h3 class="reset-h3">{{ article.title }}</h3>
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
                            <div class="clearfix"></div>
                            <span>
                                 <span class="badge badge-success">Golang</span>
                            </span>
                            <div>
                                <vue-markdown :source="article.summary"></vue-markdown>
                                <vue-markdown :source="article.content" @rendered="markdown"></vue-markdown>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ml-auto col-xl-3 mr-auto float-right right-content">
                    <sidebar></sidebar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Sidebar} from '@/components'
    import {MockArticles} from "@/data";

    export default {
        name: 'info',
        data() {
            return {
                article: {},
                show: true
            }
        },
        components: {
            Sidebar
        },
        mounted () {
            const id = this.$route.params.id;
            this.article = MockArticles[id-1];
        },
        watch: {
            article: function (newArticle, oldArticle) {
                console.log(newArticle, oldArticle);
            }
        },
        methods: {
            markdown(e) {

            }
        }
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
