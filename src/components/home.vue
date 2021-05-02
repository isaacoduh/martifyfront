<template>
  <div>
    <h2>Home Page</h2>

    <div v-if="this.user != null">
      <h6>{{ this.user.name }}</h6>
    </div>
  </div>
</template>

<script>
export default {
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
