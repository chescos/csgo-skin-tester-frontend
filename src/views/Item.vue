<template>
  <div :key="'item' + categorySlug + itemSlug">
    <h1>
      <span>
        <router-link :to="{ name: 'category', params: { category: categorySlug }}">{{ category.name }}</router-link>
      </span>
      <svg class="fill-current inline-block mx-1 w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"/>
      </svg>
      <span>{{ item.name }}</span>
    </h1>
    <div class="flex flex-wrap -mx-4">
      <div v-for="skin in item.skins" :key="skin.id" class="w-1/4 p-4 flex-none">
        <div v-if="skin.id === configurator" style="min-height: 290px;" class="rounded bg-gray-800 shadow-md relative h-full">
          <svg v-on:click="closeConfigurator()" class="fill-current text-gray-500 hover:text-white absolute p-1 w-8 h-8 cursor-pointer" viewBox="0 0 20 20" style="top: 4px; right: 4px;" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"/>
          </svg>
          <form class="py-3 px-6">
            <div class="mb-8">
              <label class="block text-white text-sm font-bold mb-2" for="seed">
                Seed
              </label>
              <input v-model="config.seed" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="seed" type="text" placeholder="Seed (1-1000)">
            </div>
            <div class="mb-6">
              <label
                for="toggle-stattrak"
                class="flex items-center cursor-pointer"
              >
                <div class="relative">
                  <input v-model="config.stattrak" id="toggle-stattrak" type="checkbox" class="hidden"/>
                  <div
                    class="toggle__line w-12 h-6 bg-white rounded-full shadow-inner"
                  ></div>
                  <div
                    class="toggle__dot absolute w-8 h-8 bg-gray-600 rounded-full shadow"
                  ></div>
                </div>
                <div class="ml-6 text-70 font-medium">{{ config.stattrak ? 'StatTrak™' : 'Normal' }}</div>
              </label>
            </div>
            <div>
              <label class="block text-white text-sm font-bold mb-2" for="wear">
                Wear
              </label>
              <vue-slider id="wear" v-model="config.wear" min="0.01" max="0.99" interval="0.01" tooltipPlacement="bottom" tooltip="always"></vue-slider>
            </div>
            <button v-on:click="equipSkin(skin.id)" class="absolute bottom-0 left-0 right-0 w-full rounded-b bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </form>
        </div>
        <div v-else class="border-4 border-gray-800 rounded shadow-md cursor-pointer relative flex flex-wrap"
             v-on:click="equipSkin(skin.id)"
             style="min-height: 290px; background: repeating-linear-gradient(45deg, #252c3c, #252c3c 10px, #202838 0, #202838 20px);">
          <svg v-on:click="configureSkin(skin.id)" class="fill-current text-gray-500 hover:text-white absolute top-0 right-0 p-1 w-8 h-8 cursor-pointer" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"/>
          </svg>
          <img class="p-6 mt-auto" :src="skin.image_url">
          <div class="bg-gray-800 w-full text-center p-2 mt-auto">{{ skin.paintkit.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'Item',

  components: {
    VueSlider,
  },

  data: () => ({
    config: {
      wear: 0.01,
      seed: 1,
      stattrak: false,
    },
    configurator: 0,
  }),

  methods: {
    configureSkin(id) {
      this.configurator = id;
    },

    closeConfigurator() {
      this.configurator = 0;
    },

    equipSkin(id) {
      this.closeConfigurator();

      axios
        .post('https://api.csgoskins.gg/tests/id', {
          skin_id: id,
          wear: this.config.wear,
          seed: this.config.seed,
          stattrak: this.stattrak ? 0 : -1,
        })
        .then((response) => {
          const res = response.data;

          if (res.success) {
            if (res.needs_to_connect) {
              window.location = res.connect_to_url;

              this.$store.dispatch('createNotification', {
                title: 'Skin Sent',
                message: 'The skin has been sent to the CS:GO test server, please connect.',
                isError: false,
              });
            } else {
              this.$store.dispatch('createNotification', {
                title: 'Skin Equipped',
                message: 'You have been equipped with the selected skin in the CS:GO test server.',
                isError: false,
              });
            }
          } else {
            this.$store.dispatch('createNotification', {
              title: 'Request Failed',
              message: res.message,
              isError: true,
            });
          }
        })
        .catch((error) => {
          console.log(error);

          this.isLoading = false;

          this.$store.dispatch('createNotification', {
            title: 'Request Failed',
            message: 'Something went wrong, please try again',
            isError: true,
          });
        });
    },
  },

  computed: {
    categorySlug() {
      return this.$route.params.category;
    },

    itemSlug() {
      return this.$route.params.item;
    },

    category() {
      return this.$store.state.categories[this.categorySlug];
    },

    item() {
      return this.$store.state.categories[this.categorySlug].items[this.itemSlug];
    },
  },
};
</script>
