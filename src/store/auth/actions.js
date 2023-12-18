import AuthService from "./endpoints";

export default {
  async signIn(context, payload) {
    try {
      const response = await AuthService.signIn(payload);
      context.commit(
        "SET_USER_DATA",
        {
          id: response.data.user.id,
          username: response.data.user.username,
          password: response.data.user.password,
          email: response.data.user.email,
          token: response.data.token,
        },
        false
      );
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  async signUp(context, payload) {
    try {
      const response = await AuthService.signUp(payload);
      context.commit(
        "SET_USER_DATA",
        {
          id: response.data.user.id,
          username: response.data.user.username,
          password: response.data.user.password,
          email: response.data.user.email,
          token: response.data.token,
        },
        false
      );
    } catch (err) {
      context.dispatch("errorHandler", err);
    }
  },
  async tryLogin(context) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      context.commit("SET_USER_DATA", user, true);
    }
  },
  signout(context) {
    context.commit("CLEAR_USER_DATA");
  },
  errorHandler(context, err) {
    let error = new Error("Failed to process request. Please try again later.");
    if (err.response.status !== undefined) {
      if (err.response.status === 500) {
        error = new Error(
          "We encountered an internal issue, please email support@pzaz.tv."
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
