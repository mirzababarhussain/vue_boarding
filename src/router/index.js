import { createRouter, createWebHistory  } from "vue-router";

import HomePage from "@/Pages/HomePage.vue";
import JobsPage from "@/Pages/JobsPage.vue";
import JobDetailPage from "@/Pages/JobDetailPage.vue";
import AddJobPage from "@/Pages/AddJobPage.vue";
import EditJobPage from "@/Pages/EditJobPage.vue";
import AboutPage from "@/Pages/AboutPage.vue";
import NotFoundPage from "@/Pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsPage
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobDetailPage
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobPage
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobPage
        },
        {
            path: '/babar',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:catchAll(.*)',
            name: 'not found',
            component: NotFoundPage
        }
    ]
});
export default router;