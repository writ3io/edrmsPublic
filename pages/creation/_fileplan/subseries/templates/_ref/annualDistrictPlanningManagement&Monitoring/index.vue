<template>
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
              <v-flex xs12>
                <h3
                  class="text-xs-center">
                ANNUAL DISTRICT PLANNING, MANAGEMENT AND MONITORING TOOL 
                - TO BE FILLED IN BY MANAGERS RESPONSIBLE FOR DISTRICT 
                OPERATIONS - TERM ONE</h3>
               
              </v-flex>
              <br />
              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border class="card-border">
                  <v-flex>
                    <h4>PURPOSE</h4>
                    <p>
                      The purpose of this tool is to monitor and evaluate district performance and district support, 
                      and guide planning, and management of districts. It is envisaged that this tool will be used on 
                      an annual basis and used for reporting purposes at the end of the term. The information required 
                      in this tool will be collected from a District Director by a manager responsible for district functions. 
                      <u>Green indicates that all is well.</u>
                    </p>
                  </v-flex>
                </v-layout>
                <br />
                <v-flex justify-end>
                  <hr style="color:grey" />
                </v-flex>
              </v-card-text>

              

              <v-card-text class="pt-0 mt-0">
                <!-- 
              ================================================================
              A. BACKGROUND INFORMATION
              Pre-populated information should be verified.
              ================================================================
                -->

                

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                                <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        <span>{{ props.header.text }}</span>
                    </v-tooltip>
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                      <td class="">
                        <v-layout wrap >
                                <v-flex xs1>
                                  <strong>{{ props.index + 1 }}.</strong>
                                </v-flex>
                                 <v-flex >
                                   <strong>{{props.item.description}}</strong>
                                 </v-flex>
                                </v-layout>

                                <div v-if="props.index == 5">
                              <div v-for = "n in 4" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   {{props.item.physicalAddress[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                        
                      </td>
                      <td class="px-0 py-0">
                        <div v-if="props.index == 5">
                              <div v-for = "n in 4" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex >
                                   <v-text-field v-model="props.item.comments1[n]" single-line solo flat placeholder></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-else>
                        <v-text-field v-model="props.item.comments" single-line solo flat placeholder></v-text-field>
                          </div>
                      </td>

                      
                      
                    </template>

                    <template v-slot:no-data>
     
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
    
                    </template>
                    </v-data-table>
                    
                    <v-data-table
                      :headers="headers1"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                                <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        <span>{{ props.header.text }}</span>
                    </v-tooltip>
                    </template>

                    <template v-slot:items="" v-slot:no-data>
                     
                     
    
                    </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers2"
                      :items="doc.body.phase2"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        <span>{{ props.header.text }}</span>
                    </v-tooltip>
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>11.{{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.name" single-line solo flat placeholder></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.division"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.telNumber"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.callNumber"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.email"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <br />
                 
                <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="District Director: " />
                    </v-flex>

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label="Monitor: " />
                    </v-flex>
                </v-layout>

                

                <br />

                <!-- 
              ================================================================
              B. INFRASTRUCTURE & RESOURCES
              The following questions relate to infrastructure and resources in the district. Please select the appropriate response by making an (X) 
              in the correct box OR by completing the requested information.
 
              ================================================================
                -->

                

                <v-layout xs12 wrap border>
                  <v-flex>

                
                <v-data-table
                      :headers="headers3"
                      :items="doc.body.phase3"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>{{ props.index + 12 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        {{props.item.description}}
                      </td>

                      <td class="px-0 py-0">
                        <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                      </td>
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>
                    <v-data-table
                      :headers="headers4"
                      :items="doc.body.phase4"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                        <template >
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>{{ props.index + 13 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="px-0 py-0">
                        
                              <v-row justify="space-around">
      <v-checkbox v-model="satelliteOffices" class="mx-2" label="Satellite offices"></v-checkbox>
      <v-checkbox v-model="circuitOffices" class="mx-2" label="Circuit offices"></v-checkbox>
      <v-checkbox v-model="provincialoffices" class="mx-2" label="Provincial offices"></v-checkbox>
      <v-checkbox v-model="municipalOffices" class="mx-2" label="Municipal offices"></v-checkbox>
       <v-text-field
                          v-model="props.item.callNumber"
                          single-line
                          solo
                          flat
                          placeholder="Other: Please Specify."
                        ></v-text-field>
                              </v-row>
                          
                          
                      </td>
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers5"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                                <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    </template>

                    <template v-slot:items="" v-slot:no-data>
                     
                     
    
                    </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers6"
                      :items="doc.body.phase5"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        <span>{{ props.header.text }}</span>
                    </v-tooltip>
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>14.{{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td>
                        <strong>{{props.item.resources}}</strong>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.numberRequired"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.numberAvailable"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.conditionResource"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                     <v-data-table
                      :headers="headers7"
                      :items="doc.body.phase6"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        <span>{{ props.header.text }}</span>
                    </v-tooltip>
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>15.{{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comments"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow10(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow10" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>

                    <br/>
                    <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="District Director: " />
                    </v-flex>

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label="Monitor: " />
                    </v-flex>
                </v-layout>

                

                <br />



                  </v-flex>
                </v-layout>

                <br />

                 <!-- 
              ================================================================
              C. STAFF ESTABLISHMENT
              The following questions relate to personnel in the district. 
              Please select the appropriate response by making an (X) 
              in the correct box OR completing the requested information.
 
 
              ================================================================
                -->

                 <v-layout xs12 wrap border>
                  <v-flex>

                 <v-data-table
                      :headers="headers8"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                                <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    </template>

                    <template v-slot:items="" v-slot:no-data>
                     
                     
    
                    </template>
                    </v-data-table>

                

               

                
                <v-data-table
                      :headers="headers9"
                      :items="doc.body.phase3"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>{{ props.index + 16 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        {{props.item.description}}
                      </td>

                      <td class="px-0 py-0">
                        <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                      </td>
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                      </v-flex>
                </v-layout>

                <br />


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
  name: "annualDistrictPlanningManagement&Monitoring",
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

      headers: [
        {
          text: "<strong>A. BACKGROUND INFORMATION</strong> <br /> <i>Pre-populated information should be verified.</i>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        }
      ],

      headers1: [
        {
          text: "<strong> Please indicate the name and contact details of CES/Deputy Directors in your district office </strong>",
          align: "center",
          sortable: false,
          value: "",
        }
      ],
      headers2: [
        {
          text: "<strong>11.</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Name</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Division</strong> <br /> <strong>(e.g. Curriculum, etc.)</strong>",
          align: "center",
          sortable: false,
          value: "",
        },
        {
          text: "<strong>Telephone</strong>",
          align: "center",
          sortable: false,
          value: "",
        },
        {
          text: "<strong>Cell Number</strong>",
          align: "center",
          sortable: false,
          value: "",
        },
        {
          text: "<strong>E-mail</strong>",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers3: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>B. INFRASTRUCTURE & RESOURCES</strong> <br /> <i>The following questions relate to infrastructure and resources in the district.<br /> Please select the appropriate response by making an (X) <br /> in the correct box OR by completing the requested information.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers4: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Where are the other officials housed?</strong> <i>Please select the appropriate option(s).</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
       headers5: [
        {
          text: "<strong> What infrastructure resources are available, and in which condition?</strong>",
          align: "center",
          sortable: false,
          value: "",
        }
      ],
      headers6: [
        {
          text: "<strong>14.</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Resources</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number required</strong>",
          align: "center",
          sortable: false,
          value: "",
        },
        {
          text: "<strong>Number available</strong>",
          align: "center",
          sortable: false,
          value: "",
        },
        {
          text: "<strong>Condition of resource</strong>",
          align: "center",
          sortable: false,
          value: "",
        }
      ],

      headers7: [
        {
          text: "<strong>15.</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>If the district receives additional allocation, what are the priority issues that would be addressed?</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Action</strong>",
          align: "center",
          sortable: false,
          value: "",
        }
      ],

      headers8: [
        {
          text: "<strong>C. STAFF ESTABLISHMENT</strong> <br /> <i>The following questions relate to personnel in the district. Please select the appropriate response by making an (X) in the correct box OR<br /> completing the requested information.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      headers9: [
        {
          text: "<strong>16.</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Please indicate the number of CS posts that are filled and unfilled.</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "-",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "-",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "-",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "-",
          align: "center",
          sortable: false,
          value: ""
        }],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "annualDistrictPlanningManagement&Monitoring",
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

          phase1: [

            {
              description: "Province",
              comments: ""
            },
            {
              description: "District Name",
              comments: ""
            },
            {
              description: "GPS Coordinates",
              comments: ""
            },
            {
              description: "District Director’s Name",
              comments: ""
            },
            {
              description: "Postal Address (Please leave blank if Not Applicable)",
              comments: ""
            },
            {
              description: "Physical Address:",
              physicalAddress:[ "","Building","Street Address","own or City","Postal Code"],
              comments: "",
              comments1:[ "","","",""]
            },
            {
              description: "Telephone Number: 1",
              comments: ""
            },
            {
              description: "Fax Number",
              comments: ""
            },
            {
              description: "Director Cell Number",
              comments: ""
            },
            {
              description: "E-mail Address",
              comments: ""
            }
          ],

          phase2: [
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            },
            {
              name:"",
              division:"",
              telNumber:"",
              callNumber:"",
              email:""
            }
          ],

          phase3: [
            {
              description:"Are the district officials accommodated in one building?",
              boolean:"",
            }],
            phase4: [
            {
              comments1:[ "","","",""]
            }],

            phase5: [
            {
              resources:"Office building",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Available offices/ workstations",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Desks/Tables",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Chairs",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Cupboards/Cabinets",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Telephones",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Cellular phones",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Fax machines",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Desktop computers",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Laptops",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Photocopiers",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Internet connectivity (for desktop computers)",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Email service",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"3G cards",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"GG cars",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            },
            {
              resources:"Subsidised cars",
              numberRequired:"",
              numberAvailable:"",
              conditionResource:""
            }
          ],

          phase6: [
            {
              comments:""
            },
            {
              comments:""
            }],


            

          

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
     setSigners1(users) {
      this.doc.body.signatures.push(users);
    },
     setSigners2(users) {
      this.doc.body.signatures.push(users);
    },
    onEnd() {
      this.setAuthorSignature();
    },
    addRow() {
      this.doc.body.phase9.push({});
    },
    removeRow(index) {
      this.doc.body.phase9.splice(index, 1);
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
  padding: 5px 10px;
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
