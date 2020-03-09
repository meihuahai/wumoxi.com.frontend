import Vue from 'vue';
import Router from 'vue-router';
import Starter from './pages/StarterPage.vue';
import Info from './pages/Info.vue';
import Archives from './pages/Archives.vue';
import About from './pages/About.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            components: {
                default: Starter,
                header: StarterNavbar,
                footer: StarterFooter
            },
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/info',
            name: 'info',
            components: {default: Info, header: StarterNavbar, footer: StarterFooter},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/archives',
            name: 'archives',
            components: {default: Archives, header: StarterNavbar, footer: StarterFooter},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {default: About, header: StarterNavbar, footer: StarterFooter},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
