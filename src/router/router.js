import { createRouter, createWebHistory } from 'vue-router'
import hello from '@/components/HelloWorld.vue'
import test from '@/components/Test.vue'

export const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path : '/', component : hello },
        { path : '/test', component : test }
    ]
});