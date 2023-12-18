<template>
  <section>
    <BaseCard>
      <h2>Update Book - {{ book.title }}</h2>
      <BookForm :editMode="true" :book="book" @save-data="saveData"></BookForm>
    </BaseCard>
  </section>
</template>
<script>
import BookForm from '../../components/books/BookForm.vue';
export default {
  name: 'BookEdit',
  props: ['id]'],
  components: {
    BookForm,
  },
  computed: {
    book() {
      return this.$store.getters['books/book'];
    },
  },
  methods: {
    saveData(data) {
      try {
        this.$store.dispatch('books/updateBook', {
          myId: this.book.id,
          myData: data,
          myToken: this.$store.getters['auth/user']?.token,
        });
        this.$router.replace(`/books/${this.book.id}`);
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>
