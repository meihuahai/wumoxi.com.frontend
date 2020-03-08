import '@/assets/scss/font-awesome.scss';
import VueLazyload from 'vue-lazyload';

export default {
    install(Vue) {
        Vue.use(VueLazyload, {
            observer: true,
            // optional
            observerOptions: {
                rootMargin: '0px',
                threshold: 0.1
            }
        });
    }
};
