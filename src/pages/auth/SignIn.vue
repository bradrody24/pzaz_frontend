<template>
  <section>
    <BaseCard>
      <h2>Sign In</h2>
      <AuthForm
        @submit-form="signIn"
        buttonText="Sign In"
        :signInMode="true"
      ></AuthForm>
    </BaseCard>
  </section>
</template>
<script>
import AuthForm from '../../components/auth/AuthForm.vue';
export default {
  name: 'SignIn',
  components: {
    AuthForm,
  },
  methods: {
    async signIn(data) {
      try {
        await this.$store.dispatch('auth/signIn', data);
        this.$router.replace({ name: 'books' });
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>