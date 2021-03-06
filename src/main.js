import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Navbar from "./components/navbar.vue";

import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Navbar);

import User from "./helpers/User";
window.User = User;

Vue.prototype.User = window.User;

// Import Notification Class
import Notification from "./helpers/Notification";
window.Notification = Notification;

Vue.prototype.Notification = window.Notification;

import Swal from "sweetalert2";
window.Swal = Swal;

Vue.prototype.Swal = window.Swal;

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
Vue.prototype.Toast = window.Toast;

Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    mode: "history",
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");