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
                      :items="doc.body.phase7"
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
                                  <strong>16.1. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        <strong>{{props.item.description}}</strong>
                      </td>
                      <td class="">
                        <strong>{{props.item.description1}}</strong>
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
                      <td class="">
                        <strong>{{props.item.description2}}</strong>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comments1"
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
                      :headers="headers10"
                      :items="doc.body.phase8"
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
                                  <strong>17.1. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <!-- <td>
          <v-data-table
            :headers="[{text:'First Name', value:'fname', sortable:false},
                      {text:'Last Name', value:'lname', sortable:false}
                      ]"
            :items="props.item.name"
            hide-actions                    
          >
            <template slot="items" scope="props">
              <td>{{props.item.fname}}</td>
              <td>{{props.item.lname}}</td>
            </template>
          </v-data-table>
        </td> -->
                      <td class="">
                        <strong>{{props.item.description}}</strong>
                      </td>
                      <td class="">
                        <strong>{{props.item.description1}}</strong>
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
                      <td class="">
                        <strong>{{props.item.description2}}</strong>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comments1"
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
                      :headers="headers11"
                      :items="doc.body.phase9"
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
                                  <strong>18. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        <strong>{{props.item.description}}</strong>
                      </td>
                      <td class="">
                        <div v-if="props.index === 0">
                          
                         <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Permanent" value="Permanent"></v-radio>
                            <v-radio label="Seconded" value="Seconded"></v-radio>
                            <v-radio label="Acting" value="Acting"></v-radio>
                          </v-radio-group>
             
                        </div>
                        <div v-else>
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Permanent" value="Permanent"></v-radio>
                            <v-radio label="Temporary" value="Temporary"></v-radio>
                          </v-radio-group>
                        </div>
                      </td>
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers12"
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
                      :headers="headers13"
                      :items="doc.body.phase10"
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
                                  <strong>19.1. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        <strong>{{props.item.description}}</strong>
                      </td>
                      <td class="px-0 py-0">
                        <v-data-table
                          :headers="[{text:'Filled', value:'filled', sortable:false},
                                    {text:'Vacant', value:'vacant', sortable:false},
                                    {text:'Total', value:'total', sortable:false}
                                    ]"
                          :items="doc.body.phase11"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <v-text-field
                                v-model="props.item.filled"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.vacant"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.total"
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

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers14"
                      :items="doc.body.phase12"
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
                                  <strong>19.2. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        <div v-if="props.index === 8 || props.index === 9">
                          <v-text-field
                                v-model="props.item.filled"
                                single-line
                                solo
                                flat
                                placeholder="Other: ..............."
                              ></v-text-field> 
                          
                        </div>
                        <div v-else>

                          <strong>{{props.item.description}}</strong>

                        </div>
                      </td>

                      <td class="px-0 py-0">
                        <v-data-table
                          :headers="[{text:'Filled', value:'filled', sortable:false},
                                    {text:'Vacant', value:'vacant', sortable:false},
                                    {text:'Total', value:'total', sortable:false}
                                    ]"
                          :items="doc.body.phase11"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <v-text-field
                                v-model="props.item.filled"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.vacant"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.total"
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

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>


                    <v-data-table
                      :headers="headers15"
                      :items="doc.body.phase14"
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
                      </td>
                     
                     <td>
                      
                                <v-flex>
                                  <strong>{{props.item.description}}</strong>
                                </v-flex>
                                <v-flex>
                                  <v-text-field
                                    v-model="props.item.comments"
                                    single-line
                                    solo
                                    flat
                                    placeholder>
                                  </v-text-field> 
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
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
                      :headers="headers16"
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
                      :headers="headers17"
                      :items="doc.body.phase15"
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
                                  <strong>21. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        <strong>{{props.item.typeOfSchool}}</strong>
                      </td>




                        <td class="px-0 py-0">
                        <v-data-table
                          :headers="[{text:'1', value:'1', sortable:false},
                                    {text:'2', value:'2', sortable:false},
                                    {text:'3', value:'3', sortable:false},
                                    {text:'4', value:'4', sortable:false},
                                    {text:'5', value:'5', sortable:false}
                                    ]"
                          :items="doc.body.phase13"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <v-text-field
                                v-model="props.item.one"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.two"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.three"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.four"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.five"
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
                          v-model="props.item.independentSchools"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td>
                        <v-text-field
                          v-model="props.item.total"
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
                      :headers="headers18"
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
                      :headers="headers19"
                      :items="doc.body.phase17"
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
                                  <strong>22. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                              
                      </td>
                      <td class="">
                        <strong>{{props.item.typeOfSchool}}</strong>
                      </td>

                        <td class="px-0 py-0">
                        <v-data-table
                          :headers="[{text:'Principal', value:'principal', sortable:false},
                                    {text:'DeputyPrincipal', value:'deputyPrincipal', sortable:false},
                                    {text:'HoD', value:'HoD', sortable:false},
                                    {text:'Teacher', value:'teacher', sortable:false}
                                    ]"
                          :items="doc.body.phase18"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <v-text-field
                                v-model="props.item.principal"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.deputyPrincipal"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.HoD"
                                single-line
                                solo
                                flat
                                placeholder
                              ></v-text-field> 
                            </td>
                            <td>
                              <v-text-field
                                v-model="props.item.teacher"
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

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>


                      </v-flex>
                </v-layout>

                <br />


              <!-- 
              ================================================================
              D. DISTRICT IMPROVEMENT PLAN
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>

                 <v-data-table
                      :headers="headers20"
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
                      :headers="headers21"
                      :items="doc.body.phase19"
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
                              
                      </td>
                      <td class="">
                        <strong>{{props.item.description}}</strong>
                      </td>
                      <td class="">
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
                      :headers="headers22"
                      :items="doc.body.phase20"
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
                      
                                
                                 
                              
                      </td>
                     
                      <td class="">
                        {{props.item.description}}
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
 
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                     <v-data-table
                      :headers="headers23"
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
                      :headers="headers24"
                      :items="doc.body.phase21"
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
                                  <strong>23.1. {{ props.index + 1 }}</strong>
                                </v-flex>    
                      </td>
                      <td class="">
                        {{props.item.mainElements}}
                      </td>
                      <td class="">
                        <v-text-field
                          v-model="props.item.stated"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>
                      <td class="">
                        <v-text-field
                          v-model="props.item.evidenceProvided"
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
                      :headers="headers25"
                      :items="doc.body.phase22"
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
                                  <strong>24. {{ props.index + 1 }}</strong>
                                </v-flex>    
                      </td>
                      <td class="">
                        <div v-if="props.index === 12">
                          <v-text-field
                                v-model="props.item.districtOfficials"
                                single-line
                                solo
                                flat
                                placeholder="Other. Please specify: ..............."
                              ></v-text-field> 
                          
                        </div>
                         <div v-if="props.index === 13">
                          <v-text-field
                                v-model="props.item.comments"
                                single-line
                                solo
                                flat
                                placeholder="Comments:"
                              ></v-text-field> 
                          
                        </div>
                        <div v-else>

                          {{props.item.description}}

                        </div>
                      </td>
                      <td class="">
                         <div v-if="props.index === 13">
                          
                        </div>
                        <div v-else>
                         <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                           </div>
                      </td>
                      <td class="">
                        <div v-if="props.index === 13">
                          
                        </div>
                        <div v-else>
                        <v-text-field
                          v-model="props.item.evidenceProvided"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                        </div>
                      </td>
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                    <!-- 
              ================================================================
              E. PROCUREMENT OF LTSM
              ================================================================
              -->

                 <v-data-table
                      :headers="headers26"
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
                      :headers="headers27"
                      :items="doc.body.phase23"
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
                                  <strong>25. {{ props.index + 1 }}</strong>
                                </v-flex>    
                      </td>
                      <td class="">
                        {{props.item.description}}
                      </td>
                      <td class="">
                        <v-text-field
                          v-model="props.item.comment"
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
                      :headers="headers28"
                      :items="doc.body.phase24"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="">
                        
                      </td>
                     
                      
                      <td class="">
                        <v-text-field
                          v-model="props.item.comment"
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
                      :headers="headers29"
                      :items="doc.body.phase25"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="">
                        <strong>{{props.item.description}}</strong>
                      </td>
                     
                      
                      <td class="">
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
                      :headers="headers30"
                      :items="doc.body.phase26"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="">
                        
                      </td>
                     
                      
                      <td class="">
                        <v-text-field
                          v-model="props.item.comment"
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
                      :headers="headers31"
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
                      :headers="headers32"
                      :items="doc.body.phase27"
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
                                  <strong>32. {{ props.index + 1 }}</strong>
                                </v-flex>    
                      </td>
                      <td class="">
                        <div v-if="props.index <= 15">
                          {{props.item.description}}
                        </div>
                        <div v-else>
                        <strong>Other. Please specify the subjects</strong>
                          <v-text-field
                          v-model="props.item.subject"
                          single-line
                          solo
                          flat
                          placeholder=""
                        ></v-text-field> 
                        </div>
                      </td>
                     
                      
                      <td class="">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment1"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment2"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment3"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment4"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment5"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment6"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field> 
                      </td>

                      <td class="">
                        <v-text-field
                          v-model="props.item.comment7"
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

                <!-- 
              ================================================================
              F. DISTRICT ROLES
              ================================================================
              -->

                 <v-layout xs12 wrap border>
                  <v-flex>
                

               

                
                <v-data-table
                      :headers="headers33"
                      :items="doc.body.phase29"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="" v-slot:no-data>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable"
                       
                          :headers="[{text:'33.1', value:'', sortable:false, width:'15%'},
                                    {text:'1. Planning', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase30"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 3">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>33.1. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="[{text:'33.2', value:'', sortable:false, width:'15%'},
                                    {text:'2. Support', value:'support', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase31"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <div v-if="props.index === 4">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>33.2. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="[{text:'33.3', value:'', sortable:false, width:'15%'},
                                    {text:'3. Oversight and accountability', value:'support', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase32"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <div v-if="props.index === 3">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>33.3. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="[{text:'33.4', value:'', sortable:false, width:'15%'},
                                    {text:'4. Public engagement', value:'support', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase33"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                            <td>
                              <div v-if="props.index === 2 || props.index === 3">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>33.4. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                              
                      </td>
                      
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

                     <!-- 
              ================================================================
              G. DISTRICT DELEGATION
              ================================================================
              -->


                
                <v-data-table
                      :headers="headers34"
                      :items="doc.body.phase29"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="" v-slot:no-data>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable"
                       
                          :headers="[{text:'34.1', value:'', sortable:false, width:'15%'},
                                    {text:'1. Human resource management', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase34"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 3">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>34.1. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="[{text:'34.2', value:'', sortable:false, width:'15%'},
                                    {text:'2. School governance', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase35"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 2">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>34.2. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="[{text:'34.3', value:'', sortable:false, width:'15%'},
                                    {text:'3. Financial management', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase36"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 3">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>34.3. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="[{text:'34.4', value:'', sortable:false, width:'15%'},
                                    {text:'4. Are Delegations:', value:'planning', sortable:false, width:'35%'},
                                    {text:'G', value:'g', sortable:false, align:'center', width:'10%'},
                                    {text:'Y', value:'y', sortable:false, align:'center', width:'10%'},
                                    {text:'R', value:'r', sortable:false, align:'center', width:'10%'},
                                    {text:'Comments/Evidence', value:'Comments/Evidence', sortable:false, width:'20%'}
                                    ]"
                          :items="doc.body.phase37"
                          hide-actions                    
                        >
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 8 || props.index === 9">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>34.4. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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

                          </td>
                      
                     

                      

                      
                    </template>

                    <template v-slot:no-data>
                    <div :value="true" class="text-xs-center">
                        No Form Input Fields</div>
                    </template>
                    </v-data-table>

              <!-- 
              ================================================================
              H. DISTRICT ORGANISATION AND FUNCTIONS
              ================================================================
              -->


                
                <v-data-table
                      :headers="headers35"
                      :items="doc.body.phase29"
                      hide-actions
                      class="elevation-1"
                    >
                    <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>

                    <template v-slot:items="" v-slot:no-data>
                      
                     
                     <td class="px-0 py-0">

                       <v-data-table
                       class="mytable"
                       
                          :headers="subheaders"
                          :items="doc.body.phase38"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 26">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>35.1. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders1"
                          :items="doc.body.phase39"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              
                              <v-flex>
                                  <strong>35.2. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders2"
                          :items="doc.body.phase40"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              
                              <v-flex>
                                  <strong>35.2.7. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders3"
                          :items="doc.body.phase41"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 9">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>35.2. {{ props.index + 9 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders4"
                          :items="doc.body.phase42"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 12">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>35.3. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders5"
                          :items="doc.body.phase43"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 24">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>35.4. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders6"
                          :items="doc.body.phase44"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                             <td>
                              <div v-if="props.index === 3 || props.index === 4">
                         
                        </div>
                        <div v-else>
                              <v-flex>
                                  <strong>35.5. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 </div>
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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
                       class="mytable"
                       
                          :headers="subheaders7"
                          :items="doc.body.phase45"
                          hide-actions                    
                        >
                        <template slot="headerCell" slot-scope="props">
                    
                        <template>
                            <span v-html="props.header.text" v-on="on"></span>
                        </template>
                        
                    
                    </template>
                          <template slot="items" scope="props">
                            <td>
                             
                              <v-flex>
                                  <strong>35.6. {{ props.index + 1 }}</strong>
                                </v-flex>
                                 
                            </td>
                            <td >
                              {{props.item.planning}}
                            </td>
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




              </v-card-text>



              <!--
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              ++  DISTRICT PLANNING, MANAGEMENT AND MONITORING TOOL TO BE FILLED IN BY MANAGERS      ++
              ++  RESPONSIBLE FOR DISTRICT OPERATIONS FOR TERMS 2-4                                  ++ 
              ++                                                                                     ++
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
              -->



 






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
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Please indicate the number of CS<br /> posts that are filled and unfilled.</strong>",
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

        headers10: [
        {
          text: "<strong>17.</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Please indicate the number of Public<br/> Service Staff that are filled and unfilled.</strong>",
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

        headers11: [
        {
          text: "<strong>18.</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Please indicate the number and employment status of the following district officials.</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],
        headers12: [
        {
          text: "<strong>19.</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Please indicate the number of approved posts and subject advisors per subject.</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers13: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Phase</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of approved posts</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],
        headers14: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Subjects</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of posts</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers15: [
        {
          text: "<strong>20.</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Do all the officials have job descriptions and work plans? (if no please elaborate)</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>YES / NO</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers16: [
        {
          text: "<strong>21.</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Please indicate the number of schools in the district (per type of school).</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers17: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Type of school</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of PUBLIC SCHOOLS by QUINTILE</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of <br />INDEPENDENT<br /> SCHOOLS</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Total</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers18: [
          {
          text: "<strong>22.</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Please indicate the number of vacant posts at Public school level (per type of school).</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers19: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Type of school</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of vacant posts</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers20: [
        {
          text: "<strong>D. DISTRICT IMPROVEMENT PLAN</strong> <br /> <i>The following questions relate to the district improvement plan (DIP). Please select the appropriate response by making an (X) in the correct box OR completing the requested information.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      headers21: [
        {
          text: "<strong>23.</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "-",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Yes/No</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

      headers22: [
        {
          text: "<strong>23.1</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>If the answer to question 23 is yes, what is the status of the DIP? Please<br/> select the appropriate response by making an (X) in the correct box.</strong>",
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
        headers23: [
           {
          text: "<strong>23.2</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "If the answer to question <strong>23</strong> is yes, <strong>please indicate the main elements of the DIP</strong>. This should be substantiated<br/> by evidence. The features that have been mentioned should be marked with an (X). Further, there should be an indication<br/> of what evidence was provided.",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
       headers24: [
        {
          text: "-",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Main elements of the DIP</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Stated?</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Evidence provided?</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers25: [
        {
          text: "<strong>24</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>What do the district officials do when they visit schools?</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Yes/No</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Evidence provided?</strong>",
          align: "center",
          sortable: false,
          value: ""
        }],

        headers26: [
        {
          text: "<strong>E. PROCUREMENT OF LTSM</strong> <br /> <i>The following questions relate to services provided by the district in the procuring of LTSM. Please select the appropriate<br /> response by making a (X) in the correct box OR complete the requested information.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ], 
      headers27: [
        {
          text: "<strong>25</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>What role does your district play in the provision of LTSM to schools? </strong><br />  <i>Please select the appropriate response by making an (X) in the correct box.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      headers28: [
        {
          text: "<strong>28</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Which officials are responsible for this function/these functions? </strong>  <i>Please indicate the designation.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
       headers29: [
        {
          text: "-",
          align: "center",
          sortable: false,
          value: "",
          width: "80%"
        },
        {
          text: "Yes/No",
          align: "center",
          sortable: false,
          value: "",
          width: "20%"
        }],

        headers30: [
        {
          text: "<strong>31</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>How many schools have been provided with textbooks in the district?</strong>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      headers31: [
           {
          text: "<strong>32</strong>",
          align: "center",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: " <strong>Please indicate the number of schools (in the district) that require (have a shortage of) books<br/> (DBE workbooks and CAPS-aligned textbooks) per subject and Grade.</strong> ",
          align: "left",
          sortable: false,
          value: ""
        }
      ], 

      headers32: [
        {
          text: "",
          align: "center",
          sortable: false,
          width: "15%"
        },
           {
          text: "<strong>Subject</strong>",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.R</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.1-3</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.4</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.5</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.6</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.10</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.11</strong> ",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: " <strong>Gr.12</strong> ",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      
      headers33: [
        
        {
          text: "<strong>33. F. DISTRICT ROLES<br /> The following relate to district roles. Please indicate the status of each by marking with a (X) in the appropriate box,<br /> and provide supporting evidence</strong>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      

 

      headers34: [
        
        {
          text: "<strong>G. DISTRICT DELEGATIONS</strong> <br /> <i>The following relate to district delegations. Please indicate the status of each by marking with a (X) in the appropriate<br /> box, and provide supporting evidence</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers35: [
        
        {
          text: "<strong>H. DISTRICT ORGANISATION AND FUNCTIONS</strong> <br /> <i>The following relate to district organisation and functions. Please indicate the status of each by marking with a (X) in the<br /> appropriate box, and provide supporting evidence.</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      headers36: [
        {
          text: "<strong>10.</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Please indicate the post filled in the current term in terms of vacancies identified at the start of<br /> the year - of approved posts and subject advisors per subject.</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],

        headers37: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Phase</strong>",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of approved posts</strong>",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Subjects (please fill-in)</strong>",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "<strong>Number of Advisors</strong>",
          align: "left",
          sortable: false,
          value: ""
        }],

         headers38: [
        
        {
          text: "<strong>11. B. DISTRICT ROLES</strong> <br /> The following relate to district roles. Please indicate the status of each by marking with a (X) in the appropriate box, and provide supporting evidence The following relate to district roles. Please indicate the status of each by marking with a (X) in the appropriate box, and provide supporting evidence</i>",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      

        headers40: [
        {
          text: "11.1",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>1. Planning</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers41: [
        {
          text: "11.2",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>2. Support</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers42: [
        {
          text: "11.3",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>3. Oversight and accountabilit</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers43: [
        {
          text: "11.4",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>4. Public engagement</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
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
          text: "12.1",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>1. Human resource management</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers46: [
        {
          text: "12.2",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>2. School governance </strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers47: [
        {
          text: "12.3",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>3. Financial management </strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        }],

        headers48: [
        {
          text: "12.4",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "<strong>4. Are Delegations: </strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
        },
        {
          text: "<strong>Term 2</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 3</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Term 4</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "20%"
        },
        {
          text: "<strong>Comments</strong>",
          align: "left",
          sortable: false,
          value: "",
          width: "15%"
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

            phase7: [
            {
              description:"District Director",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"CES/Deputy Directors",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Circuit Managers",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"DCES",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Subject Advisors (SES)",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }],

            phase8: [
            {
              description:"Deputy Director",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Assistant Director",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Chief Admin Advisor",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Chief Accounting Clerk",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Chief HR Officer",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Chief Provisional Admin Officer",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Chief Registry Clerk",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Senior Admin Officer",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Secretary",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Admin Officer",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Personal Assistant",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Accounting Clerk",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"HR Officer",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Provision Admin Officer",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Registry Clerk",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Typist",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Operator",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Network Controller",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Librarian Assistant",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Messenger",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Telecom Operator",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Heavy Duty Driver",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Driver",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Factotum",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"Cleaner",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }, 
            {
              description:"General worker",
              description1:"Filled posts",
              comments:"",
              description2:"Unfilled posts",
              comments1:""
            }],

            phase9: [
            {
              description:"District Director",
              boolean:""
            },
            {
              description:"CES/Deputy Directors",
              boolean:""
            },
            {
              description:"Circuit Managers",
              boolean:""
            },
            {
              description:"Administrative staff",
              boolean:""
            },
            {
              description:"DCES",
              boolean:""
            },
            {
              description:"Subject Advisors",
              boolean:""
            },
            {
              description:"Secretary",
              boolean:""
            }], 

            phase10: [
            {
              description:"Foundation"
            },
            {
              description:"Intermediate"
            },
            {
              description:"Senior"
            },
            {
              description:"FET"
            },
            {
              description:"Psychologist"
            },
            {
              description:"Social Worker"
            },
            {
              description:"Physiotherapist"
            },
            {
              description:"Speech Therapist"
            },
            {
              description:"Occupational Therapist"
            },
            {
              description:"Professional Nurse"
            }],

            phase11: [
            {
              filled:"",
              vacant:"",
              total:""
            }], 
  

            phase12: [
            {
              description:"Mathematics"
            },
            {
              description:"Languages"
            },
            {
              description:"Physical Science"
            },
            {
              description:"Technology"
            },
            {
              description:"Accounting"
            },
            {
              description:"Geography"
            },
            {
              description:"History"
            },
            {
              description:"Life Sciences"
            },
            {
              description:""
            },
            {
              description:""
            }],

            phase13: [
            {
              filled:"",
              vacant:"",
              total:""
            }],
            
            phase14: [
            {
              description:"Please Elaborate.",
              comments:"",
              boolean:""
            }],

            phase15: [
            {
              typeOfSchool:"Primary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Intermediate",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Combined",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Junior Secondary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Secondary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Senior Secondary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Special Schools",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"ECD Centres",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Total",
              number:"",
              indepentSchools:"",
              total:""
            }],

            phase16: [
            {
              one:"",
              two:"",
              three:"",
              four:"",
              five:""
            }],


            phase17: [
            {
              typeOfSchool:"Primary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Intermediate",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Combined",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Junior Secondary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Secondary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Senior Secondary",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Special Schools",
              number:"",
              indepentSchools:"",
              total:""
            },
            {
              typeOfSchool:"Total",
              number:"",
              indepentSchools:"",
              total:""
            }],

            phase18: [
            {
              principal:"",
              deputyPrincipal:"",
              HoD:"",
              teacher:""
            }],

             phase19: [
            {
             description:"Does the district have a district improvement plan (DIP)?"
            }],

             phase20: [
            {
             description:"Development phase",
             comments:""
            },
            {
             description:"Finalised but not yet implemented",
             comments:""
            },
            {
             description:"Implementation phase",
             comments:""
            }],

             phase21: [
            {
             mainElements:"Alignment to the Minister’s Delivery Agreement and Action Plan to 2014",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Alignment to own provincial priorities, strategies and targets",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Based on school improvement plans or annual academic reports",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on curriculum provision and resources",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Consists of the implementation of CAPS",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Consists of curriculum coverage",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Consists of in-school (classroom) monitoring",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes curriculum monitoring tools",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Entails data for each of the schools including a support plan for subjects that are found to be more challenging",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes plans to ensure credible curriculum choice decisions by schools",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on the provisioning and utilisation of LTSMs",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes retrieval of textbooks",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on the quality of teaching & learning, and teacher development",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Entails detailed plans for school visits by district/circuit officials",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes teacher and SMT development",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Consists of a timetable for collection of key data and feedback to schools and SMTs",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes monitoring teacher attendance in class",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on learner achievement",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes a learner performance improvement plan for the district",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes plans to support schools identified as underperforming (and served with a written notice in terms of Section 58b of SASA) including mentorship",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Includes subject-specific interventions",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on ANA analysis, preparation and support to schools",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on NSC analysis, preparation and support to schools",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Entails infrastructure plans",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Focused on leadership, management and communication",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Entails clearly outlined responsibilities for individuals and teams to carry out the tasks",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Takes into account capacity/responsible officials",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Takes into account the role of SGBs (as well as their training)",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Performance measures",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Accountability system",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Budget",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Timelines",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Monitoring and reporting system",
             stated:"",
             evidenceProvided:""
            },
            {
             mainElements:"Teacher utilisation at District and School levels",
             stated:"",
             evidenceProvided:""
            }],

             phase22: [
            {
             description:"Identify poor performing schools?",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Monitor compliance? Please elaborate.",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking management/financial documents, including school policies, registers",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking educator planning and preparation documents",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking school assessment records, e.g. promotion and term schedules",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking educator assessment records",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking school infrastructure including maintenance",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking LTSM management (ordering, control and retrieval)",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking the SGB, including election of members",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Validation of EMIS information",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking HR matters",
             boolean:"",
             evidenceProvided:""
            },
            {
             description:"Checking matters related to learner discipline",
             boolean:"",
             evidenceProvided:""
            },
            {
             districtOfficials:"",
             boolean:"",
             evidenceProvided:""
            },
            {
             comments:""
            }],

             phase23: [
            {
             description:"Ensure that all schools have an LTSM policy",
             comment:""
            },
            {
             description:"Receive the LTSM order from schools",
             comment:""
            },
            {
             description:"Provide the LTSM order to the province",
             comment:""
            },
            {
             description:"Track the progress with service providers about delivery of LTSM",
             comment:""
            },
            {
             description:"Pay (service providers) for the LTSM",
             comment:""
            },
            {
             description:"Monitor LTSM requisition in all Section 21 schools",
             comment:""
            }],

            phase24: [
            {
             comment:""
            }],

             phase25: [
            {
             description:"Does the district have a record of the textbooks ordered by each of the schools in the district?",
             boolean:""
            },
            {
             description:"Does the district have a record of the textbooks delivered to each of the schools in the district?",
             boolean:""
            }],

            phase26: [
            {
             comment:""
            }],


             phase27: [
            {
             description:"Grade R workbook",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Gr.1-3 Graded Readers (10 packs)",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Gr.1-3 Basic Books",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Gr.1-3 Phonics",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Natural Sciences workbook",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Life Skills",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Mathematics/Numeracy",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"English FAL",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Home Language",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Physical Sciences",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Life Sciences",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Mathematics Literacy",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Accounting Mind the Gap Study Guide",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Geography Mind the Gap Study Guide",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Economics Mind the Gap Study Guide",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             description:"Life Sciences Mind the Gap Study Guide",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            },
            {
             subject:"",
             comment:"",
             comment1:"",
             comment2:"",
             comment3:"",
             comment4:"",
             comment5:"",
             comment6:"",
             comment7:""
            }],

             phase29: [
            {
             
            }],

            phase30: [
            {
              planning:"Collecting and analysing school, circuit and district data to inform planning.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Assisting schools with compiling school improvement or development plans.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Integrating school improvement or development plans into district plans.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase31: [
            {
              planning:"Providing an environment and targeted support for education institutions within the district to do their work in line with education law and policy. enabling",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Assisting school principals and educators to improve the quality of teaching and learning in their institutions by school visits, classroom observation, consultation, cluster meetings, suitable feedback reports and other means.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Serving as an information node for education institutions on education law, policy and administration.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Facilitating ICT connectivity in all institutions within the district. Providing an enabling environment and organising provision and support for the professional development of managers, educators and administrative staff members.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase32: [
            {
              planning:"Holding principals of education institutions in the district to account for their performance.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Accounting to the PED for the performance of education institutions in the district.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Accounting to the PED in terms of performance agreements that stipulate the roles, functions and responsibilities of district officials in line with relevant policies.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase33: [
            {
              planning:"Informing and consulting with the public in an open and transparent manner.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Upholding Batho Pele principles in all dealings with the public.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"TOTAL",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase34: [
            {
              planning:"Authority to appoint any person or to promote or transfer any educator (including substitutes) or public servant under the District Director’s area of jurisdiction.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"In the case of a new school, until the relevant SGB is established, authority to appoint, promote or transfer a staff member in a temporary capacity to any suitable post on the school’s establishment.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Authority to institute disciplinary proceedings and impose a sanction on an educator or public servant within the District Director’s area of jurisdiction in accordance with the relevant disciplinary code and procedures.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase35: [
            {
              planning:"Authority to dissolve an ineffective SGB.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Authority to allocate or withdraw, on reasonable grounds, a function from a SGB.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

             phase36: [
            {
              planning:"Authority to manage the assets and liabilities of the PED in the district, including the safeguarding and maintenance of assets;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Authority to procure goods and services, including equipment, up to a value of R500 000;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Authority to take appropriate disciplinary steps against any official under the District Director’s authority who commits an act of financial misconduct in terms of the PFMA.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase37: [
            {
              planning:"Communicated by letter to the delegate;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Circulated within the PED, published on the PED’s website and made available, on request, to a principal, SGB chairperson or member of the public;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Clear and precise;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Appropriate to the function concerned",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Consistent with the appropriate legislation;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Accompanied by sufficient resources;",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Subject to appropriate limitations; and",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Accompanied by a reporting schedule.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase38: [
            {
              planning:"Provincial curriculum policies and guidelines are implemented in accordance with national mandates",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Leadership and direction for curriculum management takes place",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Teachers are supported and orientated on the Learning Area/Programme/Subject Content",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Work Plans and Work Plan agreements are developed and implemented",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Curriculum materials are developed and distributed to schools",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Teachers are provided with on- site support",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Teachers are assisted in curriculum planning and delivery",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Professional development of teachers is promoted",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Curriculum structures are established and maintained",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Communication strategies are developed",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Statistical databases are established and maintained",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Curriculum programmes are monitored and evaluated",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"A recording and reporting instrument has been developed by the curriculum official in support of the purpose identified",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Successes and challenges are identified in the implementation of the CAPS",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Good classroom practices are recognised as well as areas in the need of improvement",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Reports are available for monthly/weekly/quarterly school visits",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"CAPS training workshops have taken place",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Teachers are supported for continuous growth and development",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"The secondary school improvement plan is in place and being implemented",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Dinaledi schools received additional training and resources",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"The MST strategy is implemented",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Foundations for Learning (milestones) implemented in primary schools",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Systemic Evaluation results for baseline of LA analysis available",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"ANA results are analysed",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Learners receive their ANA reports.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"tem analysis of ANA is disseminated.",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase39: [
            {
              planning:"What is the frequency of DMT meetings?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Are minutes of the DMT meetings available?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Does the District Director empower personnel during these meetings?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"What intervention strategies are proposed at DMT meetings?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"How are those interventions implemented?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Training and support is given to HoDs and Deputy Principals",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase40: [
            {
              planning:"- Finance",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"- Roles and responsibilities",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"- Policy development",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"- All basic building blocks in schools (timetables, budget, rosters, schedules, etc.)",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],


            phase41: [
            {
              planning:"Parents are made aware of the Action Plan and Schooling 2014?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"All schools received their funding allocation?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"School infrastructure conductive for teaching and learning?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Specialist services are available to schools",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Monitoring and support services been provided to schools through e-Education?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"All schools received the necessary resources in time? When?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Learner attendance is closely monitored?",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"District database of learner attendance statistics is available",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Learner attendance is analysed, intervention strategies take place and support is given where necessary",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase42: [
            {
              planning:"District is supporting Grade 12 learners through distribution of study guides and examples of examination papers",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Guidance to Grade 12 learners given through radio and television",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Support given to Grade 10 and 11 learners to prepare for Grade 12",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Motivating Grade 12 learners",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Has a district-wide Grade 12 examination report",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Every learner has access to a minimum set of textbooks and workbooks required according to the national policy",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Access to computers for learners increased",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Access to libraries for all learners",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Functional Learner Representative Councils in all secondary schools",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Overall well-being of learners are considered through programmes such as Nutrition, Scholar Transport, School Health Programmes and Sport",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Education White Paper 6 is implemented in all schools (Full- service schools)",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Longitudinal studies of learners achievement takes place",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase43: [
            {
              planning:"Database on schools is managed",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Records of district units are kept",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Critical information for EMIS is collected and verified",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Professional development needs of staff members are assessed through questionnaires, informal methods and development appraisals",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Staff development activities are supported",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Staff development success/challenges/problems are evaluated in terms of the goals of the institutions and Department",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Capacity building programmes for SGBs and SMTs are assessed",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Support is provided for professional growth of educators within an appraisal programme",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Projects are managed within the set budget",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Principals/SGBs/SMTs are advised on budget planning and procurement processes",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Records are maintained to disseminate information got financial accountability",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"All circulars and other relevant information are made available to staff members and schools",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Liaises with other education offices for the purpose of coordination",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Procurement of goods and services take place",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Strategic plans are prepared with the intention of achieving the goals of the Department",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Management plans are prepared to achieve targets as well as the needs of the learners and school staff",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Guidance on strategic planning is provided to institutions",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Policies are formulated for operational reasons",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Policies are disseminated to staff members and schools",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Policies are analysed",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Policies are implemented",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Policy compliance is monitored",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Circuit Managers are trained to provide effective support and supervision to Cluster Leaders and institutions",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"General office administration in circuits",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase44: [
            {
              planning:"Administering Annual National Assessment (ANA)",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Administering National Senior Certificate (NSC)",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Administering Continuous Assessment (CASS)",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sub Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Total",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase45: [
            {
              planning:"Consults with stakeholders and clients",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Sets and keeps to service standards",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Increases access to services",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Ensures courteous behaviour",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Provides the requires information to the public",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Acts openly and honestly",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Redress sub-standard performance",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            },
            {
              planning:"Ensures value for money",
              green:"",
              yellow:"",
              red:"",
              commments:"",
            }],

            phase46: [

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
              physicalAddress:[ "","SAPO* Village","PO Box","Private Bag","Post Office","Post Code"],
              comments: "",
              comments1:[ "","","","",""]
            },
            {
              description: "Telephone Number",
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

          phase47: [
            {
              phase:"Foundation",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Intermediate",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Senior",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"FET",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Psychologist",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Social Worker",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Physiotherapist",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Occupational Therapist",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Speech Therapist",
              approvedPosts:"",
              subjects:"",
              advisors:""
            },
            {
              phase:"Professional Nurse",
              approvedPosts:"",
              subjects:"",
              advisors:""
            }],

            phase48: [
            {
              planning:"Collecting and analysing school, circuit and district data to inform planning.",
              comments:""
            },
            {
              planning:"Assisting schools with compiling school improvement or development plans.",
              comments:""
            },
            {
              planning:"Integrating school improvement or development plans into district plans.",
              comments:""
            },
            {
              planning:"    Sub Total",
              comments:""
            }],

             phase49: [
            {
              green:"",
              yellow:"",
              red:"",
            }],

            phase50: [
            {
              planning:"Providing an enabling environment and targeted support for education institutions within the district to do their work in line with education law and policy.",
              comments:""
            },
            {
              planning:"Assisting school principals and educators to improve the quality of teaching and learning in their institutions by school visits, classroom observation, consultation, cluster meetings, suitable feedback reports and other means",
              comments:""
            },
            {
              planning:"Serving as an information node for education institutions on education law, policy and administration.",
              comments:""
            },
            {
              planning:"Facilitating ICT connectivity in all institutions within the district. Providing an enabling environment and organising provision and support for the professional development of managers, educators and administrative staff members.",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            }],


            phase51: [
            {
              planning:"Holding principals of education institutions in the district to account for their performance.",
              comments:""
            },
            {
              planning:"Accounting to the PED for the performance of education institutions in the district.",
              comments:""
            },
            {
              planning:"Accounting to the PED in terms of performance agreements that stipulate the roles, functions and responsibilities of district officials in line with relevant policies.",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            }],

             phase52: [
            {
              planning:"Informing and consulting with the public in an open and transparent manner.",
              comments:""
            },
            {
              planning:"Upholding Batho Pele principles in all dealings with the public.",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            },
            {
              planning:"Total",
              comments:""
            }],


            phase53: [
            {
              planning:"Authority to appoint any person or to promote or transfer any educator (including substitutes) or public servant under the District Director’s area of jurisdiction.",
              comments:""
            },
            {
              planning:"In the case of a new school, until the relevant SGB is established, authority to appoint, promote or transfer a staff member in a temporary capacity to any suitable post on the school’s establishment.",
              comments:""
            },
            {
              planning:"Authority to institute disciplinary proceedings and impose a sanction on an educator or public servant within the District Director’s area of jurisdiction in accordance with the relevant disciplinary code and procedures.",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            }],

            phase54: [
            {
              planning:"Authority to dissolve an ineffective SGB",
              comments:""
            },
            {
              planning:"Authority to allocate or withdraw, on reasonable grounds, a function from a SGB",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            }],

             phase55: [
            {
              planning:"Authority to manage the assets and liabilities of the PED in the district, including the safeguarding and maintenance of assets; ",
              comments:""
            },
            {
              planning:"Authority to procure goods and services, including equipment, up to a value of R500 000;",
              comments:""
            },
            {
              planning:"Authority to take appropriate disciplinary steps against any official under the District Director’s authority who commits an act of financial misconduct in terms of the PFMA. ",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            }],

             phase56: [
            {
              planning:"Communicated by letter to the delegate.",
              comments:""
            },
            {
              planning:"Circulated within the PED, published on the PED’s website and made available, on request, to a principal, SGB chairperson or member of the public.",
              comments:""
            },
            {
              planning:"Clear and precise.",
              comments:""
            },
            {
              planning:"Appropriate to the function concerned.",
              comments:""
            },
            {
              planning:"Consistent with the appropriate legislation.",
              comments:""
            },
            {
              planning:"Accompanied by sufficient resources.",
              comments:""
            },
            {
              planning:"Subject to appropriate limitations. ",
              comments:""
            },
            {
              planning:"Accompanied by a reporting schedule.",
              comments:""
            },
            {
              planning:"Sub Total",
              comments:""
            },
            {
              planning:"Total",
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

.green-bg {

  background-color: green;

}
.yellow-bg {

  background-color: yellow;

}
.red-bg {

  background-color: red;

}

.card-border {
  border: 2px solid #dddddd;
  padding: 5px 10px;
}

.mytable table thead tr th:nth-child(3) {
  background: green;
}
.mytable table thead tr th:nth-child(4) {
  background: yellow;
}
.mytable table thead tr th:nth-child(5) {
  background: red;
}
.mytable2 table thead tr th:nth-child(1) {
  background: green;
}
.mytable2 table thead tr th:nth-child(2) {
  background: yellow;
}
.mytable2 table thead tr th:nth-child(3) {
  background: red;
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
