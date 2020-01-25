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
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">CHECK LIST FOR AUDIT</h3>

            <v-card>
              <v-card-title>
                <v-flex xs12 lg6>
                  <v-text-field v-model="doc.body.initialsSurname" label="INSTITUTION/ OFFICE: "></v-text-field>
                  </v-flex>

                   <!-- <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.initialsSurname" label="SEC COMPANY: "></v-text-field>
                  </v-flex> -->

                  <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu1a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.date1"
                        label="Date: "
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                  </v-menu>

                  <!-- <h4>PHASE 1: DEMAND MANAGEMENT: - END-USER AND RECEIVING OFFICER</h4> -->
                </v-flex>

                  <!-- <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.initialsSurname" label="NUMBER OF GUARDS: "></v-text-field>
                  </v-flex> -->

              </v-card-title>
              <v-card-text class="pt-0 mt-0">
                <!-- <v-flex xs12 sm6 py-0>
                  <v-menu
                    v-model="menu1a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.date1"
                        label="Date Received"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                  </v-menu>
                </v-flex> -->

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers"
                      :items="doc.body.phase1"
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

                      <template v-slot:items="props" v-slot:no-data="">
                        <td class>{{ props.index + 1 }}.</td>
                        <td class>
                          {{ props.item.description }}
                        </td>
                        <td class>
                          
                           <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                          
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.comment"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                       <!--  <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.comment"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td> -->
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-text>
              <v-flex xs12>
                  <v-text-field v-model="doc.body.initialsSurname" label="Recommendations: "></v-text-field>
                  </v-flex>
              </v-card-text> 

              <v-card-title>
                <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.initialsSurname" label="Name of End-User (Surname & Initials): "></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu1a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.date1"
                        label="Date: "
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.initialsSurname" label="Name of Official (Surname & Initials): "></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu1a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.date1"
                        label="Date: "
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                  </v-menu>
                </v-flex>


              </v-card-title>


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

      headers: [
        {
          text: "ITEM No.",
          align: "left",
          sortable: false,
          value: "",
        //   width: "10%"
        },
        {
          text: "ITEM CHECKED",
          value: ""
        },
        {
          text: "YES / NO",
          value: "",
        //   width: "10%"
        },
        {
          text: "COMMENTS",
          value: ""
        },
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
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          enderUser: {},
          initialsSurname:"",

          // days: [
          //   { dayOfWeek: "Monday", value: "", width: "10%" },
          //   { dayOfWeek: "Tuesday", value: "" },
          //   { dayOfWeek: "Wednesday", value: "" },
          //   { dayOfWeek: "Thursday", value: "" },
          //   { dayOfWeek: "Friday", value: "" }
          // ],
          phase1: [
            {
              description: "Is there a register to record in/ outgoing classified information?",
              comment: ""
            },
            {
              description: "Is classified of documents done?",
              comment: ""
            },
            {
              description: "Is Personnel vetted?",
              comment: ""
            },
            {
              description: "Did the Officer complete oath of secrecy?",
              comment: ""
            },
            {
              description: "Are classified documents stored in document safe/ Reinforced steel cabinets?",
              comment: ""
            },
            {
              description: "Does the office utilise security bags?",
              comment: ""
            },
            {
              description: "Does the office utilise security envelopes?",
              comment: ""
            },
            {
              description: "Did the attend Security Awareness Workshop?",
              comment: ""
            },
            {
              description: "Does the office reproduce/ Photocopy classified documents?",
              comment: ""
            },
            {
              description: "Is there a photocopier register in place?",
              comment: ""
            },
            {
              description: "Does the office transmit classified information through fax/e-mail/ telephone?",
              comment: ""
            },
            {
              description: "Is there a shredding machine to destruct/ destroy classified information?",
              comment: ""
            },
            {
              description: "Is there a register for shredding machine?",
              comment: ""
            }
            
          ],

          phase2: [
            {
              description:
                "N.B Please confirm supplier compliance e.g Tax matters, Locality, etc. before selection.",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Nominate at least eight (8) service providers from the CSD and list them below.",
              boolean: "",
              comment: "",
              serviceProviders: []
            },
            {
              description:
                "In case of one service provider being selected, is the Emergency/Urgency justification form attached and the approval for deviation been granted by the Accounting Officer or a delegated official and reasons thereof provided? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "In case of sole supplier, Sole Supplier Justification form must be attached and be approved by the Accounting Officer.",
              boolean: "",
              comment: ""
            },
            {
              description:
                "If the above is verified, register the requisition and submit to acquisition management.",
              boolean: "",
              comment: ""
            }
          ],

          phase4: [
            {
              description:
                "Invite 5 quotations, preferably between 3 and 7 days depending on the type and urgency of service/commodity required.  Attach proof of invitation.",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Closing, receiving and opening of quotations/ box , registration of received quotations and submission to secretariat for evaluation committee. Record Quotations received and amounts below",
              boolean: "",
              comment: "",
              qoutations: [
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                }
              ]
            },
            {
              description:
                "During evaluation ensure that the following are adhered to:",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Register and submit the requisition to Purchase Unit for order generation",
              boolean: "",
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
