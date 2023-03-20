
import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import("@/pages/Index.vue")
    },
    {
        path: '/register',
        name: 'registration',
        component: () => import("@/pages/Registration.vue"),
    },
    {
        path: '/users',
        name: 'users',
        component: () => import("@/pages/Users.vue"),
    },
    {
        path: '/users/:id',
        name: 'profile',
        component: () => import("@/pages/Profile.vue"),
    },
    {
        path: '/post/:id',
        name: 'post',
        component: () => import("@/pages/Post.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/pages/Login.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;