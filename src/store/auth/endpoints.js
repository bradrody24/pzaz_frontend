import axios from "axios";

export default {
  signIn(credentials) {
    return axios.post(`http://localhost:8000/signin/`, credentials);
  },
  signUp(credentials) {
    return axios.post(`http://localhost:8000/signup/`, credentials);
  }
}
