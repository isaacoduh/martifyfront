<template>
  <div>
    <div class="container py-4">
      <div class="d-flex justify-content-between">
        <router-link to="/store-employee" class="btn btn-primary"
          >Add Employee</router-link
        >
        <input
          type="text"
          v-model="searchTerm"
          class="form-control"
          style="width: 300px"
          placeholder="Search..."
        />
      </div>

      <div class="row"></div>

      <br />

      <br />
      <div class="row">
        <div class="col-lg-12 mb-4">
          <div class="card">
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">Employee List</h6>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employee in filterSearch" :key="employee.id">
                    <td>{{ employee.name }}</td>
                    <td><img :src="employee.photo" id="em_photo" /></td>
                    <td>{{ employee.phone }}</td>
                    <td>{{ employee.salary }}</td>
                    <td>{{ employee.join_date }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'edit-employee',
                          params: { id: employee.id },
                        }"
                        class="btn btn-sm btn-primary"
                        >Edit</router-link
                      >
                      <a
                        @click="deleteEmployee(employee.id)"
                        class="btn btn-sm btn-danger"
                        ><font color="#ffffff">Delete</font></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
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
    this.getEmployees();
  },

  data() {
    return {
      employees: [],
      searchTerm: "",
    };
  },

  computed: {
    filterSearch() {
      return this.employees.filter((employee) => {
        return employee.name.match(this.searchTerm);
      });
    },
  },

  methods: {
    getEmployees() {
      axios
        .get("http://localhost:8000/api/employees")
        .then(({ data }) => (this.employees = data))
        .catch();
    },
    deleteEmployee(id) {
      this.Swal.fire({
        title: "Are you sure?",
        text: "You can not revert this action",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Continue!",
      }).then((result) => {
        if (result.value) {
          axios
            .delete("http://localhost:8000/api/employees/" + id)
            .then(() => {
              this.employees = this.employees.filter((employee) => {
                return employee.id != id;
              });
            })
            .catch(() => {
              this.$router.push({ name: "employee" });
            });
          this.Swal.fire("Deleted", "Employee Information Deleted", "success");
        }
      });
    },
  },
};
</script>
<style type="text/css">
#em_photo {
  height: 40px;
  width: 40px;
}
</style>
