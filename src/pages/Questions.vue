<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xl-12">
                        <div class="jumbotron jumbotron-border bgshadow">
                            <div class="badge badge-primary badge-custom ">Golang</div>
                            <h3 class="reset-h3">Golang结构体使用</h3>
                            <div class="lead">
                                <span class="pull-left">
                                    <span class="oi oi-timer">
                                        <b>2000-20-22</b>
                                    </span>
                                </span>
                                <span class="pull-right">
                                    <span class="fa fa-comment"> <b>0</b> </span>
                                    <span class="fa fa-eye"> <b>0</b> </span>
                                    <span class="fa fa-thumbs-up"> <b>0</b> </span>
                                </span>
                            </div>
                            <div class="clearfix"></div>


                            <a href="http://www.baidu.com">

                            </a>
                            <span>
                                 <span class="badge badge-success">Golang</span>
                            </span>
                            <hr>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    export default {
        name: 'questions',
        data() {
            return {
            }
        },
        components: {
            VueMarkdown
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
