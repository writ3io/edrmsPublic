<template>

  <v-container grid-list-md>
    <v-layout justify-space-between>

      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" :canAttachFile="false" />
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

            <h3 class="text-xs-center">MEMO COVER FOR ENDORSEMENT OF CESSION AGREEMENTS </h3>
            <v-tabs color="primary" dark slider-color="success">
              <v-tab class="color-white" href="#tab-one">
                Item One
              </v-tab>
              <v-tab href="#tab-two">
                Item Two
              </v-tab>

              <v-tab-item value="tab-one">

                <v-flex xs12 wrap outline>
                  <v-card flat>
                    <v-card-title class="justify-center py-0">
                      <v-flex xs12 sm6 md2 py-0>
                        <v-text-field v-model="doc.ref" label="REF:"> </v-text-field>
                      </v-flex>
                    </v-card-title>
                    <v-card-text class="pt-0 mt-0">

                      <v-layout xs12 wrap border>
                        <v-flex x12 border ma-1>

                          <v-layout xs12 wrap>
                            <v-flex xs12 sm3>
                              <v-text-field v-model="doc.body.contractNo" label="Contract No."> </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field v-model="doc.body.serviceDescription"
                                label="Description of Goods/Service :"> </v-text-field>
                            </v-flex>
                          </v-layout>

                          <v-layout xs12 wrap>
                            <v-flex xs12 sm6>
                              <v-menu v-model="menu1a" :close-on-content-click="false" :nudge-right="40"
                                transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on }">
                                  <v-text-field v-model="doc.body.from" label="From" readonly v-on="on">
                                  </v-text-field>
                                </template>
                                <v-date-picker v-model="doc.body.from" @input="menu1b = false"></v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40"
                                transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on }">
                                  <v-text-field v-model="doc.body.to" label="To" readonly v-on="on">
                                  </v-text-field>
                                </template>
                                <v-date-picker v-model="doc.body.to" @input="menu2b = false"></v-date-picker>
                              </v-menu>
                            </v-flex>
                          </v-layout>

                          <v-layout xs12 wrap pa-0 ma-0>
                            <v-flex xs12 sm8>
                              <v-text-field v-model="doc.body.endUser_cc" label="End-User (Cost Centre)">
                              </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                              <v-text-field v-model="doc.body.contractAmount" label="Contract Amount :"> </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm8>
                              <v-text-field v-model="doc.body.contractedSupplier" label="Contracted Supplier:">
                              </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                              <v-text-field v-model="doc.body.csdNo" label="CSD No."> </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm8>
                              <v-text-field v-model="doc.body.cessionary" label="Cessionary:"> </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                              <v-text-field auto-grow v-model="doc.body.cessCsdNo" label="CSD No."> </v-text-field>
                            </v-flex>

                          </v-layout>

                          <v-layout xs12 wrap pa-0 ma-0>
                            <v-flex xs12>
                              <v-textarea v-model="doc.body.applicationSummary" label="Summary of the application">
                              </v-textarea>
                            </v-flex>

                          </v-layout>

                          <v-layout xs12 wrap pa-0 ma-0>
                            <v-flex xs12 md12>
                              <SelectUsers v-on:getUsers="setRecipients($event)" label="Compiled by:" />
                            </v-flex>
                            <v-flex xs12 sm6>
                              <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                                :options="{ onEnd }" />
                              <v-btn flat color="warning" @click="clearAuthorSignature">
                                <v-icon left>undo</v-icon>
                                <span>Clear</span>
                              </v-btn>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-menu v-model="menu3a" :close-on-content-click="false" :nudge-right="40"
                                transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on }">
                                  <v-text-field v-model="doc.body.signatoryDate1" label="Date" readonly v-on="on">
                                  </v-text-field>
                                </template>
                                <v-date-picker v-model="doc.body.signatoryDate1" @input="menu3b = false"></v-date-picker>
                              </v-menu>
                            </v-flex>

                          </v-layout>


                        </v-flex>
                      </v-layout>

                      <v-layout xs12 wrap border mt-3>
                        <v-flex border ma-1>
                          <v-card
                            flat
                            
                             >
                            <v-layout > 
                            <v-flex xs3 border pa-3>
                               <b>Endorsement</b>
                            </v-flex>
                            <v-flex xs5 border pa-3>
                               <b>Supported by</b>
                            </v-flex>
                            <v-flex xs2 border pa-3>
                               <b>Recommendation Status</b>
                            </v-flex>
                            <v-flex xs2 border pa-3>
                               <b>Approval Status</b>
                            </v-flex>
                            </v-layout>

                            <v-layout> 
                            <v-flex xs3 border pa-3>
                               <b>Name</b>
                            </v-flex>
                            <v-flex xs5 border pa-3>
                               <SelectUsers v-on:getUsers="setSigners($event)" label="" />
                            </v-flex>
                            <v-flex xs2 border pa-3>
                                {{ doc.body.section2[0].recomStatus }}
                               <v-btn color="primary" small dark @click="updateStatus('Recomm','Recommended')">Recommended</v-btn><br>
                               <v-btn color="warning" small dark @click="updateStatus('Recomm','Not Recommended')">Not Recommended</v-btn>
                            </v-flex>
                            <v-flex xs2 border pa-3>
                                {{ doc.body.section2[0].approvalStatus }}
                               <v-btn color="primary" small dark @click="updateStatus('Approval','Approved')">Approved</v-btn><br>
                               <v-btn color="warning" small dark @click="updateStatus('Approval','Not Approved')">Not Approved</v-btn>
                            </v-flex>
                            </v-layout>

                            

                            <v-layout> 
                            <v-flex xs3 border pa-3>
                               <b>Remarks/ Comments</b>
                            </v-flex>
                            <v-flex xs5 border pa-3>
                               <v-text-field v-model="doc.body.section2[1].column1" single-line solo flat placeholder="Remarks/Comments">
                                  </v-text-field>
                            </v-flex>
                            <v-flex xs2 border pa-3>
                               <v-text-field v-model="doc.body.section2[1].column2" single-line solo flat placeholder="Remarks/Comments">
                                  </v-text-field>
                            </v-flex>
                            <v-flex xs2 border pa-3>
                               <v-text-field v-model="doc.body.section2[1].column3" single-line solo flat placeholder="Remarks/Comments">
                                  </v-text-field>
                            </v-flex>
                            </v-layout>

                            <v-layout> 
                            <v-flex xs3 border pa-3>
                               <b>Signature</b>
                            </v-flex>
                            <v-flex xs9 border pa-3>
                              
                            </v-flex>
                            </v-layout>

                            <v-layout> 
                            <v-flex xs3 border pa-3>
                               <b>Date</b>
                            </v-flex>
                            <v-flex xs9 border pa-3>
                              
                            </v-flex>
                            </v-layout>
                            
                          </v-card>
                          
                        </v-flex>
                      </v-layout>



                    </v-card-text>
                  </v-card>
                  <v-layout x12>
                    <v-alert :value="true" type="info">
                      NB: Please attach copies of the following documents:
                      a) CSD Registration Reports of the contracted supplier and Cessionary;
                      b) Appointment Letter, SLA, Contract or Purchase Order; and
                      c) A copy of the duly signed Cession Agreement (Original).

                    </v-alert>
                  </v-layout>
                </v-flex>

              </v-tab-item>

              <v-tab-item value="tab-two">

                  <v-flex x12 wrap>
                      <v-flex xs12>
                    <hr style="color:grey">
                  </v-flex>
                  <v-layout wrap column>
                    <v-flex xs6 sm6 md2 py-0>
                      </v-flex>
                  </v-layout>
                  <v-flex xs12>
                    <hr style="color:grey">
                  </v-flex>
                  <v-layout wrap >
                   
                    <v-flex xs12>
                      <v-layout  wrap>
                        <v-flex xs12 class="mb-4">
                          <v-layout>
                            <v-flex xs12>
                              <h3>Address:</h3>
                              <editor api-key="7ruk8pq3grn2940r2hkdhb5e7vc5rvtc2kdssi58s9ockt7y"
                                v-model="doc.body.address" ref="editor" :init="{min_height}"></editor>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex xs12>
                          <v-flex xs11>
                            <h3>Attention:</h3>
                            <SelectUsers v-on:getUsers="setRecipients($event)" label="Email To:" multiple />
                          </v-flex>
                        </v-flex>

                        <v-flex xs12>
                          <v-layout>
                            <v-flex xs11>
                              <h3>RE:</h3>
                              <v-text-field v-model="doc.body.memosubject"></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex xs12>
                          <editor api-key="7ruk8pq3grn2940r2hkdhb5e7vc5rvtc2kdssi58s9ockt7y"
                            v-model="doc.body.instructions" ref="editor" :init="{plugins,toolbar,min_height}"></editor>
                        </v-flex>

                        <!-- sign -->
                        <v-flex xs12 class="mt-5">
                          <h2>Insert Your Signature</h2>
                          <v-flex xs12>
                            <p class="text-xs-left">Sign Below</p>
                            <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                              :options="{ onEnd }" />
                            <v-btn flat color="warning" @click="clearAuthorSignature">
                              <v-icon left>undo</v-icon>
                              <span>Clear</span>
                            </v-btn>
                          </v-flex>
                        </v-flex>
                        <!-- sign -->

                        <v-flex xs8>
                          <v-card-text class="black--text ma-0 font-weight-bold text-sm-left">
                            <h2>{{doc.author.SurName}}</h2>
                            <h4>
                              {{doc.author.Designation}} |
                              <span class="grey--text">{{doc.author.Department}}</span>
                            </h4>
                          </v-card-text>
                        </v-flex>
                        <v-flex xs4>
                          <h2 class="text-xs-left">{{Date.now() | moment("(ddd) DD - MMM - YYYY")}}</h2>
                          <hr />
                          <h2>Date</h2>
                        </v-flex>

                        <v-flex xs12>
                          <v-switch v-model="iSign" label="Add People To Sign"></v-switch>
                        </v-flex>

                        <v-flex v-show="iSign" xs12 class="my-5">
                          <v-flex xs11>
                            <h3>Who to sign:</h3>
                            <SelectUsers v-on:getUsers="setSigners($event)" label="Email To:" multiple />
                          </v-flex>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-tab-item>

            </v-tabs>


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
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
import {
  signatureHelpers
} from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";
  


