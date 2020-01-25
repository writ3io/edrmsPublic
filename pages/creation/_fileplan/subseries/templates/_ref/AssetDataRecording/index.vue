<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <!-- <v-flex xs2></v-flex>
      <v-flex></v-flex>-->
      <v-flex xs9>
        <!-- <v-flex justify-end>
              <hr style="color:grey" />
        </v-flex>-->
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">ASSET DATA RECORDING FORM</h3>

            <v-card>
              <br />

              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers2"
                      :items="doc.body.phase2"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                        </v-tooltip>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
  <td class>{{ props.item.description }}</td>

  <td>
    <v-radio-group v-model="props.item.boolean" :mandatory="false">
      <v-radio label="Yes" value="Yes"></v-radio>
      <v-radio label="No" value="No"></v-radio>
    </v-radio-group>
  </td>
</template>

<template v-slot:no-data>
  <div :value="true" class="text-xs-center">No Form Input Fields</div>
</template>
                    </v-data-table>


                    <v-flex xs12 sm6>
                      <v-text-field v-model="doc.body.initialsSurname" label="Folio No.: "></v-text-field>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-text>

              
                            
    
                            <v-card-text class="pt-0 mt-0">
                                
    
                                <v-layout xs12 wrap border>
                                    <v-flex>
                                        <v-data-table :headers="headers" :items="doc.body.phase1" hide-actions class="elevation-1">
                                            <template slot="headerCell" slot-scope="props">
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <span v-on="on">{{ props.header.text }}</span>
    </template>
  </v-tooltip>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
  <td class>{{ props.item.description }}</td>

  <td>
    <v-text-field v-model="props.item.inputSpace" solo flat placeholder class="styled-input"></v-text-field>
  </td>

  <td class="comment-bg">{{ props.item.comment }}</td>
</template>

<template v-slot:no-data>
  <div :value="true" class="text-xs-center">No Form Input Fields</div>
</template>
                    </v-data-table>

                    <v-data-table :headers="headers3" :items="doc.body.phase3" hide-actions class="elevation-1">
                                            <template slot="headerCell" slot-scope="props">
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <span v-on="on">{{ props.header.text }}</span>
    </template>
  </v-tooltip>
</template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

<template v-slot:items="props" v-slot:no-data>
  <td class>{{ props.item.description }}</td>

  <td>
    <v-text-field v-model="props.item.inputSpace" solo flat placeholder class="styled-input"></v-text-field>
  </td>

  <td class="comment-bg">{{ props.item.comment }}</td>
</template>

<template v-slot:no-data>
  <div :value="true" class="text-xs-center">No Form Input Fields</div>
</template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>


              <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    <v-flex xs12 lg4>
                      <v-text-field v-model="doc.body.location" label="User Signature:"></v-text-field>
                    </v-flex>

                    <v-flex xs12 lg4>
                      <v-text-field v-model="doc.body.address" label="User Parsel No.:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg4>
                      <v-menu transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
  <v-text-field v-model="doc.body.date" label="Date: " readonly v-on="on"></v-text-field>
