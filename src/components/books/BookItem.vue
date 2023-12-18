<template>
  <li>
    <div class="container">
      <img
        class="center"
        :src="`${books_env.base_url}${book.image}`"
        :alt="book.title"
      />
    </div>
    <h3>{{ book.title }}</h3>
    <div class="actions">
      <BaseButton @click="deleteBook">Delete</BaseButton>
      <BaseButton link :to="bookDetailsLink">View Details</BaseButton>
    </div>
  </li>
</template>
<script>
export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      default: null,
    },
    books_env: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    bookDetailsLink() {
      return this.$route.path + '/' + this.book.id;
    },
  },
  methods: {
    deleteBook() {
      this.$emit('delete-book', this.book.id);
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-start;
}
.container {
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.center {
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>