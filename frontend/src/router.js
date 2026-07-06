import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ExcusesView from './views/ExcusesView.vue'
import ExcuseDetailView from './views/ExcuseDetailView.vue'
import AddExcuseView from './views/AddExcuseView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/excuses/all', component: ExcusesView },
    { path: '/excuses/:http_code', component: ExcuseDetailView },
    { path: '/add', component: AddExcuseView },
    { path: '/:pathMatch(.*)*', component: NotFoundView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router