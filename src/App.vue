<template>
  <div id="app">
    <div v-if="loggedIn">
      <navbar />
    </div>

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
      this.$router.push({ name: "/" });
    } else {
      this.user.name = this.User.name();
      this.loggedIn = true;
    }
  },
  data() {
    return {
      loggedIn: false,
      user: {},
    };
  },
};
</script>
