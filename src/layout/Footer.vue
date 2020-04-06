<template>
    <footer
        :data-background-color="backgroundColor"
        class="footer"
    >
        <div class="container">
            <div :class="copyRightClass">
                <!-- Copyright -->
                <span class="site">{{ domain }}</span>
                <span class="copyright">&copy;</span>
                <a v-bind:href="url" rel="noopener" target="_blank">{{ name }}</a>
                <span>{{ year }}</span>

                <!-- Beian -->
                <a v-for="beian in beians" v-bind:key="beian" class="beian" v-bind:href="beianUrl" rel="noopener" target="_blank">
                    {{ beian }}
                </a>
            </div>
        </div>
    </footer>
</template>
<script>

    export default {
        props: {
            backgroundColor: String,
            type: String
        },
        data() {
            return {
                year: new Date().getFullYear(),
                domain: process.env.VUE_APP_MINI_DOMAIN,
                name: process.env.VUE_APP_SITE_NAME,
                url: process.env.VUE_APP_FULL_DOMAIN,
                beians: process.env.VUE_APP_SITE_BEIAN.split(","),
                beianUrl: process.env.VUE_APP_SITE_BEIAN_URL,
            };
        },
        computed:{
            copyRightClass(){
                return 'copyright copyright-'+this.backgroundColor;
            }
        }
    };
</script>
<style></style>
