import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap.min (3).css";
import SignUp from "./Screen/SignUp";
import LoginIn from "./Screen/LoginIn.vue";
import HomeScreen from "./Screen/HomeScreen.vue";
import MainBoard from "./Screen/MainBoard.vue";
// import VueTypedJs from "vue-typed-js";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/signup", component: SignUp },

    { path: "/login", component: LoginIn },
    { path: "/dashboard", component: MainBoard },
  ],
});

const app = createApp(App);
// app.use(VueTypedJs);
app.use(router);
app.mount("#app");
