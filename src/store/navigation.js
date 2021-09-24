export default {
    state: {
        burgerIsOpen: false,
    },
    getters: {
        getBurgerOpen(state) {
            return state.burgerIsOpen
        }
    },
    mutations: {
        toggleBurger(state) {
            state.burgerIsOpen = !state.burgerIsOpen
        }
    },
    actions: {
        toggleBurger({ commit }) {
            commit('toggleBurger')
        }
    }
}