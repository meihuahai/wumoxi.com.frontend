<template>
    <navbar
        :color-on-scroll="colorOnScroll"
        :transparent="transparent"
        menu-classes="ml-auto"
        position="fixed"
        type="primary"
    >
        <template slot-scope="{ toggle, isToggled }">
            <router-link class="navbar-brand" to="/" v-popover:popover1>
                Now Ui Kit
            </router-link>
            <el-popover
                placement="bottom"
                popper-class="popover"
                ref="popover1"
                trigger="hover"
                width="200"
            >
                <div class="popover-body">
                    Designed by Invision. Coded by Creative Tim
                </div>
            </el-popover>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://www.creative-tim.com/product/vue-now-ui-kit"
                    target="_blank"
                >
                    <i class="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Download</p>
                </a>
            </li>
            <drop-down
                class="nav-item"
                icon="now-ui-icons design_app"
                tag="li"
                title="Components"
            >
                <nav-link to="/">
                    <i class="now-ui-icons business_chart-pie-36"></i> All components
                </nav-link>
                <a
                    class="dropdown-item"
                    href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
                    target="_blank"
                >
                    <i class="now-ui-icons design_bullet-list-67"></i> Documentation
                </a>
            </drop-down>
            <drop-down
                class="nav-item"
                icon="now-ui-icons design_image"
                tag="li"
                title="Examples"
            >
                <nav-link to="/landing">
                    <i class="now-ui-icons education_paper"></i> Landing
                </nav-link>
                <nav-link to="/login">
                    <i class="now-ui-icons users_circle-08"></i> Login
                </nav-link>
                <nav-link to="/profile">
                    <i class="now-ui-icons users_single-02"></i> Profile
                </nav-link>
            </drop-down>
            <li class="nav-item">
                <a
                    class="nav-link btn btn-neutral"
                    href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
                    target="_blank"
                >
                    <i class="now-ui-icons arrows-1_share-66"></i>
                    <p>Upgrade to PRO</p>
                </a>
            </li>

            <li class="nav-item">
                <a
                    class="nav-link"
                    data-placement="bottom"
                    href="https://twitter.com/CreativeTim"
                    rel="tooltip"
                    target="_blank"
                    title="Follow us on Twitter"
                >
                    <i class="fab fa-twitter"></i>
                    <p class="d-lg-none d-xl-none">Twitter</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    data-placement="bottom"
                    href="https://www.facebook.com/CreativeTim"
                    rel="tooltip"
                    target="_blank"
                    title="Like us on Facebook"
                >
                    <i class="fab fa-facebook-square"></i>
                    <p class="d-lg-none d-xl-none">Facebook</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    data-placement="bottom"
                    href="https://www.instagram.com/CreativeTimOfficial"
                    rel="tooltip"
                    target="_blank"
                    title="Follow us on Instagram"
                >
                    <i class="fab fa-instagram"></i>
                    <p class="d-lg-none d-xl-none">Instagram</p>
                </a>
            </li>
        </template>
    </navbar>
</template>

<script>
    import {DropDown, NavbarToggleButton, Navbar, NavLink} from '@/components';
    import {Popover} from 'element-ui';

    export default {
        name: 'main-navbar',
        props: {
            transparent: Boolean,
            colorOnScroll: Number
        },
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        }
    };
</script>

<style scoped></style>
