<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                  </div>
                  <form @submit.prevent="signup">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputFirstName"
                        placeholder="Enter your fullname"
                        v-model="form.name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address"
                        v-model="form.email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="form.password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPasswordRepeat"
                        placeholder="Confirm Password"
                        v-model="form.password_confirmation"
                      />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Create an Account!
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link to="/" class="font-weight-bold text-small"
                      >Already have an account?</router-link
                    >
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    signup() {
      var data = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
      };
      console.log(data);

      axios
        .post("http://localhost:8000/api/auth/signup", data)
        .then((res) => {
          this.User.responseAfterLogin(res);
          this.Toast.fire({
            icon: "success",
            title: "Account Created Successfully",
          });
          this.$router.push({ name: "home" });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
