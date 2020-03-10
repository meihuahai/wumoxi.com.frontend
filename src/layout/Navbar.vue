<template>
    <navbar menu-classes="ml-auto" type="default">
        <template slot-scope="{ toggle, isToggled }">
            <router-link class="navbar-brand" to="/" v-popover:popover1>
                {{ Site }}
            </router-link>
        </template>
        <template slot="navbar-menu">
            <li v-for="link in links" :key="link.url" class="nav-item">
                <router-link class="nav-link" :to="link.url" v-if="!link.outside">
                    <i :class="link.icon"></i>
                    <p>{{ link.description }}</p>
                </router-link>
                <a class="nav-link" :href="link.url" :target="link.target" v-else>
                    <i :class="link.icon"></i>
                    <p>{{ link.description }}</p>
                </a>
            </li>
        </template>
    </navbar>
</template>

<script>
    import {DropDown, NavbarToggleButton, Navbar} from '@/components';
    import {Popover} from 'element-ui';
    const NavLinks = [
        {url: "/", description: "首 页", icon: "now-ui-icons ui-1_send", target: null, outside: false},
        {url: "/archives", description: "归 档", icon: "now-ui-icons shopping_tag-content", target: null, outside: false},
        {url: "https://www.github.com/wumoxi", description: "Github", icon: "fab fa-github", target:"_blank", outside: true},
        {url: "/about", description: "关 于", icon: "now-ui-icons objects_support-17", target: null, outside: false},
    ];
    export default {
        name: 'main-navbar',
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            [Popover.name]: Popover
        },
        data() {
            return {
                "Site": "武沫汐",
                "links": NavLinks,
            }
        },
    };
</script>

<style scoped></style>
