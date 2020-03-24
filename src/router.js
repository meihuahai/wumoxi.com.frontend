import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Info from './pages/Info.vue';
import Archives from './pages/Archives.vue';
import About from './pages/About.vue';
import Navbar from './layout/Navbar.vue';
import Footer from './layout/Footer.vue';
import Categories from './pages/Categories';
import Labels from './pages/labels';
import LabelsList from './pages/LabelsList';
import NotFound from './pages/404';
import CategoriesList from './pages/CategoriesList';
import Questions from './pages/Questions';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/404',
            name: '404',
            components: {default: NotFound, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/',
            name: 'index',
            components: {default: Index, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            // use vue router dynamic segment.
            path: '/info/:id',
            name: 'info',
            components: {default: Info, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            // use vue router dynamic segment.
            path: '/labels',
            name: 'labels',
            components: {default: Labels, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            // use vue router dynamic segment.
            path: '/labels/:name',
            name: 'labels-list',
            components: {default: LabelsList, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/archives',
            name: 'archives',
            components: {default: Archives, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {default: About, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/categories',
            name: 'categories',
            components: {default: Categories, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/categories/:name',
            name: 'categories-list',
            components: {default: CategoriesList, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/questions',
            name: 'questions',
            components: {default: Questions, header: Navbar, footer: Footer},
            props: {
                header: {colorOnScroll: 400,},
                footer: {backgroundColor: 'black'}
            }
        },
        // Ref: https://stackoverflow.com/questions/45619407/how-to-create-a-404-component-in-vuejs-using-vue-router
        {
            path: '*',
            redirect: '/404',
            hidden: true
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
