import SignIn from "./SignIn.vue"
export const AuthRoutes = {
    path: "/",
    component: null,
    children: [
      {
        path: "/",
        name: "signin",
        component: SignIn,
        meta: { requiresUnAuth: true },
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("./SignUp.vue"),
        meta: { requiresUnAuth: true },
      }
    ],
  };