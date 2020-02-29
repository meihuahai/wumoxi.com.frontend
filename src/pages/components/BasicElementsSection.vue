<template>
    <div class="section section-basic" id="basic-elements">
        <div class="container">
            <h3 class="title">Basic Elements</h3>
            <h4>Buttons</h4>
            <p class="category">Pick your style</p>
            <div class="row">
                <div class="col-md-10">
                    <n-button type="primary">Default</n-button>
                    <n-button round type="primary">Round</n-button>
                    <n-button round type="primary">
                        <i class="now-ui-icons ui-2_favourite-28"></i> With Icon
                    </n-button>
                    <n-button icon round type="primary">
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                    </n-button>
                    <n-button round simple type="primary">Simple</n-button>
                </div>
            </div>
            <p class="category">Pick your size</p>
            <div class="row">
                <div class="col-md-10">
                    <n-button size="sm" type="primary">Small</n-button>
                    <n-button type="primary">Regular</n-button>
                    <n-button size="lg" type="primary">Large</n-button>
                </div>
            </div>
            <p class="category">Pick your color</p>
            <div class="row">
                <div class="col-md-10">
                    <n-button type="default">Default</n-button>
                    <n-button type="primary">Primary</n-button>
                    <n-button type="info">Info</n-button>
                    <n-button type="success">Success</n-button>
                    <n-button type="warning">Warning</n-button>
                    <n-button type="danger">Danger</n-button>
                    <n-button type="neutral">Neutral</n-button>
                </div>
            </div>
            <h4>Links</h4>
            <div class="row">
                <div class="col-md-8">
                    <n-button link type="default">Default</n-button>
                    <n-button link type="primary">Primary</n-button>
                    <n-button link type="info">Info</n-button>
                    <n-button link type="success">Success</n-button>
                    <n-button link type="warning">Warning</n-button>
                    <n-button link type="danger">Danger</n-button>
                    <n-button link type="neutral">Neutral</n-button>
                </div>
            </div>
            <div class="space-70"></div>
            <div id="inputs">
                <h4>Inputs</h4>
                <p class="category">Form Controls</p>
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <fg-input placeholder="Regular"></fg-input>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <fg-input class="has-success" value="Success"></fg-input>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <fg-input class="has-danger" value="Error Input"></fg-input>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <fg-input
                            addon-left-icon="now-ui-icons users_single-02"
                            placeholder="Left Nucleo Icon"
                        >
                        </fg-input>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <fg-input
                            addon-right-icon="now-ui-icons users_single-02"
                            placeholder="Right Nucleo Icon"
                        >
                        </fg-input>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <fg-input
                            addon-left-icon="now-ui-icons users_single-02"
                            class="no-border"
                            placeholder="No border left icon"
                        >
                        </fg-input>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <fg-input
                            addon-right-icon="now-ui-icons users_single-02"
                            class="no-border"
                            placeholder="No border right icon"
                        >
                        </fg-input>
                    </div>
                </div>
            </div>
            <div class="space-70"></div>
            <div class="row" id="checkRadios">
                <div class="col-sm-6 col-lg-3">
                    <p class="category">Checkboxes</p>
                    <n-checkbox v-model="checkboxes.unchecked">Unchecked</n-checkbox>
                    <n-checkbox v-model="checkboxes.checked">Checked</n-checkbox>
                    <n-checkbox disabled v-model="checkboxes.disabledUnchecked"
                    >Disabled Unchecked
                    </n-checkbox
                    >
                    <n-checkbox disabled v-model="checkboxes.disabledChecked"
                    >Disabled Checked
                    </n-checkbox
                    >
                </div>
                <div class="col-sm-6 col-lg-3">
                    <p class="category">Radios</p>
                    <n-radio label="1" v-model="radios.radioOn">Radio is On</n-radio>
                    <n-radio label="2" v-model="radios.radioOn">Radio is Off</n-radio>

                    <n-radio disabled label="1" v-model="radios.radioOff"
                    >Disabled radio is on
                    </n-radio
                    >
                    <n-radio disabled label="2" v-model="radios.radioOff"
                    >Disabled radio is off
                    </n-radio
                    >
                </div>
                <div class="col-sm-6 col-lg-3">
                    <p class="category">Toggle buttons</p>
                    <n-switch v-model="switches.defaultOn"></n-switch>
                    <br/>
                    <n-switch
                        off-text="OFF"
                        on-text="ON"
                        v-model="switches.defaultOff"
                    ></n-switch>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <p class="category">Sliders</p>
                    <slider v-model="sliders.simple"></slider>
                    <br/>
                    <slider :connect="true" type="primary" v-model="sliders.rangeSlider">
                    </slider>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        Button,
        Checkbox,
        Radio,
        FormGroupInput,
        Slider,
        Switch
    } from '@/components';

    export default {
        components: {
            [Button.name]: Button,
            [Checkbox.name]: Checkbox,
            [Radio.name]: Radio,
            [FormGroupInput.name]: FormGroupInput,
            [Switch.name]: Switch,
            [Option.name]: Option,
            Slider
        },
        data() {
            return {
                radios: {
                    radioOn: '2',
                    radioOff: '2'
                },
                checkboxes: {
                    unchecked: false,
                    checked: true,
                    disabledUnchecked: false,
                    disabledChecked: true
                },
                switches: {
                    defaultOn: true,
                    defaultOff: false
                },
                sliders: {
                    simple: 30,
                    rangeSlider: [20, 60]
                }
            };
        }
    };
</script>
<style></style>
