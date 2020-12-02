<template>
  <div>
    <h1>{{ firebaseAuthSubmitResponse }}</h1>

    <b-form @submit.prevent="submit" inline>
      <b-input-group prepend="Nome">
        <b-form-input
          v-model.lazy="username"
          class="mb-2 mr-sm-2 mb-sm-0"
        ></b-form-input>
      </b-input-group>

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
          @click="firebaseAuthSubmit({username, email, password})"
          >Registrar</b-button
        >
        <b-button @click="firebaseAuthSignIn({ email, password })" type="submit" variant="primary">Logar</b-button>
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Login",
  data() {
    return {
      username: null,
      email: null,
      password: null,
    };
  },
  computed: {
      ...mapGetters(['firebaseAuthSubmitResponse']),
      ...mapGetters(['firebaseAuthSignInResponse']),
  },
  methods: {
    ...mapActions(["firebaseAuthSubmit"]),
    ...mapActions(["firebaseAuthSignIn"])
  },
};
</script>