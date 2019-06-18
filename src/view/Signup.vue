<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md3>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert :value="error" type="warning">{{ error }}</v-alert>
            <v-form>
              <v-text-field prepend-icon="person" name="email" label="E-mail" type="email" required v-model="email">
              </v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" required
                v-model="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.prevent="signup" :disabled="processing">Registration</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        email: null,
        password: null
      };
    },
    computed: {
      error() {
        return this.$store.getters.getError;
      },
      processing() {
        return this.$store.getters.getProcessing;
      },
      isUserAuthenticated() {
        return this.$store.getters.isUserAuthenticated
      }
    },
    watch: {
      isUserAuthenticated(val) {
        if (val) this.$router.push("/");
      }
    },
    methods: {
      signup() {
        let vm = this;
        vm.$store.dispatch("SIGNUP", {
          email: vm.email,
          password: vm.password
        });
      }
    }
  };
</script>
<style>
</style>