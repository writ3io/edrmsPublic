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
            <h3 class="text-xs-center">TRANSFER OF ASSETS BOUGHT ON BEHALF OF SCHOOLS</h3>
            
            <br />
            <v-layout wrap justify-right>
                <v-flex xs12>
                <v-text-field v-model="doc.body.branch" label="NAME OF INSTITUTION / DISTRICT:"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-menu transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="doc.body.date"
                      label="FINANCIAL YEAR: "
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
                </v-menu>
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.descriptionOfAsset"
                    single-line
                    solo
                    flat
                    placeholder="Description Of Asset"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.assetNumber"
                    single-line
                    solo
                    flat
                    placeholder="Asset Number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.serialNumber"
                    single-line
                    solo
                    flat
                    placeholder="Serial Number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.oldLocation"
                    single-line
                    solo
                    flat
                    placeholder="Old Location"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.newLocation"
                    single-line
                    solo
                    flat
                    placeholder="New Location"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForTransfer"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Transfer"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.dateTransferred"
                    single-line
                    solo
                    flat
                    placeholder="Date Transferred"
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
          

           <v-flex xs12>
              <v-switch v-model="iSign" label="Add People To Sign"></v-switch>
            </v-flex>

            <v-flex v-show="iSign" xs12>
              <h3>Who to sign:</h3>
              <v-btn color="white" :loading="loading" round @click="addSignDialog = true">
                <v-icon small color="warning" left>add</v-icon>Add Signatory
              </v-btn>
              <v-btn color="warning" :loading="loading" round @click="clearSignList">
                <v-icon small color="white" left>delete</v-icon>Clear List
              </v-btn>
            </v-flex>

            <v-flex v-for="(sign, index) in doc.body.signatures" :key="index" xs12>
              <v-card-text class="black--text ma-0 font-weight-bold text-sm-left">
                <h1>{{sign.action.text}}</h1>
                <hr />
                <h2>{{sign.SurName}}</h2>
                <h4>
                  {{sign.Designation}} |
                  <span class="grey--text">{{sign.Department}}</span>
                </h4>
              </v-card-text>
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
          text: "DESCRIPTION OF ASSET",
          align: "left",
          value: ""
        },
        {
          text: "ASSET NUMBER",
          value: ""
        },
        {
          text: "SERIAL NUMBER",
          value: ""
        },
        {
          text: "OLD LOCATION",
          value: ""
        },
         {
          text: "NEW LOCATION",
          value: ""
        },
        {
          text: "REASON FOR TRANSFER",
          value: ""
        },
        {
          text: "DATE TRANFERRED",
          value: ""
        },
        {
          text: "ACTIONS",
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
              descriptionOfAsset: "",
              assetNumber: "",
              serialNumber: "",
              oldLocation: "",
              newLocation: "",
              reasonForTransfer: "",
              dateTransferred: "",
            },
             {
              descriptionOfAsset: "",
              assetNumber: "",
              serialNumber: "",
              oldLocation: "",
              newLocation: "",
              reasonForTransfer: "",
              dateTransferred: "",
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

