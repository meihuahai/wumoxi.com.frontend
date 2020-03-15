<template>
    <div class="row archives-item">
        <div v-for="archive in archives" :key="archive.id" class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
            <div class="badge badge-primary badge-custom ">{{ archive.id }}</div>
            <div class="container">
                <div class="col-md-12 col-xl-12 archive-post">
                    <router-link class="archive-item" v-for="item in archive.items" :key="item.id" :to="{name: 'info', params: {id: item.id}, query: {r: Math.ceil(Math.random()*100)}}">
                        <span>{{item.data}}</span>
                        {{item.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "archives-item",
        props: {
            archives: Array || Object,
        }
    }
</script>

<style scoped>

</style>
