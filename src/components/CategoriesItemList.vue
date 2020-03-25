<template>
    <div class="row archives-item">
        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
            <div class="badge badge-primary badge-custom ">分类: {{ items.category }}</div>
            <div class="container">
                <div class="col-md-12 col-xl-12 archive-post">
                    <router-link class="archive-item" v-for="it in items.items" :key="it.id" :to="{name: 'info', params: {id: it.id}}">
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
            items: [Object],
        },
    }
</script>

<style scoped>

</style>
