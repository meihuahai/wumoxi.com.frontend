<template>
    <div class="info-page">
        <vue-topprogress ref="topProgress" color="red"></vue-topprogress>
        <!-- Backtop -->
        <el-backtop :visibility-height="10" target=".wrapper"></el-backtop>
        <div class="section">
            <div class="container">
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <div class="row left-row" v-if="article !== {}">
                        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                            <router-link v-if="article.category.name !== ''" :to="{ name: 'categories-list', params: { name: article.category.name } }">
                                <div class="badge badge-primary badge-custom ">{{ article.category.name }}</div>
                            </router-link>
                            <h3 class="reset-h3">{{ article.title }}</h3>
                            <div class="lead">
                                <span class="pull-left">
                                    <span class="oi oi-timer">
                                        <b>{{ article.created_at }}</b>
                                    </span>
                                </span>
                                <span class="pull-right">
                                    <span class="fa fa-comment"> <b>{{ article.comment }}</b> </span>
                                    <span class="fa fa-eye"> <b>{{ article.visit }}</b> </span>
                                    <span class="fa fa-thumbs-up"> <b>{{ article.like }}</b> </span>
                                </span>
                            </div>
                            <div class="clearfix"></div>
                            <span>
                                <router-link v-for="label in article.labels" :key="label.id"  :to="{ name: 'labels-list', params: { name: label.name } }">
                                    <span class="badge badge-success">{{ label.name }}</span>
                                </router-link>
                            </span>
                            <div class="custorm-markdown">
                                <vue-markdown v-if="summaryLoaded">{{ article.summary }}</vue-markdown>
                                <vue-markdown v-if="contentLoaded"> {{ article.content }} </vue-markdown>
                            </div>
                            <hr>
                        </div>
                        <comment v-if="article.title !== '' && article.labels !== []" :label="article.labels" :title="article.title" :description="article.summary"></comment>
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
    import {getArticleByID} from "@/api/article";
    import Comment from "@/components/Comment";

    export default {
        data() {
            return {
                summaryLoaded: false,
                contentLoaded: false,
                id: 0,
                article: {
                    name: '',
                    category: {
                        name: ''
                    },
                    summary: '',
                    content: ''
                },
                show: true
            }
        },
        components: {
            Sidebar,
            Comment
        },
        created() {
            this.getArticleHandle();
        },
        methods: {
            getArticleHandle() {
                let id = this.$route.params.id;
                if (id !== undefined && !isNaN(parseInt(id))) {
                    if (this.id) {
                        id = this.id
                    }
                    getArticleByID(id).then(response => {
                        this.article = response.data;
                        this.summaryLoaded = true;
                        this.contentLoaded = true;
                        this.$refs.topProgress.done();
                    });
                }
            }
        },
        // beforeRouteEnter(to, from, next) {
        //     let id = to.params.id;
        //     if (id !== undefined && !isNaN(parseInt(id))) {
        //         getArticleByID(id).then(response => {
        //             next(vm => {
        //                 vm.article = response.data;
        //                 vm.summaryLoaded = true;
        //                 vm.contentLoaded = true;
        //             });
        //         });
        //     }
        // },
        // Ref: https://blog.csdn.net/xiaomajia029/article/details/96324558
        beforeRouteUpdate (to, from, next) {
            // 做一些想要做的处理...
            // this.errCode = to.params.code
            // this.info = formatErrorMsg(this.errCode)
            this.$refs.topProgress.start();
            this.summaryLoaded = false;
            this.contentLoaded = false;
            this.id = to.params.id;
            this.getArticleHandle();
            next()  // 一定要有next
        },
        mounted() {
            this.$prism.highlightAll();
        },
        updated() {
            this.$prism.highlightAll();
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
