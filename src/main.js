import Vue from 'vue';
import {Message, Progress, Backtop, Icon} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue';
import router from '@/router';
import VueMarkdown from 'vue-markdown'
import NowUiKit from '@/plugins/now-ui-kit';
import FontAwesome from '@/plugins/font-awesome';
import PrismJS from '@/plugins/prism';
import TopProgress from 'vue-top-progress'
import VueWordCloud from 'vuewordcloud';



Vue.component(VueWordCloud.name, VueWordCloud);
Vue.component(Progress.name, Progress);
Vue.component(Backtop.name, Backtop);
Vue.component(Icon.name, Icon);
Vue.component('vue-markdown', VueMarkdown);
Vue.prototype.$message = Message;
Vue.prototype.$prism = PrismJS;
Vue.config.productionTip = false;
Vue.use(TopProgress);
Vue.use(NowUiKit);
Vue.use(FontAwesome);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
