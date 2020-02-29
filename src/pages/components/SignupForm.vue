<template>
    <div
        class="section section-signup"
        style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
    >
        <div class="container">
            <div class="row">
                <card class="card-signup" color="orange" header-classes="text-center">
                    <template slot="header">
                        <h3 class="card-title title-up">Sign Up</h3>
                        <div class="social-line">
                            <a
                                class="btn btn-neutral btn-facebook btn-icon btn-round"
                                href="#pablo"
                            >
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a
                                class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round"
                                href="#pablo"
                            >
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a
                                class="btn btn-neutral btn-google btn-icon btn-round"
                                href="#pablo"
                            >
                                <i class="fab fa-google-plus"></i>
                            </a>
                        </div>
                    </template>
                    <template>
                        <fg-input
                            addon-left-icon="now-ui-icons users_circle-08"
                            class="no-border"
                            placeholder="First Name..."
                        >
                        </fg-input>

                        <fg-input
                            addon-left-icon="now-ui-icons text_caps-small"
                            class="no-border"
                            placeholder="Last Name..."
                        >
                        </fg-input>

                        <fg-input
                            addon-left-icon="now-ui-icons ui-1_email-85"
                            class="no-border"
                            placeholder="Email"
                        >
                        </fg-input>
                    </template>
                    <div class="card-footer text-center">
                        <n-button round size="lg" type="neutral">Get Started</n-button>
                    </div>
                </card>
            </div>
            <div class="col text-center">
                <router-link
                    class="btn btn-simple btn-round btn-white btn-lg"
                    to="/login"
                >
                    View Login Page
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import {Card, FormGroupInput, Button} from '@/components';

    export default {
        components: {
            Card,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        }
    };
</script>
<style></style>
