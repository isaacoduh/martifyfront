import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { routes } from "./routes";

Vue.use(VueRouter);

import User from "./helpers/User";
window.User = User;

// Import Notification Class
import Notification from "./helpers/Notification";
window.Notification = Notification;

import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    postion: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

window.Toast = Toast;

Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    mode: "history",
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");