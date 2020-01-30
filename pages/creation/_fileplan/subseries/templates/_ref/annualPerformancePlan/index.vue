<template>
<div id="annualPerformancePlan">
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
    <v-layout justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-layout wrap>
          
          <v-flex xs12>
            <h3 class="text-xs-center">ANNUAL PERFORMACE PLAN QUARTERLY REPORT FORM</h3>
            <br />
          </v-flex>
          <v-card xs12>
            <v-card-text >
          <v-flex xs12>
            <p>This Annual Performance Plan</p>
              <ul>
                <li>was developed by the management of the xxxx Education Department under the guidance of the Member of the Executive Council for Education (province);</li>
                <li>was prepared in line with the current Strategic Plan of the xxx Education Department; and</li>
                <li>accurately reflects the performance targets which the xxxx Education Department will endeavour to achieve given the resources made available in the budget for 20xx/yy.</li>
                </ul>

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
            </v-card-text>
            
            
          </v-card>
          

          

          <v-flex xs12>
            <br/>
            <v-data-table
              :headers="headers3"
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

            </v-data-table>
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
                <td class="text-xs-left">

                  <div v-if="props.index == 0 || props.index == 6 || props.index == 7">
                    <v-layout wrap>
                      <v-flex>
                        <div><h3>{{props.item.description}}</h3></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    {{props.item.description}}
                  </div>
                 
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <div v-if="props.index == 0 || props.index == 7">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                  <v-text-field
                    v-model.number="props.item.actual1"
                    single-line
                    solo
                    flat
                    input type="number"
                    
                  ></v-text-field>
                   </div>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <div v-if="props.index == 0 || props.index == 7">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                  <v-text-field
                    v-model="props.item.actual2"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                  </div>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <div v-if="props.index == 0 || props.index == 7">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                  <v-text-field
                    v-model="props.item.actual3"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                  </div>
                </td>
                <td class="text-xs-right px-0 py-0">
                   <div v-if="props.index == 0 || props.index == 7">
                     
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                  <v-text-field
                    v-model="props.item.estimate1"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                  </div>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <div v-if="props.index == 0 || props.index == 7">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                  <v-text-field
                    v-model="props.item.estimate2"
                    single-line
                    solo
                    flat
                    input type="number"
                    
                  ></v-text-field>
                  </div>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <div v-if="props.index == 0 || props.index == 7">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                  <v-text-field
                    v-model="props.item.estimate3"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                  </div>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers1"
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

            </v-data-table>


            <v-data-table
              :headers="headers2"
              :items="doc.body.tr1"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual1"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual2"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual3"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimate1"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimate2"
                    single-line
                    solo
                    flat
                    input type="number"
                  ></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>
          <v-flex xs12>



            <!-- 
            =================================================
            PART B: PROGRAMME AND SUB-PROGRAMME PLANS
            ================================================= 
            -->

        <h3>PART B: PROGRAMME AND SUB-PROGRAMME PLANS</h3>

<h4>1.	Programme 1: Administration</h4>

<strong>Purpose:</strong> To provide overall management of, and support to, the education system in accordance with the National Education Policy Act, the Public Finance Management Act and other relevant policies

<h4>Analysis per programme:</h4>

<div class="pborder">This analysis by programme should include some narrative that expands on what was said in Part B section 3 above. Repetition of what was argued in that previous section should be minimised. Rather, the emphasis should be on expanding on specific issues that feature prominently under the programme. Clearly certain programmes warrant far more discussion than others.</div> 

<h4>Sub-programmes</h4>

<h4>1.1.	Strategic Objective and Annual Targets for .......</h4>

It is important to list targets for the budget year and over the MTEF period for each strategic objective specified for this programme in the Strategic Plan.

<br/>
          </v-flex>

           <v-flex xs12>

          <v-data-table
              :headers="headers4"
              :items="doc.body.tr2"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.planTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTerm"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
            1.2.	 Strategic Objectives and Quarterly Targets
            ================================================= 
            -->

          <h4>1.2.	 Strategic Objectives and Quarterly Targets</h4>

           <v-flex xs12>

          <v-data-table
              :headers="headers5"
              :items="doc.body.tr3"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
  
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget "
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

                

                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
            Programme Performance Measures Annual Targets for .......
            ================================================= 
            -->

          <h4>Programme Performance Measures Annual Targets for .......</h4>

           <v-flex xs12>

          <v-data-table
              :headers="headers6"
              :items="doc.body.tr4"
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
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.programmePerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
  
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual2 "
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimated1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimated2"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimated3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

                

                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            <h4>1.3.	Performance and Expenditure Trends</h4>
            <br />
          </v-flex>


 <!-- 
            =================================================
            1.4.	Quarterly Targets for .......
            ================================================= 
            -->

          <h4>1.4.	Quarterly Targets for .......</h4>

           <v-flex xs12>

          <v-data-table
              :headers="headers7"
              :items="doc.body.tr5"
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
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.programmePerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
  
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget "
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

                

                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            
            <br />
          </v-flex>



          <!-- 
            =================================================
            1.4	Reconciling performance targets with the budget and MTEF  
            ================================================= 
            -->



           <v-flex xs12>
             <h4>1.4	Reconciling performance targets with the budget and MTEF</h4>
            <br/>
            <v-data-table
              :headers="headers9"
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

            </v-data-table>
            <v-data-table
              :headers="headers8"
              :items="doc.body.tr6"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual2"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimate1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimate2"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimate3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

<!-- ======================================= -->


          <v-flex xs12>
            <br/>
            <v-data-table
              :headers="headers10"
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

            </v-data-table>
            <v-data-table
              :headers="headers11"
              :items="doc.body.tr7"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>
