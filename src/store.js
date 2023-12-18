import { createStore } from 'vuex';

import Auth from './store/auth/index'
import Books from './store/books/index'

const store = createStore({
  modules: {
    auth: Auth,
    books: Books,
  }
})

export default store;