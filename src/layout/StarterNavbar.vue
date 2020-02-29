<template>
    <navbar menu-classes="ml-auto" position="fixed" type="primary">
        <template slot-scope="{ toggle, isToggled }">
            <router-link class="navbar-brand" to="/presentation" v-popover:popover1>
                My Site Name
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
            <drop-down tag="li" title="Sample Dropdown">
                <nav-link class="dropdown-item">
                    <i class="now-ui-icons shopping_box"></i> Headers
                </nav-link>
            </drop-down>
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
        }
    };
</script>

<style scoped></style>
