import store from "../../store.js";

export const BookRoutes = {
  path: '/books', component: null,
  children: [
    {
      path: "",
      name: "books",
      component: () => import("./BooksIndex.vue"),
      props: true,
      meta: { requiresAuth: true },
      /* beforeEnter: async (_, __, next) => {
        try {
          await store.dispatch("books/getBooks");
          next();
        } catch (err) {
          alert(err.message);
        }
      }, */
    },
    {
      path: "create",
      name: "book-create",
      component: () => import("./BookCreate.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: ":id",
      name: "book-detail",
      component: () => import("./BookDetail.vue"),
      props: true,
      meta: { requiresAuth: true },
      beforeEnter: async (_, __, next) => {
        try {
          await store.dispatch("books/getBooks",
            store.getters['auth/user']?.token);
          next();
        } catch (err) {
          alert(err.message);
        }
      },
    },
    {
      path: "edit/:id",
      name: "book-edit",
      component: () => import("./BookEdit.vue"),
      props: true,
      meta: { requiresAuth: true },
      beforeEnter: async (to, from, next) => {
        try {
          await store.dispatch("books/getBookById", {
            myId: to.params.id, myToken: store.getters['auth/user']?.token
          });
          next();
        } catch (err) {
          alert(err.message);
        }
      },
    },
  ],
};