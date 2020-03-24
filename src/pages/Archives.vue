<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-12 ml-auto col-xl-12 mr-auto float-left left-content">
                    <archives-item :archives="archives"></archives-item>
                </div>
                <!-- Sidebar start -->
                <!--<div class="col-md-3 ml-auto col-xl-3 mr-auto float-right right-content">
                    <sidebar></sidebar>
                </div>-->
                <!-- Sidebar end -->
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    import {Sidebar,ArchivesItem} from '@/components'
    import {getArticleArchives} from "@/api/article";

    export default {
        name: 'archives',
        data() {
            return {
                archives: []
            }
        },
        components: {
            VueMarkdown,
            Sidebar,
            ArchivesItem
        },
        created() {
            this.getArticleArchivesHandle();
        },
        methods: {
            getArticleArchivesHandle() {
                getArticleArchives().then(response => {
                    this.archives = response.data;
                })
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
