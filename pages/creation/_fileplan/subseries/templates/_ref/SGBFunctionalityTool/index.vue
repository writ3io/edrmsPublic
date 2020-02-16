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
                SGB FUNCTIONALITY TOOL
                </h3>
               
              </v-flex>
              <br />
              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border class="card-border">
                  <v-flex>

                    <ol>
                    <li>
                     The South African School’s Act No 84 of 1996 (SASA) as amended 
                     stipulates that the governance of a school is vested in its School 
                     Governing Body (SGB). Some of the key statutory obligations of the 
                     SGB are summarized as follows:
                    

                    <ol type="a">
                      <li>
                        Determining the following policies-
                        <ul>
                          <li>Admission policy of the school</li>
                          <li>Language policy of the school</li>
                          <li>Religious policy of the school</li>
                        </ul>

                      </li>
                      <li>Adopt a learner code of conduct as well as dealing with cases of learner misconduct.</li>
                      <li>Maintain school buildings</li>
                      <li>Deal with all money issues at the school</li>
                      <li>Approve purchase of resources at the school</li>
                      <li>Support the principal and other employees in their work</li>
                      <li>Ensure that all children of school going age have access to schooling</li>
                      <li>Develop and implement a school development plan</li>
                    </ol>
                    </li>
                    <li>
                      The above policies and responsibilities provide a comprehensive framework for intervention. The key challenge is to ensure the coherence, alignment and implementation of the various provisions embodied within these policies and responsibilities.
                    </li>

                     <li>
                      The SGB support tool has been designed to provide guidance to School Governing Bodies in fulfilling their roles and responsibilities in terms of SASA with regard to supporting teaching and learning in schools. The tool focuses on the following key areas:

                      <ol type="a">
                        <li>Policies legislated by the South African Schools Act 84 of 1996</li>
                        <li>Policies implied by the South African Schools Act 84 of 1996</li>
                        <li>Meetings of the SGB and its committees</li>
                        <li>Maintenance and procurement of school assets</li>
                        <li>Financial planning and management</li>
                        <li>Training and information sharing</li>
                        <li>Planning</li>
                      </ol>
                    </li>
                    <li>
                      You can use this tool for rating the following:
                      <ul>
                        <li>Availability and implementation of policies regarding school governance;</li>
                        <li>The frequency of legislated meetings held by the school governing body;</li>
                        <li>How the SGB has planned to manage the school assets;</li>
                        <li>How the SGB manages the school’s finances; and</li> 
                        <li>How the SGB is involved in some curriculum matters of the school.</li>
                      </ul>  


                    </li>
                    <li>For each statement the rating of the SGB functionality is between the scores 0 to 3. The rating should be done as per attached descriptor table.  The School Principal should administer the first rating and then followed by the rating of the Circuit Manager based on the evidence provided by the school. The Department of Basic Education/the province will select a sample of schools from those rated for verification purposes</li>
                    <li>The official completing the tool is required to populate all sections from 1 to 3 in order to get a comprehensive view of the SGB functionality.</li>

                    </ol>

                  </v-flex>
                </v-layout>
                <br />
                <v-flex justify-end>
                  <hr style="color:grey" />
                </v-flex>
              </v-card-text>

              

              

              <v-card-text class="pt-0 mt-0">


                <v-flex xs12>
            <h4 class="text-xs-center">SGB Functionality Tool: 2019/2020</h4>

            <v-layout wrap>
              <v-flex xs3>
                <v-text-field v-model="doc.rfq" label="Name of School:"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="doc.body.rfq" label="EMIS:"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="doc.body.rfq" label="District:"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="doc.body.rfq" label="Province:"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-layout wrap>
                <v-flex xs4>
                Fee Paying:
                </v-flex>
              <v-flex xs3>  
                 <v-radio-group v-model="doc.body.rfq" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                          </v-flex>
              </v-layout>            
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="doc.body.rfq" label="Quintile:"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-layout wrap>
                  <v-flex xs5>
              Type of School:
              </v-flex>
              <v-flex xs3>
              <v-checkbox v-model="satelliteOffices" class="mx-2" label="Urban"></v-checkbox>
                <v-checkbox v-model="circuitOffices" class="mx-2" label="Rural"></v-checkbox>
                <v-checkbox v-model="provincialoffices" class="mx-2" label="Township"></v-checkbox>
                <v-checkbox v-model="municipalOffices" class="mx-2" label="Farm School"></v-checkbox>
                </v-flex>
                </v-layout>
                
              </v-flex>
            </v-layout>
            <br />
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
                      
                        
                        <td >{{props.item.planning}}</td>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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

                      <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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


                    <br/>

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
                      
                        
                        <td >{{props.item.planning}}</td>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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

                      <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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



                    <br/>



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
                      
                        
                        <td >{{props.item.planning}}</td>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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

                      <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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


                     <br/>

                     <h4>Curriculum Support</h4> 

