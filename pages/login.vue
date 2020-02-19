<template>
  <div class="login">
    <v-layout row justify-center>
      <v-form @submit.prevent="onSubmit">
        <v-container grid-list-md text-xs-center>
          <v-layout column align-center>
            <h1>Login</h1>
            <v-flex xs12 class="my-2">
              <v-avatar size="150">
                <img src="doe_logo_sm.png" alt="edrms logo" />
              </v-avatar>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="username"
                type="text"
                id="username"
                :disabled="loading"
                :rules="inputRules"
                label="Email"
                required
                outline
              ></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-text-field
                v-model="password"
                type="password"
                id="password"
                :disabled="loading"
                :rules="inputRules"
                label="Password"
                required
                outline
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <p v-if="message" class="red lighten-4 red--text pa-2">{{message}}</p>
            </v-flex>

            <v-flex xs12 class="mb-2">
              <v-btn
                type="submit"
                large
                depressed
                round
                dark
                :loading="loading"
                color="primary"
              >Login</v-btn>
            </v-flex>
            <v-flex xs12>
              <h4 class="font-weight-light text-sm-left">
                Forgot password?
                <a href="#">Request new password</a>
              </h4>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
import * as auth from "~/services/AuthService";
import { async } from "q";
export default {
  name: "login",
  layout: "unauth",
  data: () => {
    return {
      username: "",
      password: "",
      message: "",
      loading: false,
      inputRules: [
        v => v.length >= 0 || "Email and password fields cannot be empty!"
      ]
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password
      };
      console.log(user);
      this.loading = true;
      auth.login(user).then(data => {
        if (data && data.error) {
          this.message = data.error;
          this.loading = false;
          return;
        }
        this.$router.push({ name: "index" });
        this.loading = false;
      });
    }
  }
};
</script>


<style scoped>
label {
  display: block;
  margin: 8px;
}
</style>
