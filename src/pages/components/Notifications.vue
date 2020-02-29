<template>
    <div class="section section-notifications" id="notifications">
        <div class="space"></div>
        <div class="container">
            <h4>Notifications</h4>
        </div>
        <alert dismissible type="success">
            <div class="alert-icon">
                <i class="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong> You successfully read this important alert
            message.
        </alert>
        <alert dismissible type="info">
            <div class="alert-icon">
                <i class="now-ui-icons travel_info"></i>
            </div>
            <strong>Heads up!</strong> This alert needs your attention, but it's not
            super important.
        </alert>

        <alert dismissible type="warning">
            <div class="alert-icon">
                <i class="now-ui-icons ui-1_bell-53"></i>
            </div>
            <strong>Warning!</strong> Better check yourself, you're not looking too
            good.
        </alert>

        <alert dismissible type="danger">
            <div class="alert-icon">
                <i class="now-ui-icons objects_support-17"></i>
            </div>
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </alert>
    </div>
</template>
<script>
    import {Alert} from '@/components';

    export default {
        components: {
            Alert
        }
    };
</script>
<style></style>