<h4>Has the SGB been involved in the planning of the following?</h4>


                    <br/>

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
                      
                        
                        <td >{{props.item.planning}}</td>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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

                      <td class="px-0 py-0">

                       <v-data-table
                       class="mytable2"
                       
                          :headers="[
                                    {text:'3', value:'3', sortable:false, align:'center', width:'10%'},
                                    {text:'2', value:'2', sortable:false, align:'center', width:'10%'},
                                    {text:'1', value:'1', sortable:false, align:'center', width:'10%'},
                                    {text:'0', value:'0', sortable:false, align:'center', width:'10%'}
                                    ]"
                          :items="doc.body.phase49"
                          hide-actions                    
                        >
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
                            
                          </template>
                        </v-data-table>

                         
                              
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
                
                 <br/>

                    <h4><u>Section 2</u></h4>
                    <v-layout wrap>
              <v-flex xs3>
                <v-text-field v-model="doc.body.rfq" label="TOTAL SCORE (120):"></v-text-field>
              </v-flex>
              <v-flex xs6>
 /120 (add the total scores in the columns above)
 </v-flex>
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
                         <v-text-field
                                v-model="props.item.planx"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                         <v-text-field
                                v-model="props.item.planx1"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>


                     <br/>

                    <h4><u>Section 3</u></h4>
                    <h4>OVERVIEW OF AREAS: School Governing Body Functionality</h4>

               
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
                              <v-flex xs9>
                                <v-text-field
                                  v-model="props.item.score"
                                  single-line
                                  solo
                                  flat
                                  placeholder
                                ></v-text-field> 
                              </v-flex>
                              <v-flex xs3>
                                {{props.item.description1}}
                              </v-flex>
                            </v-layout>
                        </td>

                        <td >
                            <v-layout wrap>
                              <v-flex xs9>
                                <v-text-field
                                  v-model="props.item.percentage"
                                  single-line
                                  solo
                                  flat
                                  placeholder
                                ></v-text-field> 
                              </v-flex>
                              <v-flex xs3>
                                {{props.item.description2}}
                              </v-flex>
                            </v-layout>
                        </td>

                         <td >
                            <v-layout wrap>
                              <v-flex xs9>
                                <v-text-field
                                  v-model="props.item.score1"
                                  single-line
                                  solo
                                  flat
                                  placeholder
                                ></v-text-field> 
                              </v-flex>
                              <v-flex xs3>
                                {{props.item.description1}}
                              </v-flex>
                            </v-layout>
                        </td>

                        <td >
                            <v-layout wrap>
                              <v-flex xs9>
                                <v-text-field
                                  v-model="props.item.percentage1"
                                  single-line
                                  solo
                                  flat
                                  placeholder
                                ></v-text-field> 
                              </v-flex>
                              <v-flex xs3>
                                {{props.item.description2}}
                              </v-flex>
                            </v-layout>
                        </td>
                      
                     
                    

                    
                      
                     

                      

                      
                    </template>

                    
                    </v-data-table>
                      
                      
                     

                      

                      
                   
             
                   

                    </v-flex>
                </v-layout>


                <br />


                <v-text-field v-model="doc.body.rfq" label="Remarks"></v-text-field>


               


                <v-layout wrap>
                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners1($event)" label="PRINCIPAL: " />
                    </v-flex>

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label="SGB CHAIR: " />
                    </v-flex>

                    <v-flex xs12 lg6>
                   <SelectUsers v-on:getUsers="setSigners2($event)" label="EDUCATION OFFICIAL: " />
                    </v-flex>
                </v-layout>

                

                <br />


                    <!-- 
              ================================================================
              SGB Functionality Tool: Ratings Descriptors
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>
                
                 <br/>

                    <h4>SGB Functionality Tool: Ratings Descriptors</h4>
                    

               

                
                <v-data-table
                      :headers="headers48"
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
                      :headers="headers49"
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

                     
                      
                        
                        <td >
                          <div v-if="props.index == 0">
                              <div v-for = "n in 10" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   {{props.item.documents[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                      </td>


                    <td>

                      {{props.item.description}}

                        <div v-if="props.index == 0">
                          <div v-for = "n in 4" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   <li>{{props.item.listItems[n]}}</li>
                                 </v-flex>
                                </v-layout>
                            </div>
                          </div>

                         <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     
                    

                     <td>
                       {{props.item.description1}}

                         <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                        {{props.item.description2}}
                         <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td>
                        {{props.item.description3}}
                         <v-text-field
                                v-model="props.item.zero"
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
                      :headers="headers50"
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
                      :headers="headers51"
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
                          <div v-if="props.index == 0">
                              <div v-for = "n in 10" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   {{props.item.documents[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                      </td>


                    <td>

                      {{props.item.description}}

                       

                         <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     
                    

                     <td>
                       {{props.item.description1}}

                         <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                        {{props.item.description2}}
                         <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td>
                        {{props.item.description3}}
                         <v-text-field
                                v-model="props.item.zero"
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
                      :headers="headers52"
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
                      :headers="headers51"
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
                          <div v-if="props.index == 0">
                              <div v-for = "n in 10" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   {{props.item.documents[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-else>
                            {{props.item.documents}}
                          </div>
                      </td>


                    <td>

                      {{props.item.description}}

                       

                         <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     
                    

                     <td>
                       {{props.item.description1}}

                         <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                        {{props.item.description2}}
                         <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td>
                        {{props.item.description3}}
                         <v-text-field
                                v-model="props.item.zero"
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
                      :headers="headers53"
                      :items="doc.body.phase54"
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
                      :headers="headers51"
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
                          <div v-if="props.index == 0 || props.index == 1">
                              <div v-for = "n in 10" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   {{props.item.documents[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-else>
                            {{props.item.documents}}
                          </div>
                      </td>


                    <td>

                      {{props.item.description}}

                       

                         <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     
                    

                     <td>
                       {{props.item.description1}}

                         <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                        {{props.item.description2}}
                         <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td>
                        {{props.item.description3}}
                         <v-text-field
                                v-model="props.item.zero"
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
                      :headers="headers54"
                      :items="doc.body.phase54"
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
                      :headers="headers51"
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
                      
                        
                        <td >
                          
                            {{props.item.documents}}
                         
                      </td>


                    <td>

                      {{props.item.description}}

                       

                         <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     
                    

                     <td>
                       {{props.item.description1}}

                         <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                        {{props.item.description2}}
                         <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td>
                        {{props.item.description3}}
                         <v-text-field
                                v-model="props.item.zero"
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
                      :headers="headers55"
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
                      :headers="headers51"
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
                          <div v-if="props.index == 0 || props.index == 1">
                              <div v-for = "n in 10" :key="n">
                                <v-layout wrap >
                               
                                 <v-flex class="sub-items">
                                   {{props.item.documents[n]}}
                                 </v-flex>
                                </v-layout>
                              </div>
                          </div>
                          <div v-else>
                            {{props.item.documents}}
                          </div>
                      </td>


                    <td>

                      {{props.item.description}}

                       

                         <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>
                      
                     
                    

                     <td>
                       {{props.item.description1}}

                         <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>




                      <td>
                        {{props.item.description2}}
                         <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 

                      </td>

                      <td>
                        {{props.item.description3}}
                         <v-text-field
                                v-model="props.item.zero"
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
  name: "SGBFunctionalityTool",
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
          text: "<strong>KEY AREA</strong>",
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
          text: "<strong>Rating by the Education<br/> Official </strong>",
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
          text: "<strong>Place  x</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        },
        {
          text: "<strong>Place  x</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "25%"
        }],

        headers47: [
        {
          text: "<strong>Area rated</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Principal’s<br/> Score</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Principal’s<br/> Percentage</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Education<br/> official’s<br/> Score</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Education<br/> official’s<br/> Percentage</strong>",
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

        

      subheaders:[{text:'35.1', value:'', sortable:false, width:'15%'},
                                    {text:'District Curriculum Support', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
      subheaders1:[{text:'35.2', value:'', sortable:false, width:'15%'},
                                    {text:'District Management and<br/> Governance Support', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
                                    
      subheaders2:[{text:'35.2.7', value:'', sortable:false, width:'15%'},
                                    {text:'What training and support is<br/> given to SGBs on the following:', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
      subheaders3:[{text:'35.2.8', value:'', sortable:false, width:'15%'},
                                    {text:'Parental involvement<br/> promoted in schools?', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
      subheaders4:[{text:'35.3', value:'', sortable:false, width:'15%'},
                                    {text:'District Learner Support', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
      subheaders5:[{text:'35.4', value:'', sortable:false, width:'15%'},
                                    {text:'District Operations', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
      subheaders6:[{text:'35.5', value:'', sortable:false, width:'15%'},
                                    {text:'Examination and Assessment', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],
      subheaders7:[{text:'35.6', value:'', sortable:false, width:'15%'},
                                    {text:'Batho Pele', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ],                                                                                                                                                                                    
      

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "SGBFunctionalityTool",
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

          
            phase48: [
            {
              planning:"A.	Policies and  Documents legislated by SASA",
              comments:"",
              comments1:""
            },
            {
              planning:"SGB Constitution",
              comments:"",
              comments1:""
            },
            {
              planning:"Admission Policy",
              comments:"",
              comments1:""
            },
            {
              planning:"Language Policy",
              comments:"",
              comments1:""
            },
            {
              planning:"Religious Observance Policy",
              comments:"",
              comments1:""
            },
            {
              planning:"Learner Code of Conduct",
              comments:"",
              comments1:""
            },
            {
              planning:"Policies and Documents implied by SASA",
              comments:"",
              comments1:""
            },
            {
              planning:"Finance Policy(income and expenditure)",
              comments:"",
              comments1:""
            },
            {
              planning:"School Development Plan",
              comments:"",
              comments1:""
            },
            {
              planning:"Buildings, grounds and maintenance Policy",
              comments:"",
              comments1:""
            },
            {
              planning:"HIV and Aids Policy",
              comments:"",
              comments1:""
            },
            {
              planning:"School Safety Policy",
              comments:"",
              comments1:""
            },
            {
              planning:"Subtotal (30)",
              comments:"",
              comments1:""
            }],


            phase50: [
            {
              planning:"Maintenance Plan",
              comments:"",
              comments1:""
            },
            {
              planning:"Procurement Plan",
              comments:"",
              comments1:""
            },
            {
              planning:"Asset Register (Non-perishables)",
              comments:"",
              comments1:""
            },
            {
              planning:"Inventory (Perishables)",
              comments:"",
              comments1:""
            },
            {
              planning:"Sub Total (12)",
              comments:"",
              comments1:""
            }],


             phase49: [
            {
              green:"",
              yellow:"",
              red:"",
            }],

            


           phase51: [
            {
              planning:"Approved Annual Budget",
              comments:"",
              comments1:""
            },
            {
              planning:"Audited Financial Statements",
              comments:"",
              comments1:""
            },
            {
              planning:"Spend allocated provincial  funds on LTSM accordingly",
              comments:"",
              comments1:""
            },
            {
              planning:"Spend allocated provincial  funds on Maintenance accordingly",
              comments:"",
              comments1:""
            },
            {
              planning:"Spend allocated provincial  funds on Municipal Service accordingly",
              comments:"",
              comments1:""
            },
            {
              planning:"Receipt books - branded",
              comments:"",
              comments1:""
            },
            {
              planning:"Requisition, Claim Forms and Invoices.",
              comments:"",
              comments1:""
            },
            {
              planning:"A system to pay Petty Cash that is monthly reconciled",
              comments:"",
              comments1:""
            },
            {
              planning:"Monthly  Cash Book:  Statements of  Receipts and Payments",
              comments:"",
              comments1:""
            },
            {
              planning:"Signatories:  EFT (Three people authorised to have PIN codes) / Cheques (Three signatories).",
              comments:"",
              comments1:""
            },
            {
              planning:"Sub Total (30)",
              comments:"",
              comments1:""
            }],

           phase52: [
            {
              planning:"Drafting of Annual Academic Report",
              comments:"",
              comments1:""
            },
            {
              planning:"Strategy to improve overall learner performance",
              comments:"",
              comments1:""
            },
            {
              planning:"Strategy to  improve learner performance in key subjects",
              comments:"",
              comments1:""
            },
            {
              planning:"Setting of realistic targets",
              comments:"",
              comments1:""
            },
            {
              planning:"Procurement of relevant textbooks per learner and per grade",
              comments:"",
              comments1:""
            },
            {
              planning:"Procurement of furniture",
              comments:"",
              comments1:""
            },
            {
              planning:"Utilization of resources in the school",
              comments:"",
              comments1:""
            },
            {
              planning:"Systems by parents to play an over site supporting role to effective learning",
              comments:"",
              comments1:""
            },
            {
              planning:"Reporting systems to hold staff and",
              comments:"",
              comments1:""
            },
            {
              planning:"Management plan for the school to provide progress report on learner performance ",
              comments:"",
              comments1:""
            },
            {
              planning:"Sub Total (30)",
              comments:"",
              comments1:""
            }],

            phase53: [
            {
              description:"5  - 97-120..…+ 80%",
              description1:"Works very well",
              planX:"",
              planX1:""
            },
            {
              description:"4 -   73-96………80%",
              description1:"Works",
              planX:"",
              planX1:""
            },
            {
              description:"3 -   49-72…………60%",
              description1:"Almost works",
              planX:"",
              planX1:""
            },
            {
              description:"2 -   25-48…………40%",
              description1:"Does not work",
              planX:"",
              planX1:""
            },
            {
              description:"1 -   0-24….……….20%",
              description1:"Needs Intervention",
              planX:"",
              planX1:""
            }],

            phase54: [
            {
              description:"A.	Policies",
              score:"",
              description1:"/30",
              percentage:"",
              description2:"%",
              score1:"",
              percentage1:"",
            },
            {
              description:"B.	Meetings",
              score:"",
              description1:"/18",
              percentage:"",
              description2:"%",
              score1:"",
              percentage1:"",
            },
            {
              description:"C.	School assets;",
              score:"",
              description1:"/18",
              percentage:"",
              description2:"%",
              score1:"",
              percentage1:"",
            },
            {
              description:"D.	School’s finances",
              score:"",
              description1:"/12",
              percentage:"",
              description2:"%",
              score1:"",
              percentage1:"",
            },
            {
              description:"E.	Curriculum matters",
              score:"",
              description1:"/30",
              percentage:"",
              description2:"%",
              score1:"",
              percentage1:"",
            },
            {
              description:"Total",
              score:"",
              description1:"/120",
              percentage:"",
              description2:"%",
              score1:"",
              percentage1:"",
            }],

            phase55: [
            {
              documents:[ "",
              "SGB Constitution",
              "Admission Policy",
              "Language Policy",
              "Religious Observation Policy",
              "Learner Code of Conduct",
              "Finance Policy(income and expenditure)",
              "School Development Plan",
              "Buildings, grounds and maintenance Policy",
              "HIV and Aids Policy",
              "School Safety Policy"
              ],

              description: "Policies have been developed:",
              listItems:[ "","in accordance with legislation,","approved by SGB and District","Implemented","Revised and Updated"],
              three:"",

               description1: "Policy has been approved by the SGB and the district and is coherent with Legislation",
              two:"",
               description2: "Policy is available but has not been updated or approved",
              one:"",
               description3: "Policy is not availed",
              zero:""
              
            }],

             phase56: [
            {
              documents:[ "",
              "Executive Committee",
              "SGB Quarterly meetings",
              "Parents, learners and other staff",
              "Annual General Meeting",
              "Finances",
              "Disciplinary"
              ],

              description: "Meetings took place with evidence of agenda, register and minutes. Meeting resolutions are implemented.",
              three:"",

               description1: "Meetings took place with evidence of agenda, register and minutes. Meeting resolutions not implemented.",
              two:"",
               description2: "Ad-hoc meetings",
              one:"",
               description3: "No evidence of meetings having taken place.",
              zero:""
              
            }],

           phase57: [
            {
              documents:[ "",
              "Maintenance Plan",
              "Procurement Plan"
              ],

              description: "Developed and approved plans have has been budgeted for and  implemented.",
              three:"",

               description1: "Approved plans have  been budgeted for but not implemented",
              two:"",
               description2: "Plans have been developed",
              one:"",
               description3: "No plans are available",
              zero:""
              
            },
            {
              documents: "Asset Register (Non-perishables)",

              description: "Annual stock taken,  asset register is updated and redundant stock",
              three:"",

               description1: "Annual stock take is taken",
              two:"",
               description2: "Asset register is available",
              one:"",
               description3: "No register is available",
              zero:""
              
            },
            {
              documents: "Inventory (Perishables)",

              description: "Annual stock taken,  inventory is updated and redundant stock removed",
              three:"",

               description1: "Annual stock take is taken",
              two:"",
               description2: "Inventory is available",
              one:"",
               description3: "No  inventory is available",
              zero:""
              
            }],


            phase58: [
            {
              documents:[ "",
              "Approved Annual Budget",
              "Audited Financial Statements"
              ],

              description: "Budget and statement comply with SASA. Annual budget is implemented.",
              three:"",

               description1: "Budget and statement comply with SASA. Annual budget is implemented.",
              two:"",
               description2: "Budget and audited statements available but not SASA compliant. Financial committee",
              one:"",
               description3: "No annual budget Financial statements are not audited",
              zero:""
              
            },
            {
              documents:[ "",
              "Spend allocated provincial  funds on LTSM accordingly",
              "Spend allocated provincial  funds on Maintenance accordingly",
              "Spend allocated provincial  funds on Municipal Service accordingly"
              ],

              description: "Budget has been developed  in consultation with stakeholders Allocation has been spent according to the approved budgeted  allocated amount",
              three:"",

               description1: "Budget has been developed  in consultation with stakeholders Allocated funds have been spent on non-budgeted items without approval",
              two:"",
               description2: "Budget has been developed  in consultation with stakeholders",
              one:"",
               description3: "Allocated amounts have not been spent",
              zero:""
              
            },
            {
              documents: "Receipt books - branded",

              description: "Receipt available, branded and filed. SASAMS used.",
              three:"",

               description1: "Receipt available, branded and filed.",
              two:"",
               description2: "Unbranded receipt available.",
              one:"",
               description3: "Receipts not available",
              zero:""
              
            },
            {
              documents: "Requisition, Claim Forms and Invoices.",

              description: "Requisition, Claim Forms and Invoices  are filed as per provincial requirements. SASAMS used.",
              three:"",

               description1: "Requisition, Claim Forms and Invoices are filed as per provincial requirements.",
              two:"",
               description2: "Requisition, Claim Forms and Invoices are available but not properly filed",
              one:"",
               description3: "No records",
              zero:""
              
            }],


            phase59: [
            {
              documents: "A system to pay Petty Cash that is monthly reconciled ",
              

              description: "Petty cash  payment is  signed and approved as per policy and is reconciled against the",
              three:"",

               description1: "Petty cash  payment is  signed and approved as per policy",
              two:"",
               description2: "Petty cash claim  policy is available",
              one:"",
               description3: "No petty cash system",
              zero:""
              
            },
            {
              documents:"Monthly  Cash Book:  Statements of  Receipts and Payments",
              
              description: "Statements reconciled  monthly and signed Income and expenses are allocated to budget Follow up on any errors found done",
              three:"",

               description1: "Statements reconciled  monthly and signed Income and expenses are allocated to budget No follow ",
              two:"",
               description2: "Statements reconciled  monthly and signed",
              one:"",
               description3: "Statements not reconciled on a  monthly basis",
              zero:""
              
            },
            {
              documents: "Signatories:  EFT (Three people authorised to have PIN codes) / Cheques (Three signatories).",

              description: "SGB minutes showing three people authorised to have PIN codes) / Cheques (Three signatories).",
              three:"",

               description1: "",
              two:"",
               description2: "",
              one:"",
               description3: "No SGB minutes showing proof of three signatories",
              zero:""
              
            }],

            phase60: [
            {
              documents:[ "",
              "Drafting of Annual Academic Report",
              "Strategy to improve overall learner performance",
              "Strategy to improve learner performance in key subjects",
              "Setting of realistic targets"
              ],

              description: "The report, strategy and targets approved by the SGB and submitted to District. There is alignment of the report, strategy and targets.",
              three:"",

               description1: "The report, strategy and targets approved by the SGB and submitted to District. There is no alignment of the report, strategy and targets.",
              two:"",
               description2: "Strategy not different from everyday practice. Targets unrealistic.",
              one:"",
               description3: "No evidence",
              zero:""
              
            },
            {
              documents:[ "",
              "Procurement of relevant textbooks per learner and per grade",
              "Procurement of furniture",
              "Utilization of resources in the school"
              ],

              description: "A procurement plan in place. Budget adhered to. New stock added to the register. Purchases are on time.",
              three:"",

               description1: "Procurement done with no plan in place but budget adhered to.",
              two:"",
               description2: "Procurement done with no plan in place",
              one:"",
               description3: "Shortages of resources but funds available",
              zero:""
              
            },
            {
              documents: "Systems by parents to play an over site supporting role to effective learning",

              description: "Programmes for parents on supporting school. Quarterly meetings held to inform and strengthen parental support. Parents sign and comment on test and Homework books",
              three:"",

               description1: "Quarterly meetings held to inform and strengthen parental support. No comments on test and  Homework book",
              two:"",
               description2: "Impromptu programmes for parents on supporting school.",
              one:"",
               description3: "No programmes for parents on supporting school.",
              zero:""
              
            },
            {
              documents: "Reporting systems to hold staff and accountable",

              description: "Management plan in place for accounting meetings. Accounting reports available. Remedial plans put in place.",
              three:"",

               description1: "Management plan in place for accounting meetings. Accounting reports available. No remedial plans put in place.",
              two:"",
               description2: "Accounting sessions not recorded.",
              one:"",
               description3: "Accounting sessions not held.",
              zero:""
              
            },
            {
              documents: "Management plan for the school to provide progress report on learner performance to parents",

              description: "Management plan in place for reporting to parents. Reporting conducted. Remedial plans put in place.",
              three:"",

               description1: "Management plan in place for reporting to parents. Reporting conducted. No remedial plans put in place.",
              two:"",
               description2: "Learner performance reports sent to parents and no engagement with parents took place",
              one:"",
               description3: "No evidence",
              zero:""
              
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
