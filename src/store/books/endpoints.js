import axios from "axios";

const apiClient = (token) => {
  return {
    headers: {
      Authorization: `Token ${token}`
    }
  }
};

export default {
  getBooks(myToken) {
    return axios.get('http://localhost:8000/api/books/', apiClient(myToken));
  },
  createBook({ myData, myToken }) {
    return axios.post('http://localhost:8000/api/books/', myData, apiClient(myToken));
  },
  deleteBook({ myId, myToken }) {
    return axios.delete(`http://localhost:8000/api/books/${myId}`, apiClient(myToken));
  },
  getBookById({ myId, myToken }) {
    return axios.get(`http://localhost:8000/api/books/${myId}`, apiClient(myToken));
  },
  updateBook({ myId, myData, myToken }) {
    return axios.put(`http://localhost:8000/api/books/${myId}`, myData, apiClient(myToken));
  },
}