<template>
    <div class="row archives-item">
        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
            <div class="badge badge-primary badge-custom ">{{ items.name }}</div>
            <div class="container">
                <div class="col-md-12 col-xl-12 archive-post">
                    <router-link class="archive-item" v-for="it in items.items" :key="it.id" :to="{name: 'info', params: {id: it.id}, query: {r: Math.ceil(Math.random()*100)}}">
                        <span>{{it.data}}</span>
                        {{it.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categories-item-list",
        props: {
            items: Array | Object,
        },
    }
</script>

<style scoped>

</style>
