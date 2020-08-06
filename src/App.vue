<template>
  <div id="app" class="text-white min-h-screen" v-cloak>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="flex h-screen" key="loader">
        <div class="m-auto w-full text-center">
          <div class="loader m-auto ease-linear rounded-full border-2 border-gray-200 h-16 w-16"></div>
        </div>
      </div>
      <div v-else key="content">
        <nav class="bg-blue-700 fixed w-full z-50">
          <div class="container p-6 mx-auto flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <router-link :to="{ name: 'inspector' }" class="block">
                <svg class="fill-current h-8 w-auto" width="54" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 257.322 334">
                  <path
                    d="M99.792 0h8.94c6.22 2.44 12.2 5.82 17.62 9.65 1.74 7.33 4.78 15.13 2.15 22.63-2.24 2.07-5.28 2.92-7.98 4.19.32 2.89.79 5.76 1.24 8.63 5.1-.43 10.05-1.77 15.06-2.74.69-2.98.86-6.22 2.75-8.75.41 2.02.74 4.06 1 6.11 2.68 1.56 5.28 3.77 8.61 3.42 21 .02 42.01-.06 63 .01 2.31-.18 3.41 2.27 5 3.53.05-4.46.03-8.92.23-13.38.62.02 1.86.04 2.48.05.13 3.92-.29 7.94.8 11.76 1.17.27 2.37.35 3.58.5.06 1.53.11 3.06.2 4.6 6.45.19 12.97.62 19.37-.48 4.3-.65 8.66-.21 13-.2.07 1.53.21 3.05.48 4.57-5.36.39-10.78.75-16.11-.14-8.54-1.04-17.07.77-25.6.29-.29 1.16-.56 2.32-.83 3.48-8.2.09-16.4-.05-24.59-.01-2.72-.07-5.71.52-7.43 2.81-2.41 3.01-5.33 5.58-7.65 8.66-.75 5.65 1.46 11.13 2.73 16.55-1.93.7-3.87 1.36-5.77 2.08-1.95 6.11-1.18 13.93-6.77 18.21-3.09 2.32-5.82 5.21-9.35 6.86-2.57 1.16-5.33-.05-7.91-.43-9.63-1.46-17.61-7.38-26.21-11.46-.56 2.33-1.19 4.63-1.82 6.94 2.61 1.69 5.98 3.13 6.84 6.45 1.32 4.86.22 9.96.03 14.91-.41 4.54-.54 9.11-.97 13.65-.42 4.41-2.97 8.2-5.59 11.63-2.45-.6-4.85-1.31-7.27-1.95-2.61 5.6-.44 12.56 3.86 16.73 11.18 12.16 17.24 27.81 22.92 43.06.97 3.22 4.28 5.13 4.84 8.52.94 3.6 2.27 7.21 1.96 10.99-.43 6.63-.91 13.26-1.58 19.87-.46 4.85-2.26 9.69-1.2 14.59.79 3.99 1.28 8.21-.18 12.12-1.97 4.91-1.95 10.28-1.98 15.49.09 3.43.28 7.2 2.66 9.92 2.82 3.47 5.57 7.07 8.94 10.03 4.17 2.73 9.91 2.75 13.34 6.7 1.08 2.16.31 4.68.28 6.99-10.83 1.64-22.16 1.76-32.68-1.62-5.94-1.93-12.49 1.38-18.17-1.88.31-6.79 1.95-13.42 4.35-19.76.99-4.73-.09-9.63-.19-14.42-.07-4.14-2.2-7.8-3.02-11.78-2.35-8.54-3.02-17.43-3.42-26.25-.52-4.33 3.15-7.6 3.3-11.83.77-3.75.2-7.6-2.12-10.7-4.03-.12-9.46.94-11.72-3.39-4.72-6.98-9.31-14.06-14.02-21.04-1.64-3.01-5.58-2.3-8.28-3.62-2.41-2.22-3.61-5.36-5.11-8.19-.88 3.24-2.08 6.49-4.48 8.94-3.78 3.8-5.14 9.08-7.1 13.9-1.38 3.48-2.62 7.05-3.12 10.77-.53 2.81-.65 6.1-3.17 7.94-3.7 2.8-5.02 7.52-8.4 10.6-2.52 2.4-4.06 5.67-4.89 9-.27 3.01.6 6.06-.16 9.03-1.37 5.44-4.37 10.24-6.57 15.35-1.56 3.59-2.37 7.46-4.08 10.99-1.14 2.47-4.06 3.27-5.66 5.34-4.64 7.98-6.12 17.6-4.46 26.65 1.33 3.59 2.3 7.35 1.48 11.21-2.85.39-5.68.86-8.54 1.12h-8.84c-2.3-.48-4.67-.84-6.77-1.92-1.57-4.91-1.31-10.29.1-15.21 2.07-7.4 3.95-14.85 5.82-22.29 1.26-3.65-1.73-6.92-1.46-10.57-.3-5.38 3.03-9.82 5.44-14.31 2.26-3.99 1.46-8.8 3.03-13.01 3.55-9.14 10.26-16.58 14.26-25.5 1.23-3.63-.1-7.49.14-11.23.3-7.09 1.7-14.09 2.92-21.07.41-2.69 1.28-5.53.24-8.18-1.11-3.16-1.89-6.52-1.45-9.89.46-3.1-1.39-6.18-.23-9.21.61-2.57 2.97-4.02 4.86-5.62.34-10.56-3.5-20.94-1.89-31.47 1.84-2.28 4.8-3.1 7.37-4.25-3.77-.78-7.54-1.57-11.29-2.4-.15-4.26.812-7.246 1.32-12.64.507-5.394.62-13.2 1.65-19.73.16-1.66 1.97-2.22 3.4-2.28 3.42-.25 6.87-.41 10.23-1.22-1-8.25-1.83-16.67.03-24.88 1.8-9.69 6.14-19.51 14.27-25.51 5.6-3.78 13.69-6.01 19.54-1.5.48-.33 1.44-.98 1.92-1.3-3.4-9.17-2.65-19.77 2.75-28.03 3.49-5.63 9.61-8.83 15.75-10.78m54.91 63.09c-.3 2.4-1.04 4.78-3.36 5.93 3.06-.2 6.16-.19 9.18-.85-.07-1.76-.13-3.51-.2-5.27-1.89.04-3.76.1-5.62.19m-6.34 6.78c-.26.34-.79 1-1.05 1.34.48 3.25 2.91 5.91 4.53 8.73 2.36-3.32 4.75-6.64 7-10.04-3.49-.16-7-.39-10.48-.03z"/>
                </svg>
              </router-link>
            </div>
            <div class="block md:hidden">
              <button
                v-on:click="toggleMenu()"
                class="flex items-center px-3 py-2 border rounded text-white border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                  Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
            <div v-if="!isMobile || menuOpen" class="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div class="text-sm md:flex-grow">
                <router-link v-for="slug in orderedCategories"
                             :to="{ name: 'category', params: { category: slug }}"
                             :active-class="'text-white border-white'"
                             :key="slug"
                             v-on:click.native="closeMenu()"
                             class="block mt-4 md:inline-block md:mt-0 text-blue-100 hover:text-white mr-4 border-b-2 border-transparent">
                  {{ categories[slug].name }}
                </router-link>
              </div>
              <div v-if="!isMobile" class="block flex">
                <a href="https://github.com/chescos/csgo-skin-tester-frontend"
                   target="_blank"
                   class="block flex items-center hover:text-white mr-5 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 md:mt-0">
                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>
                    GitHub</title>
                    <path
                      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                  </svg>
                  <span class="ml-2">GitHub</span>
                </a>
                <a href="https://chrome.google.com/webstore/detail/csgo-skin-tester/fmljflfbojphpnbijaceeemjapgkefin"
                   target="_blank"
                   class="block flex items-center hover:text-white text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 md:mt-0">
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
          <div v-if="notification !== null"
               v-bind:class="{ 'bg-blue-700 border-blue-500': !notification.isError, 'bg-red-800 border-red-500': notification.isError }"
               class="fixed bottom-0 left-0 right-0 border-t-4 rounded-b text-white px-4 py-3 shadow-md" role="alert">
            <div class="flex">
              <div class="py-1">
                <svg class="fill-current h-6 w-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                  <path
                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
              </div>
              <div>
                <p class="font-bold">{{ notification.title }}</p>
                <p class="text-sm">{{ notification.message }}</p>
              </div>
              <div class="py-1 ml-auto">
                <svg v-on:click="$store.commit('clearNotification')"
                     class="fill-current h-6 w-6 text-white cursor-pointer" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"/>
                </svg>
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

  data: () => ({
    menuOpen: false,
    width: window.innerWidth,
  }),

  mounted() {
    this.$store.dispatch('fetchInitialData');

    setInterval(() => {
      if (this.$store.state.notification && this.$store.state.notification.removeAt < Date.now()) {
        this.$store.commit('clearNotification');
      }
    }, 1000);

    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    });
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      this.menuOpen = false;
    },
  },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },

    isMobile() {
      return this.width < 768;
    },

    notification() {
      return this.$store.state.notification;
    },

    categories() {
      return this.$store.state.categories;
    },

    orderedCategories() {
      return [
        'knives',
        'gloves',
        'rifles',
        'pistols',
        'smgs',
        'heavy',
      ];
    },
  },
};
</script>

<style>
  @import './assets/css/app.css';
</style>
