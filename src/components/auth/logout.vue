<template>
  <div></div>
</template>

<script>
export default {
  created() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.Toast.fire({
      icon: "success",
      title: "logout successful",
    });
    this.$router.push({ name: "/" });
  },
};
</script>
