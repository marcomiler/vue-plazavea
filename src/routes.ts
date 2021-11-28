import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';
import { WebPages }                 from "@/contants";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: WebPages.HOME,
        components: {
            default: () => import('@/views/Home.vue'),
            toolbar: () => import('@/components/base/Navbar.vue')
        }
    },
    {
        path: '/product',
        name: WebPages.PRODUCT,
        components: {
            default: () => import('@/views/product/ProductsView.vue'),
            toolbar: () => import('@/components/base/Navbar.vue')
        }
    },
    {
        path: '/product-detail/:id',
        name: WebPages.PRODUCTDETAIL,
        components: {
            default: () => import('@/views/product/ProductDetails.vue'),
            toolbar: () => import('@/components/base/Navbar.vue')
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];

/**
 *
 */
const router = new VueRouter({
    routes,
    mode: 'history'
} as any);


export default router;