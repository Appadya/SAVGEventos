<template>
  <div>
    <b-form @submit.prevent="submit" inline>
      <!-- <b-input-group prepend="Nome">
        <b-form-input
          v-model.lazy="username"
          class="mb-2 mr-sm-2 mb-sm-0"
        ></b-form-input>
      </b-input-group> -->

      <b-input-group prepend="Email" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input v-model.lazy="email"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input v-model.lazy="password" type="password"></b-form-input>
      </b-input-group>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Lembrar</b-form-checkbox>
      <b-button-group>
        <b-button
          variant="primary"
          type="submit"
          @click="firebaseAuthSubmit({ username, email, password })"
          >Registrar</b-button
        >
        <b-button
          @click="firebaseAuthSignIn({ email, password })"
          type="submit"
          variant="primary"
          >Logar</b-button
        >
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import * as firebase from "../firebase/firebase";
import { mapActions, mapGetters } from "vuex";

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
    submit(){
      firebase.auth.sigInWithEmailAndPassword(this.form.email, this.form.password)
      .then(() => {
        this.$router.replace({ name: "Profile" });
      })
      .catch((err) => {
        this.error = err.message;
      })
    }
  },
};
</script>