<template>
    <div class="page-header clear-filter" filter-color="orange">
        <div
            class="page-header-image"
            style="background-image: url('img/login.jpg')"
        ></div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <card plain type="login">
                        <div class="logo-container" slot="header">
                            <img alt="" v-lazy="'img/now-logo.png'"/>
                        </div>

                        <fg-input
                            addon-left-icon="now-ui-icons users_circle-08"
                            class="no-border input-lg"
                            placeholder="First Name..."
                        >
                        </fg-input>

                        <fg-input
                            addon-left-icon="now-ui-icons text_caps-small"
                            class="no-border input-lg"
                            placeholder="Last Name..."
                        >
                        </fg-input>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <a
                                    class="btn btn-primary btn-round btn-lg btn-block"
                                    href="#pablo"
                                >Get Started</a
                                >
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <a class="link footer-link" href="#pablo">Create Account</a>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <a class="link footer-link" href="#pablo">Need Help?</a>
                                </h6>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import {Card, Button, FormGroupInput} from '@/components';
    import MainFooter from '@/layout/MainFooter';

    export default {
        name: 'login-page',
        bodyClass: 'login-page',
        components: {
            Card,
            MainFooter,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        }
    };
</script>
<style></style>
