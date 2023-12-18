<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
      />
      <p v-if="!title.isValid">Title must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !image.isValid }">
      <label for="image">Select an image file</label>
      <input
        ref="file"
        type="file"
        id="image"
        @change="onFileChange(event)"
        @blur="clearValidity('image')"
        accept=".jpg, .png, .jpeg"
      />
      <p v-if="!image.isValid && !editMode">Image file is required</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <BaseButton>Submit</BaseButton>
  </form>
</template>

<script>
export default {
  name: "BookForm",
  emits: ['save-data'],
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    book: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      image: {
        val: null,
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
      if (this.title.val === '') {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.image.val && !this.editMode) {
        this.image.isValid = false;
        this.formIsValid = false;
      }
    },
    onFileChange() {
      this.image.val = this.$refs.file.files[0];
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let inputData = new FormData();
      inputData.append('title', this.title.val);
      inputData.append('description', this.description.val);
      if (this.editMode) {
        if (this.image.val) {
          inputData.append('image', this.image.val);
        }
      } else {
        inputData.append('image', this.image.val);
      }

      this.$emit('save-data', inputData);
    },
  },
  mounted() {
    if (this.editMode) {
      this.title.val = this.book.title;
      this.description.val = this.book.description;
    }
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