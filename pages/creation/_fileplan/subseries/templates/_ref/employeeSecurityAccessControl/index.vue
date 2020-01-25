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
            <v-card>
              <br />
              <v-flex xs5 offset-xs3>
                <h3
                  class="text-xs-center main-heading"
                >EMPLOYEE SECURITY ACCESS CONTROL ENROLLMENT FORM</h3>
                <p class="text-xs-center">
                  <strong>Please fill the form and ensure that completed forms are submitted to the Security Control Room.</strong>
                </p>
              </v-flex>
              <br />
              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border class="card-border">
                  <v-flex>
                    <ul>
                      <li>All applicants should complete Section A</li>

                      <li>
                        The information required in Section A is to be used for Department purposes and will not be shared with any organization, or third parties outside of the Limpopo Department of education, Head of Department or Security
                        Manager.
                      </li>

                      <li>A Photo of the person whose information is provided on Section A is required.</li>

                      <li>Copies of all bank statements: savings, cheque, credit card(s), bond accounts and other financial loans. These should cover the recent four months.</li>

                      <li>Applicant must sign on the field required to verify that information provided is correct.</li>

                      <li>Please initial all the pages.</li>
                    </ul>
                  </v-flex>
                </v-layout>
                <br />
                <v-flex justify-end>
                  <hr style="color:grey" />
                </v-flex>
              </v-card-text>

              <!-- 
                  ================================================================
                  Section A – details of applicant for enrollment
                  ================================================================
              -->

              <br />
              <v-card-text class="pt-0 mt-0">
                <h4>Section A – details of applicant for enrollment</h4>
                <v-layout xs12 wrap border class="card-border">
                  <v-flex xs12>
                    <v-text-field v-model="doc.body.initials" label="Initials: "></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="doc.body.surname" label="Surname: "></v-text-field>
                  </v-flex>
                  <v-flex xs12 lg6>
                    <v-text-field v-model="doc.body.idNumber" label="ID No: "></v-text-field>
                  </v-flex>
                  <v-flex xs12 lg5>
                    <v-text-field v-model="doc.body.persalNumber" label="Persal No: "></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="doc.body.directorate" label="Directorate: "></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="doc.body.position" label="Position: "></v-text-field>
                  </v-flex>

                  <v-flex xs12 lg6>
                    <v-select :items="doc.body.items" label="Employment Type:" outlined></v-select>
                  </v-flex>
                 
                  
                    <v-layout wrap>
                    
                    <v-flex xs12>
                        <p><strong>If contract,</strong></p>
                    </v-flex>    
                    <v-flex xs12 lg5>    
                      <v-menu
                        v-model="menu1a"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="doc.body.date1" label="Start: " readonly v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                      </v-menu>
                    </v-flex>

                    <v-flex xs12 lg5>
                      <v-menu
                        v-model="menu2a"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="doc.body.date2" label="Finish: " readonly v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    </v-layout>
                  

                  <v-flex xs12>
                    <h4>Declaration</h4>
                    <p>Signed by applicant:</p>
                    <p>Declaration</p>
                    <p>
                      I declare that the information I have supplied above is true and correct to the best of my knowledge
                      I am aware that I will be held liable If the above information is found to be false, untrue, misleading.
                    </p>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field v-model="doc.body.printName2" label="Print Name: "></v-text-field>
                  </v-flex>

                  <v-flex xs12 lg6>
                    <p class="text-xs-left">Sign Here :</p>
                    <VueSignaturePad
                      class="signature-pad"
                      max-width="480px"
                      height="200px"
                      ref="signaturePad"
                      :options="{ onEnd }"
                    />
                    <v-btn flat color="warning" @click="clearAuthorSignature">
                      <v-icon left>undo</v-icon>
                      <span>Clear</span>
                    </v-btn>
                  </v-flex>

                  <v-flex xs12 lg3>
                    <v-menu
                      v-model="menu6"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.authorSignatureDate1" label="Date" readonly v-on="on">
                        </v-text-field>
                    </template>
                      <v-date-picker v-model="doc.body.authorSignatureDate1" @input="menu3 = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>

                <br />
                <v-flex justify-end>
                  <hr style="color:grey" />
                </v-flex>
              </v-card-text>

              <v-card-text class="pt-0 mt-0">
                <!-- 
              ================================================================
              Section B – Security Access Control requirements (for Official Purposes only)
              ================================================================
                -->

                <h4>Section B – Security Access Control requirements (for Official Purposes only)</h4>

                <p>
                  Please tick buildings or areas to which access is required (to be completed by
                  <strong>Head of Section or other Authorized person)</strong>
                </p>

                <p>Please tick(x) where applicable:</p>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers5"
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
                     
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockA" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockB" single-line solo flat placeholder></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockC" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockD" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockE" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockF" single-line solo flat placeholder></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockG" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockH" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.blockI" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.wareHouse"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.examStrongRoom"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      
                    </template>

                    <template v-slot:no-data>
     
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
    
                    </template>
                    </v-data-table>

                    <br />

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
                     
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.capturingExamHall"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.hall" single-line solo flat placeholder></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.controlRoom"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.ITServerRoom"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.MECMainDoor"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.HODMainDoor"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.mainCashierBlockD"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.cashierBlockA"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.SCM" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.registry"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.anyOther"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <br />

                <v-flex xs12>
                  <p>
                    <strong>Signed by Manager/Supervisor:</strong>
                  </p>

                  <p>Declaration</p>
                  <p>I declare that the information I have supplied above is true and correct to the best of my knowledge</p>

                  <p>I am aware that I will be held liable if the above information is found to be false, untrue, misleading.</p>
                </v-flex>

                <v-flex xs12>
                  <v-text-field v-model="doc.body.printName" label="Print Name: "></v-text-field>
                </v-flex>
                 
                <v-layout wrap>
                    <v-flex xs12 lg6>
                    <p class="text-xs-left">Sign Here :</p>
                    <VueSignaturePad
                        class="signature-pad"
                        max-width="480px"
                        height="200px"
                        ref="signaturePad"
                        :options="{ onEnd }"
                    />
                    <v-btn flat color="warning" @click="clearAuthorSignature">
                        <v-icon left>undo</v-icon>
                        <span>Clear</span>
                    </v-btn>
                    </v-flex>

                    <v-flex xs12 lg3>
                    <v-menu
                        v-model="menu7"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="doc.body.authorSignatureDate2" label="Date" readonly v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.authorSignatureDate2" @input="menu4 = false"></v-date-picker>
                    </v-menu>
                    </v-flex>
                </v-layout>

                <v-flex xs12>
                  <v-text-field v-model="doc.body.cardNumber" label="Card number issued: "></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="doc.body.cardIssued" label="Card issued by: "></v-text-field>
                </v-flex>

                <v-flex xs12 lg6>
                  <v-select :items="doc.body.items1" label="Applicant Photo Captured:" outlined></v-select>
                </v-flex>

                <br />

                <v-flex xs12>
                  <p>
                    <strong>Signed by Capturer</strong>
                  </p>
                </v-flex>

                <v-flex xs12>
                  <v-text-field v-model="doc.body.printName1" label="Print Name: "></v-text-field>
                  
                </v-flex>
                <v-layout wrap>
                    <v-flex xs12 lg6>
                    <p class="text-xs-left">Sign Here :</p>
                    <VueSignaturePad
                        class="signature-pad"
                        max-width="480px"
                        height="200px"
                        ref="signaturePad"
                        :options="{ onEnd }"
                    />
                    <v-btn flat color="warning" @click="clearAuthorSignature">
                        <v-icon left>undo</v-icon>
                        <span>Clear</span>
                    </v-btn>
                    </v-flex>
                    
                    <v-flex xs12 lg3>
                    <v-menu
                        v-model="menu8"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="doc.body.authorSignatureDate3" label="Date" readonly v-on="on">
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.authorSignatureDate3" @input="menu5 = false"></v-date-picker>
                    </v-menu>
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
  name: "employeeSecurityAccessControl",
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
          text: "CAPTURING EXAM HALL",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "HALL",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "CONTROL ROOM",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "IT SERVER ROOM",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "MEC MAIN DOOR",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "HOD MAIN DOOR",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "MAIN CASHIER BLOCK D",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "CASHIER BLOCK A",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "SCM",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "REGISTRY",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "ANY OTHER",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        }
      ],

      headers5: [
        {
          text: "BLOCK A",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK B",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK C",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK D",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK E",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK F",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK G",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK H",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK I",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "WAREHOUSE",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "EXAM STRONG ROOM",
          align: "center",
          sortable: false,
          value: "",
          width: "80px",
          hieght: "100px"
        }
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "employeeSecurityAccessControl",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),

        body: {
          address: "",
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          initials:"",
          surname:"",
          idNumber:"",
          persalNumber:"",
          directorate:"",
          position:"",
          employmentType:"",
          printName2:"",
          enderUser: {},
          initialsSurname: "",
          printName:"",
          printName1:"",
          cardNumber:"",
          cardIssued:"",
          items: ["Permanent", "Contract"],
          items1: ["Yes", "No"],

          phase1: [
            {
              blockA: "",
              blockB: "",
              blockC: "",
              blockD: "",
              blockE: "",
              blockF: "",
              blockG: "",
              blockH: "",
              blockI: "",
              wareHouse: "",
              examStrongRoom: ""
            }
          ],

          phase2: [
            {
              capturingExamHall: "",
              hall: "",
              controlRoom: "",
              ITServerRoom: "",
              MECMainDoor: "",
              HODMainDoor: "",
              mainCashierBlockD: "",
              cashierBlockA: "",
              SCM: "",
              registry: "",
              anyOther: ""
            }
          ],

          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignature1: "",
          authorSignature2: "",
          authorSignatureDate: "",
          authorSignatureDate1: "",
          authorSignatureDate2: "",
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
