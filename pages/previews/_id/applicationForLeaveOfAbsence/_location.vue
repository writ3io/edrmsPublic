<template>
  <div id="circular">
    <v-container grid-list-md fluid>
      <Toolbar :data="doc" />
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>
        <v-flex xs9>
            <h2>
            Application for Absence of Leave
          </h2>
          <br>
          <table border="1" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="250" valign="top">

                  <strong>Surname</strong>
                </td>
                <td width="250" valign="top">
                  {{ doc.body.personal_information.surname }}
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Initials</strong>
                  </p>
                </td>
                <td width="250" valign="top">
                  {{ doc.body.personal_information.initials }}
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Persal Number</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  {{ doc.body.personal_information.persal_number }}
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Shift Worker</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  {{ doc.body.personal_information.shift_worker }}
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Address during the period</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  {{ doc.body.personal_information.address_during_leave_period }}
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Tel No:</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  {{ doc.body.personal_information.tel_no }}
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Casual Employee</strong>
                  </p>
                </td>
                <td colspan="3" width="125" valign="top">
                 {{ doc.body.personal_information.casual_worker }}
                </td>
              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Department</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  {{doc.body.personal_information.department }}
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Component</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  {{ doc.body.personal_information.component }}
                </td>

              </tr>
            
            </tbody>
          </table>
          <br>
          <v-layout column wrap>
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

              <v-flex v-for="signatory in doc.body.signatures" :key="signatory.SurName">
                <v-flex v-if="canSign(signatory.action.value)">

                  
                  <v-flex v-if="signatory.action.value == 'recommend'">
                    <h2>Recommendation By Supervisor/Manager</h2>
                    <v-radio-group v-model="recommendation"  row>
                      <v-radio name="recommendation" label="Recommended" :value="0"></v-radio>
                      <v-radio name="recommendation" label="Not Recommended" :value="1"></v-radio>
                      <v-radio name="recommendation" label="Rescheduled" :value="2"></v-radio>
                    </v-radio-group>
                  
                  <v-textarea v-if="recommendation == 1" v-model="reason_for_not_recommending" solo placeholder="Please State the reason  "></v-textarea>
                  <!-- If rescheduled -->
                  <v-menu  v-if="recommendation == 2"  ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition"
                    offset-y full-width max-width="290px" min-width="290px">
                    <template v-slot:activator="{ on }">
                      <v-text-field width="200px" solo v-model="dateFormatted" label="Date"  persistent-hint
                        prepend-icon="event" @blur="rescheduledDate = parseDate(dateFormatted)" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="rescheduledDate" no-title @input="menu1 = false"></v-date-picker>
                  </v-menu>
                </v-flex>

                  <v-flex v-if="signatory.action.value == 'approve'">
                    <h2>Approval By Head of Department</h2>
                    <v-radio-group v-model="approval" row>
                      <v-radio name="approval" label="Approved With Full Pay" :value="0"></v-radio>
                      <v-radio name="approval" label="Approved Without Pay" :value="1"></v-radio>
                      <v-radio name="approval" label="Not Approved" :value="2"></v-radio>
                    </v-radio-group>
                  
                  <v-textarea  v-if="approval == 1 || approval == 2" v-model="motivation_leave_without_pay" solo placeholder="Please State the motivation  "></v-textarea>
                
              
                </v-flex>
            </v-flex>

              </v-flex>

            </v-flex>




            <!-- Responses
