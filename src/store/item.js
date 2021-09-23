export default {
    state: {
        open: false,
        dataItem: {}
    },
    getters: {
        getDataItem(state) {
            return state.dataItem
        },
        getOpen(state) {
            return state.open
        }
    },
    mutations: {
        setDataItem(state, payload) {
            state.dataItem = payload
        },
        setOpen(state) {
            state.open = !state.open
        }
    },
    actions: {
        openPopup({ commit }, payload) {
            commit('setDataItem', payload)
            commit('setOpen')
            console.log('open')
        },
        closePopup({ commit }) {
            commit('setOpen')
            console.log('close')
        },
    }
}
