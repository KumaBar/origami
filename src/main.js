import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import router from './router/index'
import store from './store/index'


Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')