<template>
  <div id="circular">
    <v-container grid-list-md fluid>
    
    <v-layout row>
      <v-flex xs2 >
        <v-layout>
         <Toolbar :data="doc" :canAttachFile="false" />
        </v-layout>
      </v-flex>

    <v-flex column xs10>
        

<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Name of Executive Authority</strong>
                </p>
            </td>
            <td width="331" valign="top">
            </td>
            <td width="161" valign="top">
                <p>
                    <strong>Province (if applicable)</strong>
                </p>
            </td>
            <td width="321" valign="top">
               {{doc.body.province}}
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Name of Head of Department</strong>
                </p>
            </td>
            <td width="331" valign="top">
              {{doc.body.name_head_of_department}} 
            </td>
            <td width="161" valign="top">
                <p>
                    <strong>Performance cycle</strong>
                </p>
            </td>
            <td width="321" valign="top">
              {{doc.body.performance_cycle}}
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Persal No.</strong>
                </p>
            </td>
            <td width="331" valign="top">
              {{doc.body.persal_number}}
            </td>
            <td width="161" valign="top">
                <p>
                    <strong>Mid-Year Review</strong>
                </p>
            </td>
            <td width="321" valign="top">
               {{doc.body.mid_year_review}}
                  
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    <strong>Name of Department</strong>
                </p>
            </td>
            <td width="813" colspan="3" valign="top">
              {{doc.body.name_of_department}}
            </td>
        </tr>
    </tbody>
</table>

<br>
<br>
   
    <table >
              <tbody>
                <th colspan="5"><strong>KRA NO 1:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br /><br /></td>
                  
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                <tr  v-for="(item, index) in doc.body.kr1" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.kr1, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
    </td>
                </tr>
                <tr>
                  <td colspan="5"><v-text-field placeholder="Weight for the KRA " v-model="doc.body.weight_for_kra1" :rules="rules" solo></v-text-field></td>
              
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr1)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>
             

<br>
     <table >
              <tbody>
                <th colspan="5"><strong>KRA NO 2:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br /><br /></td>
                  
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                <tr  v-for="(item, index) in doc.body.kr2" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.kr2, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
    </td>
                </tr>
                <tr>
                  <td colspan="5"><v-text-field placeholder="Weight for the KRA " v-model="doc.body.weight_for_kra2" :rules="rules" solo></v-text-field></td>
              
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr2)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>



            <br>

             
<br>
     <table >
              <tbody>
                <th colspan="5"><strong>KRA NO 3:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br /><br /></td>
                  
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                <tr  v-for="(item, index) in doc.body.kr3" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.kr3, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
    </td>
                </tr>
                <tr>
                  <td colspan="5"><v-text-field placeholder="Weight for the KRA " v-model="doc.body.weight_for_kra3" :rules="rules" solo></v-text-field></td>
              
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr3)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>
<br>
     <table >
              <tbody>
                <th colspan="5"><strong>KRA NO 4:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br /><br /></td>
                  
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                <tr  v-for="(item, index) in doc.body.kr4" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.kr4, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
                  </td>
                </tr>
                <tr>
                  <td colspan="5"><v-text-field placeholder="Weight for the KRA " v-model="doc.body.weight_for_kra4" :rules="rules" solo></v-text-field></td>
              
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr4)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>
<br>
     <table >
              <tbody>
                <th colspan="5"><strong>KRA NO 5:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong><br /><br /></td>
                  
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                <tr  v-for="(item, index) in doc.body.kr5" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.rating" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.kr5, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
    </td>
                </tr>
                <tr>
                  <td colspan="5"><v-text-field placeholder="Weight for the KRA " v-model="doc.body.weight_for_kra5" :rules="rules" solo></v-text-field></td>
              
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr5)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>

 <table >
              <tbody>
                <th colspan="5"><strong>KRA NO 4:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong></td>
                  
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>RATING</strong></td>
              
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                <tr  v-for="(item, index) in doc.body.kr6" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules"   solo></v-text-field></td>
                  <td class="styled-input"><v-text-field v-model="item.rating" :rules="rules" solo class="styled-input"></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.kr6, index)"
                            color="warning" depressed>   
                            Delete
                          </v-btn>
    </td>
                </tr>
                <tr>
                  <td colspan="5"><v-text-field placeholder="Weight for the KRA : " v-model="doc.body.weight_for_kra6" :rules="rules" solo></v-text-field></td>
              
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr6)"  dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>

