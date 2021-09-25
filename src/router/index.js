import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            name: 'main',
            path: '/',
            component: () =>
                import ('../page/Main')
        },
        {
            name: 'order',
            path: '/order',
            component: () =>
                import ('../page/Order'),
            children: [{
                    name: 'basket',
                    path: 'basket',
                    component: () =>
                        import ('../page/Basket')
                },
                {
                    name: 'form',
                    path: 'form',
                    component: () =>
                        import ('../page/Form')
                }
            ]
        },
    ]
})