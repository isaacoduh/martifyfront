<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
export default {
  components: {
    navbar: Navbar,
  },
  created() {
    if (!this.User.loggedIn()) {
      this.$router.push({ name: "/login" });
    } else {
      this.user.name = this.User.name();
    }
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>
