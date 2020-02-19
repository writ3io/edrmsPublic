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
                  class="text-xs-center">
                ANNUAL ACADEMIC PERFORMANCE REPORT
                </h3>
               
              </v-flex>
              <br />
             
               
              

              

              <v-card-text class="pt-0 mt-0">


                <v-flex xs12>
            
                <v-text-field v-model="doc.rfq" label=" SCHOOL NAME:"></v-text-field>

                <h3
                  class="text-xs-center">
                 TO BE COMPLETED BY ALL PUBLIC SCHOOLS ONLY
                </h3>

                <v-layout wrap><v-flex xs12 sm6 py-0>
                          <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date2" label="ALL INFORMATION FOR THE ACADEMIC YEAR" readonly v-on="on">
                              </v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                          </v-menu>
                         </v-flex>

                <v-flex xs12 sm6 py-0>
                          <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date2" label="TO BE PROVIDED BY" readonly v-on="on">
                              </v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                          </v-menu>
                         </v-flex>

                         </v-layout>

                         <br/>

                <strong><i>The purpose of the template is to provide guidance and uniformity to all Principals in compiling a report on the academic performance of their schools.</i></strong>
                
                   <br/>
                   </v-flex>

                   <v-flex xs12 class="card-border">
                <h2
                  class="text-xs-center">
                DECLARATION
                </h2>
                <v-layout wrap>
                <v-flex xs12 sm6 py-0><v-text-field v-model="doc.rfq" label="I"></v-text-field></v-flex> <v-flex xs12 sm6 py-0>  <v-text-field v-model="doc.rfq" label="Principal of"></v-text-field></v-flex>
                <i>fully understand the provision made in the South African Schools Act No. 84 of 1996 (Section 59 (1) and (2) and Section 16A (2 (g)), which  stipulates that every school must supply such information about the school as is reasonably required by the Head of Education.</i>

                <i>I certify that the information provided on this form is to the best of my knowledge and belief correct and complete</i>

                  </v-layout>

                <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="Principal: " />
                    </v-flex>

                

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label="School Governing Body Chairperson: " />
                    </v-flex>
                </v-layout>
              <i>I certify that the information provided on this form is to the best of my knowledge and belief correct and complete</i>

          </v-flex>

          <br/>


          PROVINCE CODE (Please place X in the correct province)
          <v-flex xs12 class="card-border">

                <v-layout wrap>
                    
                      <strong><u>Province Name</u></strong><br/>

                      <v-checkbox v-model="satelliteOffices" class="mx-2" label="Western Cape = 1"></v-checkbox>
                <v-checkbox v-model="circuitOffices" class="mx-2" label="Eastern Cape = 2"></v-checkbox>
                <v-checkbox v-model="provincialoffices" class="mx-2" label="Northern Cape = 3"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="Free State = 4"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="KwaZulu-Natal = 5"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="North West= 6"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="Gauteng = 7"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="Mpumalanga = 8"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="Limpopo = 9"></v-checkbox>
                   
                   
                    
                    
                </v-layout>
             

          </v-flex>

          <br/>
                <!-- 
              ================================================================
              A. BACKGROUND INFORMATION
              Pre-populated information should be verified.
              ================================================================
                -->

                

               
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
                      
                        
                        <td >1. {{props.index + 1}}</td>
                      
                     
                     
                      <td>
                        <v-layout wrap>
                          <v-flex xs1>
                        {{props.item.description}}
                        </v-flex>
                        <v-flex xs11>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </v-flex>
                        </v-layout>       

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
                      
                        <td >1.2. {{props.index + 1}}</td>
                      
                     
                     
                      <td>
                        <v-layout wrap>
                          <v-flex xs3>
                        {{props.item.description}}
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

                      </td>
                        

                       

                      

                      
                    </template>

                    
                    </v-data-table>
                     <v-data-table
                      :headers="headers43"
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
                      
                        <td >1.2. {{props.index + 6}}</td>
                      
                     
                     
                      <td>
                        <v-layout wrap>
                          <v-flex xs1>
                        {{props.item.description}}
                        </v-flex>
                        <v-flex xs11>
                         <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              </v-flex>
                        </v-layout>       

                      </td>
                        

                       

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                     <v-data-table
                      :headers="headers44"
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

                      <td >1. {{props.index + 4}}</td>
                      <td>
                        
                          {{props.item.description}}
  
                      </td>

                       <td>
                        <div v-if="props.index == 0">
                          {{props.item.description1}}
                        </div>
                        <div v-else>
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field>
                              
                        </div>
                     
                      </td>
                      
                        
                    </template>

                    
                    </v-data-table>

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

                    <template v-slot:items="props" v-slot:no-data>

                      <td >1. {{props.index + 13}}</td>
                      <td>
                        
                          {{props.item.description}}
  
                      </td>

                       <td>
                        <div v-if="props.index == 0">
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group>
                        </div>
                        <div v-else>
                           <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="URBAN" value="URBAN"></v-radio>
                            <v-radio label="RURAL" value="RURAL"></v-radio>
                            <v-radio label="SEMI-RURAL" value="SEMI-RURAL"></v-radio>
                          </v-radio-group>
                              
                        </div>
                     
                      </td>
                      
                        
                    </template>

                    
                    </v-data-table>

                    <v-data-table
                      :headers="headers46"
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
                      
                     
                     
                      <td>
                        
                        {{props.item.description}}
                       
                      </td>

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

                    

             
                   

                    </v-flex>
                </v-layout>



                  <!-- 
              ================================================================
              C. DISTRICT DELEGATIONS
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>

                <v-data-table
                      :headers="headers47"
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
                      :headers="headers48"
                      :items="doc.body.phase47"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                     
                      
                        
                        <td ></td>
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
                             
                            
                            <td class="green-bg">
                              <v-text-field
                                v-model="props.item.green"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td class="yellow-bg">
                              <v-text-field
                                v-model="props.item.yellow"
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

                         </template>

                    
                    </v-data-table>



                        <v-data-table
                      :headers="headers49"
                      :items="doc.body.phase47"
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
                      :headers="headers50"
                      :items="doc.body.phase55"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                     
                      
                        <td></td>
                        <td >
                          {{props.item.description}}
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


                     <br/>


                      <v-data-table
                      :headers="headers51"
                      :items="doc.body.phase47"
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
                      :headers="headers52"
                      :items="doc.body.phase56"
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
                          {{props.item.description}}
                        </td>
                        <td >
                         <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="LOW" value="LOW"></v-radio>
                            <v-radio label="MODERATE" value="MODERATE"></v-radio>
                            <v-radio label="HIGH" value="HIGH"></v-radio>
                          </v-radio-group>
                        </td>
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                      <v-data-table
                      :headers="headers53"
                      :items="doc.body.phase47"
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
                      :headers="headers54"
                      :items="doc.body.phase57"
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
                          {{props.item.description}}
                        </td>
                        <td >
                         <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="LOW" value="LOW"></v-radio>
                            <v-radio label="MODERATE" value="MODERATE"></v-radio>
                            <v-radio label="HIGH" value="HIGH"></v-radio>
                          </v-radio-group>
                        </td>
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                       <v-data-table
                      :headers="headers55"
                      :items="doc.body.phase47"
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
                      :headers="headers56"
                      :items="doc.body.phase58"
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
                            {{props.index + 1}}
                          </v-flex>
                          <v-flex xs10>
                           <v-text-field
                                v-model="props.item.description"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </v-flex>
                          </v-layout>
                          
                        </td>
                        <td >
                         <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="LOW" value="LOW"></v-radio>
                            <v-radio label="MODERATE" value="MODERATE"></v-radio>
                            <v-radio label="HIGH" value="HIGH"></v-radio>
                          </v-radio-group>
                        </td>
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                       <v-data-table
                      :headers="headers57"
                      :items="doc.body.phase47"
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
                      :headers="headers58"
                      :items="doc.body.phase47"
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
                      :headers="headers59"
                      :items="doc.body.phase59"
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
                      {{props.item.description}}
                      </td>  
                        <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description1}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description1}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                        
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                     <v-data-table
                      :headers="headers60"
                      :items="doc.body.phase47"
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
                      :headers="headers61"
                      :items="doc.body.phase60"
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
                        
                        
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                <v-data-table
                      :headers="headers62"
                      :items="doc.body.phase47"
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
                      :headers="headers63"
                      :items="doc.body.phase60"
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
                        
                        
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                 

                    <v-data-table
                      :headers="headers64"
                      :items="doc.body.phase61"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                      <td></td>

                        <td >
                          <v-layout wrap>
                          <v-flex xs6>
                            {{props.item.description}}
                          </v-flex>
                          <v-flex xs6>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </v-flex>
                          </v-layout>
                         
                        </td>
                      

                      
                    </template>

                    
                    </v-data-table>


                     <v-data-table
                      :headers="headers65"
                      :items="doc.body.phase62"
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
                        
                        
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                      <v-data-table
                      :headers="headers66"
                      :items="doc.body.phase63"
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
                        
                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                     <v-data-table
                      :headers="headers67"
                      :items="doc.body.phase47"
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
                      :headers="headers68"
                      :items="doc.body.phase60"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                        
                          
                          
                          <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders1"
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
                           
                           

                            
                          </template>
                        </v-data-table>

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


                     <br/>


                     <v-data-table
                      :headers="headers69"
                      :items="doc.body.phase47"
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
                      :headers="headers70"
                      :items="doc.body.phase64"
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
                      {{props.item.description}}
                      </td>  
                        <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description1}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description2}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description3}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description4}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description5}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description6}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description7}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>
                         <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description8}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>

                        <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description9}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>

                        <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description10}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>

                        <td >
                          
                          <div v-if="props.index == 0">
                            {{props.item.description11}}
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                         
                        </td>

                       


                        
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                     <v-data-table
                      :headers="headers71"
                      :items="doc.body.phase62"
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
                         
                        
                        
                         
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>
                    <v-data-table
                      :headers="headers72"
                      :items="doc.body.phase47"
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
                      :headers="headers73"
                      :items="doc.body.phase47"
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
                      :headers="headers74"
                      :items="doc.body.phase62"
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
                          
                          
                         {{props.index + 4}}
                       
                         
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
                      :headers="headers75"
                      :items="doc.body.phase65"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>

                      <td></td>

                        <td >
                          <v-layout wrap>
                          <v-flex xs6>
                            {{props.item.description}}
                          </v-flex>
                          <v-flex xs6>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </v-flex>
                          </v-layout>
                         
                        </td>
                      

                      
                    </template>

                    
                    </v-data-table>


                     <v-data-table
                      :headers="headers76"
                      :items="doc.body.phase66"
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
                          
                          
                          {{props.item.description}}
                       
                         
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


                     <br/>
                     <v-data-table
                      :headers="headers77"
                      :items="doc.body.phase47"
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
                      :headers="headers78"
                      :items="doc.body.phase67"
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
                          
                          
                           
                       
                         
                        </td>
                         <td >
                          
                          {{props.item.description}}
                         
                         
                        </td>

                        <td >
                        <div v-if="props.index <= 2">
                             <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group>
                          </div>
                          <div v-else>
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          </div>
                          </td >
                        
                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                       <v-data-table
                      :headers="headers79"
                      :items="doc.body.phase67"
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
                          
                          {{props.item.description}}
                         
                         
                        </td>

                        <td >
                        
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          
                          </td >

                          <td >
                        
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          
                          </td >

                          <td >
                        
                           <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                          
                          </td >
                        
                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>


                     <v-data-table
                      :headers="headers80"
                      :items="doc.body.phase68"
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
                          
                         
                         
                         
                        </td>

                        <td >
                        
                           {{props.item.description}}
                          
                          </td >

                          <td class="px-0 py-0">
                        
                            <div v-if="props.index == 0 || props.index == 2">
                             <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group>
                          </div>
                          <div v-else>
                           <v-data-table
                       class="mytable2"
                       
                          :headers="subheaders2"
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
                           
                           

                            
                          </template>
                        </v-data-table>
                          </div>
                          
                          </td >

                          
                        
                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                      <v-data-table
                      :headers="headers81"
                      :items="doc.body.phase69"
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
                         
                        </td>

                        <td >
                        
                           {{props.item.description}}
                          
                          </td >

                          <td >
                        
                           <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="YES" value="YES"></v-radio>
                            <v-radio label="NO" value="NO"></v-radio>
                          </v-radio-group>
                          
                          </td >

                         
                        
                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>




                    


                   
                      

                      
                   
             
                   

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
          text: "<strong>1.</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>GENERAL INFORMATION </strong>",
          align: "center",
          sortable: false,
          value: ""
        }],
        

        headers41: [
       
        {
          text: "<strong>1.2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Postal Address</strong><br/> Enter the postal address under the relevant Address Type in either Section A or B. Only complete<br/> Section B: 1.2.6 to 1.2.9 if the physical address is the postal address. <strong>(Post office: complete only if either PO Box ,<br /> P/Bag or SAPO village has been selected) (Town/City: complete only if Street address or Building address has been selected)</strong>",
          align: "left",
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
          text: "<strong>A.	Postal Address (Please leave blank if Not Applicable)</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],
        

       headers43: [
       
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>B.	Physical Address</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],


        headers44: [
       
        {
          text: "1.3",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Province code</strong>",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>(Codes on the top page)</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],

      headers45: [
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
          text: "<strong>Select</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers46: [
        {
          text: "<strong>2</strong>",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>PRINCIPAL’S FOREWORD</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        	

        headers47: [
        {
          text: "<strong>3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>BASIC SCHOOL INFORMATION</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers48: [
        {
          text: "<strong>3.1</strong>",
          align: "left",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Learner Information</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        
         

         subheaders:[
                    {text:'Total<br/> Enrolment<br/> of the school', value:'g', sortable:false, align:'center', width:'10%'},
                    {text:'Number of<br/> Girls Enrolled<br/> at the school', value:'y', sortable:false, align:'center', width:'10%'},
                    {text:'Number of<br/> Boys<br/> Enrolled at<br/> the school', value:'r', sortable:false, align:'center', width:'10%'},
                    {text:'Number of<br/>  Orphans<br/> Enrolled at<br/> the school', value:'r', sortable:false, align:'center', width:'10%'},
                    {text:'Number of<br/> Learners<br/> assisted by<br/> School<br/> Nutrition<br/> programme', value:'r', sortable:false, align:'center', width:'10%'},
                    {text:'Number of<br/> Learners<br/> using the<br/> Learner<br/> / Scholar transport', value:'r', sortable:false, align:'center', width:'10%'},
                    {text:'Number of<br/> Fee<br/> exempted<br/> Learners', value:'r', sortable:false, align:'center', width:'10%'}
                    ],
          subheaders1:[
                    {text:'Educators', value:'g', sortable:false, align:'center', width:'10%'},
                    {text:'Non-Educators', value:'y', sortable:false, align:'center', width:'10%'}
                    ],
                    
          subheaders2:[
                    {text:'Chairs', value:'Chairs', sortable:false, align:'center', width:'10%'},
                    {text:'Tables', value:'Tables', sortable:false, align:'center', width:'10%'},
                    {text:'Desks', value:'Desks', sortable:false, align:'center', width:'10%'}
                    ],            

        headers49: [
        {
          text: "3.2",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>School Discipline in Year of Reporting</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "85%"
        }],

        headers50: [
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
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Number of Occurrences in all cases</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "45%"
        }],

        headers51: [
        
        {
          text: "<strong>3.3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Social Context</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "45%"
        }],
        headers52: [
          {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Select the appropriate descriptor reflecting social environment<br/> within the school and in the community where school is located.</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],

        headers53: [
        
        {
          text: "<strong>3.4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Parent and /or Guardian Involvement in Children’s Learning</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "45%"
        }],

        headers54: [
          {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Select the appropriate descriptor reflecting social environment<br/> within the school and in the community where school is located.</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],

         headers55: [
        
        {
          text: "<strong>3.5</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Extra Curricula Activities</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "45%"
        }],
        headers56: [
          {
          text: "<strong>List the Extra Curricula Activities Offered by the School</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Level of active participation per activity</strong>",
          sortable: false,
          value: ""
        }],


        headers57: [
        
        {
          text: "<strong>3.6</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        },
        {
          text: "<strong>Staff Profile</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "45%"
        }],
        headers58: [
          {
          text: "<strong>Staff Composition</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "40%"
        }],
        headers59: [{
          text: "",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Departmental Employees</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>S G B Employees</strong>",
          sortable: false,
          value: ""
        }],

        headers60: [{
          text: "<strong>3.7</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Staff Utilization</strong>",
          sortable: false,
          value: ""
        }],

         headers61: [{
          text: "<strong>Number of Professionally<br /> Qualified Teachers</strong><br /> (REQV LEVEL 13 AND ABOVE) ",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of Teachers Not<br /> Professionally Qualified</strong><br /> (REQV LEVEL BELOW 13)",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of Teachers<br /> Teaching Subjects<br /> for which they are<br /> Qualified to Teach</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of Teachers<br /> Teaching Subjects<br /> they are Not<br /> Qualified to Teach</strong>",
          sortable: false,
          value: ""
        }],

        headers62: [{
          text: "<strong>3.8</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Teachers Teaching Subject Not Qualified to Teach</strong>",
          sortable: false,
          value: ""
        }],

         headers63: [{
          text: "<strong>Name of Teacher</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Subjects Teacher<br/> is Qualified to Teach ()</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Current Subject Taught<br/> by the Teacher that the<br/> Teacher is Not Qualified to Teach</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Duration of Teaching<br/> the Subject Not<br/> Qualified to Teach</strong>",
          sortable: false,
          value: ""
        }],

        headers64: [{
          text: "<strong>3.9</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Professional Development</strong>",
          sortable: false,
          value: ""
        }],

         headers65: [{
          text: "<strong>List of training courses<br/> / workshops attended by<br/> teachers during<br/> year of report</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of educators<br/> who attended the<br/> course/ workshop</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Rank the quality of<br/> the course/ workshop</strong><br/> (1= Poor, 2=Good, 3=Excellent)",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Name of training<br/> course/ workshop<br/> provider</strong>",
          sortable: false,
          value: ""
        }],


         headers66: [{
          text: "<strong>List of formal qualifications attained during year of report</strong>",
          sortable: false,
          value: "",
          width:"70%"
        },
        {
          text: "<strong>Number of staff<br/> members who attained<br/> the qualification</strong>",
          sortable: false,
          value: "",
          width:"30%"
        }],

        headers67: [{
          text: "<strong>3.10</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Educators Attendance</strong>",
          sortable: false,
          value: ""
        }],

         headers68: [{
          text: "<strong>Average Staff Attendance Rate<br/> (In %)</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Reason for Educator Turnover</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Reason for Non-Educator Turnover</strong>",
          sortable: false,
          value: ""
        }],

        headers69: [{
          text: "<strong>3.11</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Learner Attendance for each Grade <i>(draw from learner attendance register)</i></strong>",
          sortable: false,
          value: ""
        }],

        headers70: [{
          text: "<strong>Gr 1</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 2</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 3</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 4</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 5</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 6</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 7</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 8</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 9</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 10</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 11</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Gr 12</strong>",
          sortable: false,
          value: ""
        }],


        headers71: [{
          text: "<strong>3.12</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Description on how non-attendance is managed by the school</strong>",
          sortable: false,
          value: ""
        }],

        headers72: [{
          text: "<strong>4.3</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>GET Band: Intermediate Phase:</strong>",
          sortable: false,
          value: ""
        }],

        headers73: [{
          text: "<strong>4.3.1</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>List all Subjects where there is good performance</strong> <strong>(above provincial average) <strong>for the overall academic year</strong>",
          sortable: false,
          value: ""
        }],

        headers74: [{
          text: "<strong>Grade</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Subjects</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Specify reasons for good  performance e.g. differentiated  enrichment programmes</strong>",
          sortable: false,
          value: ""
        }],

        headers75: [{
          text: "<strong>4.3.2</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>List of Subjects where there is poor performance</strong>",
          sortable: false,
          value: ""
        }],

        headers76: [{
          text: "<strong>List of subjects</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Subject 1  = </strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Subject 2  = </strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Subject 3 = </strong>",
          sortable: false,
          value: ""
        }],

        headers77: [{
          text: "<strong>5</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>RESOURCES</strong>",
          sortable: false,
          value: ""
        }],

         headers78: [{
          text: "<strong>5.1</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Learner Training & Support  Material</strong>",
          sortable: false,
          value: ""
        }],

        headers79: [{
          text: "<strong>Textbook shortages</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Grade</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Subject</strong>",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of books</strong>",
          sortable: false,
          value: ""
        }],

        headers80: [{
          text: "<strong>5.2</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>Furniture</strong>",
          sortable: false,
          value: ""
        }],

        headers81: [{
          text: "<strong>5.3</strong>",
          sortable: false,
          value: "",
          width:"15%"
        },
        {
          text: "<strong>ICT</strong>",
          sortable: false,
          value: ""
        }],
        

       
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "schoolGoverningBodyFunctionlity",
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
            },
            {
              description:"PO Box",
              comments:""
            },
            {
              description:"Private Bag",
              comments:""
            },
            {
              description:"Post Office",
              comments:""
            },
            {
              description:"Postal Code",
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
              description:"Building",
              comments:""
            },
            {
              description:"Street Address",
              comments:""
            },
            {
              description:"Town or City",
              comments:""
            },
            {
              description:"Postal Code",
              comments:""
            }],

            phase52: [
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

            phase53: [
            {
              description:"Fee paying school",
              boolean:""
            },
            {
              description:"Location of school",
              boolean:""
            }],

            phase54: [
            {
              description:"Introduction (A short background of the school environment)",
              comments:""
            },
            {
              description:"School Progress towards its goals in year of reporting (e.g. 2012) (Describe school progress towards its goals as outlined in the plan for the year)",
              comments:""
            },
            {
              description:"Future Outlook(Outline the key areas for improvement for the coming year e.g. 2013)",
              comments:""
            }],

            phase55: [
            {
              description:"Disciplinary Incidents/Cases Held",
              comments:""
            },
            {
              description:"Disciplinary Action Taken",
              comments:""
            },
             {
              description:"Disciplinary Hearings Held",
              comments:""
            },
            {
              description:"Suspensions Given",
              comments:""
            },
            {
              description:"Expulsions Recommended",
              comments:""
            },
            {
              description:"Expulsions Confirmed",
              comments:""
            }],

             phase56: [
              {
              description: "Community interest",
              comments:""
              },
              {
              description: "Employment Profile",
              comments:""
              },
              {
              description: "Mortality rate",
              comments:""
              }],

            phase57: [
              {
              description: "Checks child’s homework",
              comments:""
              },
              {
              description: "Attend the Annual General Meeting",
              comments:""
              },
              {
              description: "Attend subject information meetings",
              comments:""
              },
              {
              description: "Attend parents and information days/evenings",
              comments:""
              }],


            phase58: [
              {
              description: "",
              comments:""
              },
              {
              description: "",
              comments:""
              },
              {
              description: "",
              comments:""
              },
              {
              description: "",
              comments:""
              }],

            phase59: [
              {
              description: "Categories",
              description1: "Expected according to Post Provisioning",
              description2: "Actual",
              description3:"Actual"
              },
              {
              description: "Educators",
              comments:""
              },
              {
              description: "Non - educators",
              comments:""
              },
              {
              description: "Total",
              comments:""
              }],


            phase60: [
           
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            }],

             phase61: [
              {
              description: "Number of teaching staff involved in professional development activities in year of report",
              comments:""
              }],


            phase62: [
           
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            },
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            },
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            }],

            phase63: [
           
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            },
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            },
            {
              comments:"",
              comments1:"",
              comments2:"",
              comments3:""
              
            }],

            phase64: [
              {
              description: "",
              description1: "%",
              description2: "%",
              description3:"%",
              description4: "%",
              description5: "%",
              description6:"%",
              description7: "%",
              description8: "%",
              description9:"%",
              description10:"%",
              description11: "%"
              },
              {
              description: "Term 1",
              comments:""
              },
              {
              description: "Term 2",
              comments:""
              },
              {
              description: "Term 3",
              comments:""
              },
              {
              description: "Term 4",
              comments:""
              }],

              

              phase65: [
              {
              description: "Grade....",
              comments:""
              }],


              phase66: [
              {
              description: "Describe challenges contributing towards poor performance (specify actual section of the work that is problematic e.g. letter recognition in Literacy)",
              comments:""
              },
              {
              description: "Provide valid reasons for poor performance",
              comments:""
              },
              {
              description: "List available resources for all learners E.g. Phonic cards",
              comments:""
              },
              {
              description: "Describe the extent of resource ",
              comments:""
              },
              {
              description: "utilization",
              comments:""
              }],

              phase67: [
              {
              description: "(Provide a bulleted list per grade and subject)",
              comments:""
              }],

              phase68: [
              {
              description: "Does each learner have a chair and table/desk",
              comments:""
              },
              {
              description: "How many chairs, tables and/or desks are broken",
              comments:""
              },
              {
              description: "Does the school have a system of repairing broken furniture",
              comments:""
              },
              {
              description: "Indicate shortages if any",
              comments:""
              }],

              phase69: [
              {
              description: "Does the school have Information and Communication Technologies that are used to support learning and teaching?",
              comments:""
              },
              {
              description: "Does your school have Computer Applications Technology (CAT) and Information Technology (IT) laboratories?",
              comments:""
              },
              {
              description: "Does your school have computers in classrooms?",
              comments:""
              },
              {
              description: "Does your school have computers in the school library?",
              comments:""
              },
              {
              description: "Does your school have a computer for office personnel?",
              comments:""
              },
              {
              description: "Does your school have a computer for management?",
              comments:""
              },
              {
              description: "Does your school have  a computer for teacher use?",
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
