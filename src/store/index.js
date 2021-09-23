import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

import item from './item'
import order from './order'
export default new Vuex.Store({
    modules: {
        item,
        order
    },
    plugins: [createPersistedState()]
})