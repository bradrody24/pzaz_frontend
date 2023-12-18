export default {
  SET_BOOKS(state, payload) {
    state.books = payload;
  },
  ADD_BOOK(state, payload) {
    state.books.push(payload);
  },
  REMOVE_BOOK(state, id) {
    const record = state.books.find((element) => element.id == id);
    if (record) {
      state.books.splice(state.books.indexOf(record), 1);
    }
  },
  SET_BOOK(state, payload) {
    state.book = {...payload};
  },
  UPDATE_BOOKS(state, payload) {
    const record = state.books.find((element) => element.id == payload.id);
    if (record) {
      Object.assign(record, payload);
    }
  },
};
