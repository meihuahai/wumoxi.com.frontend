<template>
    <div class="labels-page">
        <vue-topprogress ref="topProgress" color="red"></vue-topprogress>
        <div class="section">
            <div class="container">
                <div class="col-md-12 ml-auto col-xl-12 mr-auto">
                    <div style="height: 100%; width: 100%; position: relative; top: 0; left: 0; background-color: red; margin-top: 10rem;">
                        <div :style="(progressVisible && progress)
								? {
									filter: 'blur(8px)',
									opacity: 0.3,
									pointerEvents: 'none',
									transform: 'scale(0.7,0.7)',
								}
								: {}" style="height: 100%; width: 100%; position: absolute; left: 0; top: 0; transition-duration: 1s; min-height: 20vh;">
                            <vue-word-cloud
                                :animation-duration="animationDuration"
                                :words="words"
                                :color="'#403030'"
                                :rotation="0"
                                :progress.sync="progress"
                                :spacing="spacing"
                                :font-family="fontFamily"
                                :font-size-ratio="fontSizeRatio"
                            >
                                <template slot-scope="props">
                                    <div
                                        slot="activator"
                                        style="cursor: pointer;"
                                        @click="onWordClick(props.word)"
                                    >{{ props.text }}</div>
                                </template>
                            </vue-word-cloud>
                        </div>

                        <div class="word-completed-progress">
                            <el-progress
                                v-if="progressVisible && progress"
                                type="circle"
                                :percentage="parseInt((progress.completedWords / progress.totalWords) * 100)"
                            >
                            </el-progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {getLabelListAll} from "@/api/label";

    export default {
        data() {
            return {
                labels: [],
                fontFamily: "Russo One",
                fontSize: 2,
                fontSizeRatioValueIndex: 3,
                fontSizeRatioValues: [0, 1/20, 1/5, 1/2, 1],
                spacingValueIndex: 4,
                spacingValues: [0, 1/4, 1/2, 1, 2],
                progress: undefined,
                progressVisible: true,
                // 动画持续时间
                animationDurationValueIndex: 2,
                animationDurationValues: [0, 1000, 5000, 10000],
            }
        },
        created() {
            this.handleGetLabelAll();
        },
        beforeRouteUpdate(to, from, next) {
            console.log(to.params.name);
            this.$router.push()
        },
        methods: {
            onWordClick: function(word) {
                this.$router.push({name: 'labels-list', params: {name: word[0]}} )
            },
            setWorkFontSize(data) {
                let result = [];
                if (data instanceof Array) {
                    for (const i in data) {
                        const item = data[i];
                        if (item instanceof Object) {
                            let ta = [];
                            ta.push(item.name);
                            ta.push(parseInt(Math.random()*this.fontSize));
                            result.push(ta);
                        }
                    }
                }
                return result;
            },
            handleGetLabelAll() {
                getLabelListAll().then(response => {
                    this.labels = response.data;
                })
            },
        },
        watch: {
            progress(currentProgress, previousProgress) {
                this.progressVisible = true;
                if (previousProgress) {
                    this.progressVisible = false;
                }
            }
        },
        computed: {
            fontSizeRatio: function() {
                return this.fontSizeRatioValues[this.fontSizeRatioValueIndex];
            },
            words: function () {
                return this.setWorkFontSize(this.labels)
            },
            spacing: function() {
                return this.spacingValues[this.spacingValueIndex];
            },
            animationDuration: function() {
                return this.animationDurationValues[this.animationDurationValueIndex];
            },
        }
    };
</script>
<style>
    .word-completed-progress{
        position: fixed;
        left: 50%;
        top: 50%;
        width:126px;
        height:126px;
        margin-left:-63px;
        margin-top:-63px;
    }
</style>
