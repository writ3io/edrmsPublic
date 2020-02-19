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
                    <h2> <u> {{ doc.body.signatures[0].SurName }} </u></h2>
                    <h4>
                      <u>{{doc.body.signatures[0].Designation}}</u> |
                      <span class="grey--text"><u>{{doc.body.signatures[0].Department}}</u></span>
                    </h4>
                  </v-flex>
                  <v-flex v-if="$route.params.location != 'records'" xs12>
                    <v-flex v-if="canSign(doc.body.signatures[0].EmailAdress, doc.body.signatures[0].signature )" xs12>
                      <p class="text-xs-left">Sign Below</p>
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
                    <v-layout v-if="hasSigned(doc.body.signatures[0].signature)" wrap xs12>
                      <v-flex xs4>
                        <img style="width:100%" :src="doc.body.signatures[0].signature" alt />
                      </v-flex>
                      <v-flex xs4>
                        <h4 class="text-xs-left">{{doc.body.signatures[0].signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
                        <hr />
                        <h4>Date</h4>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex sm12 md12 lg6>
                    <h2> <u> {{ doc.body.signatures[1].SurName }} </u></h2>
                    <h4>
                      <u>{{doc.body.signatures[1].Designation}}</u> |
                      <span class="grey--text"><u>{{doc.body.signatures[1].Department}}</u></span>
                    </h4>
                  </v-flex>

                  <v-flex v-if="$route.params.location != 'records'" xs12>
                    <v-flex v-if="canSign(doc.body.signatures[1].EmailAdress, doc.body.signatures[1].signature )" xs12>
                      <p class="text-xs-left">Sign Below</p>
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
                    <v-layout v-if="hasSigned(doc.body.signatures[1].signature)" wrap xs12>
                      <v-flex xs4>
                        <img style="width:100%" :src="doc.body.signatures[1].signature" alt />
                      </v-flex>
                      <v-flex xs4>
                        <h4 class="text-xs-left">{{doc.body.signatures[1].signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
                        <hr />
                        <h4>Date</h4>
                      </v-flex>
                    </v-layout>
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
                    <h2> <u> {{ doc.body.signatures[2].SurName }} </u></h2>
                    <h4>
                      <u>{{doc.body.signatures[2].Designation}}</u> |
                      <span class="grey--text"><u>{{doc.body.signatures[2].Department}}</u></span>
                    </h4>
                  </v-flex>

                  <v-flex v-if="$route.params.location != 'records'" xs12>
                    <v-flex v-if="canSign(doc.body.signatures[2].EmailAdress, doc.body.signatures[2].signature )" xs12>
                      <p class="text-xs-left">Sign Below</p>
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
                    <v-layout v-if="hasSigned(doc.body.signatures[2].signature)" wrap xs12>
                      <v-flex xs4>
                        <img style="width:100%" :src="doc.body.signatures[2].signature" alt />
                      </v-flex>
                      <v-flex xs4>
                        <h4 class="text-xs-left">{{doc.body.signatures[2].signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
                        <hr />
                        <h4>Date</h4>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  
                
                </v-layout>

                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >PHASE 3: DEMAND MANAGEMENT: APPROVAL FOR FURTHER PROCESSING.</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <h2> <u> {{ doc.body.signatures[3].SurName }} </u></h2>
                    <h4>
                      <u>{{doc.body.signatures[3].Designation}}</u> |
                      <span class="grey--text"><u>{{doc.body.signatures[3].Department}}</u></span>
                    </h4>
                  </v-flex>

                  <v-flex v-if="$route.params.location != 'records'" xs12>
                    <v-flex v-if="canSign(doc.body.signatures[3].EmailAdress, doc.body.signatures[3].signature )" xs12>
                      <p class="text-xs-left">Sign Below</p>
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
                    <v-layout v-if="hasSigned(doc.body.signatures[3].signature)" wrap xs12>
                      <v-flex xs4>
                        <img style="width:100%" :src="doc.body.signatures[3].signature" alt />
                      </v-flex>
                      <v-flex xs4>
                        <h4 class="text-xs-left">{{doc.body.signatures[3].signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
                        <hr />
                        <h4>Date</h4>
                      </v-flex>
                    </v-layout>
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
                    <h2> <u> {{ doc.body.signatures[4].SurName }} </u></h2>
                    <h4>
                      <u>{{doc.body.signatures[4].Designation}}</u> |
                      <span class="grey--text"><u>{{doc.body.signatures[4].Department}}</u></span>
                    </h4>
                  </v-flex>

                  <v-flex v-if="$route.params.location != 'records'" xs12>
                    <v-flex v-if="canSign(doc.body.signatures[4].EmailAdress, doc.body.signatures[4].signature )" xs12>
                      <p class="text-xs-left">Sign Below</p>
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
                    <v-layout v-if="hasSigned(doc.body.signatures[4].signature)" wrap xs12>
                      <v-flex xs4>
                        <img style="width:100%" :src="doc.body.signatures[4].signature" alt />
                      </v-flex>
                      <v-flex xs4>
                        <h4 class="text-xs-left">{{doc.body.signatures[4].signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
                        <hr />
                        <h4>Date</h4>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs12>
                    <h4 class="text-xs-center" >RESPONSIBLE OFFICIAL FOR CLOSING, RECEIVING AND OPENING OF QUOTATIONS</h4>
                  </v-flex>
                  
                  <v-flex sm12 md12 lg6>
                    <h2> <u> {{ doc.body.signatures[5].SurName }} </u></h2>
                    <h4>
                      <u>{{doc.body.signatures[5].Designation}}</u> |
                      <span class="grey--text"><u>{{doc.body.signatures[5].Department}}</u></span>
                    </h4>
                  </v-flex>

                  <v-flex v-if="$route.params.location != 'records'" xs12>
                    <v-flex v-if="canSign(doc.body.signatures[5].EmailAdress, doc.body.signatures[5].signature )" xs12>
                      <p class="text-xs-left">Sign Below</p>
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
                    <v-layout v-if="hasSigned(doc.body.signatures[5].signature)" wrap xs12>
                      <v-flex xs4>
                        <img style="width:100%" :src="doc.body.signatures[5].signature" alt />
                      </v-flex>
                      <v-flex xs4>
                        <h4 class="text-xs-left">{{doc.body.signatures[5].signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
                        <hr />
                        <h4>Date</h4>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  
                
                </v-layout>

                <v-layout xs12 wrap>
                  <v-flex xs12>
                    <h4 class="text-xs-center" >RESPONSIBLE	OFFICIAL</h4>
                  </v-flex>
                  
                  <v-flex xs12 lg6>
                    <img style="width:100%" :src="doc.body.authorSignature" alt />
                  </v-flex>

                    <v-flex xs12 lg3>
                      <v-menu v-model="menu4a" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                        offset-y min-width="290px">
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="doc.body.date4" label="Date" readonly v-on="on">
                          </v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.date4" @input="menu4b = false"></v-date-picker>
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
import Toolbar from "~/components/PreviewToolbar";
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
  name: 'SpecificationForm',
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
  methods: {
    ...signatureHelpers(),
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
    },
    setActio(action){
      this.doc.body.action = action
      this.action = action
    },

    canSign(emailAddress, hasSigned){

      if(emailAddress == store.state.user.EmailAdress && !hasSigned ){
        return true
      }else{
        return false
      }
    },

    hasSigned(signature){

      if(signature){
        return true
      }else{
        return false
      }
    }
    
  },

  async created() {
    console.log(this.ref, this.$route.params.id);
    
    await store.dispatch("getDocById", this.$route.params.id);
    console.log("EEEEEaaaaaaaaaaaaaaaaaaaaaaaaaE",store.state.user );
    //this.requestingOfficer.Surname = JSON.stringify(store.state.doc.body.requestingOfficer).SurName;
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
