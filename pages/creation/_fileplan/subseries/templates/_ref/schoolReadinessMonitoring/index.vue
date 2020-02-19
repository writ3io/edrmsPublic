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
              


              <!--
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              ++  DISTRICT PLANNING, MANAGEMENT AND MONITORING TOOL TO BE FILLED IN BY MANAGERS      ++
              ++  RESPONSIBLE FOR DISTRICT OPERATIONS FOR TERMS 2-4                                  ++ 
              ++                                                                                     ++
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
              -->



 <br />
              <v-flex xs12>
                <h3
                  class="text-xs-center red--text">
                Confidential
                </h3>
                <h3
                  class="text-xs-center">
                 SCHOOL READINESS MONITORING TOOL
                </h3>
               
              </v-flex>
              <br />
             
               
              

              

              <v-card-text class="pt-0 mt-0">


               
            
                
                

               
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

                    <template v-slot:items="props" v-slot:no-data>
                      
                        
                        <td >
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </td>
                      
                     
                     
                      <td >
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </td>

                              <td >
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </td>
                              <td >
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </td>

                              <td >
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </td>

                      
                      
                     

                      

                      
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

                    <template v-slot:items="props" v-slot:no-data>
                      
                        
                      
                     
                     
                      <td >
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </td>
                         <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >

                         <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.red"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.red"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="red-bg">
                              <v-text-field
                                v-model="props.item.red"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                           
                           

                            
                          </template>
                        </v-data-table>

                        </td>

                       <td>
                        
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 

                      </td>
                        

                       

                      

                      
                    </template>

                    
                    </v-data-table>
                     <v-data-table
                      :headers="headers42"
                      :items="doc.body.phase51"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      
                        <td >{{props.item.description}}</td>
                      
                     
                     
                      <td>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              
                      </td>

                      <td >{{props.item.description1}}</td>


                      <td>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              
                      </td>

                      <td >{{props.item.description2}}</td>

                      <td>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              
                      </td>

                        

                       

                      

                      
                    </template>

                    
                    </v-data-table>


                     <v-data-table
                      :headers="headers43"
                      :items="doc.body.phase52"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                      <td >{{props.item.description}}</td>


                      <td >
                          <div v-if="props.index == 0">
                              <div v-for = "n in 5" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 1">
                              <div v-for = "n in 13" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 2">
                              <div v-for = "n in 2" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-if="props.index == 3">
                              <div v-for = "n in 5" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-if="props.index == 4">
                              <div v-for = "n in 6" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-if="props.index == 5">
                              <div v-for = "n in 7" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 6">
                              <div v-for = "n in 3" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 7">
                              <div v-for = "n in 2" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="requirements">
                                   {{props.item.requirements[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                      </td>

                      <td>
                         <div v-if="props.index == 0 ">
                              <div v-for = "n in 5" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 1 ">
                              <div v-for = "n in 13" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-if="props.index == 2 ">
                              <div v-for = "n in 2" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 3 ">
                              <div v-for = "n in 5" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 4 ">
                              <div v-for = "n in 6" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 5 ">
                              <div v-for = "n in 7" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 6 ">
                              <div v-for = "n in 3" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 7 ">
                              <div v-for = "n in 2" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <v-radio-group v-model="props.item.boolean[n]" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group> 
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                        
                          
  
                      </td>


                       <td>
                         <div v-if="props.index == 0">
                              <div v-for = "n in 5" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 1">
                              <div v-for = "n in 13" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 2">
                              <div v-for = "n in 2" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 3">
                              <div v-for = "n in 5" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 4">
                              <div v-for = "n in 6" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 5">
                              <div v-for = "n in 7" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>


                          <div v-if="props.index == 6">
                              <div v-for = "n in 3" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>

                          <div v-if="props.index == 7">
                              <div v-for = "n in 2" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                    <v-text-field
                                v-model="props.item.comments[n]"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                        
                          
  
                      </td>
                      
                        
                    </template>

                    
                    </v-data-table>

                  




                    


                   
                      

                      
                   
             
                   

                    </v-flex>
                </v-layout>


                <br />


                <v-text-field v-model="doc.body.rfq" label="Overall Observation"></v-text-field>


               


                <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="Provincial/ District/ Circuit: " />
                    </v-flex>

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label="School Principal: " />
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
import Editor from "@tinymce/tinymce-vue";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "schoolReadinessMonitoring",
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
          text: "District",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "Circuit",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "Name of School",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "EMIS No.",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "Quintile",
          align: "center",
          sortable: false,
          value: ""
        }],
        

        headers41: [
       
        {
          text: "Name of Principal",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "Learner Enrolment",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "School profiled (Yes/No)",
          align: "center",
          sortable: false,
          value: ""
        }],
        

        headers42: [
       
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Contact Detail of the School",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        }],
        

       headers43: [
       
        {
          text: "Key Areas",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "Requirements",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Yes/No",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Comments",
          align: "left",
          sortable: false,
          value: ""
        }],


        

        
         

         subheaders:[
                    {text:'2019', value:'2019', sortable:false, align:'center', width:'10%'},
                    {text:'2018', value:'2018', sortable:false, align:'center', width:'10%'},
                    {text:'2017', value:'2017', sortable:false, align:'center', width:'10%'}
                    ],
          
        

       
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "schoolReadinessMonitoring",
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
              description:"SAPO* Village",
              comments:""
            }],

             phase49: [
            {
              green:"",
              yellow:"",
              red:"",
            }],

            


           phase51: [
            {
              description:"Landline",
              description1:"E-mail address",
              description2:"Mobile",
              comments:""
            },
            {
              description:"Type of School",
              description1:"Lowest Grade",
              description2:"Highest Grade",
              comments:""
            }],

            phase53: [
            {
              description:"School level",
              description1:"[1=Pre-Primary; 2=Primary; 3=Secondary; 4=Intermediate; 5=Combined]",
              comments:""
            },
            {
              description:"Educational district",
              comments:""
            },
            {
              description:"Local Municipality",
              comments:""
            },
            {
              description:"Educational region",
              comments:""
            },
            {
              description:"Circuit (If applicable)",
              comments:""
            },
            {
              description:"Email ",
              comments:""
            },
            {
              description:"GPS Coordinates",
              comments:""
            },
            {
              description:"Quintile Ranking",
              comments:""
            },
            {
              description:"LOLT of School",
              comments:""
            }],

            phase52: [
            {
              description:"Learner Admission and Registration",
              requirements:["","The admission and registration of learners for 2019 is completed","SA-SAMS/ admission register has been updated","Class lists for 2019 are available","The school has learner profiles for each learner","The school has a SIAS implementation Plan"],
              boolean:["","","","",""],
              comments:["","","","",""]
            },
            {
              description:"Planning and reporting",
              requirements:["","The School Improvement Plan (SIP) has been developed (based on School Self- Evaluation) and includes clear Academic Improvement Plans","The Academic Performance Improvement Plan have been developed and ready for presentation to the SGB (underperforming school)","The school has compiled an Annual Academic Performance Report (AAPR) as per Section 16A of SASA","The school has a 2019 planner scheduling key dates, meetings and milestones","The school time-tables have been developed based on policy prescriptions (mandated minimum times per subject)","Every class has a time-table for 2019","Every teacher has a subject time-table for 2019","The school has a minimum of 7 working hours per day","Daily attendance registers for teachers for 2019 have been prepared","Daily attendance registers for learners for 2019 have been prepared","The school received a budget allocation letter for 2019 ","The school is ready to serve meals through the NSNP (where applicable)","The school has arranged scholar transport for deserving learners (where applicable)"],
              boolean:["","","","",""],
              comments:["","","","",""]
            },
            {
              description:"Teacher Provisioning",
              requirements:["","The school has the post establishment for 2019","All substantive posts have been filled.(List of substantive posts not filled and grades.State the reason why they remain vacant and plans to fill them)"],
              boolean:["",""],
              comments:["","",]
            },
            {
              description:"Learning and Teaching Resources",
              requirements:["","Workbook 1 for 2019 has been delivered for Grades R-9.(Provide a list of shortages, subjects, grades and numbers. And indicate if  the shortfall has been reported)","Textbooks have been delivered as per the school requisitions.(Provide a list of shortages, subjects, grades and numbers. And indicate if  the shortfall has been reported)","All learners have received their stationery (Report shortages for each grade)","The LTSM inventory is available","The school has a textbook retrieval system(Provide the percentage of textbooks retrieved for each subject in each grade in 2018 )"],
              boolean:["","","","",""],
              comments:["","","","",""]
            },
            {
              description:"Curriculum Management",
              requirements:["","Work schedules and lesson plans for term 1 are in place.","The school has set performance targets for 2019 and strategies to achieve the target","An assessment plan for term 1 is in place and ready for communication to learners and parents","The SMT has a monitoring plan and tools to monitor curriculum coverage, assessment and classroom practice","The 2018 promotion/progression schedules signed by the Circuit Manager are available","Lists of progressed (PWAs and QPs) learners for each grade are available"],
              boolean:["","","","","",""],
              comments:["","","","","",""]
            },
            {
              description:"Infrastructure",
              requirements:["","There is sufficient furniture for learners","There is sufficient furniture for educators","School buildings are clean and ready for teaching in 2019","The school has a maintenance plan for the utilisation of the maintenance budget as part of Norms and Standards","The school is adequately fenced and access is controlled","School toilets are adequate and in good condition","The number of classrooms is adequate"],
              boolean:["","","","","","","",""],
              comments:["","","","","","","",""]
            },
            {
              description:"SGB Readiness",
              requirements:["","A functional properly-constituted SGB is in place","SGB meetings for 2019 have been scheduled","SGB training for 2019 has been scheduled"],
              boolean:["","",""],
              comments:["","",""]
            },
            {
              description:"QLTC",
              requirements:["","QLTC Committee is established and functional","Year Plan for QLTC activities  is available"],
              boolean:["",""],
              comments:["",""]
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
  padding: 10px 25px;
}

.requirements {
  padding: 10px 25px;
  margin: 0 0 86px 50px;
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
