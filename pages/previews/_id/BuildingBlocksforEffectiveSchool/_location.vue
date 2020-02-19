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
             
             
               
              

              

              <v-card-text class="pt-0 mt-0">

                 <v-flex xs12>
                <h3
                  class="text-xs-left">
                Form 1: Building Blocks for Effective School Management
                </h3>
               
              </v-flex>
              <br />


                <v-flex xs12>
            

            <v-layout wrap>
              <v-flex xs6>
                Name of School: {{doc.nameOfSchool}}
              </v-flex>
              <v-flex xs6>
                EMIS: {{doc.body.emis}}
              </v-flex>
              <v-flex xs6>
                District: {{doc.body.district}}
              </v-flex>
              <v-flex xs6>
                Province:{{doc.body.province}}
              </v-flex>
            </v-layout>

            

              <br/>
       <i>This form should be administered by each province to collect information on the 
       availability and implementation of basic management documents in all schools. 
       Principals and Circuit Managers/District Officials should consider the criteria 
       below and reflect with an X according to <strong>planning, registers and governance documents</strong></i>
        <br/>
          </v-flex>

       
                

               
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
                           <v-layout wrap>
                             <v-flex xs2>
                          {{props.index + 1}}.
                          </v-flex>
                          <v-flex xs10>
                          {{props.item.planning}}
                          </v-flex>
                          </v-layout>
                          </td>
                      
                     
                     <td class="px-0 py-0">

                       <div v-if="props.index == 0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                             
                                {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                             {{props.item.one}}
                               
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                           {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>


                        <div v-if="props.index == 1">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase1"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                             {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                             {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>


                        <div v-if="props.index == 2">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase2"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                             {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                             
                                {{props.item.two}}
                              
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                             
                                {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                         <div v-if="props.index == 3">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase3"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                             {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 4">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase4"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 5">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase5"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                             {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                             {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 6">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase6"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 7">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase7"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                             {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 8">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase8"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                             {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                               
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 9">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase9"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                             {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 10">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase10"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 11">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase11"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                            {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}} 
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 12">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase12"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 13">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase13"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}} 
                            </td>
                            <td class="red-bg">
                              {{props.item.two}} 
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}} 
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 14">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase14"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}} 
                            </td>
                            <td class="red-bg">
                              {{props.item.three}} 
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                        <div v-if="props.index == 15">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders"
                          :items="doc.body.subphase15"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             
                            
                            <td class="green-bg">
                              {{props.item.zero}}
                            </td>
                            <td class="yellow-bg">
                              {{props.item.one}}
                            </td>
                            <td class="red-bg">
                              {{props.item.two}}
                            </td>
                            <td class="red-bg">
                              {{props.item.three}}
                            </td>
                            <td class="red-bg">
                              {{props.item.four}}
                            </td>
                            
                          </template>
                        </v-data-table>

                        </div>

                         
                              
                      </td>

                      <td>
                         {{props.item.comments}}

                      </td>

                      <td class="px-0 py-0">

                       
                     {{props.item.comments1}}
                         
                              
                      </td>




                      <td>
                        {{props.item.comments2}}

                      </td>
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                    <br/>

                  
                         
                    <v-layout wrap>
                    <v-flex xs12 lg6>
                      PRINCIPAL: {{ doc.body.signatures[0].SurName }}
                    </v-flex>

                    <v-flex xs12 lg6>
                      OFFICIAL: {{ doc.body.signatures[1].SurName }}
                    </v-flex>
                </v-layout>

                    

             
                   

                    </v-flex>
                </v-layout>



                  <!-- 
              ================================================================
              C. DISTRICT DELEGATIONS
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>
                
                 <br/>

                    <h4><u>Section 2</u></h4>
                    <v-layout wrap>
              
               TOTAL SCORE (64): {{doc.body.totalScore}} /64 (add the total scores in the columns above)


                <br/>

                    </v-layout>

               

                
                <v-data-table
                      :headers="headers45"
                      :items="doc.body.phase53"
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
                      :headers="headers46"
                      :items="doc.body.phase53"
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
                        <td >{{props.item.description1}}</td>
                      
                     
                    

                     <td>
                        {{props.item.planx}}

                      </td>




                      <td>
                         <v-text-field
                                {{props.item.planx1}}

                      </td>
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                    <h4><u>Form 2: Building Blocks Annual Management Plan 2019</u></h4>
                    
                    <br/>

                    <v-data-table
                      :headers="headers47"
                      :items="doc.body.phase54"
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
                            <v-layout wrap>

                              <strong>{{props.item.description1}} : </strong>
                              
                                  {{props.item.comments}}
                            </v-layout>
                        </td>

                         <td >
                            <v-layout wrap>
                              <strong>{{props.item.description2}} : </strong>
                             
                                  {{props.item.comments1}}
                                
                            </v-layout>
                        </td>

                        
                      
                     
                    

                    
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>
                      
                      
                     

                      

                      
                   
             
                   

                    </v-flex>
                </v-layout>


             

               


                

                

                <br />


             

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
  name: "BuildingBlocksforEffectiveSchool",
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
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Score by Departmental Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Final score<br/> per document by<br/> the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Final score<br/> per document  by<br/> the Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comment by Departmental Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers41: [
       
        {
          text: "<strong>C.	Assets</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Rating by the Education Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers42: [
       
        {
          text: "<strong>D.	Financial Management</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Rating by the Education Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers43: [
       
        {
          text: "<strong>E.	Curriculum matters <br/> requiring SGB support</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "30%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Rating by the Education Official</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],


         headers44: [
        
        {
          text: "<strong>12. C. DISTRICT DELEGATIONS</strong> <br /> <i>The following relate to district delegations. Please indicate the status of each by marking with a (X) in the appropriate box, and provide supporting evidence.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers45: [
        {
          text: "<strong>Name of the School: </strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "50%"
        },
        {
          text: "<strong>Rating by the Principal</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Rating by the<br/> Departmental Official </strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "25%"
        }],

        headers46: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Indicate Percentage</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Indicate Percentage</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        }],

         headers47: [
        {
          text: "<strong>DATE</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>ACTIVITY</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>RESPONSIBILITY</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        }],
        
         headers48: [
        {
          text: "KEY AREA",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

         headers49: [
        {
          text: "<strong>A.	Policies and Documents Legislated by SASA</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>3</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>2</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>1</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>0</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers50: [
        {
          text: "B.	Meetings",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

        headers51: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>3</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>2</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>1</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>0</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers52: [
        {
          text: "C.	Assets",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

        headers53: [
        {
          text: "D.	Financial Management",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

         headers54: [
        {
          text: "Financial Management(Continued)",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],

         headers55: [
        {
          text: "E.	Curriculum matters requiring SGB",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Ratings Descriptors</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "60%"
        }],
        
        subheaders:[
          {text:'0<br/> Mark with an<br/> X', value:'0', sortable:false, align:'center', width:'10%'},
          {text:'1<br/> Mark with an<br/> X', value:'1', sortable:false, align:'center', width:'10%'},
          {text:'2<br/> Mark with an<br/> X', value:'2', sortable:false, align:'center', width:'10%'},
          {text:'3<br/> Mark with an<br/> X', value:'3', sortable:false, align:'center', width:'10%'},
          {text:'4<br/> Mark with an<br/> X', value:'4', sortable:false, align:'center', width:'10%'}
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
  watch: {
    doc(data) {
      console.log("We have data!", data);
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = data;
      user.signatureDate = Date.now();
      console.log(user);
      console.log("=== End ===");
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id);
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
