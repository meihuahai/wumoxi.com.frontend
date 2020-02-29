<template>
    <div>
        <div class="page-header clear-filter" filter-color="orange">
            <parallax
                class="page-header-image"
                style="background-image:url('img/bg5.jpg')"
            >
            </parallax>
            <div class="container">
                <div class="photo-container">
                    <img alt="" src="img/ryan.jpg"/>
                </div>
                <h3 class="title">Ryan Scheinder</h3>
                <p class="category">Photographer</p>
                <div class="content">
                    <div class="social-description">
                        <h2>26</h2>
                        <p>Comments</p>
                    </div>
                    <div class="social-description">
                        <h2>26</h2>
                        <p>Comments</p>
                    </div>
                    <div class="social-description">
                        <h2>48</h2>
                        <p>Bookmarks</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="button-container">
                    <a class="btn btn-primary btn-round btn-lg" href="#button">Follow</a>
                    <a
                        class="btn btn-default btn-round btn-lg btn-icon"
                        href="#button"
                        rel="tooltip"
                        title="Follow me on Twitter"
                    >
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a
                        class="btn btn-default btn-round btn-lg btn-icon"
                        href="#button"
                        rel="tooltip"
                        title="Follow me on Instagram"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <h3 class="title">About me</h3>
                <h5 class="description">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
                    records all of his own music, giving it a warm, intimate feel with a
                    solid groove structure. An artist of considerable range.
                </h5>
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <h4 class="title text-center">My Portfolio</h4>
                    </div>
                    <tabs
                        class="nav-align-center"
                        pills
                        tab-content-classes="gallery"
                        tab-nav-classes="nav-pills-just-icons"
                        type="primary"
                    >
                        <tab-pane title="Profile">
                            <i class="now-ui-icons design_image" slot="label"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img class="img-raised" src="img/bg6.jpg"/>
                                        <img alt="" class="img-raised" src="img/bg11.jpg"/>
                                    </div>
                                    <div class="col-md-6">
                                        <img alt="" class="img-raised" src="img/bg7.jpg"/>
                                        <img alt="" class="img-raised" src="img/bg8.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </tab-pane>

                        <tab-pane title="Home">
                            <i class="now-ui-icons location_world" slot="label"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img alt="" class="img-raised" src="img/bg1.jpg"/>
                                        <img alt="" class="img-raised" src="img/bg3.jpg"/>
                                    </div>
                                    <div class="col-md-6">
                                        <img alt="" class="img-raised" src="img/bg8.jpg"/>
                                        <img alt="" class="img-raised" src="img/bg7.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </tab-pane>

                        <tab-pane title="Messages">
                            <i class="now-ui-icons sport_user-run" slot="label"></i>

                            <div class="col-md-10 ml-auto mr-auto">
                                <div class="row collections">
                                    <div class="col-md-6">
                                        <img alt="" class="img-raised" src="img/bg3.jpg"/>
                                        <img alt="" class="img-raised" src="img/bg8.jpg"/>
                                    </div>
                                    <div class="col-md-6">
                                        <img alt="" class="img-raised" src="img/bg7.jpg"/>
                                        <img class="img-raised" src="img/bg6.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </tab-pane>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Tabs, TabPane} from '@/components';

    export default {
        name: 'profile',
        bodyClass: 'profile-page',
        components: {
            Tabs,
            TabPane
        }
    };
</script>
<style></style>
