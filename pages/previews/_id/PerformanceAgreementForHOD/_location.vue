<template>
  <div id="circular">
    <v-container grid-list-md fluid>
    
    <v-layout row>
      <v-flex xs2 >
        <v-layout>
         <Toolbar :data="doc" :canAttachFile="false" />
        </v-layout>
      </v-flex>

    <v-flex column xs10 wrap>

      <!-- Forms start and end within this -->
            <h1 class="title">PERFORMANCE AGREEMENT</h1>
            
         <h3> Name of Executive Authority  : {{doc.name_executive_authority}}</h3> 

         <h3>Name of Head of Department : {{doc.name_of_hod}}</h3>: 

         <h3>HOD/DG Persal number : {{doc.persal_number}}</h3>

         <h3>Province (if applicable) : {{doc.province}}</h3>  
         <h3>Performance cycle :{{doc.performance_cycle}}</h3> 
         <h3>Half-yearly Performance review & assessment date: {{doc.half_yearly_performance}}</h3>

          <h3>Annual Performance assessment date: {{doc.annual_performance_assessment_date}}</h3>
          <v-divider></v-divider>
      <br>
 <h3 class="subtitle-1">Dispute resolution mechanism</h3>
          <br>
          <h4 class="caption">
            Any disputes about the nature of the HOD’s PA, whether it relates to key responsibilities, priorities,
            methods of assessment in this agreement, shall be mediated by DG in the Presidency or DG in the Office of
            the premier.

            If, this mediation fails and the dispute remains unresolved at this level, the matter should, thereafter be
            referred to the PSC.
          </h4>

