import BookService from "./endpoints";

export default {
  async getBooks(context, token) {
    try {
      const response = await BookService.getBooks(token);
      context.commit("SET_BOOKS", response.data);
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  async createBook(context, payload) {
    try {
      const response = await BookService.createBook(payload);
      context.commit("ADD_BOOK", response.data);
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  async updateBook(context, payload) {
    try {
      const response = await BookService.updateBook(payload);
      context.commit("UPDATE_BOOKS", response.data);
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  async deleteBook(context, payload) {
    try {
      await BookService.deleteBook(payload);
      context.commit("REMOVE_BOOK", payload.myId);
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  async getBookById(context, payload) {
    try {
      const response = await BookService.getBookById(payload);
      context.commit("SET_BOOK", response.data);
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  errorHandler(context, err) {
    let error = new Error(
      "Failed to process request. Please try again later."
    );
    if (err.response.status !== undefined) {
      if (err.response.status === 500) {
        error = new Error(
          "We encountered an internal issue, please email support@pzaz.tv"
        );
        throw error;
      } else {
        Object.keys(err.response.data).forEach((key) => {
          if (key !== undefined) {
            error = new Error(err.response.data[key]);
            throw error;
          } else {
            throw error;
          }
        });
      }
    } else {
      throw error;
    }
  },
};