//import equal from 'deep-equal'

export default {
    state: {
        orderedItems: [],
        //popup
        time: 0,
        number: 4,
        selected: 0,
        selectedItems: [],
        createItem: {
            id: Math.random(),
            title: '',
            img: '',
            descr: [],
            price: 0,
            number: 0
        },
        itemsPopup: [{
                id: 1,
                title: "Хокку",
                text: "Треска в соусе «Терияки», огурец, такуан, сливочный сыр, кунжут белый, кунжут черный, соус «Майо», нори, рис",
                gr: "205",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%A5%D0%BE%D0%BA%D0%BA%D1%83_urSW5eM.jpg",
            },
            {
                id: 2,
                title: "Феникс",
                text: "Отварные тигровые креветки, огурец, панировочные сухари, сливочный сыр, соус «Лава», рис, нори.",
                gr: "250",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81_CGnTsDk.jpg",
            },
            {
                id: 3,
                title: "Эби стронг ролл",
                text: "Тигровые креветки, снежный краб, сыр творожный, кунжут белый, рис, нори",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D1%8D%D0%B1%D0%B8-%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B3_10Fj9G3.jpg",
            },
            {
                id: 4,
                title: "Цезарь ролл",
                text: "Курица копченая, сыр творожный, кунжут белый, салат «Айсберг», помидор, рис, нори.",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8C_4_VPIXVu2.jpg",
            },
            {
                id: 5,
                title: "Небраска",
                text: "Тигровые креветки в сухарях, сливочный сыр, помидор, панировочные сухари, остро-сладкий соус, луковая крошка, нори, рис",
                gr: "160",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%9D%D0%B5%D0%B1%D1%80%D0%B0%D1%81%D0%BA%D0%B0_PhImwhP.jpg",
            },
            {
                id: 6,
                title: "Вакай",
                text: "Мидии, сливочный сыр, твердые сорта сыров, кунжут, соус «майонезно-чесночный», рис, нори.",
                gr: "240",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%92%D0%B0%D0%BA%D0%B0%D0%B9_W6HrJ4W.jpg",
            },
            {
                id: 7,
                title: "Фрай",
                text: "Снежный краб, сыр сливочный, помидор, лук зеленый, соус «Ореховый», соус «Унаги», рис",
                gr: "210",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%A4%D1%80%D0%B0%D0%B9_Vgkhm5G.jpg",
            },
            {
                id: 8,
                title: "Жареная тортилья с курицей и беконом",
                text: 'Курица копченая,бекон, сыр творожный, соус "Барбекю", соус «майонезно-чесночный», салат «Айсберг», помидор, тортилья пшеничная с сыром.',
                gr: "210",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%A2%D0%BE%D1%80%D1%82%D0%B8%D0%BB%D1%8C%D1%8F_%D1%81_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B8_%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9_1_dWNlnHS.jpg",
            },
            {
                id: 9,
                title: "Фишка",
                text: "Кета в сухарях, плавленный сыр, лук зеленый, огурец, соус «Унаги», кляр, нори, рис",
                gr: "190",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%A4%D0%B8%D1%88%D0%BA%D0%B0_3md3MK2.jpg",
            },
            {
                id: 10,
                title: "Ацуи с лососем",
                text: "Лосось с/с, тамаго, сливочный сыр, соус «Спайси», рис, нори",
                gr: "220",
                open: false,
                selected: false,
                img: "http://imagiro.ru/media/uploads/catalog/%D0%90%D1%86%D1%83%D0%B8-%D1%81-%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC_1_4GTnZiR.jpg",
            },
        ],
        itemsSpices: [{
                id: 1,
                title: "Набор Специй",
                img: "https://imagiro.ru/static/i/svg/package_set.svg",
                count: 0,
                price: 30,
            },
            {
                id: 2,
                title: "Соевый соус",
                img: "https://imagiro.ru/static/i/svg/sauce.svg",
                count: 0,
                price: 20,
            },
            {
                id: 3,
                title: "Имбирь",
                img: "https://imagiro.ru/static/i/svg/ginger.svg",
                count: 0,
                price: 10,
            },
            {
                id: 4,
                title: "Васаби",
                img: "https://imagiro.ru/static/i/svg/wasabi.svg",
                count: 0,
                price: 10,
            },
            {
                id: 5,
                title: "Палочки",
                img: "https://imagiro.ru/static/i/svg/chopsticks.svg",
                count: 0,
                price: 10,
            },
            {
                id: 6,
                title: "Ложка/вилка",
                img: "https://imagiro.ru/static/i/svg/spoon.svg",
                count: 0,
                price: 10,
            },
        ]
    },
    getters: {
        getSpicesItems(state) {
            return state.itemsSpices
        },
        getOrderedItems(state) {
            return state.orderedItems
        },
        getTotalPrice(state) {
            let sum = 0
                //   if (state.orderedItems.length <= 0) return sum
            sum += state.orderedItems.reduce((sum, item) => {
                sum += item.price * item.number
                return sum
            }, 0)
            sum += state.itemsSpices.reduce((sum, item) => {
                sum += item.price * item.count
                return sum
            }, 0)
            return sum
        },
        getTotalNumber(state) {
            if (state.orderedItems.length <= 0) return 0
            return state.orderedItems.reduce((sum, item) => {
                sum += item.number
                return sum
            }, 0)
        },
        //popup
        getPopupItems(state) {
            return state.itemsPopup
        },
        getNumber(state) {
            return state.number
        },
        getNumberPrice(state) {
            if (state.number === 4) {
                return 899
            } else if (state.number === 6) {
                return 1350
            } else if (state.number === 8) {
                return 1650
            }
        },
        getSelectedItems(state) {
            return state.selectedItems
        },
        getCreateItem(state) {
            return state.createItem
        }
    },
    mutations: {
        incrementSpicesCount(state, payload) {
            state.itemsSpices.find(item => {
                if (item.id === payload.id) {
                    item.count++
                        return true
                }
            })

        },
        decrementSpicesCount(state, payload) {
            state.itemsSpices.find(item => {
                if (item.id === payload.id) {
                    if (item.count > 0) {
                        item.count--
                    }
                    return true
                }
            })
        },
        addOrderedItems(state, payload) {
            if (state.orderedItems.length === 0) state.orderedItems.push(payload)

            if (state.orderedItems.find(item => (item.title === payload.title)) !== undefined) { //одинаковый
                this.commit('incrementNumber', payload)
            } else {
                state.orderedItems.find(item => { //новый
                    if (item.title !== payload.title) {
                        item.id = Math.random()
                        state.orderedItems.push(payload)
                        this.commit('incrementNumber', payload)
                        return true
                    }
                })
            }
        },
        addCreateItem(state, payload) {
            state.orderedItems.push(payload)
            this.commit('clearSelected')
        },
        removeOrderedItems(state, payload) {
            state.orderedItems = state.orderedItems.filter(item => {
                if (item.id !== payload.id) {
                    return 1
                } else {
                    item.number = 0
                }
            })
        },
        incrementNumber(state, payload) {
            state.orderedItems.find(item => {
                if (item.id === payload.id) {
                    item.number++
                        return true
                }
            })
        },
        decrementNumber(state, payload) {
            state.orderedItems.find(item => {
                if (item.id === payload.id) {
                    if (item.number > 1) {
                        item.number--
                    }
                    return true
                }
            })
        },
        //popup
        setNumber(state, payload) {
            if (payload !== state.number) {
                state.selectedItems.forEach(item => {
                    item.selected = false
                })
                state.selectedItems = []
            }
            state.createItem = {
                id: Math.random(),
                title: '',
                descr: [],
                price: 0,
                number: 0
            }
            state.number = payload
        },
        addSelectItem(state, payload) {
            if (state.selectedItems.length === state.number) return
            state.itemsPopup.find(item => {
                if (item.id === payload.id) {
                    item.selected = true
                    state.selectedItems.push(item)
                    return true
                }
            })
        },
        removeSelectItem(state, payload) {
            state.selectedItems = state.selectedItems.filter(item => {
                if (item.id !== payload.id) {
                    item.selected = true
                    return true
                } else {
                    item.selected = false
                    return false
                }
            })
        },
        order(state) {
            state.createItem.title = `Набор «Собери сам» ${state.number} ролла`
            if (state.number === 4) {
                state.createItem.price = 899
                state.createItem.img = 'http://imagiro.ru/media/uploads/custom_item_set/Povar_04.svg'
            } else if (state.number === 6) {
                state.createItem.price = 1350
                state.createItem.img = 'http://imagiro.ru/media/uploads/custom_item_set/Povar_06.svg'
            } else if (state.number === 8) {
                state.createItem.price = 1750
                state.createItem.img = 'http://imagiro.ru/media/uploads/custom_item_set/Povar_08.svg'
            }
            state.createItem.number += 1

            state.createItem.descr = state.selectedItems.slice()
            this.commit('addCreateItem', state.createItem)
            state.createItem = { //после заказа всегда такое значение
                id: Math.random(),
                title: '',
                descr: [],
                price: 0,
                number: 0
            }

        },
        clearSelected(state) {
            state.selectedItems = []
            for (let i = 0; i < state.itemsPopup.length - 1; i++) {
                state.itemsPopup[i].selected = false
            }
        }
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
        //popup
        changeNumber({ commit }, payload) {
            commit('setNumber', payload)
        },
        toggleSelect({ commit, state }, payload) {
            state.itemsPopup.find(item => {
                if (item.id === payload.id) {
                    if (item.selected === true) {
                        commit('removeSelectItem', payload)

                    } else {
                        commit('addSelectItem', payload)
                    }
                    return true
                }
            })
        },
        clearSelected({ commit }) {
            commit('clearSelected')
        },
        order({ commit }) {
            commit('order')
        },
        incrementSpicesCount({ commit }, payload) {
            commit('incrementSpicesCount', payload)
        },
        decrementSpicesCount({ commit }, payload) {
            commit('decrementSpicesCount', payload)
        }
    }
}