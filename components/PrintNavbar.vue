<template>
  <div class="print-preview-nav">
    <!-- dialogs -->

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
    <v-toolbar class="white mt-4 sticky" dense>
      <v-btn flat color="primary" @click="print">
        <span>Print</span>
        <v-icon right>print</v-icon>
      </v-btn>
      <v-btn flat color="primary" @click="mailDialog =true">
        <span>Send To Email</span>
        <v-icon right>mail</v-icon>
      </v-btn>
      <v-btn flat color="primary" @click="postalDialog = true">
        <span>Send By Postal</span>
        <v-icon right>local_shipping</v-icon>
      </v-btn>

      <v-btn flat color="primary" @click="courierDialog = true">
        <span>Send By Courier</span>
        <v-icon right>local_shipping</v-icon>
      </v-btn>

      <v-btn flat color="primary" @click="messengerDialog = true">
        <span>Send By Messenger</span>
        <v-icon right>directions_walk</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <!-- replicate -->
      <v-btn icon router :to="`/docinfo/${doc.id}`">
        <v-icon color="info">info</v-icon>
      </v-btn>
      <!-- replicate -->
    </v-toolbar>

    <v-card class="attachments pa-2 sticky" width="150px" xs12>
      <!-- attachments -->
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
    </v-card>
  </div>
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
        openedFile:{
          filetype:''
        },
        fileDialog:false,
        email:{},
        postal:{},
        courier:{},
        messenger:{},
        mailDialog: false,
        messengerDialog: false,
        postalDialog:false,
        courierDialog: false,
        mailDialog: false,
        loading: false,
    };
  },
  methods: {
    async submit() {
      console.log(this.data, nextLocation(this.data));
      this.data.location = nextLocation(this.data);
      this.loading = true;
      await updateDoc(this.data);
      this.loading = false;
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
<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 68px;
}
</style>