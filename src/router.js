import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about-us',
            component: AboutUs
        },    
        {
            path: '/portfolio',
            name: 'portfolio',
            component: ProjectsIndex
        },    
    ]
});

export { router };