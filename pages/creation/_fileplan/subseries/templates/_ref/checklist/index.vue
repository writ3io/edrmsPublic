<template>

  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>

      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs2></v-flex>
      <v-flex></v-flex>
      <v-flex xs8>
        <v-flex justify-end>
          <hr style="color:grey">
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>

            <h3 class="text-xs-center" >SUPPLY CHAIN MANAGEMENT: COMPLIANCE CHECKLIST FOR GOODS AND SERVICES TO THE VALUE OF less than R500 000.00.</h3>

            <v-card>
                <v-card-title >
                  <v-flex xs12> 
                    <h4>PHASE 1: DEMAND MANAGEMENT: - END-USER AND RECEIVING OFFICER </h4>
                  </v-flex>
                </v-card-title>
                <v-card-text class="pt-0 mt-0">
                  <v-flex xs12 sm6 py-0>
                    <v-menu v-model="menu1a" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.date1" label="Date Received" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
               
                <v-layout xs12 wrap border>
                  <v-flex >
                    <v-data-table :headers="headers" :items="doc.body.phase1" hide-actions class="elevation-1">

                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">
                              {{ props.header.text }}
                            </span>
                          </template>
                          <span>
                            {{ props.header.text }}
                          </span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data="Hello">
                        
                        <td class="">
                          1. {{ props.index + 1 }}
                        </td>
                        <td class="">
                          {{ props.item.description }}
                        </td>
                        <td class="">
                          
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                        
                        </td>
                        <td class=" px-0 py-0">
                         <v-text-field v-model="props.item.comment" single-line solo flat placeholder=""></v-text-field>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">
                          No Form Input Fields
                        </div>
                      </template>
                      </v-data-table>
                  </v-flex>
                  <v-alert
                    pa-0
                    :value="true"
                    type="info"
                  >
                    Please don’t pass to the next Step in case of non-compliance to all items above

                  </v-alert>
                </v-layout>

                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >END USER/COST CENTRE COORDINATOR & DEMAND RECEIVING OFFICER.</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="END User: " />
                  </v-flex>
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="RECEIVING OFFICER: " />
                  </v-flex>
                
                </v-layout>

                <v-flex justify-end>
                  <hr style="color:grey">
                </v-flex>
                <v-flex xs12 sm6 py-0>
                          <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date2" label="Date Received" readonly v-on="on">
                              </v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                          </v-menu>
                         </v-flex>

                <v-layout xs12 wrap border>
                  <v-flex >
                    <v-data-table :headers="headers" :items="doc.body.phase2" hide-actions class="elevation-1">

                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">
                              {{ props.header.text }}
                            </span>
                          </template>
                          <span>
                            {{ props.header.text }}
                          </span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data="Hello">
                        
                        <td class="">
                          2. {{ props.index + 1 }}
                        </td>
                        <td class="">
                          {{ props.item.description }}
                          <div v-if="props.index == 1">
                              <div v-for = "n in 8" :key="n">
                                <v-layout wrap >
                                <v-flex xs1>
                                  {{ n }}.
                                </v-flex>
                                 <v-flex >
                                   <v-text-field dense v-model="props.item.serviceProviders[n]" single-line solo flat placeholder=""></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                        </td>
                        <td class="">
                          
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                        
                        </td>
                        <td class=" px-0 py-0">
                         <v-text-field v-model="props.item.comment" single-line solo flat placeholder=""></v-text-field>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">
                          No Form Input Fields
                        </div>
                      </template>
                      </v-data-table>
                  </v-flex>
                
                </v-layout>

                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >RESPONSIBLE CSD OFFICIAL/USER</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Responsible CSD Official/ User: " />
                  </v-flex>
                  
                
                </v-layout>

                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >PHASE 3: DEMAND MANAGEMENT: APPROVAL FOR FURTHER PROCESSING.</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Demand Manager : " />
                  </v-flex>
                  
                
                </v-layout>

                <v-flex justify-end>
                  <hr style="color:grey">
                </v-flex>

                <v-layout xs12 wrap border>
                  
                  <v-flex xs12>
                    <h3 class="" >PHASE 4: ACQUISITION MANAGEMENT: INVITATION, EVALUATION AND   ADJUDICATION OF QUOTATIONS</h3>
                  </v-flex>
                  
                  <v-flex xs12 sm6 py-0>
                    <v-menu v-model="menu3a" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.date3" label="Date and Time Received : " readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.date3" @input="menu3b = false"></v-date-picker>
                    </v-menu>
                  </v-flex>

                  <v-flex >
                    <v-data-table :headers="headers" :items="doc.body.phase4" hide-actions class="elevation-1">

                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">
                              {{ props.header.text }}
                            </span>
                          </template>
                          <span>
                            {{ props.header.text }}
                          </span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data="Hello">
                        
                        <td class="">
                          3. {{ props.index + 1 }}
                        </td>
                        <td class="">
                          {{ props.item.description }}

                          <div v-if="props.index == 1">
                              <div v-for = "(qoute, index) in props.item.qoutations" :key="index">
                                <v-layout wrap >
                                <v-flex xs1>
                                  {{ index + 1 }}.
                                </v-flex>
                                 <v-flex >
                                   <v-text-field dense v-model="qoute.serviceProvider" single-line solo flat placeholder="Service Provider"></v-text-field>
                                 </v-flex>
                                 <v-flex xs3>
                                   <v-text-field dense v-model="qoute.amount" single-line solo flat placeholder="Amount"></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 2">
                                <ul>
                                  <li>No practitioner who was involved in calling quotations is sitting for evaluation.</li>
                                  <li>Ensure the signing of all declaration of interest forms and attendance register </li>
                                  <li>CSD Registration Report attached and verified</li>
                                  <li>Relevant SBD forms signed and attached (4, 6.1, 8 & 9) for all suppliers, and (SBD 6.2: Local Production and Content, where applicable)</li>
                                  <li>Ensure that BEC report  is attached</li>
                                  <li>Ensure that reasons for disqualifications are indicated in the BEC report</li>
                                  <li>Submit the Completed  Evaluation report  as per the necessary delegations for award/approval</li>
                                </ul>
                          </div>

                        </td>
                        <td class="">
                          
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                        
                        </td>
                        <td class=" px-0 py-0">
                         <v-text-field v-model="props.item.comment" single-line solo flat placeholder=""></v-text-field>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">
                          No Form Input Fields
                        </div>
                      </template>
                      </v-data-table>
                  </v-flex>
                  
                </v-layout>
                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >RESPONSIBLE OFFICIAL FOR INVITING QUOTATIONS</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Responsible Official for invitation of qoutations : " />
                  </v-flex>

                  <v-flex xs12>
                    <h4 class="text-xs-center" >RESPONSIBLE OFFICIAL FOR CLOSING, RECEIVING AND OPENING OF QUOTATIONS</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Responsible Official for Closing, Recie... : " />
                  </v-flex>
                  
                
                </v-layout>

                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >RESPONSIBLE	OFFICIAL</h4>
                  </v-flex>
                  
                  <v-flex xs12 lg6>
                <p class="text-xs-left">Sign here : </p>
                <VueSignaturePad 
                  class="signature-pad" 
                  max-width="480px" 
                  height="200px" 
                  ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu4a" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.date4" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date2" @input="menu4b = false"></v-date-picker>
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
  name: 'Checklist',
  components: {
    Toolbar,
    SelectUsers,
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


      headers: [{
          text: 'ITEM NO.',
          align: 'left',
          sortable: false,
          value: '',
          width: "10%"
        },
        {
          text: 'DESCRIPTION',
          value: '',
        },
        {
          text: 'YES/NO',
          value: '',
          width: "10%"
        },
        {
          text: 'COMMENTS',
          value: '',
        },
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "checklist",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          date1 : new Date().toISOString().substr(0, 10),
          date2 : new Date().toISOString().substr(0, 10),
          date3 : new Date().toISOString().substr(0, 10),
          date4 : new Date().toISOString().substr(0, 10),
          enderUser : {},
          phase1: [
            {
              description: "Ensure that Part A to E of the Requisition Voucher are correctly and fully completed.",
              boolean: "",
              comment: ""
            },
            {
              description: "Whether Submission, Requisition together with Specification are singed and approved by relevant delegated officials.",
              boolean: "",
              comment: ""
            },
            {
              description: "Ensure that Part D of the Requisition Voucher is always signed by Budget Official and BAS Expenditure Report is always attached to authenticate budget availability for required item/s.",
              boolean: "",
              comment: ""
            },
            {
              description: "Confirm whether goods / services required are on contract or not.",
              boolean: "",
              comment: ""
            },
            {
              description: "Confirm that Approval to Procure is in line with Approved Departmental Procurement Plan.",
              boolean: "",
              comment: ""
            },
            {
              description: "Requisition/s to be submitted seven (7) days before activity date.",
              boolean: "",
              comment: ""
            },
            {
              description: "Ensure that LDE/Q or LDE/D number is allocated to each requisition at entry point and given to end user for enquiry purposes.",
              boolean: "",
              comment: ""
            },
            {
              description: "",
              boolean: "",
              comment: ""
            },
            {
              description: "",
              boolean: "",
              comment: ""
            },
            {
              description: "",
              boolean: "",
              comment: ""
            },
            {
              description: "",
              boolean: "",
              comment: ""
            },
            {
              description: "",
              boolean: "",
              comment: ""
            }
            
          ],

          phase2: [
            {
              description: "N.B Please confirm supplier compliance e.g Tax matters, Locality, etc. before selection.",
              boolean: "",
              comment: ""
            },
            {
              description: "Nominate at least eight (8) service providers from the CSD and list them below.",
              boolean: "",
              comment: "",
            },
            {
              description: "In case of one service provider being selected, is the Emergency/Urgency justification form attached and the approval for deviation been granted by the Accounting Officer or a delegated official and reasons thereof provided? ",
              boolean: "",
              comment: ""
            },
            {
              description: "In case of sole supplier, Sole Supplier Justification form must be attached and be approved by the Accounting Officer.",
              boolean: "",
              comment: ""
            },
            {
              description: "If the above is verified, register the requisition and submit to acquisition management.",
              boolean: "",
              comment: ""
            }
            
          ],

          phase4: [
            {
              description: "Invite 5 quotations, preferably between 3 and 7 days depending on the type and urgency of service/commodity required.  Attach proof of invitation.",
              boolean: "",
              comment: ""
            },
            {
              description: "Closing, receiving and opening of quotations/ box , registration of received quotations and submission to secretariat for evaluation committee. Record Quotations received and amounts below",
              boolean: "",
              comment: "",
              qoutations : [
                {
                  "serviceProvider" : "",
                  "amount" : "",
                },
                {
                  "serviceProvider" : "",
                  "amount" : "",
                },
                {
                  "serviceProvider" : "",
                  "amount" : "",
                },
                {
                  "serviceProvider" : "",
                  "amount" : "",
                },
                {
                  "serviceProvider" : "",
                  "amount" : "",
                },
                {
                  "serviceProvider" : "",
                  "amount" : "",
                }


              ]
            },
            {
              description: "During evaluation ensure that the following are adhered to:",
              boolean: "",
              comment: ""
            },
            {
              description: "Register and submit the requisition to Purchase Unit for order generation",
              boolean: "",
              comment: ""
            }
            
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          signatures: [],
          signatures2: [],
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
