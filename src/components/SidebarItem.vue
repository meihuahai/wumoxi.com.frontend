<template>
    <div class="row abstract_view" >
        <div class="card bgshadow">
            <div class="card-header">
                {{ title }}
            </div>
            <ul  class="list-group list-group-flush">
                <li class="list-group-item" v-for="item in items" :key="item.id">{{ item.title || item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "abstract-view",
        props: {
            title: {
                type:String,
                default: "列表视图"
            },
            items: {
                type: Array,
                default: function () {
                    return [
                        {id: 1, name: "TEST1"},
                        {id: 2, name: "TEST1"}
                    ];
                }
            },
        },
    }
</script>

<style scoped>

</style>
