import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from '../views/Category.vue';
import Item from '../views/Item.vue';
import Inspector from '../views/Inspector.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'inspector',
    component: Inspector,
  },
  {
    path: '/categories/:category',
    name: 'category',
    component: Category,
  },
  {
    path: '/categories/:category/items/:item',
    name: 'item',
    component: Item,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
