import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import slugify from 'slugify';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notification: null,
    categories: null,
  },

  getters: {
    isLoading: (state) => state.categories === null,
  },

  mutations: {
    setCategories: (state, payload) => {
      state.categories = payload.categories;
    },

    setNotification: (state, payload) => {
      state.notification = {
        ...payload,
        removeAt: Date.now() + 5000,
      };
    },

    clearNotification: (state) => {
      state.notification = null;
    },
  },

  actions: {
    fetchInitialData: (context) => {
      axios.get('https://api.csgoskins.gg/skins')
        .then((response) => {
          const map = {
            Shotgun: 'Heavy',
            Machinegun: 'Heavy',
            Gloves: 'Gloves',
            Knife: 'Knives',
            SMG: 'SMGs',
            Rifle: 'Rifles',
            'Sniper Rifle': 'Rifles',
            Pistol: 'Pistols',
          };

          const categories = response.data.skins.reduce((result, skin) => {
            const category = map[skin.item.type] || skin.item.type;
            const categorySlug = slugify(category, { lower: true });
            const itemSlug = slugify(skin.item.name, { lower: true });

            if (!result[categorySlug]) {
              // eslint-disable-next-line no-param-reassign
              result[categorySlug] = {
                name: category,
                items: {},
              };
            }

            if (!result[categorySlug].items[itemSlug]) {
              // eslint-disable-next-line no-param-reassign
              result[categorySlug].items[itemSlug] = {
                name: skin.item.name,
                image_url: skin.item.image_url,
                skins: [],
              };
            }

            result[categorySlug].items[itemSlug].skins.push(skin);

            return result;
          }, {});

          context.commit('setCategories', {
            categories,
          });
        });
    },

    createNotification: (context, payload) => {
      context.commit('clearNotification');

      setTimeout(() => {
        context.commit('setNotification', {
          title: payload.title,
          message: payload.message,
          isError: payload.isError || false,
        });
      }, 25);
    },
  },

  modules: {},
});
