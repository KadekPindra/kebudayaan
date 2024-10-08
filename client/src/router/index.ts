import HomeView from '@/views/homeView.vue';
import LoginView from '@/views/loginView.vue';
import RegisterView from '@/views/registerView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import type { Component } from 'vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import detailCulture from '@/views/detailCulture.vue';
import 'vue-router';
import ContactView from '@/views/contactView.vue';
declare module 'vue-router' {
    interface RouteMeta {
        layout?: Component 
    }
}
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                el: to.hash,
            };
        }
        return { top: 0 };
    },
    routes: [

        {
            path: '/budaya/:id',
            component: detailCulture
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            meta: {
                layout: AuthLayout
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                layout: AuthLayout
            }
        },
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/contact',
            component: ContactView,
        },
    ],
});

export default router;
