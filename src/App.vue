<template>
  <div>
    <MainMenu :username="username" :isAuthenticated="isAuthenticated" @log-out="logOut"/>
    <router-view></router-view>
  </div>
</template>
<script>
import MainMenu from "./components/MainMenu.vue";
export default {
  name: 'App',
  components: {
    MainMenu
  },
  computed: {
    username() {
      return this.$store.getters['auth/user'] ? this.$store.getters['auth/user'].username : null;
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/signout');
      this.$router.replace({name: 'signin'})
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>