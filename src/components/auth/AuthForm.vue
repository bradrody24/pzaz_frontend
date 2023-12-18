<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !username.isValid }">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        v-model.trim="username.val"
        @blur="clearValidity('username')"
      />
      <p v-if="!username.isValid">Username is required.</p>
    </div>
    <div class="form-control" :class="{ invalid: !password.isValid }">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p v-if="!password.isValid">Password is required.</p>
    </div>
    <BaseButton>{{ buttonText }}</BaseButton>
    <router-link v-if="signInMode" to="/signup">Sign up</router-link>
    <router-link v-else to="/">Sign in</router-link>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  emits: ['submit-form'],
  props: {
    buttonText: {
      type: String,
      default: null,
    },
    signInMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      username: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.username.val === '') {
        this.username.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let inputData = new FormData();
      inputData.append('username', this.username.val);
      inputData.append('password', this.password.val);

      this.$emit('submit-form', inputData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>