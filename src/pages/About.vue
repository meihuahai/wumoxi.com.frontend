<template>
    <div class="about-page">
        <div class="section">
            <div class="container">
                <div class="col-md-12 col-xl-12">
                    <div class="row">
                        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                            <div>
                                <h3 class="reset-h3">{{ introduce.title }}</h3>
                                <vue-markdown :source="introduce.content"></vue-markdown>
                            </div>
                            <hr>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {getIntroduceDetail} from "@/api/about";

    export default {
        name: 'about',
        data() {
            return {
                introduce: {}
            }
        },
        created() {
            this.getIntroduceHandle();
        },
        mounted() {
            this.$prism.highlightAll();
        },
        updated() {
            this.$prism.highlightAll();
        },
        methods: {
            getIntroduceHandle() {
                getIntroduceDetail().then(response => {
                    this.introduce = response.data;
                    this.$refs.topProgress.done();
                }).catch((err) => {
                    console.log(err);
                });
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
