<template>
    <navbar menu-classes="ml-auto"  type="info">
        <template slot-scope="{ toggle, isToggled }">
            <router-link class="navbar-brand" to="/presentation" v-popover:popover1>
                {{ SiteName }}
            </router-link>
        </template>

        <template slot="navbar-menu">
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://www.creative-tim.com/product/vue-now-ui-kit"
                    target="_blank"
                >
                    <i class="now-ui-icons ui-1_send"></i>
                    <p>首 页</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://www.creative-tim.com/product/vue-now-ui-kit"
                    target="_self"
                >
                    <i class="now-ui-icons shopping_tag-content"></i>
                    <p>归 档</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://www.creative-tim.com/product/vue-now-ui-kit"
                    target="_blank"
                >
                    <i class="fab fa-github"></i>
                    <p>Github</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://www.creative-tim.com/product/vue-now-ui-kit"
                    target="_blank"
                >
                    <i class="now-ui-icons objects_support-17"></i>
                    <p>关 于</p>
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
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        },
        data() {
            return {
                "SiteName": "武沫汐",
            }
        }
    };
</script>

<style scoped></style>
