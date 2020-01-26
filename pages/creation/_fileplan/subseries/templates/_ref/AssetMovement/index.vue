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
            <h2 class="text-xs-center">ASSET MOVEMENT FORM</h2>

            <br />

            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0">
                  <h3 class="text-xs-center">OLD LOCATION</h3>
                  <br />
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    <v-flex xs12>
                      <v-text-field v-model="doc.body.location" label="LOCATION:"></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.address" label="ADDRESS:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.locationCode" label="LOCATION CODE:"></v-text-field>
                    </v-flex>

                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.roomNo" label="ROOM NO.:"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="doc.body.username" label="USERNAME & SURNAME:"></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.section" label="SECTION:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.tel" label="TEL:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.floor" label="FLOOR:"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>

            <br />


            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0">
                  <h3 class="text-xs-center">NEW LOCATION</h3>
                  <br />
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    <v-flex xs12>
                      <v-text-field v-model="doc.body.location1" label="LOCATION:"></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.address1" label="ADDRESS:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.locationCode1" label="LOCATION CODE:"></v-text-field>
                    </v-flex>

                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.roomNo1" label="ROOM NO.:"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="doc.body.username1" label="USERNAME & SURNAME:"></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.section1" label="SECTION:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.tel1" label="TEL:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.floor1" label="FLOOR:"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>


          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">ASSET TO BE MOVED</h3>

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
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    placeholder="Description"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.make"
                    single-line
                    solo
                    flat
                    placeholder="Make"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.model"
                    single-line
                    solo
                    flat
                    placeholder="Model"
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

          <v-flex xs12>
            <h3 class="text-xs-center">CONFIRMATION OF MOVEMENT</h3>

            <v-data-table :headers="headers1" :items="doc.body.tr1" hide-actions class="elevation-1">
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
                 
                    {{props.item.description}}
                    
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.confirmedBy"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-center">
                 
                    {{props.item.description}}
                    
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.doneBy"
                    single-line
                    solo
                    flat
                   
                  ></v-text-field>
                </td>
                <td class="text-xs-center">
                 
                    {{props.item.description}}
                    
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.registerUpdate"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
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
          text: "BARCODE",
          align: "left",
          value: ""
        },
        {
          text: "DESCRIPTION",
          value: ""
        },
        {
          text: "MAKE",
          value: ""
        },
        {
          text: "MODEL",
          value: ""
        },
        {
          text: "SERIAL NUMBER",

          value: ""
        },

        {
          text: "ACTIONS",
          value: "carbs"
        }
      ],
      headers1: [
        {
          text: "-",
          sortable: false,
          align: "left",
          value: ""
        },
        {
          text: "MOVEMENT CONFIRMED BY THE USER",
          value: ""
        },
        {
          text: "-",
          sortable: false,
          value: ""
        },
        {
          text: "MOVEMENT DONE BY ASSET MANAGEMENT",
          value: ""
        },
        {
          text: "-",
          sortable: false,
          value: ""
        },
        {
          text: "ASSET REGISTER UPDATE",
          value: ""
        }
      ],
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "AssetMovement",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          name: "",
          location: "",
          address:"",
          locationCode:"",
          roomNo:"",
          username:"",
          section:"",
          tel:"",
          floor: "",
          item: "",
          name1: "",
          location1: "",
          address1:"",
          locationCode1:"",
          roomNo1:"",
          username1:"",
          section1:"",
          tel1:"",
          floor1: "",
          item1: "",
          tr: [
            {
              barcode: "",
              description: "",
              make: "",
              model: "",
              serialNumber: ""
            },
            {
              barcode: "",
              description: "",
              make: "",
              model: "",
              serialNumber: ""
            }
            
          ],
          tr1: [
            {
              description: "NAME:",
              confirmedBy: "",
              doneBy: "",
              registerUpdate: ""
            },
            {
              description: "RANK:",
             confirmedBy: "",
              doneBy: "",
              registerUpdate: ""
            },
            {
              description: "PERSAL NO:",
              confirmedBy: "",
              doneBy: "",
              registerUpdate: ""
            },
            {
              description: "SIGNATURE:",
             confirmedBy: "",
              doneBy: "",
              registerUpdate: ""
            },
            {
              description: "DATE:",
              confirmedBy: "",
              doneBy: "",
              registerUpdate: ""
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

