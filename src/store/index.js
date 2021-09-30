import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

import order from './order'
import navigation from './navigation'
import popup from './popup'
export default new Vuex.Store({
    modules: {
        order,
        navigation,
        popup,
    },
    plugins: [createPersistedState()]
})