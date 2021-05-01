let register = require("./components/auth/register").default;
let login = require("./components/auth/login").default;
let about = require("./components/about.vue").default;
let logout = require("./components/auth/logout").default;
let forgot = require("./components/auth/forgot").default;

let home = require("./components/home.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forgot", component: forgot, name: "forgot" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },

    { path: "/about", component: about, name: "about" },
];