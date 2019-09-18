import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Features from './views/Features.vue'
import Company from './views/Company.vue'
import Pricing from './views/Pricing.vue'
import Register from './views/Register.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/company',
            name: 'company',
            component: Company
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: Pricing
        },
        {
            path: '/features',
            name: 'features',
            component: Features
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ]
})

export default router