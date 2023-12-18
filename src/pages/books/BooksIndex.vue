<template>
  <div>
    <BaseCard>
      <h1>Book Index</h1>
      <ul v-if="books.length > 0">
        <BookItem
          v-for="book in books"
          :key="book.id"
          :book="book"
          :books_env="books_env"
          @delete-book="deleteBook"
        />
      </ul>
      <h3 v-else>No books found.</h3>
    </BaseCard>
  </div>
</template>
<script>
import BookItem from '../../components/books/BookItem.vue';
export default {
  name: 'BookIndex',
  components: {
    BookItem,
  },
  computed: {
    books() {
      return this.$store.getters['books/books'];
    },
    books_env() {
      return this.$store.getters['books/env'];
    },
  },
  methods: {
    deleteBook(id) {
      try {
        this.$store.dispatch('books/deleteBook', {
          myId: id,
          myToken: this.$store.getters['auth/user']?.token,
        });
      } catch (err) {
        alert(err.message);
      }
    },
  },
  async created() {
    try {
      await this.$store.dispatch(
        'books/getBooks',
        this.$store.getters['auth/user']?.token
      );
    } catch (err) {
      alert(err.message);
    }
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>