<v-flex v-if="$route.params.location != 'records'" xs12>
              <editor
                api-key="7ruk8pq3grn2940r2hkdhb5e7vc5rvtc2kdssi58s9ockt7y"
                v-model="signer.comment"
                ref="editor"
                :init="{min_height}"
              ></editor>
            </v-flex>

             <v-radio-group v-model="signer.response" row>
                <v-radio :label="action.text" :value="action.value"></v-radio>
                <v-radio :label="action.altText" :value="action.altValue"></v-radio>
              </v-radio-group>
 -->


            <v-flex v-if="$route.params.location != 'records'" xs12>
              <p class="text-xs-left">Sign Below</p>
              <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                :options="{ onEnd }" />
              <v-btn flat color="warning" @click="clear">
                <v-icon left>undo</v-icon>
                <span>Clear</span>
              </v-btn>
            </v-flex>
            <v-flex v-for="signatory in doc.body.signatures" :key="signatory.SurName" xs12 class="my-5">
              <v-flex xs12>
                <h2>{{signatory.response}}</h2>
                <div v-html="signatory.comment"></div>
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
          </v-layout>
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
        action: {
          text: "For Approval",
          value: "approve"
        },
        recommendation: 0,
        reason_for_not_recommending: "",
        motivation_leave_without_pay: "",
        approval:0,
        rescheduledDate: new Date().toISOString().substr(0, 10),
        dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
        recommendationData: {},
        approvalData: {},
        menu1: false,
        actions: [{
            text: "For Approval",
            value: "approve"
          },
          {
            text: "For Recommendation",
            value: "recommend"
          },
          {
            text: "For Input",
            value: "input"
          },
          {
            text: "For Attention",
            value: "attention"
          }
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
      },
      computedDateFormatted () {
        return this.formatDate(this.rescheduledDate)
      },
    },
    watch: {
      doc(data) {
        console.log("We have data!", data);

        let pos = this.doc.body.signatures
          .map(function (e) {
            return e.EmailAdress;
          })
          .indexOf(store.state.user.EmailAdress);

        this.signer = this.doc.body.signatures[pos];
        if (this.signer) {
          this.action = this.respondText(this.signer.action);
        }
      },
      rescheduledDate(val) {
        this.dateFormatted = this.formatDate(this.rescheduledDate)
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },

      canSign(action) {
        let pos = this.doc.body.signatures
          .map(function (e) {
            return e.EmailAdress;
          })
          .indexOf(store.state.user.EmailAdress);
        let user = this.doc.body.signatures[pos];

        if (user.action.value == action) {

          console.log("This user can sign")
          console.log(user.action.value)
          return true
        } else {
          return false
        }
        return
      },
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
      saveRecommendationData(recommending_user){
        if(this.recommendation === 0){
          this.recommendationData.recommended = 'recommended'
        
        }
         if(this.recommendation === 1){
          this.recommendationData.recommended = 'Not Recommended'
          this.recommendationData.reason_for_not_recommending = this.reason_for_not_recommending
        }
        if(this.recommendation === 2){
          this.recommendationData.recommendation = 'Rescheduled'
          this.recommendationData.rescheduledDate = this.rescheduledDate
        }

        console.log(this.recommendationData)
        //this.recommendationData = {}
        console.log("Saving Recommendation DATA")
        recommending_user.recommendation = this.recommendationData
      },
      saveApprovalData(approving_user){
        if(this.approval === 0){
          this.approvalData.approved = 'Approved with Full Pay'
        
        }
         if(this.approval === 1 || this.approval === 2 ){
          this.approvalData.approved = 'Approved without Pay'
          this.approvalData.motivation = this.motivation_leave_without_pay
        }
      
        console.log(this.approvalData)
        approving_user.approval = this.approvalData
        console.log("Saving Approval DATA")
      },
      saveSignature() {
        let pos = this.doc.body.signatures
          .map(function (e) {
            return e.EmailAdress;
          })
          .indexOf(store.state.user.EmailAdress);
        let user = this.doc.body.signatures[pos];
        user.signature = this.signature;
        if(this.canSign('recommend')) {
          this.saveRecommendationData(user)
        }
        if(this.canSign('approve')) {
          this.saveApprovalData(user)
        }

        user.signatureDate = Date.now();
        console.log(this.doc);
      },
      onEnd() {
        const {
          isEmpty,
          data
        } = this.$refs.signaturePad.saveSignature();
        console.log("=== End ===");
        this.signature = data;
        this.saveSignature()
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
</style>