<!-- ======================================= -->

          <v-flex xs12>
            <br/>
            <v-data-table
              :headers="headers12"
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

            </v-data-table>
            <v-data-table
              :headers="headers13"
              :items="doc.body.tr8"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.admin"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.POS"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.indep"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.spec"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.block1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.block2"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.block3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.block4"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.total"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

           <!-- 
            =================================================
            2.	Programme 2: Public Ordinary Schools
            ================================================= 
            -->



           <v-flex xs12>
             <h4>2.	Programme 2: Public Ordinary Schools</h4>
             <p><strong>Purpose:</strong>  To provide public ordinary education from Grades 1 to 12, in accordance
                with the South African Schools Act  and White Paper 6 on inclusive education.</p>

              <h4>Analysis per programme:</h4>

              <br/>

              <h4>Sub-programmes</h4>

              <br/>

              <h4>2.1	Strategic Objective and Annual Targets for .......</h4>

           </v-flex>
             <v-flex xs12>
            <br/>
           
            <v-data-table
              :headers="headers14"
              :items="doc.body.tr9"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicPlanTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            <strong>Optional:</strong> <i>Provinces may insert a table on programme performance indicators here.</i>
            <br />
          </v-flex>


          <!-- 
            =================================================
            2.2	Performance and Expenditure Trends
            ================================================= 
            -->



           <v-flex xs12>
             <h4>2.2	Performance and Expenditure Trends</h4>
            <br/>
                       <v-data-table
              :headers="headers15"
              :items="doc.body.tr10"
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
                <td class="text-xs-left">
                 <v-text-field
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

           <!-- 
            =================================================
            2.3	Quarterly targets for .......
            ================================================= 
            -->



           <v-flex xs12>
             <h4>2.3	Quarterly targets for .......</h4>
            <br/>
                       <v-data-table
              :headers="headers16"
              :items="doc.body.tr11"
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
                <td class="text-xs-left">
                 <v-text-field
                    v-model="props.item.programmePerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>
        
        <!-- 
            =================================================
           2.4	Reconciling performance targets with the budget and MTEF  
            ================================================= 
            -->



           <v-flex xs12>
             <h4>2.4	Reconciling performance targets with the budget and MTEF </h4>
            <br/>

            <v-data-table
              :headers="headers17"
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

            </v-data-table>
            <v-data-table
              :headers="headers18"
              :items="doc.body.tr12"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>


 <!-- 
            =================================================
           
            -->



           <v-flex xs12>
             

            <v-data-table
              :headers="headers19"
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

            </v-data-table>
            <v-data-table
              :headers="headers18"
              :items="doc.body.tr13"
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
                <td class="text-xs-left">
                {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
           
            -->



           <v-flex xs12>
             

            <v-data-table
              :headers="headers20"
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

            </v-data-table>
            <v-data-table
              :headers="headers18"
              :items="doc.body.tr14"
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
                <td class="text-xs-left">
                {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>


           <!-- 
            =================================================
           
            -->



           <v-flex xs12>
             

            <v-data-table
              :headers="headers21"
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

            </v-data-table>
            <v-data-table
              :headers="headers22"
              :items="doc.body.tr15"
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
                <td class="text-xs-left">
                {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.schools"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.totalExpenditure"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.learners"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditurePerLearnerR"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>


          <!-- 
            =================================================
            3	Programme 3: Independent School Subsidies
            ================================================= 
            -->



           <v-flex xs12>
             <h4>3	Programme 3: Independent School Subsidies</h4>
             <p><strong>Purpose:</strong>  :  To provide public ordinary education from Grades 1 to 12, 
             in accordance with the South African Schools Act  and White Paper 6 on inclusive education.</p>

              <h4>Analysis per programme:</h4>

              <br/>

              <h4>Sub-programmes</h4>

              <br/>

              <h4>3.1	Strategic Objective and Annual Targets for .......</h4>

           </v-flex>
             <v-flex xs12>
            <br/>
           
            <v-data-table
              :headers="headers14"
              :items="doc.body.tr16"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicPlanTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>


            <br/>

             <v-data-table
              :headers="headers23"
              :items="doc.body.tr17"
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
               
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            <strong>Optional:</strong> <i>Provinces may insert a table on programme performance indicators here.</i>
            <br />
          </v-flex>

           <!-- 
            =================================================
           3.2	Performance and Expenditure Trends  
            ================================================= 
            -->



           <v-flex xs12>
             <h4>3.2	Performance and Expenditure Trends</h4>
            <br/>
            <h4>3.3 Strategic Objectives and Quarterly Targets</h4>
            <br/>
            
            <v-data-table
              :headers="headers5"
              :items="doc.body.tr18"
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
                <td class="text-xs-left">
                 {{props.item.programmePerformance}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
           3.4	Reconciling performance targets with the budget and MTEF  
            ================================================= 
            -->



           <v-flex xs12>
             <h4>3.4	Reconciling performance targets with the budget and MTEF  </h4>
            <br/>
            <v-data-table
              :headers="headers24"
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

            </v-data-table>
            
            <v-data-table
              :headers="headers11"
              :items="doc.body.tr19"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTerm"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
           
            -->



           <v-flex xs12>
             
            <br/>
            <v-data-table
              :headers="headers25"
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

            </v-data-table>
            
            <v-data-table
              :headers="headers26"
              :items="doc.body.tr20"
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
                <td class="text-xs-left">
                 {{props.item.subsidyLevel}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.schools"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.totalExpenditure "
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.learners "
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditurePerLearnerR "
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>


               

                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
            4	Programme 4: Public Special School Education
            ================================================= 
            -->



           <v-flex xs12>
             <h4>4	Programme 4: Public Special School Education</h4>
             <p><strong>Purpose:</strong>  :  To provide public ordinary education from Grades 1 to 12,
              in accordance with the South African Schools Act  and White Paper 6 on inclusive education.</p>

              <h4>Analysis per programme:</h4>

              <br/>

              <h4>Sub-programmes</h4>

              <br/>

              <h4>4.1	Strategic Objective and Annual Targets for .......</h4>

           </v-flex>
             <v-flex xs12>
            <br/>
           
            <v-data-table
              :headers="headers14"
              :items="doc.body.tr21"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicPlanTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>


            <br />
            <strong>Optional:</strong> <i>Provinces may insert a table on programme performance indicators here.</i>
            <br />

            <h4>Programme Performance Measures Annual Targets.......</h4>

             <v-data-table
              :headers="headers27"
              :items="doc.body.tr22"
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
               
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            
          </v-flex>


          <!-- 
            =================================================
           4.2	Performance and Expenditure trends  
            ================================================= 
            -->



           <v-flex xs12>
             <h4>4.2	Performance and Expenditure trends</h4>
            <br/>
            <h4>4.3 Quarterly targets for .......</h4>
            <br/>
            
            <v-data-table
              :headers="headers5"
              :items="doc.body.tr23"
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
                <td class="text-xs-left">
                 {{props.item.programmePerformance}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
           4.4	Reconciling performance targets with the budget and MTEF  
            ================================================= 
            -->



           <v-flex xs12>
             <h4>4.4	Reconciling performance targets with the budget and MTEF    </h4>
            <br/>
            <v-data-table
              :headers="headers28"
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

            </v-data-table>
            
            <v-data-table
              :headers="headers11"
              :items="doc.body.tr24"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTerm"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
            5	Programme 5:  Early Childhood Development
            ================================================= 
            -->



           <v-flex xs12>
             <h4>5	Programme 5:  Early Childhood Development</h4>
             <p><strong>Purpose:</strong> 

              <h4>Analysis per programme:</h4>

              <br/>

              <h4>Sub-programmes</h4>

              <br/>

              <h4>5.1	Strategic Objective and Annual Targets for ........</h4>

           </v-flex>
             <v-flex xs12>
            <br/>
           
            <v-data-table
              :headers="headers14"
              :items="doc.body.tr25"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicPlanTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>


            <br />
            

             <v-data-table
              :headers="headers29"
              :items="doc.body.tr26"
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
               
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
             <br />
            <strong>Optional:</strong> <i>Provinces may insert a table on programme performance indicators here.</i>
            <br />
            
          </v-flex>

         <!-- 
            =================================================
           5.2	Performance and Expenditure trends 
            ================================================= 
            -->



           <v-flex xs12>
             <h4>5.2	Performance and Expenditure trends</h4>
            <br/>
            <h4>5.3	Quarterly Targets for …..</h4>
            <br/>
            
            <v-data-table
              :headers="headers5"
              :items="doc.body.tr27"
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

                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.programmePerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
           5.4	Reconciling performance targets with the budget and MTEF    
            ================================================= 
            -->



           <v-flex xs12>
             <h4>5.4	Reconciling performance targets with the budget and MTEF   </h4>
            <br/>
            <v-data-table
              :headers="headers30"
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

            </v-data-table>
            
            <v-data-table
              :headers="headers11"
              :items="doc.body.tr28"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTerm"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

           <!-- 
            =================================================
            6	Programme 6: Infrastructure Development 
            ================================================= 
            -->



           <v-flex xs12>
             <h4>6	Programme 6: Infrastructure Development</h4>
             <strong>Purpose:</strong> 

              <h4>Analysis per programme:</h4>

              <br/>

              <h4>Sub-programmes</h4>

              <br/>

              <h4>6.1	Strategic Objective and Annual Targets for .......</h4>

           </v-flex>
             <v-flex xs12>
            <br/>
           
            <v-data-table
              :headers="headers14"
              :items="doc.body.tr29"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicPlanTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>


            <br />
            <strong>Optional:</strong> <i>Provinces may insert a table on programme performance indicators here.</i>
            <br />

            

             <v-data-table
              :headers="headers31"
              :items="doc.body.tr30"
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
               
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            
          </v-flex>


           <!-- 
            =================================================
           6.2	Performance and Expenditure Trends 
            ================================================= 
            -->



           <v-flex xs12>
             <h4>6.2	Performance and Expenditure Trends</h4>
            <br/>
            <h4>6.3	Quarterly Targets</h4>
            <br/>
            
            <v-data-table
              :headers="headers5"
              :items="doc.body.tr31"
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
                <td class="text-xs-left">
                 {{props.item.programmePerformance}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

           <!-- 
            =================================================
           6.4	Reconciling performance targets with the budget and MTEF    
            ================================================= 
            -->



           <v-flex xs12>
             <h4>6.4	Reconciling performance targets with the budget and MTEF      </h4>
            <br/>
            <v-data-table
              :headers="headers32"
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

            </v-data-table>
            
            <v-data-table
              :headers="headers11"
              :items="doc.body.tr32"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTerm"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
            7.	Programme 7: Examination and education related services 
            ================================================= 
            -->



           <v-flex xs12>
             <h4>7.	Programme 7: Examination and education related services </h4>
             <strong>Purpose:</strong> 

              <h4>Analysis per programme:</h4>

              <br/>

              <h4>Sub-programmes</h4>

              <br/>

              <h4>7.1	Strategic Objective and Annual Targets for .......</h4>

           </v-flex>
             <v-flex xs12>
            <br/>
           
            <v-data-table
              :headers="headers14"
              :items="doc.body.tr33"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicPlanTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>


            <br />
            

            

             <v-data-table
              :headers="headers33"
              :items="doc.body.tr34"
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
               
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.description"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            <strong>Optional:</strong> <i>Provinces may insert a table on programme performance indicators here.</i>
            <br />
            
          </v-flex>


            <!-- 
            =================================================
           7.2	Quarterly Targets for ……….. 
            ================================================= 
            -->



           <v-flex xs12>
             <h4>7.2	Quarterly Targets for ………..</h4>
            <br/>
            <h4>7.3	Quarterly targets for .......</h4>
            <br/>
            
            <v-data-table
              :headers="headers5"
              :items="doc.body.tr35"
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
                <td class="text-xs-left">
                 {{props.item.programmePerformance}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reportingPeriod"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.firstQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.secondQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.thirdQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.fourthQuarterTargets"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

           <!-- 
            =================================================
           7.4	Reconciling performance targets with the budget and MTEF      
            ================================================= 
            -->



           <v-flex xs12>
             <h4>7.4	Reconciling performance targets with the budget and MTEF       </h4>
            <br/>
            <v-data-table
              :headers="headers34"
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

            </v-data-table>
            
            <v-data-table
              :headers="headers11"
              :items="doc.body.tr36"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.estimatedPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.mediumTerm"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
            =================================================
           Part C: Links to Other Plans    
            ================================================= 
            -->



           <v-flex xs12>
             <h3>Part C: Links to Other Plans       </h3>
            <br/>

            <div class="pborder">Provide narrative on the links to other plans e.g. HR plan, ICT plan et al</div>

            <h4>1.	Links to the Long-term Infrastructure and Other Capital Plans</h4>
             <br/>
           
            
            <v-data-table
              :headers="headers35"
              :items="doc.body.tr37"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.categories"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.region"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.infrastructure"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.projectStage"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.projectStart"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.projectEnd"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.projectCost"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.totalAvailable1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.totalAvailable2"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.totalAvailable3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            </v-flex>


            <v-flex xs12>
            <h4>2.	Conditional Grants (refer to Conditional Grant business plan as per planning guide)</h4>
             <br/>
             <div class="pborder">Provide Narrative information of all conditional grants .These include National
                School Nutrition; Education Infrastructure Grant; Technical Secondary Schools Recapitalisation; Dinaledi Schools Grant;
                Social sector Extended Public Works Programme incentive grant and Further Education and Training.</div>

                <h4>1.	Public entities</h4>

                None

                <h4>2.	Public-private partnerships</h4>


            </v-flex>

                 <!-- 
            =================================================
           Appendix A: ACTION PLAN TO 2030 AND DELIVERY AGREEMENT INDICATORS (NATIONAL)   
            ================================================= 
            -->
            <v-flex xs12>
                <h4>Appendix A: ACTION PLAN TO 2030 AND DELIVERY AGREEMENT INDICATORS (NATIONAL)</h4>

              <p>The national Department of Basic Education will provide provinces with information on this section.
                 The provision of information on indicators 16.1 to 27.2 is dependent on the availability of findings
                  from a school monitoring survey that will be conducted by the Department of Basic Education.
                   The Department does not have a system in place to collect information on indicators 16.1 to 27.2
                    on an annual basis. The Department will update information on these indicators as information
                     becomes available.</p>


          


          
            <br/>

           <v-data-table
              :headers="headers36"
              :items="doc.body.tr38"
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
                <td class="text-xs-left">
                 {{props.item.indicatorNumber}}
                  
                </td>
                <td class="text-xs-left px-0 py-0">
                  {{props.item.indicatorTitle}}
                </td>
                <td class="text-xs-left px-0 py-0">
                  {{props.item.sourceData}}
                </td>
                
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.provincialPerformance"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.Target"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            </v-flex>



              <!-- 
            =================================================
           Appendix B: Summary of Nationally Determined Programme Performance Measures   
            ================================================= 
            -->
            <v-flex xs12>
                <h4>Appendix B: Summary of Nationally Determined Programme Performance Measures</h4>

              <p>This appendix lists the National Programme Performance Measures as agreed upon
                 between the Department of Basic Education, Treasury and the ....... provincial education department.</p>
          
            <br/>
            </v-flex>

           <!--
            =================================================
           Appendix C: Information and supplementary indicators Relevant for Planning in the Education Sector.   
            ================================================= 
            -->
            <v-flex xs12>
                <h4>Appendix C: Information and supplementary indicators Relevant for Planning in the Education Sector. </h4>

              <p>This section will not be subjected to auditing. It provides useful information for planning. 
                It assists planners with readily available information for reporting to the legislature, 
                premier’s office and other reporting requirements in the provinces.</p>


          
            <br/>

            <v-data-table
              :headers="headers37"
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

            </v-data-table>

           <v-data-table
              :headers="headers38"
              :items="doc.body.tr39"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                
                
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual1"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual2"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>

                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual3"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actual4"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            </v-flex>



                 <!-- 
            =================================================
           Table 2:  Budget Information   
            ================================================= 
            -->
            <v-flex xs12>
                <h4>Table 2:  Budget Information</h4>
            <h4>This table will be completed by provincial education departments (PEDs)</h4>
          
            <br/>

            <v-data-table
              :headers="headers39"
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

            </v-data-table>

           <v-data-table
              :headers="headers40"
              :items="doc.body.tr40"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.numberOfLearners"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
               <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.publiclyEmployed"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.privatelyEmployed"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.totalNumber"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.effectiveLearner"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
            </v-flex>


                 <!-- 
            =================================================
           Table 3: Age Specific Enrolment Rate (ASER)   
            ================================================= 
            -->
            <v-flex xs12>
                <h4>Table 3: Age Specific Enrolment Rate (ASER)</h4>
            <h4>This table will be completed by provincial education departments (PEDs)</h4>
          
            <br/>

            <v-data-table
              :headers="headers41"
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

            </v-data-table>

           <v-data-table
              :headers="headers42"
              :items="doc.body.tr41"
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
                <td class="text-xs-left">
                 {{props.item.description}}
                  
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.publicSchools"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
               <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.independentSchools"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.specialSchools"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.FETcolleges"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.ABET"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.ECDCentres"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.population"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.enrolmentRate"
                    single-line
                    solo
                    flat
                    
                  ></v-text-field>
                </td>
              
                
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
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
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "annualPerformancePlan",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "BT  001",
          align: "left",
          value: ""
        },
        {
          text: "ACTUAL",
          value: ""
        },
        {
          text: "ACTUAL",
          value: ""
        },
        {
          text: "ACTUAL",
          value: ""
        },
        {
          text: "ESTIMATED",
          value: ""
        },
        {
          text: "ESTIMATED",
          value: ""
        },
        {
          text: "ESTIMATED",
          value: ""
        }
      ],

      headers1: [
        {
          text: "POST PROVISIONG TABLE",
          align: "left",
          sortable:false,
          value: "",
          width:"160px"
        },
        {
          text: "POSTS ALLOCATED TO SCHOOLS VIA THE POST PROVISIONING NORMS (.......)",
          sortable:false,
          value: ""
        }],

      headers2: [
        {
          text: "Programmes/Purpose of posts",
          align: "left",
          value: "",
          width:"160px"
        },
        {
          text: "Posts PL1",
          value: ""
        },
        {
          text: "Posts PL2",
          value: ""
        },
        {
          text: "Posts PL3",
          value: ""
        },
        {
          text: "Posts PL4",
          value: ""
        },
        {
          text: "Total",
          value: ""
        }
      ],
      headers3: [
        {
          text: "-",
          align: "left",
          value: "",
          sortable:false,
          width:"160px"
        },
        {
          text: "PROVINCIAL EDUCATION SECTOR– KEY TRENDS",
          sortable:false,
          value: ""
        }],
        headers4: [
        {
          text: "Strategic objective",
          align: "left",
          value: "",
          width:"160px"
        },
        {
          text: "Strategic Plan Target",
          value: ""
        },
        {
          text: "Audited/Actual performance",
          value: ""
        },
        {
          text: "Estimated performance …….",
          value: ""
        },
        {
          text: "Medium-term targets",
          value: ""
        }
      ],
      headers5: [
        {
          text: "Strategic Objectives",
          align: "left",
          value: "",
          width:"160px"
        },
        {
          text: "Reporting Period",
          value: ""
        },
        {
          text: "Annual Target",
          value: ""
        },
        {
          text: "First Quarter Targets",
          value: ""
        },
        {
          text: "Second Quarter Targets",
          value: ""
        },
        {
          text: "Third Quarter Targets",
          value: ""
        },
        {
          text: "Fourth Quarter Targets",
          value: ""
        }
      ],
      headers6: [
        {
          text: "Programme Performance Measures for Programme 1",
          align: "left",
          value: ""
        },
        {
          text: "Actual",
          value: ""
        },
        {
          text: "Actual",
          value: ""
        },
        {
          text: "Actual",
          value: ""
        },
        {
          text: "Estimated",
          value: ""
        },
        {
          text: "Estimated",
          value: ""
        },
        {
          text: "Estimated",
          value: ""
        }
      ],
      headers7: [
        {
          text: "Programme Performance Measure",
          align: "left",
          value: "",
          width:"160px"
        },
        {
          text: "Reporting Period",
          value: ""
        },
        {
          text: "Annual Target",
          value: ""
        },
        {
          text: "First Quarter Targets",
          value: ""
        },
        {
          text: "Second Quarter Targets",
          value: ""
        },
        {
          text: "Third Quarter Targets",
          value: ""
        },
        {
          text: "Fourth Quarter Targets",
          value: ""
        }
      ],
      headers8: [
        {
          text: "-",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "ACTUAL",
          value: ""
        },
        {
          text: "ACTUAL",
          value: ""
        },
        {
          text: "ACTUAL",
          value: ""
        },
        {
          text: "ESTIMATED",
          value: ""
        },
        {
          text: "ESTIMATED",
          value: ""
        },
        {
          text: "ESTIMATED",
          value: ""
        }
      ],
      headers9: [
        {
          text: "BT 101",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "ADMINISTRATION – KEY TRENDS",
          sortable:false,
          value: ""
        }],
        headers10: [
        {
          text: "BT 101",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PROGRAMME PERFORMANCE MEASURES fOR PROGRAMME 1",
          sortable:false,
          value: ""
        }],

         headers11: [
        {
          text: "-",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Audited/Actual performance",
          value: ""
        },
        {
          text: "Estimated performance ….",
          value: ""
        },
        {
          text: "Medium-term targets",
          value: ""
        }
      ],
       headers12: [
        {
          text: "BT102",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "EXPENDITURE BY ITEM (.......) R’000",
          sortable:false,
          value: ""
        }],
        headers13: [
        {
          text: "-",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "1. Admin",
          sortable:false,
          value: ""
        },
        {
          text: "2.  POS",
          sortable:false,
          value: ""
        },
        {
          text: "3.  Indep",
          sortable:false,
          value: ""
        },
        {
          text: "4.  Spec",
          sortable:false,
          value: ""
        },
        {
          text: "",
          sortable:false,
          value: ""
        },
        {
          text: "",
          sortable:false,
          value: ""
        },
        {
          text: "",
          sortable:false,
          value: ""
        },
        {
          text: "",
          sortable:false,
          value: ""
        },
        {
          text: "Total",
          sortable:false,
          value: ""
        }
        ],
        headers14: [
        {
          text: "Strategic Objective",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Strategic Plan Target",
          sortable:false,
          value: ""
        },
        {
          text: "Audited/Actual Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance ",
          sortable:false,
          value: ""
        },
        {
          text: "Medium-term targets",
          sortable:false,
          value: ""
        }
        ],
        headers15: [
        {
          text: "Programme Performance Measures for Programme 2",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Actual",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Medium Term Targets",
          sortable:false,
          value: ""
        }
        ],
        headers16: [
        {
          text: "Programme Performance Measure",
          align: "left",
          
          value: "",
          width:"180px"
        },
        {
          text: "Reporting period",
         
          value: ""
        },
        {
          text: "Annual Target",
          
          value: ""
        },
        {
          text: "First Quarter Targets",
          value: ""
        },
        {
          text: "Second Quarter Targets",
          value: ""
        },
        {
          text: "Third Quarter Targets",
          value: ""
        },
        {
          text: "Fourth Quarter Targets",
          value: ""
        }
        ],
        headers17: [
        {
          text: "BT 201",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PUBLIC ORDINARY SCHOOLS – KEY TRENDS",
          sortable:false,
          value: ""
        }],

        headers18: [
        {
          text: "-",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Audited/Actual Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance ",
          sortable:false,
          value: ""
        },
        {
          text: "Medium-term targets",
          sortable:false,
          value: ""
        }
        ],
        headers19: [
        {
          text: "BT 202",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PUBLIC PRIMARY SCHOOLS – KEY TRENDS",
          sortable:false,
          value: ""
        }],

        headers20: [
        {
          text: "BT 203",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PUBLIC SECONDARY SCHOOL – KEY TRENDS",
          sortable:false,
          value: ""
        }],
        headers21: [
        {
          text: "BT 204",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PUBLIC ORDINARY SCHOOL – RESOURCING EFFECTED VIA THE SCHOOL FUNDING NORMS (.......)",
          sortable:false,
          value: ""
        }],
        headers22: [
        {
          text: "Programmes/Legal status/Poverty quintiles",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Schools",
          sortable:false,
          value: ""
        },
        {
          text: "Total expenditure (R’000)",
          sortable:false,
          value: ""
        },
        {
          text: "Learners",
          sortable:false,
          value: ""
        },
        {
          text: "Expenditure per learner R",
          sortable:false,
          value: ""
        }],

        headers23: [
        {
          text: "Programme Performance Measures for Programme 3",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Actual",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Medium Term Targets",
          sortable:false,
          value: ""
        }
        ],

        headers24: [
        {
          text: "BT 301",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "INDEPENDENT  SCHOOLS – KEY TRENDS",
          sortable:false,
          value: ""
        }],

         headers25: [
        {
          text: "BT 302",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "INDEPENDENT SCHOOL SUBSIDIES - RESOURCING EFFECTED VIA THE SCHOOL FUNDING NORMS (2010)",
          sortable:false,
          value: ""
        }],

        headers26: [
        {
          text: "Subsidy Level",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Schools",
          sortable:false,
          value: ""
        },
        {
          text: "Total expenditure (R’000)",
          sortable:false,
          value: ""
        },
        {
          text: "Learners",
          sortable:false,
          value: ""
        },
        {
          text: "Expenditure per learner R",
          sortable:false,
          value: ""
        }],

        headers27: [
        {
          text: "Programme Performance Measures for Programme 4",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Actual",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Medium Term Targets",
          sortable:false,
          value: ""
        }
        ],
        headers28: [
        {
          text: "BT 401",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PUBLIC SPECIAL SCHOOLS – KEY TRENDS",
          sortable:false,
          value: ""
        }],

        headers29: [
        {
          text: "Programme Performance Measures for Programme 5",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Actual",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Medium Term Targets",
          sortable:false,
          value: ""
        }
        ],
        headers30: [
        {
          text: "BT 501",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "EARLY CHILDHOOD DEVELOPMENT– KEY TRENDS",
          sortable:false,
          value: ""
        }],

         headers31: [
        {
          text: "Programme Performance Measures for Programme 6",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Actual",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Medium Term Targets",
          sortable:false,
          value: ""
        }
        ],
        headers32: [
        {
          text: "BT 601",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "INFRASTRUCTURE DEVELOPMENT – KEY TRENDS",
          sortable:false,
          value: ""
        }],
        headers33: [
        {
          text: "Programme Performance Measures for Programme 7",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Actual",
          sortable:false,
          value: ""
        },
        {
          text: "Estimated Performance",
          sortable:false,
          value: ""
        },
        {
          text: "Medium Term Targets",
          sortable:false,
          value: ""
        }
        ],
        headers34: [
        {
          text: "BT 701",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "PUBLIC ORDINARY SCHOOLS – KEY TRENDS",
          sortable:false,
          value: ""
        }],

        headers35: [
        {
          text: "#",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Categories",
          sortable:false,
          value: ""
        },
        {
          text: "Region/district",
          sortable:false,
          value: ""
        },
        {
          text: "Type of infrastructure",
          sortable:false,
          value: ""
        },
        {
          text: "Current project stage",
          sortable:false,
          value: ""
        },
        {
          text: "Project start",
          sortable:false,
          value: ""
        },
        {
          text: "Project end",
          sortable:false,
          value: ""
        },
        {
          text: "Total project cost",
          sortable:false,
          value: ""
        },
        {
          text: "Expenditure to date from previous years",
          sortable:false,
          value: ""
        },
        {
          text: "Total available",
          sortable:false,
          value: ""
        },
        {
          text: "Total available ",
          sortable:false,
          value: ""
        },
        {
          text: "Total available ",
          sortable:false,
          value: ""
        }],

        headers36: [
        {
          text: "Indicator number",
          align: "left",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Indicator title",
          sortable:false,
          value: ""
        },
        {
          text: "Source of data ",
          sortable:false,
          value: ""
        },
        {
          text: "Provincial Performance in …..(or most recent)",
          sortable:false,
          value: ""
        },
        {
          text: "Target…….",
          sortable:false,
          value: ""
        }],
         headers37: [
        {
          text: "TABLE 1: BASIC STATISTICS",
          align: "center",
          sortable:false,
          value: ""
        }],

        headers38: [
        
        {
          text: "-",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Actual",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Actual",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Actual",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Actual",
          align: "center",
          sortable:false,
          value: ""
        }
        ],
        headers39: [
        
        {
          text: "-",
          align: "center",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Public Ordinary schools",
          align: "center",
          sortable:false,
          value: ""
        }
        ],
        headers40: [
        
        {
          text: "-",
          align: "center",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Number of Learners*",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Number of Publicly employed educators**",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Public Learner- Educator Ratio",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Privately employed educators**",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Total number of educators",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Effective Learner: Educator Ratio",
          align: "center",
          sortable:false,
          value: ""
        }
        ],
        headers41: [
        {
          text: "Provincial education sector– Age-specific enrolment rates ……",
          align: "center",
          sortable:false,
          value: ""
        }
        ],
        headers42: [
        
        {
          text: "-",
          align: "center",
          sortable:false,
          value: "",
          width:"180px"
        },
        {
          text: "Number of learners in ordinary public  schools",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Total number of learners in ordinary Independent schools",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Total number of learners in special schools",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "FET colleges (head-count)",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "A(B)ET",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "ECD Centres",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Population",
          align: "center",
          sortable:false,
          value: ""
        },
        {
          text: "Age-specific enrolment rate",
          align: "center",
          sortable:false,
          value: ""
        }
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
        template: "annualPerformancePlan",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          locationOfInstitution: "",
          nameOfInstitution: "",
          nameReportingOfficer: "",
          reportingPeriod: "",
          capacity: "",
          item: "",
          tr: [
            {
              description: "Revenue (R’000)*",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Equitable share",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Conditional grants",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Donor funding",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Other financing (Asset Finance Reserve)",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Own revenue",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Total",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Payments by programme (R’000)*",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "1.  Administration",
             actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "2.  Public ordinary schools",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "3.  Independent school subsidies",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "4.  Public special school education",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "5.  Early Childhood Development",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "6.  Infrastructure Development",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "7.  Examination and Education related services",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            }
          ],
          tr1: [
            {
              description:"Posts top-sliced",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
             {
              description:"Posts distributed by model",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
             {
              description:"Public ordinary school education",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
            {
              description:"Public primary schools",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
            {
              description:"Public secondary phase",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
            
            {
              description:"Public special school education",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
            {
              description:"Total",
              PL1:"",
              PL1:"",
              PL1:"",
              PL1:"",
              Total:""
            },
          ],

          tr2: [
            {
              description:"1.1	Short name",
              planTarget:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"1.2		Short name",
              planTarget:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            }
          ],
          tr3: [
            {
              description:"1.1	Short name",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              description:"1.2		Short name",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

          tr4: [
            {
              
                programmePerformance:"",
                
                actual1:"",
                actual2:"",
                actual3:"",
                estimated1:"",
                estimated2:"",
                estimated3:""
            },
             {
              programmePerformance:"",
                actual1:"",
                actual2:"",
                actual3:"",
                estimated1:"",
                estimated2:"",
                estimated3:""
            }
            ,
             {
              programmePerformance:"",
                actual1:"",
                actual2:"",
                actual3:"",
                estimated1:"",
                estimated2:"",
                estimated3:""
            }
            ,
             {
              programmePerformance:"",
                actual1:"",
                actual2:"",
                actual3:"",
                estimated1:"",
                estimated2:"",
                estimated3:""
            }
          ],

           tr5: [
            {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

          tr6: [
            {
              description: "PAYMENTS BY SUB-PROGRAMME (R’000)*",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            },
            {
             description: "Total",
              actual1: "",
              actual2: "",
              actual3: "",
              estimate1: "",
              estimate2: "",
              estimate3: "",
              
            }],

             tr7: [
            {
              description: "",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
             {
              description: "",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
             {
              description: "",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
            ],
            tr8: [
            {
              description:"",
              admin:"",
              POS:"",
              indep:"",
              spec:"",
              block1:"",
              block2:"",
              block3:"",
              block4:"",
              total:"",
             
            },
            {
              description:"",
              admin:"",
              POS:"",
              indep:"",
              spec:"",
              block1:"",
              block2:"",
              block3:"",
              block4:"",
              total:"",
             
            },
            {
              description:"",
              admin:"",
              POS:"",
              indep:"",
              spec:"",
              block1:"",
              block2:"",
              block3:"",
              block4:"",
              total:"",
             
            },
            {
              description:"Grand total",
              admin:"",
              POS:"",
              indep:"",
              spec:"",
              block1:"",
              block2:"",
              block3:"",
              block4:"",
              total:"",
             
            }],
            tr9: [
            {
              description:"1.1	Short name",
              
                strategicPlanTarget:"",
                actualPerformance:"",
                estimatedPerformance :"",
                mediumTargets:""
                
            },
             {
              description:"1.2		Short name",
              
                strategicPlanTarget:"",
                actualPerformance:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],
           tr10: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],

           tr11: [
            {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],
          tr12: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
            ,
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"PAYMENTS BY SUB-PROGRAMME (R’000)*",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"Total",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"Total",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],
          
          tr13: [
            {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
            ,
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"Total",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],

           tr14: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
            ,
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"Total",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],
          
          tr15: [
            {
              description:"2.1 PUBLIC PRIMARY SCHOOLS",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"2.1 PUBLIC PRIMARY SCHOOLS",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Non Section 21 schools",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 1 (poorest)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 2",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 3",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 4",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 5 (least poor)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Section 21 schools",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 1 (poorest)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 2",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 3",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 4",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 5 (least poor)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"2.2 PUBLIC SECONDARY SCHOOLS",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Non Section 21 schools",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 1 (poorest)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 2",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 3",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 4",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 5 (least poor)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Section 21 schools",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 1 (poorest)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 2",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 3",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 4",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Quintile 5 (least poor)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for non Section 21 schools",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for Section 21 schools",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for Quintile 1",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for Quintile 2",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for Quintile 3",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for Quintile 4",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Total for Quintile 5",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Grand total",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Programme 2 (non-personnel non-capital budget)",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            },
            {
              description:"Level of 'top-slicing'",
              
                schools:"",
                totalExpenditure:"",
                learners:"",
                expenditurePerLearnerR:""
                
            }
          ],
          tr16: [
            {
              description:"1.1	Short name",
              
                strategicPlanTarget:"",
                actualPerformance:"",
                estimatedPerformance :"",
                mediumTargets:""
                
            },
             {
              description:"1.2		Short name",
              
                strategicPlanTarget:"",
                actualPerformance:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],
           tr17: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],
          tr18: [
            {
              programmePerformance :"3.1 Short name",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"3.2 Short name",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

           tr19: [
            {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY SUB-PROGRAMME (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            }
          ],

           tr20: [
           {
             subsidyLevel:"60 (poorest) ",
              schools:"",
              totalExpenditure:"",
              learners:"",
              expenditurePerLearnerR:""
           },
           {
             subsidyLevel:"40",
              schools:"",
              totalExpenditure:"",
              learners:"",
              expenditurePerLearnerR:""
           },
           {
             subsidyLevel:"25",
              schools:"",
              totalExpenditure:"",
              learners:"",
              expenditurePerLearnerR:""
           },
           {
             subsidyLevel:"15",
              schools:"",
              totalExpenditure:"",
              learners:"",
              expenditurePerLearnerR:""
           },
           {
             subsidyLevel:"0 (least poor)",
              schools:"",
              totalExpenditure:"",
              learners:"",
              expenditurePerLearnerR:""
           },
           {
             subsidyLevel:"Total",
              schools:"",
              totalExpenditure:"",
              learners:"",
              expenditurePerLearnerR:""
           }
           ],

           tr21: [
            {
              description: "4.1	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
             {
              description: "4.2	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            }
            ],

            tr22: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],

          tr23: [
            {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

          tr24: [
            {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY SUB-PROGRAMME (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            }],

            tr25: [
            {
              description: "5.1	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
             {
              description: "5.2	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            }
            ],

             tr26: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],

           tr27: [
            {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

          tr28: [
            {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY SUB-PROGRAMME (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            }],

            tr29: [
            {
              description: "6.1	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
             {
              description: "6.2	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            }
            ],

             tr30: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],

          tr31: [
            {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

          tr32: [
            {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY SUB-PROGRAMME (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            }],

             tr33: [
            {
              description: "7.1	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            },
             {
              description: "7.2	Short name",
              actualPerformance: "",
              estimatedPerformance: "",
              mediumTargets:""
              
            }
            ],
            tr34: [
            {
              description:"",
              
                actual:"",
                estimatedPerformance:"",
                mediumTargets:""
                
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            },
             {
              description:"",
              
                actual:"",
                estimatedPerformance :"",
                mediumTargets:""
            }
          ],

          tr35: [
            {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            },
             {
              programmePerformance :"",
              
                reportingPeriod:"",
                annualTarget:"",
                firstQuarterTargets:"",
                secondQuarterTargets:"",
                thirdQuarterTargets:"",
                fourthQuarterTargets:""
            }
          ],

          tr36: [
            {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY SUB-PROGRAMME (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"PAYMENTS BY ECONOMIC CLASSIFICATION (R’000)*",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            },
             {
              description:"Total",
              actualPerformance:"",
              estimatedPerformance:"",
              mediumTerm:""
            }],
            tr37: [
            {
              description:"1. New and replacement assets",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Own Funds",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"1",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"2",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Subtotal: Own funds",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Own Funds (Implementing agent still to be determined)",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"1",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"2",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Education Infrastructure Grant (Managed by DTPW)",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"1",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"2",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"3",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Subtotal:  Education Infrastructure Grant ",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Education Infrastructure Grant (Managed by PIU)",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"1",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"3",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"9",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Subtotal:  Education Infrastructure Grant ",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Total:  Education Infrastructure Grant  ",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Total new and replacement assets",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"4. Maintenance and repairs",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"1	Recurrent maintenance",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"2	Building facilities maintenance programme",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Total maintenance and repairs",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            },
            {
              description:"Total infrastructure",
              categories:"",
              region:"",
              infrastructure:"",
              projectStage:"",
              projectStart:"",
              projectEnd:"",
              projectCost:"",
              expenditure:"",
              totalAvailable1:"",
              totalAvailable2:"",
              totalAvailable3:"",
            }
             
            ],
             tr38: [
            {
              indicatorNumber:"1.1",
              indicatorTitle:"Percentage of Grade 3 learners performing at the required literacy level according to the country’s Annual National Assessments.",
              sourceData :"ANA database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"1.2",
              indicatorTitle:"Percentage of Grade 3 learners performing at the required numeracy level according to the country’s Annual National Assessments.",
              sourceData :"ANA database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"2.1",
              indicatorTitle:"Percentage of Grade 6 learners performing at the required language level according to the country’s Annual National Assessments.",
              sourceData :"ANA database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"2.2",
              indicatorTitle:"Percentage of Grade 6 learners performing at the required mathematics level according to the country’s Annual National Assessments.",
              sourceData :"ANA database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"3.1",
              indicatorTitle:"Percentage of Grade 9 learners performing at the required language level according to the country’s Annual National Assessments.",
              sourceData :"ANA database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"3.2",
              indicatorTitle:"Percentage of Grade 9 learners performing at the required mathematics level according to the country’s Annual National Assessments.",
              sourceData :"ANA database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"4",
              indicatorTitle:"Number of Grade 12 learners who become eligible for a Bachelors programme in the public national examinations.",
              sourceData :"NSC database ",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"5",
              indicatorTitle:"Number of Grade 12 learners passing mathematics.",
              sourceData :"NSC database ",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"6",
              indicatorTitle:"Number of Grade 12 learners passing physical science.",
              sourceData :"NSC database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"7",
              indicatorTitle:"Average score obtained in Grade 6 in language in the SACMEQ assessment.",
              sourceData :"SACMEQ database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"8",
              indicatorTitle:"Average score obtained in Grade 6 in mathematics in the SACMEQ assessment.",
              sourceData :"SACMEQ database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"9",
              indicatorTitle:"Average Grade 8 mathematics score obtained in TIMSS.",
              sourceData :"TIMSS database",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"10",
              indicatorTitle:"Percentage of 7 to 15 year olds attending education institutions",
              sourceData :"GHS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"11.1",
              indicatorTitle:"The percentage of Grade 1 learners who have received formal Grade R.",
              sourceData :"ASS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"11.2",
              indicatorTitle:"The enrolment ratio of children aged 3 to 5. (This is an indicator of concern to DBE and DSD.)",
              sourceData :"GHS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"12.1",
              indicatorTitle:"The percentage of children aged 9 at the start of the year who are in Grade 4 or above.",
              sourceData :"ASS/GHS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"12.2",
              indicatorTitle:"The percentage of children aged 12 at the start of the year who are in Grade 7 or above.",
              sourceData :"ASS/GHS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"13.1",
              indicatorTitle:"The percentage of youths who obtain a National Senior Certificate from a school.",
              sourceData :"GHS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"14",
              indicatorTitle:"The number of qualified teachers aged 30 and below entering the public service as teachers for first time during the past year.",
              sourceData :"PERSAL",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"15.1",
              indicatorTitle:"The percentage of learners who are in classes with no more than 45 learners.",
              sourceData :"ASS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"15.2",
              indicatorTitle:"The percentage of schools where allocated teaching posts are all filled.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"16.1",
              indicatorTitle:"The average hours per year spent by teachers on professional development activities.",
              sourceData :"SMS",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"16.2",
              indicatorTitle:"The percentage of teachers who are able to attain minimum standards in anonymous and sample-based assessments of their subject knowledge.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"17",
              indicatorTitle:"The percentage of teachers absent from school on an average day.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"18",
              indicatorTitle:"The percentage of learners who cover everything in the curriculum for their current year on the basis of sample-based evaluations of records kept by teachers and evidence of practical exercises done by learners.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"19",
              indicatorTitle:"The percentage of learners having access to the required textbooks and workbooks for the entire school year.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"20",
              indicatorTitle:"The percentage of learners in schools with a library or media centre fulfilling certain minimum standards.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"21",
              indicatorTitle:"The percentage of schools producing the minimum set of management documents at a required standard, for instance a school budget, a school development plan, an annual report, attendance rosters and learner mark schedules.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"22",
              indicatorTitle:"The percentage of schools where the School Governing Body meets minimum criteria in terms of effectiveness.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"23.1",
              indicatorTitle:"The percentage of learners in schools that are funded at the minimum level.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"23.2",
              indicatorTitle:"The percentage of schools which have acquired the full set of financial management responsibilities on the basis of an assessment of their financial management capacity.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"24.1",
              indicatorTitle:"The percentage of schools which comply with nationally determined minimum physical infrastructure standards.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"24.2",
              indicatorTitle:"The percentage of schools which comply with nationally determined optimum physical infrastructure standards.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"25",
              indicatorTitle:"The percentage of children who enjoy a school lunch every school day.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"26",
              indicatorTitle:"The percentage of schools with at least one educator who has received specialised training in the identification and support of special needs.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"27.1",
              indicatorTitle:"The percentage of schools visited at least twice a year by district officials for monitoring and support purposes.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            },
             {
              indicatorNumber:"27.2",
              indicatorTitle:"The percentage of school principals rating the support services of districts as being satisfactory.",
              sourceData :"School Monitoring Survey (SMS)",
              provincialPerformance :"",
              Target:"",
            }],

             tr39: [
            {
              description:"1.	SCHOOL CALENDAR YEAR",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of learner days as per national school calendar",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of educator days as per national school calendar",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"2.	INSTITUTIONS",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Institutions: Overview",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of schools in the province (public + independent + ordinary + special)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Institutions: Public Ordinary Schools (Programme 2)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of public primary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of public secondary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of public combined schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of public ordinary schools with SASA Section 21  A, C or D functions",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"NUMBER OF PUBLIC ORDINARY SCHOOLS DECLARED AS NO-FEE SCHOOLS",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"INSTITUTIONS: INDEPENDENT ORDINARY SCHOOLS (PROGRAMME 3)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of independent ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent schools receiving a subsidy",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent  primary schools receiving a subsidy ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent secondary schools receiving a subsidy ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent combined schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent schools not receiving a subsidy",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"INSTITUTIONS: PUBLIC SPECIAL SCHOOLS (PROGRAMME 4)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of public special schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent special schools (this item is not part of Programme 4 but useful for inclusion)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of primary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of secondary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of combined special schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Institutions: ECD (Programme 5.)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of public ordinary schools that offer Grade R",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of independent schools that offer Grade R, that are subsidised",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total Number of independent schools that offer Grade R",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of ECD sites (institutions not registered as independent schools) in the province (source: DSD)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of ECD sites (institutions not registered as independent schools) subsidised by the province ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"3.	STAFFING",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Staffing: Overview",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of public employees in the education sector in the province (educator + non-educator; institution-based + office based; schools = FET Colleges + AET))",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of publicly employed educator staff in the province (institution-based + office based)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of publicly employed non-educator staff in the province (institution-based + office-based)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of school-based educator staff (public + independent)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of school-based non-educator staff (public + independent)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of school-based educators in public ordinary schools employed by SGBs or private organisations",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of staff in public ordinary schools (educator + non-educator + state-paid + SGB paid)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of office-based educator staff ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of office-based non-educator staff ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Staffing: Programme 2",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  educators in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  non-educator staff in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  educators in public ordinary primary schools  ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  educators in public ordinary secondary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  non-educator staff  in public ordinary primary schools  ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  non-educator staff in public ordinary secondary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  non-educator staff  in combined schools  ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed  non-educator staff in combined schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Staffing: Programme 3",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of staff in independent schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of educator staff in independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of non-educator staff in independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of educator staff in subsidised independent schools  ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of non-educator staff in subsidised independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Staffing: Programme 4",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of staff in public special schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of educator staff in public special schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of non-educator staff in public special schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Staffing: Programme 5",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of Grade R practitioners (ordinary schools + special schools + public schools + independent schools)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of publicly employed Grade R practitioners in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of privately employed Grade R practioners in public schools (both ordinary and special schools)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Grade R practitioners in independent schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Learners: Overview",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of learners in schools (public + independent + ordinary + special)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners in special schools (public + independent)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners in ordinary schools (public + independent)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of female learners in schools (public + independent + ordinary + special)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of male learners in schools (public + independent + ordinary + special)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners with disabilities (public + independent + ordinary + special)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners with disabilities (ordinary public +ordinary  independent)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Learners: Programme 2 ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners in  Grades 1 to Grade 7 in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners in Grades 8 to 12 in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of female learners in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of male learners in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of female learners in Grades 1 to 7 in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of female learners in Grades 8 to 12 in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of male learners in Grades 1 to 7 in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of male learners in Grades 8 to 12 in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of learners with disabilities in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Grades 1 to 7 learners with disabilities in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Grades 8 to 12 learners with disabilities in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of female learners with disabilities in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of male learners with disabilities in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of new entrants in Grade 1",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Learners: Programme 3 ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of learners in independent schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of  learners in subsidised independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of  learners in Grades 1 to 7 in subsidised independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of  learners in Grades 8  to 12  in subsidised independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of  learners in subsidised primary independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of  learners in subsidised secondary independent schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Learners: Programme 4 ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of learners in public special schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of male learners in public special schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of female learners in public special schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Learners: Programme",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of Grade R learners in schools (ordinary public + ordinary independent)",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Grade R learners in public ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Grade R learners in independent ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Total number of Grade R learners in ECD Centres ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Pre-Grade R learners in public ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Pre-Grade R learners in independent ordinary schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Infrastructure",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Public Ordinary Schools",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Public Ordinary Schools without  water supply",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Public Ordinary schools without electricity",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of Public Ordinary schools without toilets",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            },
            {
              description:"Number of classrooms in Public Ordinary schools ",
              actual1:"",
              actual2:"",
              actual3:"",
              actual4:"",
              
            }
            ],

            tr40: [
            {
              description:"Public primary schools",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 1 (poorest)",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 2",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 3",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 4",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 5 (least poor)",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Public secondary schools",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 1 (poorest)",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 2",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 3",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 4",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            },
            {
              description:"Quintile 5 (least poor)",
              numberOfLearners:"",
              publiclyEmployed:"",
              educatorRatio:"",
              privatelyEmployed :"",
              totalNumber:"",
              effectiveLearner:"" 
              
            }],

            tr41: [
            {
              description:"< Age 6",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 6",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 7",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 8",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 9",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 10",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 11",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 12",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 13",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 14",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 15",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 16",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 17",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Age 18",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"> Age 18",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
            },
             {
              description:"Total",
              publicSchools:"",
              independentSchools:"",
              specialSchools:"",
              FETcolleges:"",
              ABET:"",
              ECDCentres:"",
              population:"",
              enrolmentRate:"" 
              
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
.pborder{
  border: 1px solid #dddddd;
  padding: 2%;
  margin: 5px 0 10px 0
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

