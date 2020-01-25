<template>
    <v-container grid-list-md>
        <v-layout justify-space-between>
            <v-flex xs3>
                <v-layout>
                    <Toolbar :data="doc" />
                </v-layout>
            </v-flex>
    
            <v-flex xs9>
                <v-layout wrap>
                    <v-flex xs12>
                        <h3 class="text-xs-center">SECURITY MANAGEMENTC HECKLIST FOR SITE VISIT</h3>
    
                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field v-model="doc.rfq" label="Site"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field v-model="doc.body.rfq" label="Sec Company :"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-menu transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                            <v-text-field v-model="doc.body.date" label="Date: " readonly v-on="on"></v-text-field>
</template>
              <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
            </v-menu>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field v-model="doc.body.email" label="Number of Guards: "></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
    
                   

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
                         {{ props.index + 1 }}
                        </td>
                        <td class="">
                          {{ props.item.description }}
                        </td>
                        
                        <td class=" px-0 py-0">
                         <v-text-field v-model="props.item.comment" single-line solo flat placeholder=""></v-text-field>
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

                  <v-flex xs12>
                        <v-text-field v-model="doc.rfq" label="Comments:"></v-text-field>
                    </v-flex>

                   <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Shift Supervisor : " />
                  </v-flex>
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Official: " />
                  </v-flex>
                <br/>
                  

                  <v-flex xs12>
                        <h3 class="text-xs-center">SECURITY MANAGEMEN CHECK LIST FOR AUDIT</h3>
    
                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field v-model="doc.rfq" label="INSTITUTION/ OFFICE: "></v-text-field>
                            </v-flex>
                           
                            <v-flex xs6>
                                <v-menu transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                            <v-text-field v-model="doc.body.date" label="DATE: " readonly v-on="on"></v-text-field>
</template>
              <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
            </v-menu>
                            </v-flex>
                           
                        </v-layout>
                    </v-flex>
    
                   

         <v-flex >
                    <v-data-table :headers="headers1" :items="doc.body.phase2" hide-actions class="elevation-1">

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
                         {{ props.index + 1 }}
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

                      <br>
                      
                          <v-flex xs12>
                                <v-text-field v-model="doc.rfq" label="Comments:"></v-text-field>
                            </v-flex>
                        <v-layout>  
                       <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="END User: " />
                  </v-flex>
                  <v-flex sm12 md12 lg6>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="RECEIVING OFFICER: " />
                  </v-flex>
                  </v-layout>
                
                  </v-flex>
            </v-layout>
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
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
    name: "ClearanceLetter",
    components: {
        editor: Editor,
        Toolbar,
        SelectUsers
    },
    data() {
        return {

             headers: [{
                    text: "ITEM NO.",
                    align: "center",
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ITEM CHECKED",
                    align: "center",
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "CONDITION",
                    align: "center",
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "",
                    align: "center",
                    value: "",
                    sortable: false,
                    //   width: "10%"
                }
            ],
            headers1: [{
                    text: "ITEM NO.",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "ITEM CHECKED",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "YES/NO",
                    align: "center",
                    sortable: false,
                    value: ""
                    //   width: "10%"
                },
                {
                    text: "COMMENTS",
                    align: "center",
                    value: "",
                    sortable: false,
                    //   width: "10%"
                }
            ],
            dialog: false,

            iSign: false,
            doc: {
                ref: this.$route.params.ref,
                template: "ClearanceLetter",
                author: store.state.user,
                formValid: true,
                docRef: Math.round(+new Date() / 1000),
                body: {
                    address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
                    date: new Date().toISOString().substr(0, 10),
                    name: "",
                    branch: "",
                    capacity: "",
                    item: "",
                    rfq: "",
                    enquiries: "",
                    tel: "",
                    email: "",

                    docRef: Math.round(+new Date() / 1000),
                    attachments: [],
                    authorSignature: "",
                    authorSignatureDate: new Date().toISOString().substr(0, 10),
                    signatures: [],


                    phase1: [{
                            description: "Attendance Register",
                            comment: ""
                        },
                        {
                            description: "No of Guards on duty.  Day ",
                            comment: ""
                        },
                        {
                            description: "No of Guards on duty.  Night",
                            comment: "",
                            fullname: "FULL_FIRST_NAMES"
                        },
                        {
                            description: "No of Guards Armed",
                            comment: ""
                        },
                        {
                            description: "Uniform",
                            comment: ""
                        },
                        {
                            description: "Firearm License, Permit and Competency",
                            comment: ""
                        },
                        {
                            description: "PSIRA Registration cards.",
                            comment: ""
                        },
                        {
                            description: "ID Cards",
                            comment: ""
                        },
                        {
                            description: "Conditions of guards.  Sobriety",
                            comment: ""
                        },
                        {
                            description: "Communication Equipment Operational",
                            comment: ""
                        },
                        {
                            description: "Security Breaches reported",
                            comment: ""
                        },
                        {
                            description: "Security Breaches observed",
                            comment: ""
                        },
                        {
                            description: "Completion of OB.",
                            comment: ""
                        },
                        {
                            description: "Access Control Register",
                            comment: ""
                        },
                        {
                            description: "After Hour register",
                            comment: ""
                        },
                        {
                            description: "Visits by Site Supervisors",
                            comment: ""
                        },
                        {
                            description: "No of Entrance and Exit points",
                            comment: ""
                        },
                        {
                            description: "Observation of Searches incoming & Exit",
                            comment: ""
                        },
                        {
                            description: "Perimeter Fence Inspection ",
                            comment: ""
                        },
                        {
                            description: "Perimeter Illumination",
                            comment: ""
                        },
                        {
                            description: "Accessories, Baton, Torch, Communication, Handcuff",
                            comment: ""
                        },
                        {
                            description: "Emergency No:  Ambulances, Fire brigade and SAPS",
                            comment: ""
                        },
                        {
                            description: "Asset Register",
                            comment: ""
                        },
                        {
                            description: "Guard House with Furniture",
                            comment: ""
                        }
                    ],

                    phase2: [{
                            description: "Is there a register to record in/ outgoing classified information?",
                            comment: ""
                        },
                        {
                            description: "Is classified of documents done?",
                            comment: ""
                        },
                        {
                            description: "Is Personnel vetted?",
                            comment: "",
                            fullname: "FULL_FIRST_NAMES"
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
            this.doc.body.signatures = users;
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

