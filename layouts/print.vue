<template>
  <v-app light>
    <Navbar />
    <v-content>
      <v-container>
        <!-- dialogs -->

        <!-- preview -->
        <v-dialog
          v-model="fileDialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
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

        <!-- send by email -->
        <v-dialog v-model="mailDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Send document by email</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="email.receiver" label="Email Address" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="email.details" label="Details" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="mailDialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat :loading="loading" @click="sendEmail">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- send by postal  -->
        <v-dialog v-model="postalDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Send document by Postal</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="postal.to" label="TO:" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="postal.number"
                      label="Regsitered mail-trace and track number:"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="postalDialog = false">Close</v-btn>
              <v-btn color="blue darken-1" :loading="loading" flat @click="sendByPostal">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Send by Courier -->
        <v-dialog v-model="courierDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Send by Courier</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="courier.to" label="TO:" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="courier.number" label="Way bill number:" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="courierDialog = false">Close</v-btn>
              <v-btn color="blue darken-1" :loading="loading" flat @click="sendByCourier">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Send by Messenger -->
        <v-dialog v-model="messengerDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Send by Messenger</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="messenger.to" label="TO:" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="messenger.name" label="Delivered by:" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="messengerDialog = false">Close</v-btn>
              <v-btn color="blue darken-1" :loading="loading" flat @click="sednByMessenger">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- dialogs -->


        <v-toolbar class="white my-5 sticky" flat>
          <form id="uploadForm" :action="`${apiUrl}/record`" method="post">
            <input type="text" name="formData" :value="JSON.stringify(doc)" hidden />
            <v-btn flat small color="primary" :loading="loading" type="submit" name="submit">
              <v-icon right small>print</v-icon>Download / Print
            </v-btn>
          </form>
            <!-- <v-btn router :to="`/${apiUrl}/record/${doc.id}`" flat small color="primary" :loading="loading">
              <v-icon right small>print</v-icon>Download / Print
            </v-btn> -->

          <v-spacer></v-spacer>
          <h5 class="grey--text">Send To :</h5>

          <v-btn flat small color="primary" @click="mailDialog =true">
            <span>Email</span>
            <v-icon right small>mail</v-icon>
          </v-btn>

          <v-btn flat small color="primary" @click="postalDialog = true">
            <span>Postal</span>
            <v-icon right small>local_shipping</v-icon>
          </v-btn>

          <v-btn flat small color="primary" @click="courierDialog = true">
            <span>Courier</span>
            <v-icon right small>local_shipping</v-icon>
          </v-btn>

          <v-btn flat small color="primary" @click="messengerDialog = true">
            <span>Messenger</span>
            <v-icon right small>directions_walk</v-icon>
          </v-btn>

          <v-spacer></v-spacer>
          <!-- replicate -->
          <v-btn icon router :to="`/docinfo/${docInfo}`">
            <v-icon color="blue">info</v-icon>
          </v-btn>
          <!-- replicate -->
        </v-toolbar>

          <!-- attachments -->
        <!-- <v-card class="attachments pa-2" width="150px" xs12>
          <h4 class="my-2 text-uppercase">Attachments</h4>
          <v-list subheader>
            <v-list-tile
              v-for="file in doc.attachments"
              :key="file.name"
              avatar
              @click="openPreview(file)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ file.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ file.filetype.slice(-3)}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card> -->

        <div id="print">

          <!-- template -->
          <nuxt />
          <!-- template -->

        </div>
      </v-container>
    </v-content>

    <!-- <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/Navbar";
import store from "~/store/store";


export default {
  components: {
    Navbar,
  },
  data: () => ({
    openedFile: {
      filetype: ""
    },
    fileDialog: false,
    email: {},
    postal: {},
    courier: {},
    messenger: {},
    mailDialog: false,
    messengerDialog: false,
    postalDialog: false,
    courierDialog: false,
    mailDialog: false,
    loading: false,
    docInfo: ''
  }),
  computed: {
    doc() {
      return store.state.doc;
    },
    apiUrl(){
      return store.state.apiUrl
    }
  },
  watch:{
    doc(){
      this.docInfo = this.doc.document.split('_')[1].split('.')[0]
    }
  },

  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper("print");
    },
    openPreview(file) {
      this.openedFile = file;
      this.fileDialog = true;
    },
    closePreview() {
      this.openedFile = { filetype: "" };
      this.fileDialog = false;
    },
    signDate(signatory) {
      if (signatory.time) {
        return signatory.time;
      } else {
        return "Not Yet Signed";
      }
    },
    log(docId, to) {
      record.tracker({
        docId,
        from: "Usage",
        to: to,
        action: "Usage Distribution",
        date: Date.now()
      });
    },
    // send email
    sendEmail() {},

    // send by postal
    sendByPostal() {
      this.loading = true;
      this.log(
        this.doc.id,
        `Postal Services: ${this.postal.to}, TN: ${this.postal.number}`
      );
      this.loading = false;
      this.courierDialog = false;
    },
    sendByCourier() {
      this.loading = true;
      this.log(
        this.doc.id,
        `Courier Services: ${this.courier.to}, WB: ${this.courier.number}`
      );
      this.loading = false;
      this.courierDialog = false;
    },
    sednByMessenger() {
      this.loading = true;
      this.log(
        this.doc.id,
        `${this.messenger.to}, Delivered By Messenger: ${this.messenger.name}`
      );
      this.loading = false;
      this.messengerDialog = false;
    }
  },
  middleware: "auth"
};
</script>
