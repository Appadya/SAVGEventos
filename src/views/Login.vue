<template>
  <div>
    <b-form @submit.prevent="submit" inline>
      <b-input-group prepend="Nome">
        <b-form-input
          v-model.lazy="form.username"
          class="mb-2 mr-sm-2 mb-sm-0"
        ></b-form-input>
      </b-input-group>

      <b-input-group prepend="Email" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input v-model.lazy="form.email"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
          v-model.lazy="form.password"
          type="password"
        ></b-form-input>
      </b-input-group>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Lembrar</b-form-checkbox>
      <b-button-group>
        <b-button variant="primary" type="submit" @click="submit(false)"
          >Registrar</b-button
        >
        <b-button @click="submit(true)" type="submit" variant="primary"
          >Logar</b-button
        >
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import { FirebaseManager } from "../firebase/firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  computed: {},
  methods: {
    submit(isLogin) {
      if (isLogin) {
        FirebaseManager.loginUser(
          this.form.email,
          this.form.password,
          (response, result) => {
            if (response) {
              this.$router.push({ name: "Profile" });
            } else {
              this.error = result;
            }
          }
        );
      } else {
        FirebaseManager.registerUser(
          this.form.username,
          this.form.email,
          this.form.password,
          (response, result) => {
            if (response) {
              this.$router.push({ name: "Profile" });
            } else {
              this.error = result;
            }
          }
        );
      }
    },
  },
};
</script>