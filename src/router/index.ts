import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/modules/Home/Home.vue'),
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: () => import('@/modules/Blogs/Blogs.vue'),
    },
    {
        path: '/talks',
        name: 'Talks',
        component: () => import('@/modules/Talks/Talks.vue'),
    },
    {
        path: '/streams',
        name: 'Streams',
        component: () => import('@/modules/Streams/Streams.vue'),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/modules/Projects/Projects.vue'),
    },
    {
        path: '/community',
        name: 'Community',
        component: () => import('@/modules/Community/Community.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/modules/NotFound/NotFound.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