<br>
<v-flex xs10 >
    <h2>EMPLOYEE PERFORMANCE</h2>
          <br>

            <table>
              <tbody>
                <tr>
                  <th>Key Result Area</th>
                  <th>Batho Pele Principles</th>
                  <th>Weighting</th>
                </tr>
                <tr v-for="(item, index) in doc.employeePerfArray" :key="index">
                  <td>
                    {{item.keyResArea}}
                  </td>
                  <td>
                    {{item.batPelPrinciples}}
                  </td>
                  <td>
                    {{item.weighing}}
                  </td>
                </tr>
              </tbody>
            </table>
     </v-flex>   
          <br>
          
            <table id="my-table" >
              <tbody>

                <tr style="height: 52px;">
                  <td style="width: 609px; height: 52px; text-align: left;" colspan="4"><br /><br /><strong>KRAs Total
                      Weighting (contribute 40% towards the final score)</strong><br /><br /></td>
                  <td style="width: 81px; height: 52px;">&nbsp;<strong>100%</strong></td>
                </tr>
                <tr style="height: 8px;">
                  <td style="width: 80px; height: 86px;" rowspan="5"><br /><strong>Key Government Focus Areas</strong>
                  </td>
                  <td style="width: 529px; height: 8px;" colspan="3">
                    <p>1.Develop and implement an effective and efficient supply chain management system</p>
                  </td>
                  <td style="width: 81px; height: 8px;"><strong>&nbsp;20%</strong></td>
                </tr>
                <tr style="height: 39px;">
                  <td style="width: 529px; height: 39px;" colspan="3"><br /><strong>2</strong>. *Support international
                    and
                    regional Integration programmes and commitments<br /><br /></td>
                  <td style="width: 81px; height: 39px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;3. Implementation of the Minimum Information
                    Security Standards (i.e. MISS) and overall accountability for security</td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;4. Transformation</td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;5. Integrated Governance</td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 609px; height: 13px; text-align: left;" colspan="4">&nbsp;<strong>Key Government
                      Focus
                      Areas: Total Weighting (contribute 20% towards the final score)</strong></td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>100%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 80px; height: 13px;">&nbsp;<strong>Auditor General</strong></td>
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;This component will focus on the measurement
                    of the extent of the departmental financial and legislative compliance. There should be no material
                    findings on con-compliance with legislation and the financial statement should be free from material
                    misstatements.&nbsp;</td>
                  <td style="width: 81px; height: 13px;">&nbsp;</td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 609px; height: 13px; text-align: left;" colspan="4">&nbsp;<strong>Total Weighting:
                      Auditors General Findings &amp; Opinions (contribute 20% towards the final score)</strong></td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 80px; height: 13px;">&nbsp;<strong>Organisational Performance </strong></td>
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;This component will focus on assessing the
                    organisational performance base on the predetermine target in the Annual Performance Plan (APP) and
                    the audited Annual Report (AR) will be used to establish the extent in which the objective in the
                    APP
                    has been achieved.&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td style="width: 81px; height: 13px;">&nbsp;</td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 609px; height: 13px;" colspan="4">&nbsp;<strong>Total weight: The organisational
                      performance will contribute 20% towards the final score</strong></td>
                  <td style="width: 81px; height: 13px;"><strong>&nbsp;20%</strong></td>
                </tr>
              </tbody>
            </table>


            <br>
          <h2>Generic Management Competencies: Personal Development Plan</h2>
          <br>
          <table >
            <tbody>
              <tr style="height: 33px;">
                <td style="width: 106px; height: 9px; text-align: center;" rowspan="2"><strong>No</strong></td>
                <td style="width: 313px; height: 9px; text-align: center;" rowspan="2"><strong>Core Management
                    Competencies</strong></td>
                <td style="width: 304px; height: 9px; text-align: center;" rowspan="2"><strong>Process
                    Competencies</strong></td>
                <td style="width: 164px; height: 33px; text-align: center;" colspan="2"><strong>Dev. Required</strong>
                </td>
              </tr>
              <tr style="height: 19px;">
                <td style="width: 74px; height: 19px; text-align: center;">&nbsp;<strong>Yes</strong></td>
                <td style="width: 90px; height: 19px; text-align: center;"><strong>No</strong></td>
              </tr>
              <tr v-for="(item, index) in doc.gmc_personal_Development_plan" :key="index">
                <td>
                 {{ item.number}}
                </td>
                <td>
                  {{item.core_management_competencies}}
                </td>
                <td>
                  {{item.process_competencies}}
                </td>
                <td colspan="2">
                  <v-switch v-model="item.dev_required" disabled color="green"></v-switch>
                </td>
              </tr>
            </tbody>
         
          </table>

          <br>
          <h2>Work Plan</h2>
          <br>
            <v-textarea filled auto-grow label="KEY RESULT AREAS" rows="4" row-height="30" shaped></v-textarea>
            <table >
              <tbody>
                <tr >
                  <td rowspan="2"><strong>KEY Activities</strong><br /><br /></td>
                  <td rowspan="2"><strong>Weight</strong><br /><br /></td>
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>Resource Required</strong><br /><br /></td>
                  <td rowspan="2"><br /><strong>Enabling Condition</strong></td>
                </tr>
                <tr>
                  <td><strong>TARGET DATE</strong></td>
                  <td><strong>INDICATOR / TARGET</strong></td>
                <tr v-for="(item, index) in doc.work_plan" :key="index" style="height: 64px;">
                  <td style="width: 94px; height: 64px;"> {{ doc.key_activities}} </td>
                  <td style="width: 94px; height: 64px;"> {{ doc.weight}} </td>
                  <td style="width: 151px; height: 64px;">{{ doc.performance_measures.target_date }}</td>
                  <td style="width: 141px; height: 64px;">{{ doc.performance_measures.indicator }}</td>
                  <td style="width: 170px; height: 64px;">{{doc.resource_required}}</td>
                  <td style="width: 147px; height: 64px;">{{ doc.enabling_condition}}</td>
                </tr>
                <td style="width: 170px; height: 64px;"><strong>Weight for the KRA</strong></td>
                <td style="width: 147px; height: 64px;">&nbsp;%</td>
              </tbody>
        
            </table>
         <h2>KEY GOVERNMENT FOCUS AREAS: Develop and implement an effective and efficient supply chain management
                      system</h2>
          <br>
 

            <table>
              <tbody>
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="2"><strong>PERFORMANCE MEASURES</strong><br /><br /></td>
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
                  <td></td>
                  <td></td>
                  
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
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ensure that there is savings on procurement spend</td>
                  <td>Annual</td>
                  <td>5% saving on annual procurement spend</td>
                  <td>Current cost of specific goods and/or services</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ensure that procurement planning is managed</td>
                  <td>Annual</td>
                  <td>The finalisation of tender awards within an average of 60 days from the date bids close</td>
                  <td>Average number of days to award tenders</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ensure that SCM risk management is performed</td>
                  <td>Annual</td>
                  <td>Risk response plans for the top 5 SCM risks developed</td>
                  <td>Risk response (mitigation) plans</td>
                   <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ensure that the department pays all compliant supplier invoices within 30 days of receipt of
                    invoice</td>
                  <td>Annual</td>
                  <td>100% of compliant supplier invoices paid within 30 days of receipt of invoice</td>
                  <td>Average supplier payment days</td>
                  <td></td>
                  <td></td>>
                </tr>
              </tbody>
              
            </table>

  <br>
                   <h3> <strong>KEY GOVERNMENT FOCUS AREAS</strong> </h3>
                 <p>
                    Develop and implement an efficient and effective diversity
                    management and transformation system
                </p>


