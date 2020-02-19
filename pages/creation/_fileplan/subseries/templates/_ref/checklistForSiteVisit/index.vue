<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">CHECKLIST FOR SITE VISIT FORM</h3>

            <v-card>
              <v-card-title>
                <v-flex xs12 lg6>
                  <v-text-field v-model="doc.body.site" label="SITE: "></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.secCompany" label="SEC COMPANY: "></v-text-field>
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
                      <v-text-field v-model="doc.body.date" label="Date" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date" @input="menu1b = false"></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.numberOfGuards" label="NUMBER OF GUARDS: "></v-text-field>
                </v-flex>
              </v-card-title>
              <v-card-text class="pt-0 mt-0">
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.index + 1 }}.</td>
                        <td class>{{ props.item.description }}</td>
                        <td class>
                          <v-text-field
                            v-model="props.item.condition"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
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
                  <v-text-field v-model="doc.body.comments" label="COMMENTS: "></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-layout wrap>
                    <v-flex sm12 md12 lg6>
                      <SelectUsers v-on:getUsers="setSigners1($event)" label="END User: " />
                    </v-flex>
                    <v-flex sm12 md12 lg4>
                      <v-menu
                        v-model="menu2a"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="doc.body.date2" label="Date" readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex sm12 md12 lg6>
                      <SelectUsers v-on:getUsers="setSigners2($event)" label="RECEIVING OFFICER: " />
                    </v-flex>
                    <v-flex sm12 md12 lg4>
                      <v-menu
                        v-model="menu3a"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="doc.body.date3" label="Date" readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.date3" @input="menu3b = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <br />
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">CHECK LIST FOR AUDIT</h3>

            <v-card>
              <v-card-title>
                <v-flex xs12 lg6>
                  <v-text-field v-model="doc.body.office" label="INSTITUTION/ OFFICE: "></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu4a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="doc.body.date4" label="Date: " readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date4" @input="menu4b = false"></v-date-picker>
                  </v-menu>
                </v-flex>
              </v-card-title>
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
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.index + 1 }}.</td>
                        <td class>{{ props.item.description }}</td>
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
                  <v-text-field v-model="doc.body.recomandations" label="Recommendations: "></v-text-field>
                </v-flex>
              </v-card-text>

              <v-card-title>
                <v-flex xs12 sm6>
                  <SelectUsers v-on:getUsers="setSigners3($event)" label="END User: " />
                </v-flex>

                <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu5a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="doc.body.date5" label="Date: " readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date5" @input="menu5b = false"></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs12 sm6>
                  <SelectUsers v-on:getUsers="setSigners4($event)" label="RECEIVING OFFICER: " />
                </v-flex>

                <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu6a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="doc.body.date6" label="Date: " readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date6" @input="menu6b = false"></v-date-picker>
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
  name: "checklistForSiteVisit",
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
          value: ""
          //   width: "10%"
        },
        {
          text: "ITEM CHECKED",
          value: ""
        },
        {
          text: "CONDITION",
          value: ""
          //   width: "10%"
        }
        // {
        //   text: "VENUE",
        //   value: ""
        // },
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],
      headers2: [
        {
          text: "ITEM No.",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ITEM CHECKED",
          value: ""
        },
        {
          text: "YES / NO",
          value: ""
          //   width: "10%"
        },
        {
          text: "COMMENTS",
          value: ""
        }
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "checklistForSiteVisit",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          date: new Date().toISOString().substr(0, 10),
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          date5: new Date().toISOString().substr(0, 10),
          date6: new Date().toISOString().substr(0, 10),
          enderUser: {},
          secCompany: "",
          recomandations: "",
          site: "",
          office: "",
          numberOfGuards: "",
          phase1: [
            {
              description: "Attendance Register",
              condition: ""
            },
            {
              description: "No of Guards on duty. Day",
              condition: ""
            },
            {
              description: "No of Guards on duty.  Night",
              condition: ""
            },
            {
              description: "No of Guards Armed",
              condition: ""
            },
            {
              description: "Uniform",
              condition: ""
            },
            {
              description: "Firearm License, Permit and Competency",
              condition: ""
            },
            {
              description: "PSIRA Registration cards",
              condition: ""
            },
            {
              description: "ID Cards",
              condition: ""
            },
            {
              description: "Conditions of guards.  Sobriety",
              condition: ""
            },
            {
              description: "Communication Equipment Operational",
              condition: ""
            },
            {
              description: "Security Breaches reported",
              condition: ""
            },
            {
              description: "Security Breaches observed",
              condition: ""
            },
            {
              description: "Completion of OB.",
              condition: ""
            },
            {
              description: "Access Control Register",
              condition: ""
            },
            {
              description: "After Hour register",
              condition: ""
            },
            {
              description: "Visits by Site Supervisors",
              condition: ""
            },
            {
              description: "No of Entrance and Exit points",
              condition: ""
            },
            {
              description: "Observation of Searches incoming & Exit",
              condition: ""
            },
            {
              description: "Perimeter Fence Inspection",
              condition: ""
            },
            {
              description: "Accessories, Baton, Torch, Communication, Handcuff",
              condition: ""
            },
            {
              description: "Emergency No:  Ambulances, Fire brigade and SAPS",
              condition: ""
            },
            {
              description: "Asset Register",
              condition: ""
            },
            {
              description: "Guard House with Furniture",
              condition: ""
            }
          ],

          phase2: [
            {
              description:
                "Is there a register to record in/ outgoing classified information?",
              boolean: "",
              comment: ""
            },
            {
              description: "Is classified of documents done?",
              boolean: "",
              comment: ""
            },
            {
              description: "Is Personnel vetted?",
              boolean: "",
              comment: ""
            },
            {
              description: "Did the Officer complete oath of secrecy?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Are classified documents stored in document safe/ Reinforced steel cabinets?",
              boolean: "",
              comment: ""
            },
            {
              description: "Does the office utilise security bags?",
              boolean: "",
              comment: ""
            },
            {
              description: "Does the office utilise security envelopes?",
              boolean: "",
              comment: ""
            },
            {
              description: "Did the attend Security Awareness Workshop?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Does the office reproduce/ Photocopy classified documents?",
              boolean: "",
              comment: ""
            },
            {
              description: "Is there a photocopier register in place?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Does the office transmit classified information through fax/e-mail/ telephone?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is there a shredding machine to destruct/ destroy classified information?",
              boolean: "",
              comment: ""
            },
            {
              description: "Is there a register for shredding machine?",
              boolean: "",
              comment: ""
            }
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          signatures: [],
          
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
    setSigners1(users) {
      this.doc.body.signatures.push(users);
    },
    setSigners2(users) {
      this.doc.body.signatures.push(users);
    },
    setSigners3(users) {
      this.doc.body.signatures.push(users);
    },
    setSigners4(users) {
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
