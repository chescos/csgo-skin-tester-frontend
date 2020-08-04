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
        <div class="border-4 border-gray-800 rounded shadow-md cursor-pointer"
             v-on:click="equipSkin(skin.id)"
             style="background: repeating-linear-gradient(45deg, #252c3c, #252c3c 10px, #202838 0, #202838 20px);">
          <img class="p-6" :src="skin.image_url">
          <div class="bg-gray-800 w-full text-center p-2">{{ skin.paintkit.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Item',

  methods: {
    equipSkin(id) {
      axios
        .post('https://api.csgoskins.gg/tests/id', {
          skin_id: id,
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

          this.createNotification(
            'Request Failed',
            'Something went wrong, please try again.',
            true,
          );
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
