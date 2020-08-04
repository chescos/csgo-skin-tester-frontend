<template>
  <div :key="'item' + categorySlug + itemSlug">
    <h1>{{ category.name }} > {{ item.name }}</h1>
    <div class="flex flex-wrap -mx-4">
      <div v-for="skin in item.skins" :key="skin.id" class="w-1/4 p-4 flex-none">
        <div class="border-2 border-blue-800 rounded cursor-pointer"
             v-on:click="equipSkin(skin.id)"
             style="background: repeating-linear-gradient(45deg, #252c3c, #252c3c 10px, #202838 0, #202838 20px);">
          <img class="p-6" :src="skin.image_url">
          <div class="bg-blue-800 w-full text-center p-2">{{ skin.paintkit.name }}</div>
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
