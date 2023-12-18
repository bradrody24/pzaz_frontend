<template>
  <section>
    <BaseCard>
      <div class="container">
        <img
          class="center"
          :src="`${books_env.base_url}${image}`"
          :alt="title"
        />
      </div>
      <h3>{{ title }}</h3>
      <h4>{{ description }}</h4>
      <div class="actions">
        <BaseButton link :to="bookEditLink">Update</BaseButton>
      </div>
    </BaseCard>
  </section>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    books() {
      return this.$store.getters['books/books'];
    },
    books_env() {
      return this.$store.getters['books/env'];
    },
    title() {
      return this.selectedBook.title;
    },
    description() {
      return this.selectedBook.description;
    },
    image() {
      return this.selectedBook?.image ? this.selectedBook.image : '';
    },
    bookEditLink() {
      return '/books/edit/' + this.id;
    },
    selectedBook() {
      return this.books.find((book) => book.id == this.id);
    },
  },
};
</script>
<style scoped>
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