<br>
 <table >
              <tbody>
                <th colspan="7"><strong>KRA NO 5:</strong></th>
                <tr >
                 
                  <td rowspan="2"><strong>ACTIVITIES / OUTPUTS</strong></td>
                  
                  <td colspan="2"><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>RATING</strong></td>
       
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>ACTUAL ACHIEVEMENT/EVIDENCE</strong></td>
                  
                <tr  v-for="(item, index) in doc.body.kr7" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.actual_achievement" :rules="rules" solo></v-text-field></td>
                  <td class="styled-input"><v-text-field v-model="item.rating" :rules="rules" solo class="styled-input"></v-text-field></td>
                  <td colspan="2"></td>
                  <td><v-btn v-on:click ="removeRow(doc.body.kr7, index)"
                            color="warning">   
                            Delete
                      </v-btn>
                </td>
                </tr>
                <tr>
                  <td colspan="7"><v-text-field placeholder="Weight for the KRA " v-model="doc.body.weight_for_kra7" :rules="rules" solo></v-text-field></td>
                </tr>
              
              </tbody>
              <v-btn v-on:click="add_kra(doc.body.kr7)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>

<br>
<p><i> Please review and indicate the status or progress on the government priorities to establish if it progress according 
  to plan and whether by the end of the performance cycle it will be achieved by indicating with a "Yes or No".</i></p>
            <table>
              <tbody>
                <tr>
                  <td colspan="6"><strong>KEY GOVERNMENT FOCUS AREAS NO 1: Develop and implement an effective and efficient supply chain</strong> </td>
                  </tr>
                <tr>
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="1"><strong>PERFORMANCE MEASURES</strong></td>
                  <td colspan="1"><strong>PROGRESS</strong></td>
                 
                  <td rowspan="2"><strong>PROGRESS REVIEW COMMENT</strong></td>
                 
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>YES/NO</strong></td>
                  
                </tr>
                <tr>
                 
                  <td>Ensure that the number of procurement transactions are managed</td>
                  
                  <td>10% reduction in the total number of procurement transactions below R500K by the end of the
                    financial year (31 March)</td>
                  <td><v-switch v-model="doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.progress" disabled></v-switch></td>
                  
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.progress_review_comment}}</td>
                  
                </tr>
                <tr>
                  <td>
                    <p>Ensure that the nature of procurement spend is managed</p>
                  </td>
                 
                  <td>
                    <p>10% reduction in the value of procurement spend under R500K</p>
                  </td>
                  <td><v-switch v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_managed.progress" disabled></v-switch></td>
                  
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_procurement_managed.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Ensure that there is savings on procurement spend</td>
                  
                  <td>5% saving on annual procurement spend</td>
                  <td><v-switch v-model="doc.body.efficient_supply_chain_management_system.ensure_savings_spend.progress" disabled></v-switch></td>
                
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_savings_spend.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Ensure that procurement planning is managed</td>
                
                  <td>The finalisation of tender awards within an average of 60 days from the date bids close</td>
                  <td><v-switch v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.progress" disabled ></v-switch></td>
                
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Ensure that SCM risk management is performed</td>
                 
                  <td>Risk response plans for the top 5 SCM risks developed</td>
                  <td><v-switch v-model="doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.progress"  disabled></v-switch></td>
                  
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Ensure that the department pays all compliant supplier invoices within 30 days of receipt of
                    invoice</td>
                  
                  <td>100% of compliant supplier invoices paid within 30 days of receipt of invoice</td>
                  <td><v-switch v-model="doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.progress" disabled></v-switch></td>
                 
                  <td>{{doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.progress_review_comment}}</td>
                </tr>

                <tr>
                  <td colspan="6"><strong>Overall Comment on the progress of the KGFA no 1:</strong></td>
                </tr>
              </tbody>
             
            </table>
