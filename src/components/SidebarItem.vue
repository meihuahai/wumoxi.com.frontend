<template>
    <div class="row abstract_view" >
        <div class="card bgshadow">
            <div class="card-header">
                {{ title }}
            </div>
            <ul  class="list-group list-group-flush">

                <li class="list-group-item" v-for="item in items" :key="item.id">
                    <router-link :to="{name: routeName, params: {id: item.id}}">
                        {{ item.title || item.name }}
                        {{ item.id }}
                        {{ routeName }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar-item",
        props: {
            title: {
                type:String,
                default: "列表视图"
            },
            routeName: String,
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
        methods: {

        },
        mounted() {
            console.log(this.routeName);
        }
    }
</script>

<style scoped>

</style>
