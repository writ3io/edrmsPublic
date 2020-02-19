<template>
  <v-layout class="side-toolbar" row wrap justify-start>
    <!-- preview -->
    <v-dialog v-model="fileDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closePreview">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Preview</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <object
          v-if="openedFile.filetype.includes('pdf')"
          width="100%"
          height="600px"
          :type="openedFile.filetype"
          :data="openedFile.url"
        ></object>
        <img v-if="openedFile.filetype.includes('image')" :src="openedFile.url" alt />
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" right :timeout="6000" top :color="snackbarColor">
      {{ snackbarText }}
      <v-btn flat icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-layout class="side-toolbar" row wrap justify-start>
      <v-flex xs2>
        <v-layout class="side-toolbar" row wrap justify-start>
          <v-flex  v-if="$route.params.location == 'records'" xs12>
            <v-layout align-center>
              <h4 class="mr-2">Ref:</h4>
              <v-text-field v-model="data.ref"></v-text-field>
            </v-layout>
          </v-flex>
          <v-flex xs12></v-flex>
          <div class="buttons">
            <v-flex xs12>
              <v-btn color="white" :loading="loading" round @click="submit('')">
                <v-icon small color="primary" left>forward</v-icon>Submit
              </v-btn>
            </v-flex>

            <v-flex v-if="$route.params.location != 'records'" xs12>
              <v-btn color="error" :loading="loading" round @click="submit('draft')">
                <v-icon small color="white" left>forward</v-icon>Send Back
              </v-btn>
            </v-flex>

            <!-- attachments -->
            <v-flex xs12>
              <h4 class="my-2">Attachments</h4>
              <v-card flat>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-list subheader>
                      <v-list-tile
                        v-for="file in data.attachments"
                        :key="file.name"
                        avatar
                        @click="openPreview(file)"
                      >
                        <v-list-tile-content>
                          <v-list-tile-title>{{ file.name }}</v-list-tile-title>
                          <v-list-tile-sub-title v-if="file">{{ file.filetype}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
              </v-card>
            </v-flex>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import { logout } from "~/services/AuthService";
import { updateDoc } from "~/services/DocsService";
import { nextLocation } from "~/services/DocsService";
export default {
  props: {
    data: Object
  },
  data() {
    return {
      loading: false,
      dialog: false,
      fileDialog: false,
      loading: false,
      openedFile: {
        filetype: ""
      },
      files: [],
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      recipients: [],
      dialog: false
    };
  },
  methods: {
    async submit(location) {
      console.log(this.data, nextLocation(this.data), location)
      if(location === 'draft'){
        this.data.location = 'draft'
      }else {
        this.data.location = nextLocation(this.data)
      }
      
      this.loading = true
      await updateDoc(this.data);
      this.loading = false
      this.$router.go(-1)
    },
    openPreview(file) {
      this.openedFile = file;
      this.fileDialog = true;
    },
    closePreview() {
      this.openedFile = { filetype: "" };
      this.fileDialog = false;
    },
    log(docId, to, action) {},
    forward(item, newSignatory) {}
  }
};
</script>