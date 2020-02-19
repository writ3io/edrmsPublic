<template>
<div id="weeklyProgramme">
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
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">HANDING AND TAKING-OVER CERTIFICATE</h3>

            <v-card>
              <br/>
              

                
              <v-card-text>
              <v-flex xs12>
                  <v-text-field v-model="doc.body.officialHandingOver" label="OFFICIAL HANDING OVER: "></v-text-field>
                  </v-flex>
              
              <v-flex xs12>
                  <v-text-field v-model="doc.body.locationOfAssets" label="LOCATION OF ASSETS: "></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                  <v-text-field v-model="doc.body.assetDescription" label="ASSET DESCRIPTION: "></v-text-field>
                  </v-flex>
              </v-card-text> 

              <v-card-title>
                <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.assetNumber" label="ASSET NUMBER: "></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.serialNumber" label="SERIAL NUMBER: "></v-text-field>
                  </v-flex>

                  
               <v-flex xs12>
                  <v-text-field v-model="doc.body.official" label="OFFICIAL TAKING OVER: "></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                  <v-text-field v-model="doc.body.locationOfAssets1" label="NEW LOCATION OF ASSET: "></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                  <v-text-field v-model="doc.body.reasonForHandOver" label="REASON FOR HAND OVER: "></v-text-field>
                  </v-flex>


                  
                  
                  <p><strong> terms of the provisions of s42 of the PFMA(ACT 1,1999) we hereby certify that we have completed 
                  the verification of all Government Property on hand in accordance with balances of the ledger, or other records</strong></p>
                      <p><strong>We further certify that the list of discrepancies includes all items 
                          which have not hitherto been submitted for authority to adjust.</strong></p>

                  <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu1a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.date1"
                        label="DATE OF HANDING / TAKING OVER: "
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                  </v-menu>
                </v-flex>


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


              </v-card-title>

              


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
  name: "HandingTakingOverCertificate",
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

      headers: [
        {
          text: "ITEM No.",
          align: "left",
          sortable: false,
          value: "",
        //   width: "10%"
        },
        {
          text: "ITEM CHECKED",
          value: ""
        },
        {
          text: "YES / NO",
          value: "",
        //   width: "10%"
        },
        {
          text: "COMMENTS",
          value: ""
        },
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],

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
        template: "HandingTakingOverCertificate",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          officialHandingOver:"",
          locationOfAssets:"",
          assetDescription:"",
          assetNumber:"",
          serialNumber:"",
          official:"",
          locationOfAssets1:"",
          reasonForHandOver:"",
          enderUser: {},
          initialsSurname:"",
          phase1: [
            {
              description: "Is there a register to record in/ outgoing classified information?",
              comment: ""
            },
            {
              description: "Is classified of documents done?",
              comment: ""
            },
            {
              description: "Is Personnel vetted?",
              comment: ""
            },
            {
              description: "Did the Officer complete oath of secrecy?",
              comment: ""
            },
            {
              description: "Are classified documents stored in document safe/ Reinforced steel cabinets?",
              comment: ""
            },
            {
              description: "Does the office utilise security bags?",
              comment: ""
            },
            {
              description: "Does the office utilise security envelopes?",
              comment: ""
            },
            {
              description: "Did the attend Security Awareness Workshop?",
              comment: ""
            },
            {
              description: "Does the office reproduce/ Photocopy classified documents?",
              comment: ""
            },
            {
              description: "Is there a photocopier register in place?",
              comment: ""
            },
            {
              description: "Does the office transmit classified information through fax/e-mail/ telephone?",
              comment: ""
            },
            {
              description: "Is there a shredding machine to destruct/ destroy classified information?",
              comment: ""
            },
            {
              description: "Is there a register for shredding machine?",
              comment: ""
            }
            
          ],

          phase2: [
            {
              description:
                "N.B Please confirm supplier compliance e.g Tax matters, Locality, etc. before selection.",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Nominate at least eight (8) service providers from the CSD and list them below.",
              boolean: "",
              comment: "",
              serviceProviders: []
            },
            {
              description:
                "In case of one service provider being selected, is the Emergency/Urgency justification form attached and the approval for deviation been granted by the Accounting Officer or a delegated official and reasons thereof provided? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "In case of sole supplier, Sole Supplier Justification form must be attached and be approved by the Accounting Officer.",
              boolean: "",
              comment: ""
            },
            {
              description:
                "If the above is verified, register the requisition and submit to acquisition management.",
              boolean: "",
              comment: ""
            }
          ],

          phase4: [
            {
              description:
                "Invite 5 quotations, preferably between 3 and 7 days depending on the type and urgency of service/commodity required.  Attach proof of invitation.",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Closing, receiving and opening of quotations/ box , registration of received quotations and submission to secretariat for evaluation committee. Record Quotations received and amounts below",
              boolean: "",
              comment: "",
              qoutations: [
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                },
                {
                  serviceProvider: "",
                  amount: ""
                }
              ]
            },
            {
              description:
                "During evaluation ensure that the following are adhered to:",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Register and submit the requisition to Purchase Unit for order generation",
              boolean: "",
              comment: ""
            }
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          signatures: [],
          signatures2: []
        }
      },

      actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
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
</style>
