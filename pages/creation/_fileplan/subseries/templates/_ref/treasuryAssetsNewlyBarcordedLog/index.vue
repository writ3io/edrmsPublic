<template>
  <div id="treasuryAssetsNewlyBarcordedLog">
    <v-dialog v-model="addSignDialog" persistent max-width="680px">
      <v-card>
        <v-card-title>
          <span class="headline">Forward To:</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap justify-space-between>
              <v-flex xs12 sm7>
                <v-combobox
                  v-model="signatory"
                  :items="users"
                  label="Choose Signatory"
                  chips
                  return-object
                  item-text="SurName"
                  item-value="EmailAdress"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item.SurName }}</v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  :items="actions"
                  v-model="signatory.action"
                  item-text="text"
                  return-object
                  label="Action"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="addSignDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat :loading="loading" @click="addSignatory">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container grid-list-md>
      <v-layout justify-space-between>
        <v-flex xs3>
          <v-layout>
            <Toolbar :data="doc" />
          </v-layout>
        </v-flex>

        <v-flex xs9>
          <v-layout wrap>
            <v-flex xs12>
              <h3 class="text-xs-center">LIMPOPO PROVINCIAL TREASURY ASSETS NEWLY BARCORDED LOG</h3>

              <br />
              <v-layout wrap justify-right>
                <v-flex xs12>
                  <v-text-field v-model="doc.body.name" label="NAME:"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="doc.body.site" label="SITE:"></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-alert
                pa-0
                :value="true"
                type="info"
              >Note: this document must be completed for all newly bar-coded assets. All fields must be completed. Please keep this document neat. Hand this in at your group leader everyday</v-alert>
              <br />
              <v-data-table
                :headers="headers"
                :items="doc.body.tr"
                hide-actions
                class="elevation-1"
              >
                <template slot="headerCell" slot-scope="props">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <span v-on="on">{{ props.header.text }}</span>
                    </template>
                    <span>{{ props.header.text }}</span>
                  </v-tooltip>
                </template>

                <template v-slot:items="props" v-slot:no-data>
                  <td class="text-xs-center">
                    <v-text-field
                      v-model="props.item.roomBar"
                      single-line
                      solo
                      flat
                      placeholder="Room Bar"
                    ></v-text-field>
                  </td>
                  <td class="text-xs-right px-0 py-0">
                    <v-text-field
                      v-model="props.item.codeBarNumber"
                      single-line
                      solo
                      flat
                      placeholder="Code Bar Number"
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
                      v-model="props.item.description"
                      single-line
                      solo
                      flat
                      placeholder="Description"
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
              <v-card-text>
                <h2 class="font-weight-medium">{{sign.action.text}}</h2>
                <hr />
                <h2 class="font-weight-regular">{{sign.SurName}}</h2>
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
  </div>
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
  name: "treasuryAssetsNewlyBarcordedLog",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "ROOM BAR #",
          align: "left",
          value: ""
        },
        {
          text: "CODE BAR NUMBER",
          value: ""
        },
        {
          text: "SERIAL NUMBER",
          value: ""
        },
        {
          text: "DESCRIPTION",
          value: ""
        },
        {
          text: "Actions",
          value: "carbs"
        }
      ],
      series: {},
      saveDialog: false,
      attachments: [],
      isFormValid: true,
      status: "",
      iSign: false,
      addSignDialog: false,
      signatory: {},
      doc: {
        ref: this.$route.params.ref,
        template: "treasuryAssetsNewlyBarcordedLog",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          name: "",
          site: "",
          branch: "",
          capacity: "",
          item: "",
          tr: [
            {
              roomBar: "",
              codeBarNumber: "",
              serialNumber: "",
              description: ""
            },
            {
              roomBar: "",
              codeBarNumber: "",
              serialNumber: "",
              description: ""
            }
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: []
        }
      },
      actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
      ],

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
    // sign
    clearSignList() {
      this.doc.body.signatures = [];
      console.log(this.doc.body.signatures);
    },

    addSignatory() {
      if (!this.signatory.action) {
        this.addSignDialog = false;
        return;
      }
      this.signatory.priority = this.signatory.action.signLevel;
      this.doc.body.signatures.push(this.signatory);

      //sort
      this.doc.body.signatures.sort(function(a, b) {
        return a.priority - b.priority;
      });

      this.addSignDialog = false;
      this.signatory = {};
      console.log(this.doc);
    },

    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    saveSignature() {},
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log("=== End ===");
      this.doc.body.authorSignature = data;
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

