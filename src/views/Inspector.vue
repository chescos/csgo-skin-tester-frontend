<template>
  <div class="flex h-screen -mt-32 -mb-20" key="inspector">
    <div class="m-auto w-full max-w-lg">
      <form class="bg-gray-800 shadow-md rounded p-12">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="inspect_link">
            Inspect Link
          </label>
          <input v-model="link"
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="inspect_link" type="text" placeholder="Paste your inspect link here...">
        </div>
        <div class="flex items-center justify-between">
          <button v-on:click="inspectLink"
                  v-bind:class="{ 'cursor-not-allowed opacity-50': isLoading }"
                  class="inline-flex items-center bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" :disabled="isLoading">

            <div v-if="isLoading" class="loader ease-linear rounded-full border-2 border-gray-200 h-4 w-4 mr-3"></div>
            <span>Test Skin In-Game</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Inspect',

  data: () => ({
    link: '',
    isLoading: false,
  }),

  methods: {
    inspectLink() {
      if (this.isLoading) {
        return;
      }

      this.$store.commit('clearNotification');

      const inspectLinkRegex = /^steam:\/\/rungame\/730\/(?:[0-9]+)\/\+csgo_econ_action_preview/;

      if (!inspectLinkRegex.test(this.link)) {
        this.$store.dispatch('createNotification', {
          title: 'Invalid Inspect Link',
          message: 'Please enter a valid CS:GO inspect link.',
          isError: true,
        });

        return;
      }

      this.isLoading = true;

      axios
        .post('https://api.csgoskins.gg/tests/link', {
          link: this.link,
        })
        .then((response) => {
          const res = response.data;
          this.isLoading = false;

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
        .catch(() => {
          this.isLoading = false;

          this.$store.dispatch('createNotification', {
            title: 'Request Failed',
            message: 'Something went wrong, please try again',
            isError: true,
          });
        });
    },
  },
};
</script>
