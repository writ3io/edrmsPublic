<template>
  <v-container grid-list-md>
    <v-layout justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc"/>
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">DISPOSAL REGISTER FOR THE HEAD OFFICE</h3>

            <v-layout wrap justify-right>
              <!-- <v-flex xs12>
                <v-menu transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="doc.body.date"
                      label="OPERATIONAL PLAN FOR YEAR ENDING: "
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex> -->
              <v-flex xs12>
                <v-text-field v-model="doc.body.branch" label=" DISPOSAL REGISTER FOR THE FINANCIAL YEAR: "></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12>
            <v-data-table :headers="headers" :items="doc.body.tr" hide-actions class="elevation-1">
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="Hello">
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.assetNo"
                    single-line
                    solo
                    flat
                    placeholder="Asset No"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.assetDescription"
                    single-line
                    solo
                    flat
                    placeholder="Asset Description"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.serialNo"
                    single-line
                    solo
                    flat
                    placeholder="Serial No"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.location"
                    single-line
                    solo
                    flat
                    placeholder="Location"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.accArea"
                    single-line
                    solo
                    flat
                    placeholder="Acc. Area"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.respManager"
                    single-line
                    solo
                    flat
                    placeholder="Resp. Manager"
                  ></v-text-field>
                </td>
                
                
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Sign Here : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.authorSignatureDate" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.authorSignatureDate" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>

            </v-layout>

          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "OperationalPlan",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {

      dialog: false,
      headers: [
        {
          text: "ASSET NO",
          align: "left",
          value: ""
        },
        {
          text: "ASSET DESCRIPTION",
          value: ""
        },
        {
          text: "SERIAL NO.",
          value: ""
        },
        {
          text: "LOCATION",
          value: ""
        },
        {
          text: "ACC. AREA",
          value: ""
        },
        {
          text: "RESP. MANAGER",
          value: ""
        },
        {
          text: "Actions",
          value: "carbs"
        }
      ],
      iSign: false,
      doc: {
        ref: "2-1-4",
        template: "OperationalPlan",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          name: "",
          branch: "",
          capacity: "",
          item: "",
          tr: [
            {
              assetNo: "",
              assetDescription: "",
              serialNo: "",
              location: "",
              accArea: "",
              respManager: ""
            },
            {
              assetNo: "",
              assetDescription: "",
              serialNo: "",
              location: "",
              accArea: "",
              respManager: ""
            }
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: []
        }
      },

      signature: null,
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      loading: false,
      min_height: 320,
      plugins:
        "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
      toolbar:
        "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
    };
  },
  computed: {
    time() {
      return Date.now();
    },
    users() {
      return store.state.users;
    }
  },
  methods: {
    ...signatureHelpers(),
    setRecipients(users) {
      this.doc.recipients = users;
    },
    setSigners(users) {
      this.doc.body.signatures = users;
    },
    onEnd() {
      this.setAuthorSignature();
    },
    addRow() {
      this.doc.body.tr.push({});
    },
    removeRow(index) {
      this.doc.body.tr.splice(index, 1);
    }
  },

  created() {
    console.log(store.state.users);
    console.log(this.$route);
  }
};
</script>

<style>
.side-toolbar {
  position: fixed;
  max-width: 180px;
}

table {
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #dddddd;
}

.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}

.terms_conditions {
  list-style: initial;
}
</style>

