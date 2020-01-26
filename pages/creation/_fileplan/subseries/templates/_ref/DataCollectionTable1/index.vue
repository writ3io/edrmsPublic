<template>
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
            <h2 class="text-xs-center">DATA COLLECTION TABLE 1</h2>

            <br />

            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0">
                  <br />
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.buildingName" label="BUILDING NAME:"></v-text-field>
                    </v-flex>

                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.town" label="TOWN:"></v-text-field>
                    </v-flex>
                    
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.address" label="PHYSICAL ADDRESS:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.surbub" label="SURBUB:"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>

            <br />


            

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

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.barcode"
                    single-line
                    solo
                    flat
                    placeholder="Barcode"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.existingRoom"
                    single-line
                    solo
                    flat
                    placeholder="Existing Room"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.occupant"
                    single-line
                    solo
                    flat
                    placeholder="Occupant"
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
                    v-model="props.item.phoneNumber"
                    single-line
                    solo
                    flat
                    placeholder="Phone Number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.floor"
                    single-line
                    solo
                    flat
                    placeholder="Floor"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.directorate"
                    single-line
                    solo
                    flat
                    placeholder="Directorate"
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
                <td colspan="100%" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
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
  name: "DataCollectionTable1",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "ROOM BAR CODE",
          align: "left",
          value: ""
        },
        {
          text: "EXISTING ROOM NUMBER",
          value: ""
        },
        {
          text: "OCCUPANT/RESPONIBLE PERSON NAME & SURNAME",
          value: ""
        },
        {
          text: "LOCATION/ROOM DESCRIPTION",
          value: ""
        },
        {
          text: "PHONE NUMBER",

          value: ""
        },
        ,
        {
          text: "FLOOR",

          value: ""
        },
        ,
        {
          text: "DIRECTORATE",

          value: ""
        },

        {
          text: "ACTIONS",
          value: "carbs"
        }
      ],
      
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "DataCollectionTable1",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          buildingName: "",
          surbub: "",
          address:"",
          town:"",
          roomNo:"",
          tr: [
            {
              barcode: "",
              existingRoom: "",
              occupant: "",
              location: "",
              phoneNumber: "",
              floor: "",
              directorate: ""
            },
            {
              barcode: "",
              existingRoom: "",
              occupant: "",
              location: "",
              phoneNumber: "",
              floor: "",
              directorate: ""
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

.card-border {
  border: 2px solid #dddddd;
  padding: 5px 10px;
}
</style>