<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
          
            <td width="171" rowspan="2">
                <p align="center">
                    <strong>KEY FOCUS AREA ACTIVITIES / OUTPUTS</strong>
                </p>
            </td>
            <td width="312" colspan="2">
                <p align="center">
                    <strong>PERFORMANCE MEASURES</strong>
                </p>
            </td>
            <td width="137" rowspan="2">
                <p align="center">
                    <strong>BASELINE DATA</strong>
                </p>
            </td>
            <td width="132" rowspan="2">
                <p align="center">
                    <strong>ACTUAL PERFORMANCE</strong>
                </p>
            </td>
            <td width="104" rowspan="2">
                <p align="center">
                    <strong>VARIANCE / COMMENT</strong>
                </p>
            </td>
            <td width="102" rowspan="2" valign="top">
                <p align="center">
                    <strong>COMMENTS </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="84">
                <p align="center">
                    <strong>TARGET DATE</strong>
                </p>
            </td>
            <td width="227">
                <p align="center">
                    <strong>INDICATOR / TARGET</strong>
                </p>
            </td>
        </tr>
        <tr>
            
            <td width="171" valign="top">
                <p>
                    Ensure that equity targets are met
                </p>
                <p>
                    50% representation of women at sms
                </p>
                <p>
                    2% representation of persons with disabilities across all
                    levels
                </p>
                <p>
                    Attraction of youth into the Public Service
                </p>
            </td>
            <td width="84" valign="top">
                <p align="center">
                    Annual
                </p>
            </td>
            <td width="227" valign="top">
                <p>
                    At least a 1% increase in the representation of persons
                    with disabilities for departments with representation below
                    1%
                </p>
                <p>
                    At least 20% increase in the representation of women at SMS
                    for departments below 30%; 5% for departments between 30%
                    and 40% and 3% for departments between 41% and 49%
                </p>
                <p>
                    At least 30% of the staff in the department is comprised of
                    youth
                </p>
            </td>
            <td width="137" valign="top">
                <p>
                    Current percentage of representation of youth, persons with
                    disabilities and for women at SMS
                </p>
            </td>
            <td width="132" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="102" rowspan="3" valign="top">
            </td>
        </tr>
        <tr>
            <td width="171" valign="top">
                <p>
                    Ensure that reasonable accommodation is provided to
                    employees with disabilities and employees with small
                    children
                </p>
            </td>
            <td width="84" valign="top">
                <p align="center">
                    Annual
                </p>
            </td>
            <td width="227" valign="top">
                <p>
                    Report on the number of work related assistive devices
                    provided in the department.
                </p>
                <p>
                    Report on reasonable accommodation measures provided in the
                    department.
                </p>
            </td>
            <td width="137" valign="top">
                <p>
                    Current status of provision of assistive devices
                </p>
                <p>
                    Current status of reasonable accommodation measures
                    provided in the department.
                </p>
            </td>
            <td width="132" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
        </tr>
        <tr>
            <td width="171" valign="top">
                <p>
                    Ensure that reports have disaggregated data to show
                    beneficiaries in terms of age, race, disability and gender
                </p>
            </td>
            <td width="84" valign="top">
                <p align="center">
                    Annual
                </p>
            </td>
            <td width="227" valign="top">
                <p>
                    Reports with disaggregated data
                </p>
            </td>
            <td width="137" valign="top">
                <p>
                    Current status of reports in the department
                </p>
            </td>
            <td width="132" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<br>
     <p>
                    <strong>KEY GOVERNMENT FOCUS AREAS</strong>
                </p>
                <p align="center">
                    <strong>Integrated Governance</strong>
                </p>
<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
          
            <td width="192" rowspan="2" valign="top">
                <p>
                    <strong>KEY FOCUS AREA ACTIVITIES / OUTPUTS</strong>
                </p>
            </td>
            <td width="340" colspan="2" valign="top">
                <p align="center">
                    <strong>PERFORMANCE MEASURES</strong>
                </p>
            </td>
            <td width="113" rowspan="2" valign="top">
                <p align="center">
                    <strong>BASELINE DATA</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>ACTUAL PERFORMANCE</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>VARIANCE / COMMENT</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="170">
                <p align="center">
                    <strong>TARGET DATE</strong>
                </p>
            </td>
            <td width="170">
                <p align="center">
                    <strong>INDICATOR / TARGET</strong>
                </p>
            </td>
        </tr>
        
        
        <tr>
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
        <tr>
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
    
    </tbody>
</table>
      <!-- Forms start and end within this -->
     
            <!-- Author's Signature -->
            <v-flex xs12 class="my-5">
              <v-flex xs4>
                <img style="width:100%" :src="doc.authorSignature" alt />
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
              v-for="signatory in doc.signatures"
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
