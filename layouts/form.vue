<template>
  <v-app light>
    <EditNavbar :data="data"/>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import EditNavbar from "../components/EditNavbar";
export default {
  components: {
    EditNavbar
  },
  middleware: 'auth',
};
</script>
