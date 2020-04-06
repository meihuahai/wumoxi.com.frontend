<template>
    <div id="comment" class="utterances" :style="{height: height}">
        <iframe
            class="utterances-frame"
            v-bind:title="title"
            scrolling="no"
            allowtransparency="true"
            :src="src">
        </iframe>
    </div>
</template>

<script>
    export default {
        name: 'comment',
        props: {
            title: {
                type: String,
                default: 'HelloWorld'
            },
            description: {
                type: String,
                default: 'HelloWorldDescription',
            },
            label: {
                type: Array
            },
        },
        data() {
            return {
                height: 0 + "px",
                params: {
                    url: window.location.href,
                    repo: 'wumoxi/comments',
                    theme: 'github-light',
                    origin: window.location.origin,
                    "issue-term": 'pathname',
                    crossorigin: "anonymous",
                }
            }
        },
        created() {
            window.addEventListener('message', (e) => {
                const data = e.data;
                if (data && data.type === 'resize' && data.height) {
                    this.height = data.height + "px";
                }
            });
        },
        computed: {
            src() {
                this.params.pathname = this.title;
                this.params.title = this.title;
                this.params.description = this.description;
                this.params.label = this.labels();
                console.log(this.params.label);
                let s = ['https://utteranc.es/utterances.html?src=https://utteranc.es/client.js'];
                for (let item in this.params) {
                    if (this.params.hasOwnProperty(item)) {
                        s.push(item + "=" + encodeURIComponent(this.params[item]));
                    }
                }
                return s.join('&');
            },
        },
        methods: {
            labels() {
                if (this.label) {
                    let s = [];
                    for (let lab of this.label) {
                        if (lab.hasOwnProperty('name')) {
                            s.push(lab.name)
                        }
                    }
                    return s.join(', ');
                }
                return '';
            }
        }
    };

</script>

<style lang="scss">
    .utterances {
        position: relative;
        box-sizing: border-box;
        width: 100%;
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
