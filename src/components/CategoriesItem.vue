<template>
    <div class="row archives-item">
        <div v-for="item in items" :key="item.id" class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
            <div class="badge badge-primary badge-custom ">{{ item.name }}</div>
            <div class="container">
                <div class="col-md-12 col-xl-12 archive-post">
                    <div>
                        <router-link class="archive-item" v-for="it in item.items" :key="it.id" :to="{name: 'info', params: {id: it.id}, query: {r: Math.ceil(Math.random()*100)}}">
                            <span>{{it.data}}</span>
                            {{it.title}}
                        </router-link>
                    </div>
                    <router-link class="view-more" :to="{name: 'categories-list', params: {name:item.name}}">查看更多...</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categories-item",
        props: {
            items: Array || Object,
        }
    }
</script>

<style scoped>

</style>
