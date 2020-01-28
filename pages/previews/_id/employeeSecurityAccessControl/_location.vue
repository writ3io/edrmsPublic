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
                    <strong> Initials : </strong>{{doc.body.initials}}
                  </v-flex>
                  <v-flex xs12>
                    <strong> Surname : </strong>{{doc.body.surname}}
                  </v-flex>
                  <v-flex xs12 lg6>
                    <strong>ID No : </strong>{{doc.body.idNumber}}
                  </v-flex>
                  <v-flex xs12 lg5>
                    <strong>Persal No : </strong>{{doc.body.persalNumber}}
                  </v-flex>
                  <v-flex xs12>
                    <strong>Directorate: : </strong>{{doc.body.directorate}}
                  </v-flex>
                  <v-flex xs12>
                   <strong>Position : </strong>{{doc.body.position}}
                  </v-flex>

                  <v-flex xs12>
                   <!-- <p>Employment Type:</p>
                     {{doc.body.employmentType}} -->
                  </v-flex>
                 
                  
                    <v-layout wrap>
                    
                    <v-flex xs12>
                        <p><strong>If contract,</strong></p>
                    </v-flex>    
                    <v-flex xs12 lg5>    
                      <strong>Start :</strong><u>{{doc.body.date}}</u>
                    </v-flex>

                    <v-flex xs12 lg5>
                      <strong>Finish :</strong><u>{{doc.body.date1}}</u>
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

                  

                  <v-flex xs12 lg6>
                         <p><strong>Print Name:</strong>{{doc.body.signatures[0].SurName}}</p>
                    </v-flex>

                    <v-flex xs12 lg3>
                         <strong>Date :</strong>{{doc.body.date2}}
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
                     
                      <td>
                        
                        {{props.item.blockA}}
                      </td>
                      <td>
                        {{props.item.blockB}}
                      </td>

                      <td>
                        {{props.item.blockC}}
                      </td>
                      <td>
                        {{props.item.blockD}}
                      </td>
                      <td>
                        {{props.item.blockE}}
                      </td>
                      <td>
                       {{props.item.blockF}}</td>

                      <td >
                        {{props.item.blockG}}
                      </td>
                      <td >
                        {{props.item.blockH}}
                      </td>
                      <td>
                        {{props.item.blockI}}
                      </td>
                      <td >
                        <v-text-field
                          v-model="props.item.wareHouse"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      <td >
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
                     
                      <td>
                       {{props.item.capturingExamHall}}
                      </td>
                      <td>
                        {{props.item.hall}}
                      </td>

                      <td>
                        {{props.item.controlRoom}}
                      <td>
                        {{props.item.ITServerRoom}}
                      </td>
                      <td>
                        {{props.item.MECMainDoor}}
                      <td>
                        {{props.item.HODMainDoor}}
                      </td>

                      <td>
                        {{props.item.mainCashierBlockD}}
                      </td>
                      <td>
                        {{props.item.cashierBlockA}}
                      </td>
                      <td >
                       {{props.item.SCM}}
                      <td >
                        {{props.item.registry}}
                      </td>

                      <td class="px-0 py-0">
                        {{props.item.anyOther}}
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
                 
                <v-layout wrap>
                    
                    <v-flex xs12 lg6>
                         <p><strong>Print Name:</strong>{{doc.body.signatures[1].SurName}}</p>
                    </v-flex>

                    <v-flex xs12 lg3>
                         <strong>Date :</strong>{{doc.body.date3}}
                    </v-flex>
                </v-layout>

                <v-flex xs12>
                  <strong>Card number issued :</strong> {{doc.body.cardNumber}}
                </v-flex>
                <v-flex xs12>
                  <strong>Card issued by :</strong> {{doc.body.cardIssued}}
                </v-flex>

                <v-flex xs12 lg6>
                  <!-- <v-select :items="doc.body.items1" v-model="doc.body.e2" label="Applicant Photo Captured:" outlined></v-select> -->
                </v-flex>

                <br />

                <v-flex xs12>
                  <p>
                    <strong>Signed by Capturer</strong>
                  </p>
                </v-flex>

               
                <v-layout wrap>
                     
                    <v-flex xs12 lg6>
                         <p><strong>Print Name :</strong>{{doc.body.signatures[1].SurName}}</p>
                    </v-flex>

                    <v-flex xs12 lg3>
                         <strong>Date :</strong>{{doc.body.date4}}
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
import Toolbar from "~/components/PreviewToolbar";
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
    doc() {
      return store.state.doc;
    },
    time() {
      return Date.now();
    },
    setAction(action) {
      return doc.action == action;
    }
  },
  watch: {
    doc(data) {
      console.log("We have data!", data);
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = data;
      user.signatureDate = Date.now();
      console.log(user);
      console.log("=== End ===");
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id);
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
