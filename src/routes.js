let about = require("./components/about.vue").default;

let home = require("./components/home.vue").default;

export const routes = [
    { path: "/", component: home, name: "/" },
    // { path: "/register", component: register, name: "register" },
    // { path: "/forget", component: forget, name: "forget" },
    // { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },

    { path: "/about", component: about, name: "about" },
];