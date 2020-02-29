<template>
    <div class="section section-javascript" id="javascriptComponents">
        <div class="container">
            <h3 class="title">Javascript components</h3>
            <div class="row" id="modals">
                <div class="col-md-6 modal-buttons">
                    <h4>Modal</h4>
                    <n-button @click.native="modals.classic = true" type="primary">
                        Launch Modal
                    </n-button>
                    <n-button @click.native="modals.mini = true" type="warning">
                        Launch Modal Mini
                    </n-button>
                </div>
                <div class="col-md-6 popover-buttons">
                    <h4>Popovers</h4>
                    <el-popover
                        placement="left"
                        popper-class="popover popover-primary"
                        ref="popover1"
                        trigger="click"
                        width="200"
                    >
                        <h3 class="popover-header">Popover On Left</h3>
                        <div class="popover-body">
                            Here will be some very useful information about his popover.
                        </div>
                    </el-popover>

                    <el-popover
                        placement="top-start"
                        popper-class="popover popover-success"
                        ref="popover2"
                        trigger="click"
                        width="200"
                    >
                        <h3 class="popover-header">Popover On Top</h3>
                        <div class="popover-body">
                            Here will be some very useful information about his popover.
                        </div>
                    </el-popover>

                    <el-popover
                        placement="right"
                        popper-class="popover popover-danger"
                        ref="popover3"
                        trigger="click"
                        width="200"
                    >
                        <h3 class="popover-header">Popover On Right</h3>
                        <div class="popover-body">
                            Here will be some very useful information about his popover.
                        </div>
                    </el-popover>

                    <el-popover
                        placement="bottom"
                        popper-class="popover"
                        ref="popover4"
                        trigger="click"
                        width="200"
                    >
                        <h3 class="popover-header">Popover On Bottom</h3>
                        <div class="popover-body">
                            Here will be some very useful information about his popover.
                        </div>
                    </el-popover>

                    <n-button type="default" v-popover:popover1>
                        On left
                    </n-button>
                    <n-button type="default" v-popover:popover2>
                        On top
                    </n-button>
                    <n-button type="default" v-popover:popover3>
                        On right
                    </n-button>
                    <n-button type="default" v-popover:popover4>
                        On bottom
                    </n-button>
                </div>
                <br/>
                <br/>
                <div class="col-md-6">
                    <h4>Datetimepicker</h4>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="datepicker-container">
                                <fg-input>
                                    <el-date-picker
                                        placeholder="Date Time Picker"
                                        popper-class="date-picker date-picker-primary"
                                        type="date"
                                        v-model="pickers.datePicker"
                                    >
                                    </el-date-picker>
                                </fg-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 tooltip-buttons">
                    <h4>Tooltips</h4>
                    <el-tooltip
                        class="item"
                        content="Tooltip on the left"
                        placement="left"
                    >
                        <n-button class="btn btn-default btn-tooltip">On left</n-button>
                    </el-tooltip>
                    <el-tooltip class="item" content="Tooltip on top" placement="top">
                        <n-button class="btn btn-default btn-tooltip">On top</n-button>
                    </el-tooltip>
                    <el-tooltip
                        class="item"
                        content="Tooltip on bottom"
                        placement="bottom"
                    >
                        <n-button class="btn btn-default btn-tooltip">On bottom</n-button>
                    </el-tooltip>
                    <el-tooltip
                        class="item"
                        content="Tooltip on bottom"
                        placement="right"
                    >
                        <n-button class="btn btn-default btn-tooltip">On right</n-button>
                    </el-tooltip>
                    <div class="clearfix"></div>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
        <!-- Classic Modal -->
        <modal :show.sync="modals.classic" headerClasses="justify-content-center">
            <h4 class="title title-up" slot="header">Modal title</h4>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large language
                ocean. A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in which
                roasted parts of sentences fly into your mouth.
            </p>
            <template slot="footer">
                <n-button>Nice Button</n-button>
                <n-button @click.native="modals.classic = false" type="danger"
                >Close
                </n-button
                >
            </template>
        </modal>

        <!-- small modal -->
        <modal
            :show-close="false"
            :show.sync="modals.mini"
            class="modal-primary"
            headerClasses="justify-content-center"
            type="mini"
        >
            <div class="modal-profile" slot="header">
                <i class="now-ui-icons users_circle-08"></i>
            </div>
            <p>Always have an access to your profile</p>
            <template slot="footer">
                <n-button link type="neutral">Back</n-button>
                <n-button @click.native="modals.mini = false" link type="neutral"
                >Close
                </n-button
                >
            </template>
        </modal>
    </div>
</template>
<script>
    import {Card, Button, Modal, FormGroupInput} from '@/components';
    import {Popover, Tooltip, DatePicker} from 'element-ui';

    export default {
        components: {
            Card,
            Modal,
            [Button.name]: Button,
            [Popover.name]: Popover,
            [Tooltip.name]: Tooltip,
            [DatePicker.name]: DatePicker,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                modals: {
                    classic: false,
                    mini: false
                },
                pickers: {
                    datePicker: ''
                }
            };
        }
    };
</script>
<style lang="scss">
    #javascriptComponents {
        .modal-buttons,
        .popover-buttons,
        .tooltip-buttons {
            .btn + .btn {
                margin-left: 3px;
            }
        }
    }
</style>
