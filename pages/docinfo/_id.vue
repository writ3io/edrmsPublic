<template>
  <div class="doc-info">
    <v-toolbar flat dark color="primary">
      <v-btn icon dark @click="goBack()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Document Trail</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      </v-toolbar-items>
    </v-toolbar>
      <v-subheader>Document Info:</v-subheader>
    <v-divider></v-divider>
    <v-timeline align-top dense>
      <v-timeline-item v-for="time in trail" :Key="time.id" color="warning" small>
        <v-layout pt-3>
          <v-flex xs12 md3>
            <strong>{{time.createdAt | moment("ddd, DD-MMM-YY | HH:MM:SS A")}}</strong>
          </v-flex>
          <v-flex xs12 md3>
            <strong><v-icon small class="mx-2">arrow_forward</v-icon></strong>
          </v-flex>
          <v-flex xs12 md6>
            <h4>Last Modified: {{time.updatedAt | moment("ddd, DD-MMM-YY | HH:MM:SS A")}}</h4>
            <h4>Modified By: {{time.currentUser}}</h4>
            <h4>Current Location: {{time.location}}</h4>
          </v-flex>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import store from "~/store/store";
export default {
  data: () => ({
    docs: [],
    docinfo: {}
  }),
    computed: {
    trail: function() {
      this.docinfo = store.state.trail[0]
      console.log(store.state.trail, this.docinfo);
      return store.state.trail;
    }
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
  created() {
      store.dispatch("getTrail", this.$route.params.id);
      console.log(this.$route.params.id)
  }
};
</script>
