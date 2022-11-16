import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap.min (3).css";
import SignUp from "./Screen/SignUp";
import LoginIn from "./Screen/LoginIn.vue";
import HomeScreen from "./Screen/HomeScreen.vue";
import MainBoard from "./Screen/MainBoard.vue";
import CardCard from "./Screen/CardCard.vue";
import EditListForm from "./Screen/EditListForm.vue";
import EditCardForm from "./Screen/EditCardForm.vue";
import ProfileView from "./Screen/ProfileView.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(fas);

//Importing store
import store from "./Store";
import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/editList/:id", component: EditListForm },
    { path: "/cardDetail/:listId/:cardId", component: EditCardForm },
    { path: "/", component: HomeScreen },
    { path: "/signup", component: SignUp },

    { path: "/login", component: LoginIn },
    { path: "/dashboard", component: MainBoard },
    { path: "/list/:id", component: CardCard },
    { path: "/profile", component: ProfileView },

    // { path: "", component: HomeScreen },
  ],
});

const app = createApp(App);
// app.use(VueTypedJs);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");
