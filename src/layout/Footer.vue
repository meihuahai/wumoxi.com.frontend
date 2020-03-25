<template>
    <footer
        :class="{ [`footer-${type}`]: type }"
        :data-background-color="backgroundColor"
        class="footer"
    >
        <div class="container">
            <div class="copyright">
                <!-- Copyright -->
                <span class="site">{{ site }}</span>
                <span class="copyright">&copy;</span>
                <a v-bind:href="authorUrl" rel="noopener" target="_blank">{{ author }}</a>
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
                site: process.env.VUE_APP_FOOTER_SITE,
                author: process.env.VUE_APP_FOOTER_AUTHOR,
                authorUrl: process.env.VUE_APP_FOOTER_AUTHOR_URL,
                beians: process.env.VUE_APP_FOOTER_BEIAN.split(","),
                beianUrl: process.env.VUE_APP_FOOTER_BEIAN_URL,
            };
        }
    };
</script>
<style></style>
