<template>
  <v-app light>
    <Navbar/>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <!-- <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar
  },
  middleware: 'auth',
};
</script>