</template>
              <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
            </v-menu>
                    </v-flex>

                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.roomNo" label="Verifier Name:"></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.username" label="Capture Initial:"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>

              
              

              <br />
              
            </v-card>
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
import Editor from "@tinymce/tinymce-vue";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "Checklist",
  components: {
    editor: Editor,
    Toolbar,
    SelectUsers
  },

  data() {
    return {
      menu1a: false,
      menu1b: false,
      menu2a: false,
      menu2b: false,
      menu3a: false,
      menu3b: false,
      menu4a: false,
      menu4b: false,

      headers2: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "YES / NO",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers3: [
        {
          text: "VEHICLES ONLY",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers: [
        {
          text: "ALL ASSETS",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
        // {
        //   text: "ITEM CHECKED",
        //   value: ""
        // },
        // {
        //   text: "YES / NO",
        //   value: ""
        //   //   width: "10%"
        // },
        // {
        //   text: "COMMENTS",
        //   value: ""
        // }
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "checklist",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "",
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          enderUser: {},
          initialsSurname: "",

          // days: [
          //   { dayOfWeek: "Monday", value: "", width: "10%" },
          //   { dayOfWeek: "Tuesday", value: "" },
          //   { dayOfWeek: "Wednesday", value: "" },
          //   { dayOfWeek: "Thursday", value: "" },
          //   { dayOfWeek: "Friday", value: "" }
          // ],
          phase1: [
            {
              description: " Mandatory: Class ",
              inputSpace: "",
              comment: "Non Residential, Computer Equipment, Furnture & Office"
            },
            {
              description: "Mandatory: Asset Number",
              inputSpace: "",
              comment: "8 Long Number"
            },
            {
              description: "Mandatory: Description",
              inputSpace: "",
              comment: ""
            },
            {
              description: "",
              inputSpace: "",
              comment: ""
            },
            {
              description: "Mandatory: Acquisition Date",
              inputSpace: "",
              comment: "yyyy/mm/dd"
            },
            {
              description: "Mandatory: Supplier",
              inputSpace: "",
              comment: ""
            },
            {
              description: "Mandatory: Payment Advice No.",
              inputSpace: "",
              comment: "Expenditure Generated Number"
            },
            {
              description: "If Applicable: Unique Identifier ",
              inputSpace: "",
              comment: "Serial number/Registration Number/Project Code"
            },
            {
              description: "Mandatory: Location ",
              inputSpace: "",
              comment: ""
            },
            {
              description: "Mandatory: User ",
              inputSpace: "",
              comment: ""
            },
            {
              description: "Mandatory: Accounting Area ",
              inputSpace: "",
              comment:
                "Mopani, Capricorn, Sekhukhune, Vhemba, Waterberg, Head Office"
            },
            {
              description: "Mandatory: Major/Minor ",
              inputSpace: "",
              comment: "Major or Minor"
            },
            {
              description: "Mandatory: Institution ",
              inputSpace: "",
              comment: "Circuit, EMPC, School"
            },
            {
              description: "Mandatory: Asset Condition ",
              inputSpace: "",
              comment: "Exellent, Good, Reduntant, Unserviceable"
            },
            {
              description: "Mandatory: Capture Year/Purchase Year ",
              inputSpace: "",
              comment:
                "2010, 2009, 2008.... 1990 etc or default to Purchase Year"
            },
            {
              description: "Mandatory: Acquisition Cost ",
              inputSpace: "",
              comment:
                "Payment Advice/Invoice Unit Cost(Or R1.00 for founds assets)"
            }
          ],

          phase2: [
            {
              description: "MASTER",
              boolean: "",
              comment: ""
            }
          ],

          phase3: [
            {
              description: " Mandatory: Registration No.: ",
              inputSpace: "",
              comment: "Number Plate Number"
            },
            {
              description: "Mandatory: Class Code:",
              inputSpace: "",
              comment: ""
            },
            {
              description: "If Applicable Engine No.:",
              inputSpace: "",
              comment: ""
            },
            {
              description: "If Applicable Kilo: Reading:",
              inputSpace: "",
              comment: ""
            },
            {
              description: "Mandatory: Chassis No.:",
              inputSpace: "",
              comment: ""
            },
            {
              description: "If Applicable: Licence Renewal: ",
              inputSpace: "",
              comment: ""
            }
          ],

          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          signatures: [],
          signatures2: []
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
      this.doc.body.signatures.push(users);
    },
    onEnd() {
      this.setAuthorSignature();
    },
    addRow() {
      this.doc.body.phase9.push({});
    },
    removeRow(index) {
      this.doc.body.phase9.splice(index, 1);
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

.main-heading {
  border: 2px solid #dddddd;
  padding: 5%;
  border-radius: 5px;
}

.card-border {
  border: 2px solid #dddddd;
  padding: 5px 10px;
}
.comment-bg {
  background-color: #f4f4f4;
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

.styled-input {
  min-width: 200px;
  /* font-size: 20pt; */
}
</style>