<br>
<br>
<h2>KEY GOVERNMENT FOCUS AREAS NO 2: Diversity and Transformation</h2>
<br>


            <table>
              <tbody>
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="1"><strong>PERFORMANCE MEASURES</strong></td>
                  <td><strong>PROGRESS</strong></td>
                  <td rowspan="2"><strong>Enabling Condition</strong></td>
                 
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>YES/NO</strong></td>
                </tr>
                <tr>
                  <td>Ensure that equity targets are met 50% representation of women at sms</td>
                  <td>At least a 1% increase in the representation of persons with disabilities for departments with representation below 1%</td>
             
                  <td><v-switch v-model="doc.body.diversity_and_transformation.ensure_that_equity_targets_met_women.progress" disabled></v-switch></td>
                  <td>{{doc.body.diversity_and_transformation.ensure_that_equity_targets_met_women.progress_review_comment}}</td>
                  
                </tr>
                <tr>
                  <td>
                    <p>2% representation of persons with disabilities across all levels</p>
                  </td>
                  <td>At least 20% increase in the representation of women at SMS for departments below 30%; 5% for departments between 30% and 40% and 3% for departments between 41% and 49%</td>
                 
                  <td><v-switch v-model="doc.body.diversity_and_transformation.representation_of_people_with_disabilities.progress" disabled></v-switch></td>
                  <td>{{doc.body.diversity_and_transformation.representation_of_people_with_disabilities.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Attraction of youth into the Public Service</td>
                  <td>At least 30% of the staff in the department is comprised of youth</td>
                  
                  <td><v-switch v-model="doc.body.diversity_and_transformation.attraction_of_youth_into_public.progress" disabled></v-switch></td>
                  <td>{{doc.body.diversity_and_transformation.attraction_of_youth_into_public.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Ensure that reasonable accommodation is provided to employees with disabilities and employees with small children</td>
                  <td>Report on the number of work related assistive devices provided in the department. Report on reasonable accommodation measures provided in the department.</td>
                  
                  <td><v-switch v-model="doc.body.diversity_and_transformation.ensure_reasonable_accom_disabilities.progress" disabled></v-switch></td>
                  <td>{{doc.body.diversity_and_transformation.ensure_reasonable_accom_disabilities.progress_review_comment}}</td>
                </tr>
                <tr>
                  <td>Ensure that reports have disaggregated data to show beneficiaries in terms of age, race, disability and gender</td>
                  <td>Reports with disaggregated data</td>
                 
                   <td><v-switch v-model="doc.body.diversity_and_transformation.ensure_that_reports_have_disaggregated_data.progress" disabled></v-switch></td>
                  <td>{{doc.body.diversity_and_transformation.ensure_that_reports_have_disaggregated_data.progress_review_comment}}</td>
                </tr>
        
                <tr>
                  <td colspan="6"> <strong>Overall Comment on the progress of the KGFA no 2:</strong> </td>
                </tr>
              </tbody>
              
            </table>

<br>


<br>

<table>
  <th colspan="5">KEY GOVERNMENT FOCUS AREAS NO 3: Integrated governance</th>
              <tbody>
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="1"><strong>PERFORMANCE MEASURES</strong></td>
                  <td><strong>PROGRESS</strong></td>
                  <td rowspan="2"><strong>Enabling Condition</strong></td>
                 <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>YES/NO</strong></td>
                </tr>

                <tr v-for="(item, index) in doc.body.integrated_governance" :key="index">
                 <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.progress" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.enabling_condition" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.integrated_governance, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
                  </td>
                </tr>
        
                <tr>
                  <td colspan="6"> <strong>Overall Comment on the progress of the KGFA no 2:</strong> </td>
                </tr>
              </tbody>
             
               <v-btn v-on:click="add_kra(doc.body.integrated_governance)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
          </table>



<br>

<table>
  <th colspan="5">KEY GOVERNMENT FOCUS AREAS NO 4: International and Regional integration</th>
              <tbody>
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="1"><strong>PERFORMANCE MEASURES</strong></td>
                  <td><strong>PROGRESS</strong></td>
                  <td rowspan="2"><strong>Enabling Condition</strong></td>
                 <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>YES/NO</strong></td>
                </tr>

                <tr v-for="(item, index) in doc.body.international_and_regional_integration" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.progress" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.enabling_condition" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.international_and_regional_integration, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
                  </td>
                </tr>
        
                <tr>
                  <td colspan="6"> <strong>Overall Comment on the progress of the KGFA no 2:</strong> </td>
                </tr>
              </tbody>
             
               <v-btn v-on:click="add_kra(doc.body.international_and_regional_integration)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
          </table>
 <br>

<table>
  <th colspan="5">KEY GOVERNMENT FOCUS AREAS NO 5: Implementation of the Minimum Information Security Standard (MISS)</th>
              <tbody>
                
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="1"><strong>PERFORMANCE MEASURES</strong></td>
                  <td><strong>PROGRESS</strong></td>
                  <td rowspan="2"><strong>Enabling Condition</strong></td>
                 <td rowspan="2"></td>
                </tr>
                <tr>
                  <td><strong>INDICATOR / TARGET</strong></td>
                  <td><strong>YES/NO</strong></td>
                </tr>

                <tr v-for="(item, index) in doc.body.implementation_of_miss" :key="index">
                  <td > <v-text-field v-model="item.activities_output" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.indicator_target" :rules="rules" solo></v-text-field></td>
                
                  <td ><v-text-field v-model="item.progress" :rules="rules" solo></v-text-field></td>
                  <td ><v-text-field v-model="item.enabling_condition" :rules="rules" solo></v-text-field></td>
                  <td > <v-btn v-on:click ="removeRow(doc.body.implementation_of_miss, index)"
                            color="primary"
                            depressed
                          >   
                            Delete
                          </v-btn>
                  </td>
                  
                </tr>
        
                <tr>
                  <td colspan="6"> <strong>Overall Comment on the progress of the KGFA no 2:</strong> </td>
                </tr>
              </tbody>
             
               <v-btn v-on:click="add_kra(doc.body.implementation_of_miss)" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
          </table>
<br>

<br>


<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            <td width="57" valign="top">
                <p>
                    <strong>No</strong>
                </p>
            </td>
            <td width="777" colspan="2" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="168" colspan="2" valign="top">
                <p>
                    <strong>Development required?</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="57" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="389" valign="top">
                <p>
                    <strong>Core Management Competencies (CMCs)</strong>
                </p>
            </td>
            <td width="387" valign="top">
                <p>
                    <strong>Process Competencies (PCs)</strong>
                </p>
            </td>
            <td width="85" valign="top">
                <p align="center">
                    <strong>CMCs</strong>
                </p>
                <p align="center">
                    <strong>Yes/No</strong>
                </p>
            </td>
            <td width="83" valign="top">
                <p align="center">
                    <strong>PCs</strong>
                </p>
                <p align="center">
                    <strong>Yes/No</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="57" valign="top">
                <p>
                    1
                </p>
            </td>
            <td width="389" valign="top">
                <p>
                    Strategic Capability and Leadership
                </p>
            </td>
            <td width="387" valign="top">
                <p>
                    Knowledge Management
                </p>
            </td>
            <td width="85" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no1.cmcs"></v-switch>
            </td>
            <td width="83" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no1.pcs"></v-switch>
            </td>
        </tr>
        <tr>
            <td width="57" valign="top">
                <p>
                    2
                </p>
            </td>
            <td width="389" valign="top">
                <p>
                    People Management and Empowerment
                </p>
            </td>
            <td width="387" valign="top">
                <p>
                    Service Delivery Innovation
                </p>
            </td>
            <td width="85" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no2.cmcs"></v-switch>
            </td>
            <td width="83" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no2.pcs"></v-switch>
            </td>
        </tr>
        <tr>
            <td width="57" valign="top">
                <p>
                    3
                </p>
            </td>
            <td width="389" valign="top">
                <p>
                    Programme and Project Management
                </p>
            </td>
            <td width="387" valign="top">
                <p>
                    Problem solving and analysis
                </p>
            </td>
            <td width="85" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no3.cmcs"></v-switch>
            </td>
            <td width="83" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no3.pcs"></v-switch>
            </td>
        </tr>
        <tr>
            <td width="57" valign="top">
                <p>
                    4
                </p>
            </td>
            <td width="389" valign="top">
                <p>
                    Financial Management
                </p>
            </td>
            <td width="387" valign="top">
                <p>
                    Client Orientation
                </p>
            </td>
            <td width="85" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no4.cmcs"></v-switch>
            </td>
            <td width="83" valign="top">
               <v-switch v-model="doc.body.competencies_pdp.no4.pcs"></v-switch>
            </td>
        </tr>
        <tr>
            <td width="57" valign="top">
                <p>
                    5
                </p>
            </td>
            <td width="389" valign="top">
                <p>
                    Change Management
                </p>
            </td>
            <td width="387" valign="top">
                <p>
                    Customer focus Communication
                </p>
            </td>
            <td width="85" valign="top">
              <v-switch v-model="doc.body.competencies_pdp.no5.cmcs"></v-switch>
            </td>
            <td width="83" valign="top">
              <v-switch v-model="doc.body.competencies_pdp.no5.pcs"></v-switch>
            </td>
        </tr>
    </tbody>
</table>

<br>

<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            <td width="1002" valign="top">
                <p>
                    <strong>
                        Comment by the HOD/DG on his/her performance
                    </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="1002" valign="top">
              <v-text-field v-model="doc.body.commnents_hod" :rules="rules" solo></v-text-field>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            <td width="1002" valign="top">
                <p>
                    <strong>
                        Comment by the Executive Authority
                    </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="1002" valign="top">

              <v-text-field v-model="doc.body.comments_ea" :rules="rules" solo></v-text-field>
            </td>
        </tr>
    </tbody>
</table>
 
            <!-- Author's Signature -->
            <v-flex xs12 class="my-5">
              <v-flex xs4>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{doc.author.SurName}}</h2>
                  <h4>
                    {{doc.author.Designation}} |
                    <span class="grey--text">{{doc.author.Department}}</span>
                  </h4>
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{doc.createdAt | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>

            <!-- Author's Signature -->
      <!-- Responses -->
            <v-flex v-if="$route.params.location != 'records'" xs12>
              <p class="text-xs-left">Sign Below</p>
              <VueSignaturePad
                class="signature-pad"
                max-width="480px"
                height="200px"
                ref="signaturePad"
                :options="{ onEnd }"
              />
              <v-btn flat color="warning" @click="clear">
                <v-icon left>undo</v-icon>
                <span>Clear</span>
              </v-btn>
            </v-flex>
            <v-flex
              v-for="signatory in doc.body.signatures"
              :key="signatory.SurName"
              xs12
              class="my-5"
            >
              <v-flex xs12>
                <p v-html="signatory.response"></p>
              </v-flex>
              <v-flex xs4>
                <img style="width:100%" :src="signatory.signature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{signatory.SurName}}</h2>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>

                <!-- <h3 class="warning--text mt-4">Change Signatory:</h3>
                <v-combobox
                  v-model="newSignatory"
                  :items="users"
                  label="Change Signatory"
                  chips
                  return-object
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >
                      {{ data.item.name }}
                      | {{ data.item.position }}
                      | {{ data.item.office }}
                    </v-chip>
                  </template>
                  </v-combobox>-->
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>

    </v-flex>
    </v-layout>
    </v-container>    
  </div>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/PreviewToolbar";
import VueSignaturePad from "vue-signature-pad";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
Vue.use(Editor);

Vue.use(VueSignaturePad);
export default {
  components: {
    editor: Editor,
    Toolbar
  },
  data() {
    return {
      user: {},
      users: [],
      loading: false,
      signatories: [],
      signature: "",
      ref: "",
    
      action: {},

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
     // sign
    onEnd() {
      console.log(this.doc.body.signatures)
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
    console.log(store.state.doc);
  }
};
</script>

<style>
.side-toolbar {
  position: fixed;
  max-width: 180px;
}
.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #DDDDDD;
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
