<template>
  <div>
    <div class="container">
      <div class="row">
        <router-link to="/employee" class="btn btn-primary"
          >All Employees</router-link
        >
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="card shadow-sm my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-12">
                  <div class="">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Update Employee</h1>
                    </div>
                    <form
                      class="user"
                      @submit.prevent="updateEmployee"
                      enctype="multipart/form-data"
                    >
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter Your Full Name"
                              v-model="form.name"
                            />
                            <small class="text-danger" v-if="errors.name">
                              {{ errors.name[0] }}
                            </small>
                          </div>
                          <div class="col-md-6">
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter Your Email"
                              v-model="form.email"
                            />
                            <small class="text-danger" v-if="errors.email">
                              {{ errors.email[0] }}
                            </small>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter  Address"
                              v-model="form.address"
                            />
                            <small class="text-danger" v-if="errors.address">
                              {{ errors.address[0] }}
                            </small>
                          </div>
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter  Salary"
                              v-model="form.salary"
                            />
                            <small class="text-danger" v-if="errors.salary">
                              {{ errors.salary[0] }}
                            </small>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <input
                              type="date"
                              class="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter Join Date"
                              v-model="form.join_date"
                            />
                            <small class="text-danger" v-if="errors.join_date">
                              {{ errors.join_date[0] }}
                            </small>
                          </div>
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter Your phone Number"
                              v-model="form.phone"
                            />
                            <small class="text-danger" v-if="errors.phone">
                              {{ errors.phone[0] }}
                            </small>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="customFile"
                              @change="onFileSelected"
                            />
                            <small class="text-danger" v-if="errors.photo">
                              {{ errors.photo[0] }}
                            </small>
                            <label class="custom-file-label" for="customFile"
                              >Choose file</label
                            >
                          </div>
                          <div class="col-md-6">
                            <img
                              :src="form.photo"
                              style="height: 40px; width: 40px;"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
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
  created() {
    if (!this.User.loggedIn()) {
      this.$router.push({ name: "/" });
    }
    let id = this.$route.params.id;
    axios
      .get("http://localhost:8000/api/employees/" + id)
      .then(({ data }) => (this.form = data))
      .catch(console.log("error"));
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        salary: "",
        address: "",
        photo: "",
        newphoto: "",

        joining_date: "",
      },
      errors: {},
    };
  },
  methods: {
    onFileSelected(event) {
      let file = event.target.files[0];
      if (file.size > 1048770) {
        Notification.image_validation();
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.newphoto = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateEmployee() {
      let id = this.$route.params.id;
      axios
        .patch("http://localhost:8000/api/employees/" + id, this.form)
        .then(() => {
          this.$router.push({ name: "employee" });
          this.Toast.fire({
            icon: "success",
            title: "Employee Updated Successfully",
          });
        })
        .catch(console.log(this.errors));
    },
  },
};
</script>
