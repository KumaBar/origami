export default {
    state: {
        orderedItems: []
    },
    getters: {
        getOrderedItems(state) {
            return state.orderedItems
        },
        getTotalPrice(state) {
            if (state.orderedItems.length <= 0) return 0
            return state.orderedItems.reduce((sum, item) => {
                sum += item.price * item.number
                return sum
            }, 0)
        },
        getTotalNumber(state) {
            if (state.orderedItems.length <= 0) return 0
            return state.orderedItems.reduce((sum, item) => {
                sum += item.number
                return sum
            }, 0)
        }
    },
    mutations: {
        addOrderedItems(state, payload) {
            if (state.orderedItems.length === 0) state.orderedItems.push(payload)

            if (state.orderedItems.find(item => (item.title === payload.title)) !== undefined) {
                this.commit('incrementNumber', payload)
            } else {
                state.orderedItems.find(item => {
                    if (item.title !== payload.title) {
                        item.id = Math.random()
                        state.orderedItems.push(payload)
                        this.commit('incrementNumber', payload)
                        return true
                    }
                })
            }
            console.log(state.orderedItems)
        },
        removeOrderedItems(state, payload) {
            state.orderedItems = state.orderedItems.filter(item => {
                if (item.title !== payload.title) {
                    return 1
                } else {
                    item.number = 0
                }
            })
        },
        incrementNumber(state, payload) {
            state.orderedItems.find(item => {
                if (item.title === payload.title) {
                    item.number++
                        return true
                }
            })
        },
        decrementNumber(state, payload) {
            state.orderedItems.find(item => {
                if (item.title === payload.title) {
                    if (item.number > 1) {
                        item.number--
                    }
                    return true
                }
            })
        },
    },
    actions: {
        addOrderedItems({ commit }, payload) {
            commit('addOrderedItems', payload)
        },
        removeOrderedItems({ commit }, payload) {
            commit('removeOrderedItems', payload)
        },
        incrementNumber({ commit }, payload) {
            commit('incrementNumber', payload)
        },
        decrementNumber({ commit }, payload) {
            commit('decrementNumber', payload)
        },
    }
}