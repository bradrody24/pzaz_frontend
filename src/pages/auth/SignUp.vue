<template>
  <section>
    <BaseCard>
      <h2>Sign Up</h2>
      <AuthForm
        @submit-form="signUp"
        buttonText="Sign Up"
        :isAuth="true"
      ></AuthForm>
    </BaseCard>
  </section>
</template>
<script>
import AuthForm from '../../components/auth/AuthForm.vue';
export default {
  name: 'BookCreate',
  components: {
    AuthForm,
  },
  methods: {
    async signUp(data) {
      try {
        await this.$store.dispatch('auth/signUp', data);
        setTimeout(() => {
          this.$router.replace({ name: 'books' });
        }, 100);
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>