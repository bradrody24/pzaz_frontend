<template>
  <section>
    <BaseCard>
      <h2>Add a Book</h2>
      <BookForm @save-data="saveData"></BookForm>
    </BaseCard>
  </section>
</template>
<script>
import BookForm from '../../components/books/BookForm.vue';
export default {
  name: 'BookCreate',
  components: {
    BookForm,
  },
  methods: {
    saveData(data) {
      try {
        this.$store.dispatch('books/createBook', {
          myData: data,
          myToken: this.$store.getters['auth/user']?.token,
        });
        this.$router.replace('/books');
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>