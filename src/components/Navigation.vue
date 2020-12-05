<template>
  <b-navbar id="navigation" toggleable="md" type="dark">
    <b-navbar-brand class="d-md-none">
      <router-link to="/">
        <img class="navbar-logo" src="@/assets/logo.png" alt="SAVGE Logo" />
      </router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="collapse"></b-navbar-toggle>
    <b-collapse id="collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/"><i class="fas fa-home"></i> Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/map"
            ><i class="fas fa-map-marked-alt"></i> Mapa</router-link
          >
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="d-none d-md-block mx-auto">
        <router-link to="/">
          <img class="navbar-logo" src="@/assets/logo.png" alt="SAVGE Logo" />
        </router-link>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#about-us"
          ><i class="fas fa-info"></i> Sobre</b-nav-item
        >
        <!-- Não sei porque ele não está atualizando o loggedIn, mesmo no computed... -->
        <b-nav-item>
          <router-link v-if="user.loggedIn" to="/profile"
            ><i class="fas fa-user"></i> Perfil
          </router-link>
          <router-link v-if="!user.loggedIn" to="/login"
            ><i class="fas fa-sign-in-alt"></i> Logar</router-link
          >
          <a v-if="user.loggedIn" @click="signOut"
            ><i class="fas fa-sign-out-alt"></i> Desconectar</a
          >
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import * as firebase from "../firebase/firebase";
import { mapGetters } from "vuex";

export default {
  name: "Navigation",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    signOut() {
      firebase.auth.signOut().then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
  created(){
    console.log(this.user.loggedIn)
  }
};
</script>