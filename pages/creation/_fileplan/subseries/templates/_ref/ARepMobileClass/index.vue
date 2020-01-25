<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      
      <v-flex xs9>
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h2 class="text-xs-center"> AUDIT REPORT ON MOBILE CLASSROOMS</h2>

            <v-card>
                
              <v-card-title>
                 
                <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.initialsSurname" label="DISTRICT: "></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.initialsSurname" label="CIRCUIT: "></v-text-field>
                  </v-flex>

              </v-card-title>

              <br/>
                <h3 class="text-xs-center">AUDIT OF UNSERVICEABLE/DAMAGED MOBILE CLASSROOMS</h3>

              <v-card-text class="pt-0 mt-0">

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers"
                      :items="doc.body.tr"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data="">
                        <td class><v-text-field
                            v-model="props.item.assetNumber"
                            single-line
                            solo
                            flat
                            placeholder="Asset Number"
                          ></v-text-field></td>
                        <td class>
                          <v-text-field
                            v-model="props.item.nameOfSchool"
                            single-line
                            solo
                            flat
                            placeholder="Name Of School"
                          ></v-text-field>
                        </td>
                        <td class>
                          
                           <v-text-field
                            v-model="props.item.physicalAddress"
                            single-line
                            solo
                            flat
                            placeholder="Physical Address"
                          ></v-text-field>
                          
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.conditionDamagedMobile"
                            single-line
                            solo
                            flat
                            placeholder="Condition Of Damaged Mobile "
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.commentAssetPractitioner"
                            single-line
                            solo
                            flat
                            placeholder="Comments By Asset Practitioner"
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.commentPrincipal"
                            single-line
                            solo
                            flat
                            placeholder="Comment By The Principal"
                          ></v-text-field>
                       
                        <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
                </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                      <template v-slot:footer>
                <td colspan="100%" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-text>
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
              <v-card-text class="black--text ma-0 font-weight-bold text-sm-left">
                <h1>{{sign.action.text}}</h1>
                <hr />
                <h2>{{sign.SurName}}</h2>
                <h4>
                  {{sign.Designation}} |
                  <span class="grey--text">{{sign.Department}}</span>
                </h4>
              </v-card-text>
            </v-flex>
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
import Editor from "@tinymce/tinymce-vue";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "Checklist",
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
          text: "ASSET NUMBER",
          align: "left",
          value: "",
        //   width: "10%"
        },
        {
          text: "NAME OF SCHOOL",
          value: ""
        },
        {
          text: "PHYSICAL ADDRESS",
          value: "",
        //   width: "10%"
        },
        {
          text: "STATUS/CONDITION OF DAMAGED MOBILE",
          value: ""
        },
        {
          text: "COMMENTS BY ASSET PRACTITIONER",
          value: "",
        //   width: "10%"
        },
        {
          text: "COMMENTS BY THE PRINCIPAL",
          value: "",
        //   width: "10%"
        },
        {
          text: "ACTION",
          value: "scarbs"
        //   width: "10%"
        }
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "checklist",
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
          enderUser: {},
          initialsSurname:"",

          tr: [
            {
              assetNumber: "",
              nameOfSchool: "",
              physicalAddress: "",
              conditionDamagedMobile: "",
              commentAssetPractitioner: "",
              commentPrincipal:""
            },
            {
              assetNo:"",
              description: "",
              serialNo: "",
              model: "",
              condition: "",
              serialNo: "",
              commentPrincipal:""
            },
            
            
            
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
