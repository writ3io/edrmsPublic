<template>
  <v-container grid-list-md>
    <v-layout column>
      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" :canAttachFile="false" />
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <hr style="color:grey">
      </v-flex>
      <v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">HOD/DGs ANNUAL PERFORMANCE ASSESSMENTS TEMPLATE</h3>
            <v-flex xs12>
            
            </v-flex>
            <v-layout wrap justify-right>
              <v-flex sm12 md12 lg12>
                <SelectUsers v-on:getUsers="setRecipients($event)"
                  label="Surname and initials of the requesting officer:" single />
              </v-flex>
              <v-flex xs12 md12 lg2>
                <v-text-field v-model="doc.body.aud_rev_venue" label="Reference number:">
                </v-text-field>
              </v-flex>
              <v-flex sm12 md12 lg4>
                <v-text-field v-model="doc.body.aud_rev_venue" label="Telephone No:">
                </v-text-field>
              </v-flex>
              <v-flex sm12 md12 lg4>
                <v-text-field v-model="doc.body.aud_rev_venue" label="Fax NO: ">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex sm12 md12 lg6>
                <v-text-field v-model="doc.body.aud_rev_venue" label="Directorate:">
                </v-text-field>
              </v-flex>
              <v-flex sm12 md12 lg4>
                <v-text-field v-model="doc.body.aud_rev_venue" label="Date: ">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
<br>
    <table>
              <tbody>
                <th colspan="8"><strong>KRA NO 2:</strong></th>
                <tr>
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br></td>
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>SMS RATING</strong> </td>
                  <td rowspan="2"><strong>SUPERVISOR RATING</strong></td>
                  <td rowspan="2"><strong>AGREED RATING</strong> </td>
                  <td rowspan="2"><strong>EVALUATED SCORE (PRESIDENCY / OTP OR PSC)</strong></td>
                  <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                 
                <tr  v-for="(item, index) in doc.body.kr2" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.sms_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.supervisor_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.agreed_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.evaluated_score" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click="removeRow(doc.body.kr2, index)" color="red" text-color="white">
                            Delete
                          </v-btn>
                  </td>
                </tr>
                <tr>
                  <td colspan="3"><strong>Weight for the KRA : </strong></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr2)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>

<br>
    <table>
              <tbody>
                <th colspan="8"><strong>KRA NO 3:</strong></th>
                <tr>
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br></td>
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>SMS RATING</strong> </td>
                  <td rowspan="2"><strong>SUPERVISOR RATING</strong></td>
                  <td rowspan="2"><strong>AGREED RATING</strong> </td>
                  <td rowspan="2"><strong>EVALUATED SCORE (PRESIDENCY / OTP OR PSC)</strong></td>
                  <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                 
                <tr  v-for="(item, index) in doc.body.kr3" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.sms_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.supervisor_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.agreed_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.evaluated_score" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click="removeRow(doc.body.kr3, index)" color="red" text-color="white">
                            Delete
                          </v-btn>
                  </td>
                </tr>
                <tr>
                  <td colspan="3"><strong>Weight for the KRA : </strong></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr3)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>
<br>
    <table>
              <tbody>
                <th colspan="8"><strong>KRA NO 4:</strong></th>
                <tr>
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br></td>
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>SMS RATING</strong> </td>
                  <td rowspan="2"><strong>SUPERVISOR RATING</strong></td>
                  <td rowspan="2"><strong>AGREED RATING</strong> </td>
                  <td rowspan="2"><strong>EVALUATED SCORE (PRESIDENCY / OTP OR PSC)</strong></td>
                  <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                 
                <tr  v-for="(item, index) in doc.body.kr4" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.sms_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.supervisor_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.agreed_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.evaluated_score" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click="removeRow(doc.body.kr4, index)" color="red" text-color="white">
                            Delete
                          </v-btn>
                  </td>
                </tr>
                <tr>
                  <td colspan="3"><strong>Weight for the KRA : </strong></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr4)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>
<br>
    <table>
              <tbody>
                <th colspan="8"><strong>KRA NO 5:</strong></th>
                <tr>
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br></td>
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>SMS RATING</strong> </td>
                  <td rowspan="2"><strong>SUPERVISOR RATING</strong></td>
                  <td rowspan="2"><strong>AGREED RATING</strong> </td>
                  <td rowspan="2"><strong>EVALUATED SCORE (PRESIDENCY / OTP OR PSC)</strong></td>
                  <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                 
                <tr  v-for="(item, index) in doc.body.kr5" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.sms_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.supervisor_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.agreed_rating" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.evaluated_score" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click="removeRow(doc.body.kr5, index)" color="red" text-color="white">
                            Delete
                          </v-btn>
                  </td>
                </tr>
                <tr>
                  <td colspan="3"><strong>Weight for the KRA : </strong></td>
              <td style="background-color: grey;"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr5)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>

