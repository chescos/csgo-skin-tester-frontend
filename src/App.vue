<template>
  <div id="app" class="text-white min-h-screen" v-cloak>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="flex h-screen" key="loader">
        <div class="m-auto w-full text-center">
          <div class="loader m-auto ease-linear rounded-full border-2 border-gray-200 h-16 w-16"></div>
        </div>
      </div>
      <div v-else key="content">
        <nav class="bg-blue-700 p-6 fixed w-full">
          <div class="container px-6 mx-auto flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <router-link :to="{ name: 'inspector' }" class="block">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
              </router-link>
            </div>
            <div class="block lg:hidden">
              <button
                class="flex items-center px-3 py-2 border rounded text-blue-100 border-blue-600 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                  Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow">
                <router-link v-for="(category, slug) in categories"
                             :to="{ name: 'category', params: { category: slug }}"
                             :active-class="'text-white border-b-2'"
                             :key="slug"
                             class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">
                  {{ category.name }}
                </router-link>
              </div>
              <div class="block flex">
                <a href="https://github.com/chescos/csgo-skin-tester-frontend"
                   target="_blank"
                   class="block flex items-center hover:text-white mr-5 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0">
                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>
                    GitHub</title>
                    <path
                      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                  </svg>
                  <span class="ml-2">GitHub</span>
                </a>
                <a href="https://chrome.google.com/webstore/detail/csgo-skin-tester/fmljflfbojphpnbijaceeemjapgkefin"
                   target="_blank"
                   class="block flex items-center hover:text-white mr-5 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0">
                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 305"><title>
                    Extension</title>
                    <path
                      d="M95.506 152.511c0 31.426 25.567 56.991 56.994 56.991 31.425 0 56.99-25.566 56.99-56.991 0-31.426-25.565-56.993-56.99-56.993-31.427 0-56.994 25.567-56.994 56.993z"/>
                    <path
                      d="M283.733 77.281a2.5 2.5 0 00-.023-2.513c-13.275-22.358-32.167-41.086-54.633-54.159C205.922 7.134 179.441.012 152.5.012c-46.625 0-90.077 20.924-119.215 57.407a2.497 2.497 0 00-.212 2.81l42.93 74.355a2.5 2.5 0 004.586-.625c8.465-32.799 38.036-55.706 71.911-55.706 2.102 0 4.273.096 6.455.282.071.007.143.01.214.01H281.56c.899 0 1.729-.482 2.173-1.264z"/>
                    <path
                      d="M175.035 224.936a2.496 2.496 0 00-2.646-.876 74.14 74.14 0 01-19.889 2.709c-28.641 0-55.038-16.798-67.251-42.794a2.797 2.797 0 00-.098-.188L23.911 77.719a2.496 2.496 0 00-2.165-1.25h-.013a2.5 2.5 0 00-2.165 1.272C6.767 100.456 0 126.311 0 152.511c0 36.755 13.26 72.258 37.337 99.969 23.838 27.435 56.656 45.49 92.411 50.84a2.502 2.502 0 002.535-1.223l42.941-74.378c.508-.88.433-1.98-.189-2.783z"/>
                    <path
                      d="M292.175 95.226h-85.974a2.499 2.499 0 00-1.75 4.285c14.385 14.102 22.307 32.924 22.307 53 0 15.198-4.586 29.824-13.263 42.298a2.53 2.53 0 00-.112.178l-61.346 106.252a2.5 2.5 0 002.165 3.75h.028c40.37-.45 78.253-16.511 106.669-45.222C289.338 231.032 305 192.941 305 152.511c0-19.217-3.532-37.956-10.498-55.698a2.5 2.5 0 00-2.327-1.587z"/>
                  </svg>
                  <span class="ml-2">Extension</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div class="container px-6 pt-32 pb-20 mx-auto">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>

        <transition name="fade" mode="out-in">
          <div v-if="notification !== null" v-bind:class="{ 'bg-blue-700 border-blue-500': !notification.isError, 'bg-red-800 border-red-500': notification.isError }" class="fixed bottom-0 left-0 right-0 border-t-4 rounded-b text-white px-4 py-3 shadow-md" role="alert">
            <div class="flex">
              <div class="py-1">
                <svg class="fill-current h-6 w-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">{{ notification.title }}</p>
                <p class="text-sm">{{ notification.message }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.$store.dispatch('fetchInitialData');
  },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },

    notification() {
      return this.$store.state.notification;
    },

    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style>
  @import './assets/css/app.css';
</style>
