<template>
    <div class="section section-examples" data-background-color="black">
        <div class="space-50"></div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <router-link target="_blank" to="/landing">
                        <img alt="Image" class="img-raised" src="img/landing.jpg"/>
                    </router-link>
                    <router-link
                        class="btn btn-simple btn-primary btn-round"
                        to="/landing"
                    >View Landing Page
                    </router-link>
                </div>
                <div class="col">
                    <router-link target="_blank" to="/profile">
                        <img alt="Image" class="img-raised" src="img/profile.jpg"/>
                    </router-link>
                    <router-link
                        class="btn btn-simple btn-primary btn-round"
                        to="/profile"
                    >View Profile Page
                    </router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style></style>
