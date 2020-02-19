<template>
  <div>
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>



        <v-flex xs8>
          <v-layout wrap>
            <v-flex xs12>

              <v-card>
                <v-card-title>
                  <v-layout row wrap class="justify-end">
                    <v-flex>
                      <h4 class="text-xs-center blue--text" font-weight-black>Employee Security Access Control
                        Enrollment form Please fill the form and ensure that completed forms are submitted to the
                        Security Control Room. </h4>
                    </v-flex>
                  </v-layout>
                </v-card-title>
                <v-card-text class="pt-0 mt-0">



                </v-card-text>
              </v-card>
              <v-flex x12>
                <ul>
                  <li>All applicants should complete Section A.</li>
                  <li>The information required in Section A is to be used for Department purposes and will not be shared
                    with any organization, or third parties outside of the Limpopo Department of education, Head of
                    Department or Security Manager.</li>
                  <li>A Photo of the person whose information is provided on Section A is required.</li>
                  <li>Applicant must sign on the field required to verify that information provided is correct.</li>
                  <li>Please initial all the pages.</li>
                </ul>
              </v-flex>

              <v-flex xs12>
                <hr>
              </v-flex>
              <v-flex>
                <h4 class="text-xs-left blue--text" font-weight-black>Section A – details of applicant for enrollment
                </h4>
              </v-flex>
              <v-layout wrap justify-right>
                <v-flex xs12>
                  <v-text-field v-model="doc.body.initials" label="Initials:">
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="doc.body.surname" label="Surname:">
                  </v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field v-model="doc.body.idNo" label="ID No">
                  </v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field v-model="doc.body.persalNo" label="Persal No:  ">
                  </v-text-field>
                </v-flex>

                <v-flex sm12>
                  <v-text-field v-model="doc.body.directorate" label="Directorate :">
                  </v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field v-model="doc.body.position" label="Position: ">
                  </v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-radio-group v-model="doc.body.employmentType" row>
                    <v-radio label="Permanent " value="Permanent"></v-radio>
                    <v-radio label="Contract" value="Contract"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex sm12 v-if="doc.body.employmentType == 'Contract'">

                  <v-layout wrap>
                    <v-flex xs12 lg6>
                      <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40"
                        transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="doc.body.bottom_date" label="From" readonly v-on="on">
                          </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-flex>

                    <v-flex xs12 lg6>
                      <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40"
                        transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="doc.body.bottom_date" label="To" readonly v-on="on">
                          </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-flex>

                  </v-layout>

                </v-flex>
              </v-layout>
              <v-layout wrap>
                <v-flex xs12>
                  <h4 class="" font-weight-black>Declaration</h4>
                </v-flex>

                <v-flex>
                  <template>
                    <div>
                      <p>Declaration</p>
                      <p>I declare that the information I have supplied above is true and correct to the best of my
                        knowledge.</p>
                      <p>I am aware that I will be held liable If the above information is found to be false, untrue,
                        misleading.
                        <v-text-field v-model="doc.body.bottom_date" label="Print Name">
                        </v-text-field>
                      </p>
                    </div>
                  </template>
                </v-flex>
              </v-layout>

              <v-flex xs12 pt-1>
                <v-layout wrap>
                  <v-flex xs12 lg6>
                    <p class="text-xs-left">Requesting Officer : </p>
                    <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                      :options="{ onEnd }" />
                    <v-btn flat color="warning" @click="clearAuthorSignature">
                      <v-icon left>undo</v-icon>
                      <span>Clear</span>
                    </v-btn>
                  </v-flex>

                  <v-flex xs12 lg4>
                    <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-flex>

                </v-layout>

              </v-flex>

              <v-flex xs12>
                <hr>
              </v-flex>
              <v-flex>
                <h4 class="text-xs-left blue--text" font-weight-black>Section B – Security Access Control requirements
                  (for Official Purposes only)</h4>
                <p class="text-xs-left ">Please tick buildings or areas to which access is required (to be completed by
                  <b>Head of Section or other Authorized person)</b></p>
                <p>Please tick(x) where applicable:</p>
              </v-flex>
            </v-flex>
            <v-flex xs12 mb-5>
              <v-layout>
                <table border="1" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>Block A</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block B</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block C</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block D</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block E</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block F</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block G</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block H</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Block I</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Warehouse </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Exam Strong Room </strong>
                        </p>
                      </td>

                    </tr>

                    <tr>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </v-layout>

              <v-layout mt-5>
                <table border="1" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>Capturing Exam Hall</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Hall</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Control Room</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>IT Server Room</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>MEC Main Door</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>MEC Main Door</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Main Cashier Block D</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Cashier Block A</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>SCM</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Registry </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Any Other </strong>
                        </p>
                      </td>

                    </tr>

                    <tr>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>
                      <td>
                        <v-checkbox label=""> </v-checkbox>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </v-layout>
            </v-flex>

           <v-flex>

              <v-layout wrap>
                <v-flex xs12 mb-5>
                  <h4 class="" font-weight-black>Signed by Manager/Supervisor:</h4>
                </v-flex>

                <v-flex>
                  <template>
                    <div>
                      <p><b>Declaration</b></p>
                      <p>I declare that the information I have supplied above is true and correct to the best of my
                        knowledge.</p>
                      <p>I am aware that I will be held liable If the above information is found to be false, untrue,
                        misleading.
                        <v-text-field v-model="doc.body.bottom_date" label="Print Name">
                        </v-text-field>
                      </p>
                    </div>
                  </template>
                </v-flex>
              </v-layout>

              <v-flex xs12 pt-1>
                <v-layout wrap>
                  <v-flex xs12 lg6>
                    <p class="text-xs-left">Sign : </p>
                    <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                      :options="{ onEnd }" />
                    <v-btn flat color="warning" @click="clearAuthorSignature">
                      <v-icon left>undo</v-icon>
                      <span>Clear</span>
                    </v-btn>
                  </v-flex>

                  <v-flex xs12 lg4>
                    <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-flex>

                </v-layout>

              </v-flex>

              <v-flex xs12 pt-1>
                <v-layout wrap>
                  <v-flex xs12 >
                    <v-text-field  label="Card number issued" >
                        </v-text-field>
                  </v-flex>
                   <v-flex xs12 >
                    <v-text-field  label="Card issued By" >
                        </v-text-field>
                  </v-flex>

                  <v-flex xs12 lg4>
                    <v-switch label="Applicant Photo Captured"></v-switch>
                  </v-flex>

                </v-layout>

              </v-flex>

              <v-flex xs12 pt-1>
                <v-layout wrap>
                <v-flex xs12 >
                  <h4 class="" font-weight-black>Signed by Capturer </h4>
                </v-flex>

                <v-flex xs12 >
                  <v-text-field  label="Print Name" >
                        </v-text-field>
                </v-flex>
                  <v-flex xs12 lg6>
                    <p class="text-xs-left">Sign : </p>
                    <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                      :options="{ onEnd }" />
                    <v-btn flat color="warning" @click="clearAuthorSignature">
                      <v-icon left>undo</v-icon>
                      <span>Clear</span>
                    </v-btn>
                  </v-flex>

                  <v-flex xs12 lg4>
                    <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-flex>

                </v-layout>

              </v-flex>

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
import {
  signatureHelpers
} from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import {
  createDoc
} from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: 'AccessControl',
  components: {
    Toolbar,
    SelectUsers,
  },

  data() {
    return {

      menu5: false,
      menu: false,

      //time picker
      menu2: false,
      modal2: false,
      //

      headers: [{
          text: 'Item No',
          align: 'left',
          sortable: false,
          value: 'name',
          width: "10%"
        },
        {
          text: 'Detailed Description',
          value: 'calories',
        },
        {
          text: 'Quality',
          value: 'fat',
          width: "20%"
        },
        {
          text: 'Actions',
          value: 'carbs',
          width: "10%"
        },
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "accessControlForm",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          employmentType : "",
          tr: [{
              description: "",
              quality: ""
            },
            {
              description: "",
              quality: ""
            },
          ],
          docRef: Math.round(+new Date() / 1000),
        }
      },
      signature: null,
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      loading: false,
      min_height: 320,
      plugins: "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
      toolbar: "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
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

td,
  th {
    border: 1px solid #88AC89 ;
    text-align: left;
    padding: 8px;  
    } 
     .top-th {
    
  }

.side-toolbar {
  position: fixed;
  max-width: 180px;
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
