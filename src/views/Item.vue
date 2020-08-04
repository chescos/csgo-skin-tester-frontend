<template>
  <div class="about">
    <h1>{{ item.name }}</h1>
    <div class="flex flex-wrap -mx-4">
      <div v-for="skin in item.skins" :key="skin.id" class="w-1/4 p-4 flex-none">
        <div class="border-2 border-blue-900 rounded"
             style="background: repeating-linear-gradient(45deg, #252c3c, #252c3c 10px, #202838 0, #202838 20px);">
          <img class="p-6" :src="skin.image_url">
          <div class="bg-blue-900 w-full text-center p-2">{{ skin.paintkit.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',

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
