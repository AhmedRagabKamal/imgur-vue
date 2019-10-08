import Vue from 'vue';
import Router from 'vue-router';
import galleryRoutes from '@/gallery/routes';
import staticRoutes from '@/static/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'gallery'
      }
    },
    ...galleryRoutes,
    ...staticRoutes
  ]
});
