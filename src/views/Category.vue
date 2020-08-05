<template>
  <div :key="'category' + categorySlug">
    <h1>{{ category.name }}</h1>
    <div class="flex flex-wrap -mx-4">
      <div v-for="(item, itemSlug) in category.items" :key="itemSlug" class="w-1/4 p-4 flex-none">
        <router-link :to="{ name: 'item', params: { category: categorySlug, item: itemSlug }}" :key="itemSlug" class="block">
          <div class="border-4 border-gray-800 rounded shadow-md flex flex-wrap"
               style="min-height: 290px; background: repeating-linear-gradient(45deg, #252c3c, #252c3c 10px, #202838 0, #202838 20px);">
            <img class="p-6 mt-auto" :src="item.image_url">
            <div class="bg-gray-800 w-full text-center p-2 mt-auto">{{ item.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',

  computed: {
    categorySlug() {
      return this.$route.params.category;
    },

    category() {
      return this.$store.state.categories[this.categorySlug];
    },
  },
};
</script>
