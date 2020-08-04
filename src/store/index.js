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
      state.notification = payload;
    },
  },

  actions: {
    fetchInitialData: (context) => {
      axios.get('https://api.csgoskins.gg/skins')
        .then((response) => {
          const categories = response.data.skins.reduce((result, skin) => {
            const categorySlug = slugify(skin.item.type, { lower: true });
            const itemSlug = slugify(skin.item.name, { lower: true });

            if (!result[categorySlug]) {
              // eslint-disable-next-line no-param-reassign
              result[categorySlug] = {
                name: skin.item.type,
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
        })
        .catch((error) => {
          console.log(error);
        });
    },

    createNotification: (context, payload) => {
      context.commit('setNotification', null);

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
