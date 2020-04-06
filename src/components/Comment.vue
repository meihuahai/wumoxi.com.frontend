<template>
    <div id="comment" class="utterances" :style="{height: height}">
        <iframe class="utterances-frame"
                v-bind:title="title"
                scrolling="no"
                allowtransparency="true"
                :src="page"
        />
    </div>
</template>

<script>
    export default {
        name:'comment',
        props: {
            title: {
                type: String,
                default: 'HelloWorld'
            },
            description:{
                type: String,
                default: 'HelloWorldDescription',
            },
        },
        data() {
            return {
                repo: "wumoxi/comments",
                issue_term: "pathname",
                label: 'production',
                theme: "github-light",
                cross_origin: "anonymous",
                height: 300 + "px"
            }
        },
        created() {
            let api = "https://utteranc.es/utterances.html?src=https://utteranc.es/client.js";
            this.page = api + "&repo=" + this.repo + "&issue-term=" + this.issue_term + "&theme=" + this.theme
                + "&crossorigin=" + this.cross_origin + "&url=" + this.url + "&origin=" + this.origin
                + "&pathname=" + this.pathname + "&title=" + this.title
                + "&description=" + this.description + "&label=" + this.label;
            // this.page='https://utteranc.es/utterances.html?src=https%3A%2F%2Futteranc.es%2Fclient.js&repo=wumoxi%2Fcomments&issue-term=pathname&label=production&theme=github-light&crossorigin=anonymous&url=http%3A%2F%2Flocalhost%3A8080%2F&origin=http%3A%2F%2Flocalhost%3A8080&pathname=index&title=%E6%AD%A6%E6%B2%AB%E6%B1%90'
            window.addEventListener('message', (e) => {
                const data = e.data;
                if (data && data.type === 'resize' && data.height) {
                    this.height = data.height + "px";
                }
            });
        },
        computed: {
            origin() {
                return window.location.origin;
            },
            url() {
                return window.location.href;
            },
            pathname(){
                return window.location.pathname;
            },
            src() {
                let params = [];
                params.push()
            }
        }
    };

</script>

<style lang="scss">
    .utterances {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
    }

    .utterances-frame {
        position: absolute;
        left: 0;
        right: 0;
        width: 1px;
        min-width: 100%;
        max-width: 100%;
        height: 100%;
        border: 0;
    }
</style>
