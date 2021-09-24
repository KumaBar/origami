import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

import order from './order'
import navigation from './navigation'
export default new Vuex.Store({
    modules: {
        order,
        navigation
    },
    plugins: [createPersistedState()]
})