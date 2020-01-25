<template>
  <div id="circular">
    <v-container grid-list-md fluid>
    
    <v-layout row>
      <v-flex xs2 >
        <v-layout>
         <Toolbar :data="doc" :canAttachFile="false" />
        </v-layout>
      </v-flex>

    <v-flex column xs10>
         <h3 class="text-xs-center">HOD/DGs ANNUAL PERFORMANCE ASSESSMENTS TEMPLATE</h3>
           <br>
           <br>

            <table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Name of Executive Authority</strong>
                </p>
            </td>
            <td width="359" valign="top">
              {{ doc.body.name_of_executive }}
            </td>
            <td width="161" valign="top">
                
                    <strong>Province (if applicable)</strong>
              
            </td>
            <td width="285" valign="top">
              {{ doc.body.province  }}
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Name of Head of Department</strong>
                </p>
            </td>
            <td width="359" valign="top">
              {{ doc.body.name_head_of_department }}
            </td> 
            <td width="161" valign="top">
                <p>
                    <strong>Performance cycle</strong>
                </p>
            </td>
            <td width="285" valign="top">
              {{ doc.body.performance_cycle }}
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Persal No.</strong>
                </p>
            </td>
            <td width="359" valign="top">
               {{ doc.body.persal_number }}
              
            </td>
            <td width="161" valign="top">
                <p>
                    <strong>Annual Assessment</strong>
                </p>
            </td>
            <td width="285" valign="top">
              {{ doc.body.annual_assessment }}
                
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Name of Department</strong>
                </p>
            </td>
            <td width="805" colspan="3" valign="top">
              {{  doc.body.name_of_department}}
             
            </td>
        </tr>
    </tbody>
</table>
     
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
                 
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                 
                <tr  v-for="(item, index) in doc.body.kr2" :key="index">
                  <td > {{item.activities_output }}</td>
                  <td >{{item.indicator_target}} </td>
                  <td >{{ item.actual_achievement }}</td>
                  <td > {{ item.sms_rating}}</td>
                  <td >{{item.supervisor_rating}}</td>
                  <td >{{item.agreed_rating}}</td>
                  <td >{{item.evaluated_score}}</td>
                  
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
         
</table>


<br>



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
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.resource_required}}</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.enabling_condition}}</td>
                  
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
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_procurement_manageed.resource_required}}</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_procurement_manageed.enabling_condition}}</td>
                </tr>
                <tr>
                  <td>Ensure that there is savings on procurement spend</td>
                  <td>Annual</td>
                  <td>5% saving on annual procurement spend</td>
                  <td>Current cost of specific goods and/or services</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_savings_spend.resource_required}}</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_savings_spend.enabling_condition}}</td>
                </tr>
                <tr>
                  <td>Ensure that procurement planning is managed</td>
                  <td>Annual</td>
                  <td>The finalisation of tender awards within an average of 60 days from the date bids close</td>
                  <td>Average number of days to award tenders</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.resource_required}}</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.enabling_condition}}</td>
                </tr>
                <tr>
                  <td>Ensure that SCM risk management is performed</td>
                  <td>Annual</td>
                  <td>Risk response plans for the top 5 SCM risks developed</td>
                  <td>Risk response (mitigation) plans</td>
                   <td>{{doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.resource_required}}</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.enabling_condition}}</td>
                </tr>
                <tr>
                  <td>Ensure that the department pays all compliant supplier invoices within 30 days of receipt of
                    invoice</td>
                  <td>Annual</td>
                  <td>100% of compliant supplier invoices paid within 30 days of receipt of invoice</td>
                  <td>Average supplier payment days</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.resource_required}}</td>
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.enabling_condition}}</td>>
                </tr>

                <tr>
                  <td colspan="6"></td>
                </tr>
              </tbody>
             
            </table>

            <br>

            
            <!-- Author's Signature -->
            <v-flex xs12 class="my-5">
              <v-flex xs4>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{doc.author.SurName}}</h2>
                  <h4>
                    {{doc.author.Designation}} |
                    <span class="grey--text">{{doc.author.Department}}</span>
                  </h4>
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{doc.createdAt | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- Author's Signature -->

            <!-- Responses -->
            <v-flex v-if="$route.params.location != 'records'" xs12>
              <p class="text-xs-left">Sign Below</p>
              <VueSignaturePad
                class="signature-pad"
                max-width="480px"
                height="200px"
                ref="signaturePad"
                :options="{ onEnd }"
              />
              <v-btn flat color="warning" @click="clear">
                <v-icon left>undo</v-icon>
                <span>Clear</span>
              </v-btn>
            </v-flex>

            <v-flex
              v-for="signatory in doc.body.signatures"
              :key="signatory.SurName"
              xs12
              class="my-5"
            >
              <v-flex xs12>
                <p v-html="signatory.response"></p>
              </v-flex>
              
              <v-flex xs4>
                <img style="width:100%" :src="signatory.signature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{signatory.SurName}}</h2>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>

                <!-- <h3 class="warning--text mt-4">Change Signatory:</h3>
                <v-combobox
                  v-model="newSignatory"
                  :items="users"
                  label="Change Signatory"
                  chips
                  return-object
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >
                      {{ data.item.name }}
                      | {{ data.item.position }}
                      | {{ data.item.office }}
                    </v-chip>
                  </template>
                  </v-combobox>-->
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- Responses -->

    </v-flex>
    </v-layout>
    </v-container>    
  </div>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/PreviewToolbar";
import VueSignaturePad from "vue-signature-pad";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
Vue.use(Editor);

Vue.use(VueSignaturePad);
export default {
  components: {
    editor: Editor,
    Toolbar
  },
  data() {
    return {
      user: {},
      users: [],
      loading: false,
      response: {},
      signatories: [],
      signature: "",
      ref: "",
      textInput: "",
      comment: "",
      action: {},
      actions: [
        { text: "For Approval", value: "approve" },
        { text: "For Reccomendation", value: "reccomend" },
        { text: "For Input", value: "input" },
        { text: "For Attention", value: "attention" }
      ],
      signer: {
        action: {}
      },
      min_height: 320
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

      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);

      this.signer = this.doc.body.signatures[pos];
      if (this.signer) {
        this.action = this.respondText(this.signer.action);
      }
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    respondText(action) {
      if (action.value == "approve") {
        return {
          text: "Approve",
          value: "Approved",
          altText: "Not Approved",
          altValue: "Not Approved"
        };
      }
      if (action.value == "recommend") {
        return {
          text: "Recommended",
          value: "Recommended",
          altText: "Not Recommended",
          altValue: "Not Recommended"
        };
      }
    },
    saveSignature() {
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
      user.signature = this.signature;
      user.signatureDate = Date.now();
      console.log(this.doc);
    },
     // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      console.log(this.doc.body.signatures)
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
    console.log(store.state.doc);
  }
};
</script>

<style>
.side-toolbar {
  position: fixed;
  max-width: 180px;
}
.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
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