Vue.use(Editor);
Vue.use(VueSignaturePad);
export default {
  name: 'MemoCessionAgreementEndorsement',
  components: {
    Toolbar,
    editor: Editor,
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
      //
      active_tab : "tab-one",
      headers: [{
          text: 'Endorsement',
          align: 'left',
          sortable: false,
          value: '',
          width: ""
        },
        {
          text: 'Supported by',
          value: '',
        },
        {
          text: 'Recommendation Status',
          value: '',
          width: ""
        },
        {
          text: 'Approval Status',
          value: '',
          width: ""
        },
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "MemoCessionAgreementEndorsement",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          contractNo : "",
          serviceDescription : "",
          endUser_cc : "Special Projects",
          contractAmount : "Various",
          contractedSupplier : "",
          csdNo : "",
          cessionary : "",
          cessCsdNo : "",
          applicationSummary : "The Accounting Officer is requested to acknowledge the attached cession and grant an approval to make payments in favour of the cessionary from the approval date. The approval should be subject to the same rates, terms and conditions as per the Contract and Service Level Agreement signed by yourselves and Limpopo Department of Education.  The contracted Supplier is still obliged to perform as contracted since no payments will be made to the cessionary should there be non-compliance. "
          ,
          to : new Date().toISOString().substr(0, 10),
          from : new Date().toISOString().substr(0, 10),
          signatoryDate1 : new Date().toISOString().substr(0, 10),
          section2: [
            {
              Name: {},
              recomStatus: "",
              approvalStatus : ""
            },

            {
              column1: "",
              column2: "",
              column3: "",
            },
            {
              date : new Date().toISOString().substr(0, 10)
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
    },

    updateStatus(status,data){
      if(status == "Recomm" ){
         this.doc.body.section2[0].recomStatus = data;
      }else if(status == "Approval"){
        this.doc.body.section2[0].approvalStatus = data;
      }
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

.border {
  border: 1px solid black;
}

.outline {
  outline: 5px solid black;
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
