<template>
  <v-layout class="side-toolbar" row wrap justify-end>
    <v-dialog v-model="saveDialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          {{status}}
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" right center :timeout="6000" :color="snackbarColor">
      {{ snackbarText }}
      <v-btn flat icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>

    <v-flex xs12>
      <v-btn color="white" :loading="loading" round @click="submit('draft')">
        <v-icon small color="primary" left>save</v-icon>save
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <v-btn color="white" :loading="loading" round @click="submit('records')">
        <v-icon small color="warning" left>send</v-icon>Submit
      </v-btn>
    </v-flex>

    <!-- attachments  -->
    <v-flex xs12 class="mt-2">
      <h2>
        <v-icon color="warning">attach_file</v-icon>Attach Files
      </h2>
      <input class="mt-4" type="file" @change="onFilesSelected" multiple />
    </v-flex>

    <v-flex xs12>
      <v-list subheader>
        <v-subheader>Attachments</v-subheader>
        <v-list-tile v-for="(file, index) in attachments" :key="file.name" avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="file.name"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon small @click="deleteFile(file,index)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
    <!--  -->
  </v-layout>
</template>

<script>
import { logout } from "~/services/AuthService";
import { createDoc, getTemplate, updateDoc } from "~/services/DocsService";
import store from "~/store/store";
export default {
  props: {
    data: Object,
    apiUrl: "store"
  },
  data() {
    return {
      loading: false,
      files: [],
      attachments: [],
      snackbarText: "",
      snackbar: false,
      snackbarColor: "primary",
      saveDialog: false,
      status: null
    };
  },
  computed: {},
  methods: {
    logout: function() {
      logout();
      this.$router.push({ name: "index" });
    },
    onFilesSelected(e) {
      this.files = e.target.files;
      console.log(e, this.files);
    },
    downloadTemplate() {
      getTemplate(this.data);
      console.log(this.data);
    },
    async submit(location) {
      console.log(this.data);
      this.loading = true;

      this.data.location = location;
      if ((this.data.id)) {
        await updateDoc(this.data);
      } else {
        await createDoc(this.data, this.files[0]);
      }
      this.loading = false;
      this.snackbarText = "Saved Successfully!";
      this.snackbar = true;
      setTimeout(() => {
        this.$router.push({ name: "index" });
      }, 2000);
    }
  }
};
</script>