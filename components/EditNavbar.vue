<template>
  <div class="nav-layout">
    <v-toolbar :clipped-left="clipped" flat app>
      <v-toolbar-side-icon @click="log(data)" :data="data" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn flat @click="logout">
        Logout
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import { logout } from "~/services/AuthService";
export default {
  props: {
    data: Object
  },
  methods: {
    logout: function() {
      logout();
      this.$router.push({ name: "index" });
    },
    log(data){
      console.log(data)
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "My Activities", route: "/activities" },
        { icon: "folder", text: "My Requests", route: "/my-requests" },
        { icon: "face", text: "My Profile", route: "/profile" },
        { icon: "drafts", text: "Drafts", route: "/drafts" }
      ],
      adminLinks: [
        { icon: "folder", text: "Maintenance Requests", route: "/requests" },
        { icon: "create_new_folder", text: "Records", route: "/records" },
        { icon: "call_split", text: "Routing", route: "/process" },
        { icon: "folder", text: "File Plan", route: "/admin/fileplan" },
        { icon: "people", text: "Directory", route: "/directory" }
      ],
      miniVariant: false,
      title: "DOE.Records Management System"
    };
  }
};
</script>
