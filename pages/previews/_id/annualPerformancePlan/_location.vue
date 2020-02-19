<template>
<div id="annualPerformancePlan">

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
          <v-flex
              v-for="signatory in doc.body.signatures"
              :key="signatory.SurName"
              xs12
              class="my-5"
            >
              <v-flex xs12>
                <h2>{{signatory.response}}</h2>
                <div v-html="signatory.comment"></div>
              </v-flex>
              <v-flex xs4>
                <img style="width:100%" :src="signatory.signature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h3>{{signatory.SurName}}</h3>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>
                </v-flex>

                <v-flex xs4>
                  <p
                    class="text-xs-left"
                  >{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</p>
                  <hr />
                  <h4>Date</h4>
                </v-flex>
              </v-layout>
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
import Toolbar from "~/components/PreviewToolbar";
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

              user: {},
      users: [],
      loading: false,
      response: {},
      signatories: [],
      signature: "",
      ref: "",
      textInput: "",
      comment: "",
      action: {},

       actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
      ],

      signer: {
        action: {}
      },
      min_height: 320
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

      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);

      this.signer = this.doc.body.signatures[pos];
      if (this.signer) {
        this.action = this.respondText(this.signer.action);
      }
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    respondText(action) {
      if (action.value == "approve") {
        return {
          text: "Approve",
          value: "Approved",
          altText: "Not Approved",
          altValue: "Not Approved"
        };
      }
      if (action.value == "recommend") {
        return {
          text: "Recommended",
          value: "Recommended",
          altText: "Not Recommended",
          altValue: "Not Recommended"
        };
      }
    },
    saveSignature() {
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
      user.signature = this.signature;
      user.signatureDate = Date.now();
      console.log(this.doc);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log("=== End ===");
      this.signature = data;
      this.saveSignature()
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id);
    console.log(store.state.doc);
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

