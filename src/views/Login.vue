<template>
  <div>
    <Header :title="`Sistema de Apoio ao Visitante em Grandes Eventos`"  :headerSize="`vh-90`" />
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Login" active>
          <b-container>
            <b-row>
              <b-col class="p-5 border-shadow">
                <b-form @submit.prevent="submit">
                  <b-input-group prepend="Email">
                    <b-form-input v-model.lazy="form.email"></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Password">
                    <b-form-input
                      v-model.lazy="form.password"
                      type="password"
                    ></b-form-input>
                  </b-input-group>

                  <b-form-checkbox>Lembrar</b-form-checkbox>
                  <b-button-group>
                    <b-button
                      @click="submit(true)"
                      type="submit"
                      variant="primary"
                      >Logar</b-button
                    >
                  </b-button-group>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="Registro">
          <b-container>
            <b-row>
              <b-col class="p-5 border-shadow">
                <b-form @submit.prevent="submit">
                  <b-input-group prepend="Nome">
                    <b-form-input v-model.lazy="form.username"></b-form-input>
                  </b-input-group>

                  <b-input-group prepend="Email">
                    <b-form-input v-model.lazy="form.email"></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Password">
                    <b-form-input
                      v-model.lazy="form.password"
                      type="password"
                    ></b-form-input>
                  </b-input-group>

                  <b-form-checkbox>Lembrar</b-form-checkbox>
                  <b-button-group>
                    <b-button
                      variant="primary"
                      type="submit"
                      @click="submit(false)"
                      >Registrar</b-button
                    >
                  </b-button-group>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Header from '../components/Header'
import { FirebaseManager } from "../firebase/firebase";

export default {
  name: "Login",
  components: {
    Header
  },
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