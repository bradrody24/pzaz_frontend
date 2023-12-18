<template>
  <div>
    <header>
      <nav>
        <h1><router-link to="/">Book Listing</router-link></h1>
        <ul v-if="isAuthenticated">
          <li><router-link to="/books/create">Add a Book</router-link></li>
          <li><BaseButton @click="logOut">Logout {{ username }}</BaseButton></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "MainMenu",
  props: {
    username: {
      type: String,
      default: null
    },
    isAuthenticated: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logOut() {
      this.$emit('log-out');
    }
  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #00058d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #9391f3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #9193f3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>