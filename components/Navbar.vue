<template>
  <div class="nav-layout">
    <v-navigation-drawer
      v-model="drawer"
      class="primary"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn class="white--text" icon @click.stop="miniVariant = !miniVariant">
              <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <span v-for="(item, i) in links" :key="i">
          <v-list-tile v-if="!item.children" :to="item.route" router exact>
            <v-list-tile-action>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="!item.children" class="white--text" v-text="item.text" />
            </v-list-tile-content>
          </v-list-tile>

          <v-list-group class="white--text" v-else :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>{{item.text}}</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile
              class="ml-4 white--text"
              v-for="(link, i) in item.children"
              :key="i"
              :to="link.route"
              router
              exact
            >
              <v-list-tile-action>
                <v-icon small class="white--text" v-text="link.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-title v-text="link.text" :to="link.route" router exact></v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </span>

        <!-- admin links -->
        <div v-if="user.Role">
          <hr />
          <h2 class="mt-3 ml-2 white--text">Admin</h2>

          <v-list-tile
            v-for="adminLink in adminLinks"
            :key="adminLink.text"
            :to="adminLink.route"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon class="white--text">{{ adminLink.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text" v-text="adminLink.text" />
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
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
import store from "~/store/store";
export default {
  computed: {
    user() {
      return store.state.user;
    }
  },
  methods: {
    logout: function() {
      logout();
      this.$router.push({ name: "index" });
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        {
          icon: "folder",
          text: "Activities",
          route: "/activities",
          children: [
            { icon: "inbox", text: "Files In", route: "/inbox" },
            { icon: "unarchive", text: "Files Out", route: "/outbox" },
            { icon: "drafts", text: "Draft", route: "/draft" }
          ]
        },
        { icon: "folder", text: "Requests", route: "/myrequests" },
        { icon: "face", text: "Profile", route: "/profile" }
      ],
      adminLinks: [
        { icon: "folder", text: "Maintenance Requests", route: "/requests" },
        { icon: "create_new_folder", text: "Records", route: "/records" },
        { icon: "people", text: "Directory", route: "/directory" }
      ],
      miniVariant: false,
      title: "DOE.Records Management System"
    };
  }
};
</script>
