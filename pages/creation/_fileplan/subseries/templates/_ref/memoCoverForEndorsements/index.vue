<template>
<div id="memoCoverForEndorsements">
<v-dialog v-model="addSignDialog" persistent max-width="680px">
      <v-card>
        <v-card-title>
          <span class="headline">Forward To:</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap justify-space-between>
              <v-flex xs12 sm7>
                <v-combobox
                  v-model="signatory"
                  :items="users"
                  label="Choose Signatory"
                  chips
                  return-object
                  item-text="SurName"
                  item-value="EmailAdress"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item.SurName }}</v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  :items="actions"
                  v-model="signatory.action"
                  item-text="text"
                  return-object
                  label="Action"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="addSignDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat :loading="loading" @click="addSignatory">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
              


 <br />
              <v-flex xs12>
                <h3
                  class="text-xs-center">
                MEMO COVER FOR ENDORSEMENT OF CESSION AGREEMENTS
                </h3>
               
              </v-flex>
              <br />
             
               
              

              

              <v-card-text class="pt-0 mt-0">


               
            
                

          <br/>
              
               
                <!-- 
              ================================================================
              F. DISTRICT ROLES
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>
                
               
               

                
                <v-data-table
                      :headers="headers40"
                      :items="doc.body.phase48"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    
                    </v-data-table>
                    <v-data-table
                      :headers="headers41"
                      :items="doc.body.phase50"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    

                    
                    </v-data-table>

                     <v-data-table
                      :headers="headers42"
                      :items="doc.body.phase50"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      
                        <td > {{props.item.description}}</td>
                      
                     
                     
                      <td>



                        <div v-if="props.index == 0">
                          <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date2" label="" readonly v-on="on">
                              </v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                          </v-menu>
                        </div>
                        <div v-if="props.index == 1">
                          <v-layout wrap>
                          <v-flex xs3>
                        {{props.item.description1}}
                        </v-flex>
                        <v-flex xs9>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </v-flex>
                        </v-layout>       
                        </div>
                        <div v-if="props.index >= 2">
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              
                        </div>
                          

                      </td>

                      <td>
                        <div v-if="props.index == 0">
                          <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date2" label="" readonly v-on="on">
                              </v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                          </v-menu>
                        </div>
                        <div v-if="props.index == 1">
                          <v-layout wrap>
                          <v-flex xs3>
                        {{props.item.description2}}
                        </v-flex>
                        <v-flex xs9>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </v-flex>
                        </v-layout>       
                        </div>
                        <div v-if="props.index >= 2">
                          
                              
                        </div>

                      </td>
                        

                       

                      

                      
                    </template>

                    
                    </v-data-table>
                     <v-data-table
                      :headers="headers43"
                      :items="doc.body.phase50"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                   
                    
                    </v-data-table>

                    <v-flex xs12>
              <v-switch v-model="iSign" label="Add People To Sign"></v-switch>
            </v-flex>

            <v-flex v-show="iSign" xs12>
              <h3>Who to sign:</h3>
              <v-btn color="white" :loading="loading" round @click="addSignDialog = true">
                <v-icon small color="warning" left>add</v-icon>Add Signatory
              </v-btn>
              <v-btn color="warning" :loading="loading" round @click="clearSignList">
                <v-icon small color="white" left>delete</v-icon>Clear List
              </v-btn>
            </v-flex>

            <v-flex v-for="(sign, index) in doc.body.signatures" :key="index" xs12>
              <v-card-text >
                <h2 class="font-weight-medium">{{sign.action.text}}</h2>
                <hr />
                <h2 class="font-weight-regular">{{sign.SurName}}</h2>
                <h4>
                  {{sign.Designation}} |
                  <span class="grey--text">{{sign.Department}}</span>
                </h4>
              </v-card-text>
            </v-flex>


                   
                     <br/>

                     NB: Please attach copies of the following documents:

                     <ol type="a">
                       <li>CSD Registration Reports of the contracted supplier and Cessionary;</li>
                       <li>Appointment Letter, SLA, Contract or Purchase Order; and</li>
                       <li>A copy of the duly signed Cession Agreement (Original).</li>
                     </ol>

                     <br/>

                     <hr/>





                    


                   
                      

                      
                   
             
                   

                    </v-flex>
                </v-layout>


                <br />

 <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="TO: The Director: " />
                    </v-flex>





                    <h3 class="text-xs-center">RE:	ACKNOWLEDGEMENT OF A CESSION AGREEMENT IN RESPECT OF LDE/B 19/2017/18: SUPPLY & DELIVERY OF FOODSTUFF: PERIOD: 01/04/2018 – 31/03/2020</h3><br/>

                    <ol>
                      <li>Reference is made to your contract for the above-mentioned services and your subsequent application for cession of payments.</li>
                      <li>Kindly be informed that an approval has been granted for the acknowledgement of your cession agreement for the above-mentioned contract.</li>
                      <li>Your payments for the above-mentioned services will be made into the account nominated by cessionary as per your Cession Agreement with immediate effect.</li>
                      <li>Lastly, please take note that the above-mentioned approval is subject to the same rates, terms and conditions as contracted for the above-mentioned services. Furthermore, your company is still obliged to perform accordingly since no payments will be made to the cessionary should there be non-compliance. </li>
                      <li>Hoping that you will find the above in order.</li>
                    </ol>

                    <br/>

                    <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Sign Here : </p>
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
                    <v-text-field v-model="doc.body.authorSignatureDate" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.authorSignatureDate" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>

            </v-layout>

          </v-flex>

                    </v-layout>

                




              </v-card-text>







            </v-card>
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
import Editor from "@tinymce/tinymce-vue";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "schoolGoverningBodyFunctionlity",
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
      menu5a: false,
      menu5b: false,
            

        headers40: [
       
        {
          text: "<strong>Contract No.</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "LDE/B 19/2017/18",
          align: "left",
          sortable: false,
          value: "80%"
        }],
        

        headers41: [
       
        {
          text: "<strong>Description of<br/> Goods/Service</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "Supply & delivery of foodstuff",
          align: "left",
          sortable: false,
          value: "80%"
        }],
        

        headers43: [
       
        {
          text: "<strong>Summary of the<br/> application</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "The Accounting Officer is requested to acknowledge the attached cession<br/> and grant an approval to make payments in favour of the cessionary from the approval date.<br/> The approval should be subject to the same rates, terms<br/> and conditions as per the Contract and Service Level Agreement<br/> signed by yourselves and Limpopo Department of Education.  The contracted<br/> Supplier is still obliged to perform as contracted since no payments will be made<br/> to the cessionary should there be non-compliance. ",
          align: "left",
          sortable: false,
          value: "80%"
        }],
        

       

       
      series: {},
      saveDialog: false,
      attachments: [],
      isFormValid: true,
      status: "",
      iSign: false,
      addSignDialog: false,
      signatory: {},
      doc: {
        ref: this.$route.params.ref,
        template: "memoCoverForEndorsements",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),

        body: {
          address: "",
          date: new Date().toISOString().substr(0, 10),
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
          e1:null,
          boolean:"",

          phase47: [
            {
              description:"School Name",
              comments:""
            }],

          
            phase48: [
            {
              description:"School Name",
              comments:""
            }],


            phase50: [
            {
              description:"Period",
              comments:""
            },
            {
              description:"End-User(Cost Centre)",
              description1:"Special Projects",
              description2:"Contract Amount",
              comments:""
            },
            {
              description:"Contracted Supplier",
              comments:""
            },
            {
              description:"CSD No.",
              comments:""
            },
            {
              description:"Cessionary",
              comments:""
            },
            {
              description:"CSD No.",
              comments:""
            }],

           

 docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: [],
          
        }
      },

      actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
      ],


      rows:[
            {index: '1', actual1: ""},
            {index: '2', actual1: ""},
            {index: '3', actual1: ""},
            {index: '4', actual1: ""},
            {index: '5', actual1: ""},
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
    time() {
      return Date.now();
    },
    users() {
      return store.state.users;
    },
    total: function(){
    console.log(this.rows);
    return this.rows.reduce(function(total, item){

      return total + item.actual1; 
    },0);
    }
  },
  methods: {

   // sign
    clearSignList() {
      this.doc.body.signatures = [];
      console.log(this.doc.body.signatures);
    },

    addSignatory() {
      if (!this.signatory.action) {
        this.addSignDialog = false;
        return;
      }
      this.signatory.priority = this.signatory.action.signLevel;
      this.doc.body.signatures.push(this.signatory);

      //sort
      this.doc.body.signatures.sort(function(a, b) {
        return a.priority - b.priority;
      });

      this.addSignDialog = false;
      this.signatory = {};
      console.log(this.doc);
    },

    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    saveSignature() {},
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log("=== End ===");
      this.doc.body.authorSignature = data;
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
.sub-items {
  padding: 5%;
  margin: 0 0 45px 50px;
}



.card-border {
  border: 2px solid #dddddd;
  padding: 10px 25px;
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
