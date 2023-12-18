export default {
  SET_USER_DATA(state, payload, autoLogin) {
    state.user =  payload;
    if (!autoLogin) {
      localStorage.setItem("user", JSON.stringify(payload));
    }
  },
  CLEAR_USER_DATA(state) {
    state.user =  null;
    localStorage.removeItem("user");
    location.reload();
  },
};