<table>
              <tbody>
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="2"><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>BASELINE DATA</strong></td>
                  <td rowspan="2"><strong>Resource Required</strong></td>
                  <td rowspan="2"><strong>Enabling Condition</strong></td>
                 
                </tr>
                <tr>
                  <td><strong>TARGET DATE</strong></td>
                  <td><strong>INDICATOR / TARGET</strong></td>
                </tr>
                <tr>
                 
                  <td>Ensure that the number of procurement transactions are managed</td>
                  <td>Annual</td>
                  <td>10% reduction in the total number of procurement transactions below R500K by the end of the
                    financial year (31 March)</td>
                  <td>Total number of procurement transactions below R500K</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.enabling_condition" placeholder="edit me"></td>
                  
                </tr>
                <tr>
                  <td>
                    <p>Ensure that the nature of procurement spend is managed</p>
                  </td>
                  <td>Annual</td>
                  <td>
                    <p>10% reduction in the value of procurement spend under R500K</p>
                  </td>
                  <td>Total value of procurement transactions below R500K</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_manageed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_manageed.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that there is savings on procurement spend</td>
                  <td>Annual</td>
                  <td>5% saving on annual procurement spend</td>
                  <td>Current cost of specific goods and/or services</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_savings_spend.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_savings_spend.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that procurement planning is managed</td>
                  <td>Annual</td>
                  <td>The finalisation of tender awards within an average of 60 days from the date bids close</td>
                  <td>Average number of days to award tenders</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that SCM risk management is performed</td>
                  <td>Annual</td>
                  <td>Risk response plans for the top 5 SCM risks developed</td>
                  <td>Risk response (mitigation) plans</td>
                   <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that the department pays all compliant supplier invoices within 30 days of receipt of
                    invoice</td>
                  <td>Annual</td>
                  <td>100% of compliant supplier invoices paid within 30 days of receipt of invoice</td>
                  <td>Average supplier payment days</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.enabling_condition" placeholder="edit me"></td>>
                </tr>

                <tr>
                  <td colspan="6"></td>
                </tr>
              </tbody>
              <v-btn v-on:click="save_efficient_supply_chain_management_system" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Save Form
              </v-btn>
            </table>




          </v-flex>
          <v-flex xs12 pt-1>
            <v-layout>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Requesting Officer : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>
              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Responsible Manager : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>
              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-flex>
              <v-switch v-model="iSign" label="Approved"></v-switch>
            </v-flex>
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
  name: 'A',
  components: {
    Toolbar,
    SelectUsers
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
        template: "annualAssessmentHod",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
         
          docRef: Math.round(+new Date() / 1000),

            kr1: [{activities_output:"", indicator_target: "", actual_achievement:"", sms_rating: "", supervisor_rating: "", agreed_rating: "", evaluated_score: ""},],
            kr2: [{activities_output:"", indicator_target: "", actual_achievement:"", sms_rating: "", supervisor_rating: "", agreed_rating: "", evaluated_score: ""}],
            kr3: [{activities_output:"", indicator_target: "", actual_achievement:"", sms_rating: "", supervisor_rating: "", agreed_rating: "", evaluated_score: ""}],
            kr4: [{activities_output:"", indicator_target: "", actual_achievement:"", sms_rating: "", supervisor_rating: "", agreed_rating: "", evaluated_score: ""}],
            kr5: [{activities_output:"", indicator_target: "", actual_achievement:"", sms_rating: "", supervisor_rating: "", agreed_rating: "", evaluated_score: ""}],
        
        efficient_supply_chain_management_system : {
                ensure_transactions_managed: {resource_required:"this is a requirement", enabling_condition: ""},
                ensure_procurement_manageed: {resource_required:"", enabling_condition: ""},
                ensure_savings_spend: {resource_required:"", enabling_condition: ""},
                ensure_procurement_planning_managed: {resource_required:"", enabling_condition: ""},
                ensure_risk_management_perforemed: {resource_required:"", enabling_condition: ""},
                ensure_department_pay_all_suppliers: {resource_required:"", enabling_condition: ""}
        },
        },
        
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
    removeRow(doc, index) {
      if( doc.length != 1 ){
          doc.splice(index, 1);
      }
    
    },
     add_kra(doc) {
        doc.push(
         {activities_output:"", indicator_target: "", actual_achievement:"", sms_rating: "", supervisor_rating: "", agreed_rating: "", evaluated_score: ""}
        )
      },
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
  border: 1px solid #DDDDDD;
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