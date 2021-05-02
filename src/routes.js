let register = require("./components/auth/register").default;
let login = require("./components/auth/login").default;
let about = require("./components/about.vue").default;
let logout = require("./components/auth/logout").default;
let forgot = require("./components/auth/forgot").default;

let home = require("./components/home.vue").default;

let storeemployee = require("./components/employee/create.vue").default;
let employee = require("./components/employee/index.vue").default;
let editemployee = require("./components/employee/edit.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forgot", component: forgot, name: "forgot" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },

    { path: "/about", component: about, name: "about" },

    // Employee
    { path: "/store-employee", component: storeemployee, name: "store-employee" },
    { path: "/employee", component: employee, name: "employee" },
    {
        path: "/edit-employee/:id",
        component: editemployee,
        name: "edit-employee",
    },
];