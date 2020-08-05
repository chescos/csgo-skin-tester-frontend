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
    meta: {
      title: 'Category',
    },
  },
  {
    path: '/categories/:category/items/:item',
    name: 'item',
    component: Item,
    meta: {
      title: 'Item',
    },
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: 'Not Found',
    },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Mimic the native scroll behaviour of browsers.
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});

const titleSuffix = 'CS:GO Skin Tester';

router.afterEach((to) => {
  // Use next tick to handle router history correctly.
  Vue.nextTick(() => {
    const { title } = to.meta;

    document.title = title
      ? `${title} | ${titleSuffix}`
      : titleSuffix;
  });
});

export default router;
