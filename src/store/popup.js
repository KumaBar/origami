export default {
    state: {
        isOpen: false
    },
    getters: {
        getOpenPopup(state) {
            return state.isOpen
        }
    },
    mutations: {
        open(state) {
            state.isOpen = true
        },
        close(state) {
            state.isOpen = false
        }
    },
    actions: {
        openPopup({ commit, }) {
            commit('open')

        },
        closePopup({ commit, }) {
            commit('close')
        }

    },

}