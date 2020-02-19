<template>
    <v-container grid-list-md fluid>

<v-layout row wrap>
      <v-flex xs2>
        <v-layout>
         <Toolbar :data="doc" :canAttachFile="false" />
        </v-layout>
      </v-flex> 

  <v-flex xs10 column wrap>

          <h2>PERFORMANCE AGREEMENT</h2>
          <v-text-field v-model="doc.body.name_executive_authority" :rules="nameRules" :counter="10" label="Name of Executive Authority"
            required></v-text-field>

          <v-text-field v-model="doc.body.name_of_hod"  :rules="nameRules" :counter="10" label="Name of Head of Department" required>
          </v-text-field>

          <v-text-field v-model="doc.body.persal_number" label="HOD/DG Persal number" required></v-text-field>

          <v-text-field v-model="doc.body.province"  label="Province (if applicable)" required></v-text-field>


          <v-text-field v-model="doc.body.performance_cycle"  label="Performance cycle" required></v-text-field>


          <v-text-field v-model="doc.body.half_yearly_performance"  label="Half-yearly Performance review & assessment date:" required>
          </v-text-field>

          <v-text-field v-model="doc.body.annual_performance_assessment_date"  label="Annual Performance assessment date:" required></v-text-field>
          <v-divider></v-divider>
          <h3>Dispute resolution mechanism</h3>
          <br>
          <h4 class="caption">
            Any disputes about the nature of the HOD’s PA, whether it relates to key responsibilities, priorities,
            methods of assessment in this agreement, shall be mediated by DG in the Presidency or DG in the Office of
            the premier.

            If, this mediation fails and the dispute remains unresolved at this level, the matter should, thereafter be
            referred to the PSC.
          </h4>

<br>

          <h2>EMPLOYEE PERFORMANCE</h2>
          <br>

            <table>
              <tbody>
                <tr>
                  <th>Key Result Area</th>
                  <th>Batho Pele Principles</th>
                  <th>Weighting</th>
                </tr>
                <tr v-for="(item, index) in doc.body.employeePerfArray" :key="index">
                  <td>
                    <v-text-field v-model="item.keyResArea" outlined shaped></v-text-field>
                  </td>
                  <td>
                    <v-text-field v-model="item.batPelPrinciples" outlined shaped></v-text-field>
                  </td>
                  <td>
                    <v-text-field v-model="item.weighing" outlined shaped></v-text-field>
                  </td>
                </tr>
              </tbody>
              <v-btn v-on:click="addEmployeePerf" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
            </table>
        
          <br>
       
            <table id="my-table" >
              <tbody>

                <tr style="height: 52px;">
                  <td style="width: 609px; height: 52px; text-align: left;" colspan="4"><br /><br /><strong>KRAs Total
                      Weighting (contribute 40% towards the final score)</strong><br /><br /></td>
                  <td style="width: 81px; height: 52px;">&nbsp;<strong>100%</strong></td>
                </tr>
                <tr style="height: 8px;">
                  <td style="width: 80px; height: 86px;" rowspan="5"><br /><strong>Key Government Focus Areas</strong>
                  </td>
                  <td style="width: 529px; height: 8px;" colspan="3">
                    <p>1.Develop and implement an effective and efficient supply chain management system</p>
                  </td>
                  <td style="width: 81px; height: 8px;"><strong>&nbsp;20%</strong></td>
                </tr>
                <tr style="height: 39px;">
                  <td style="width: 529px; height: 39px;" colspan="3"><br /><strong>2</strong>. *Support international
                    and
                    regional Integration programmes and commitments<br /><br /></td>
                  <td style="width: 81px; height: 39px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;3. Implementation of the Minimum Information
                    Security Standards (i.e. MISS) and overall accountability for security</td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;4. Transformation</td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;5. Integrated Governance</td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 609px; height: 13px; text-align: left;" colspan="4">&nbsp;<strong>Key Government
                      Focus
                      Areas: Total Weighting (contribute 20% towards the final score)</strong></td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>100%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 80px; height: 13px;">&nbsp;<strong>Auditor General</strong></td>
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;This component will focus on the measurement
                    of the extent of the departmental financial and legislative compliance. There should be no material
                    findings on con-compliance with legislation and the financial statement should be free from material
                    misstatements.&nbsp;</td>
                  <td style="width: 81px; height: 13px;">&nbsp;</td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 609px; height: 13px; text-align: left;" colspan="4">&nbsp;<strong>Total Weighting:
                      Auditors General Findings &amp; Opinions (contribute 20% towards the final score)</strong></td>
                  <td style="width: 81px; height: 13px;">&nbsp;<strong>20%</strong></td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 80px; height: 13px;">&nbsp;<strong>Organisational Performance </strong></td>
                  <td style="width: 529px; height: 13px;" colspan="3">&nbsp;This component will focus on assessing the
                    organisational performance base on the predetermine target in the Annual Performance Plan (APP) and
                    the audited Annual Report (AR) will be used to establish the extent in which the objective in the
                    APP
                    has been achieved.&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td style="width: 81px; height: 13px;">&nbsp;</td>
                </tr>
                <tr style="height: 13px;">
                  <td style="width: 609px; height: 13px;" colspan="4">&nbsp;<strong>Total weight: The organisational
                      performance will contribute 20% towards the final score</strong></td>
                  <td style="width: 81px; height: 13px;"><strong>&nbsp;20%</strong></td>
                </tr>
              </tbody>
            </table>

          <br>
          <h2>Generic Management Competencies: Personal Development Plan</h2>
          <br>
          <table >
            <tbody>
              <tr style="height: 33px;">
                <td style="width: 106px; height: 9px; text-align: center;" rowspan="2"><strong>No</strong></td>
                <td style="width: 313px; height: 9px; text-align: center;" rowspan="2"><strong>Core Management
                    Competencies</strong></td>
                <td style="width: 304px; height: 9px; text-align: center;" rowspan="2"><strong>Process
                    Competencies</strong></td>
                <td style="width: 164px; height: 33px; text-align: center;" colspan="2"><strong>Dev. Required</strong>
                </td>
              </tr>
              <tr style="height: 19px;">
                <td style="width: 74px; height: 19px; text-align: center;">&nbsp;<strong>Yes</strong></td>
                <td style="width: 90px; height: 19px; text-align: center;"><strong>No</strong></td>
              </tr>
              <tr v-for="(item, index) in doc.body.gmc_personal_Development_plan" :key="index">
                <td>
                  <v-text-field v-model="item.number" outlined shaped></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="item.core_management_competencies" outlined shaped></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="item.process_competencies" outlined shaped></v-text-field>
                </td>
                <td colspan="2">
                  <v-switch v-model="item.dev_required" color="green"></v-switch>
                </td>
              </tr>
            </tbody>
            <v-btn v-on:click="addGMC_PDP" class="mx-2" dark color="green">
              <v-icon dark>mdi-plus</v-icon>
              Add more
            </v-btn>
          </table>
          <br>
          <br>
          <h2>Work Plan</h2>
          <br>
      
            <v-textarea filled auto-grow label="KEY RESULT AREAS" rows="4" row-height="30" shaped></v-textarea>
            <table >
              <tbody>
                <tr >
                  <td rowspan="2"><strong>KEY Activities</strong><br /><br /></td>
                  <td rowspan="2"><strong>Weight</strong><br /><br /></td>
                  <td colspan="2"><br /><strong>PERFORMANCE MEASURES</strong></td>
                  <td rowspan="2"><strong>Resource Required</strong><br /><br /></td>
                  <td rowspan="2"><br /><strong>Enabling Condition</strong></td>
                </tr>
                <tr>
                  <td><strong>TARGET DATE</strong></td>
                  <td><strong>INDICATOR / TARGET</strong></td>
                <tr v-for="(item, index) in doc.body.work_plan" :key="index" style="height: 64px;">
                  <td style="width: 94px; height: 64px;"></td>
                  <td style="width: 94px; height: 64px;">&nbsp;</td>
                  <td style="width: 151px; height: 64px;">&nbsp;</td>
                  <td style="width: 141px; height: 64px;">&nbsp;</td>
                  <td style="width: 170px; height: 64px;">&nbsp;</td>
                  <td style="width: 147px; height: 64px;">&nbsp;</td>
                </tr>
                <td style="width: 170px; height: 64px;"><strong>Weight for the KRA</strong></td>
                <td style="width: 147px; height: 64px;">&nbsp;%</td>
              </tbody>
              <v-btn v-on:click="add_workplan" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
            </table>


          <br>
          <h2>PERSONAL DEVELOPMENTAL PLAN</h2>

          <br>
        
            <table>
              <tbody>
                <tr>
                  <td>Number</td>
                  <td>Developmental Areas</td>
                  <td>Types of interventions (Mentoring/course/workshop/seminars</td>
                  <td>Target date</td>
                </tr>
                <tr v-for="(item, index) in doc.body.personal_development_plan" :key="index">
                  <td>
                    <v-text-field v-model="item.number_pdp" outlined shaped></v-text-field>
                  </td>
                  <td>
                    <v-text-field v-model="item.developmental_areas" outlined shaped></v-text-field>
                  </td>
                  <td>
                    <v-text-field v-model="item.types_of_interventions" outlined shaped></v-text-field>
                  </td>
                  <td>
                    <v-text-field v-model="item.target_date_pdp" outlined shaped></v-text-field>
                  </td>
                </tr>

              </tbody>
              <v-btn v-on:click="add_personal_dev_plan" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
            </table>
        

<br>
          <h2>KEY GOVERNMENT FOCUS AREAS: Develop and implement an effective and efficient supply chain management
                      system</h2>
          <br>
 

            <table>
              <tbody>
                <tr>
                 
                  <td rowspan="2"><strong>KEY FOCUS AREA ACTIVITIES</strong></td>
                  <td colspan="2"><strong>PERFORMANCE MEASURES</strong><br /><br /></td>
                  <td rowspan="2"><strong>BASELINE DATA</strong></td>
                  <td rowspan="2"><strong>Resource Required</strong></td>
                  <td rowspan="2"><strong>Enabling Condition</strong></td>
                 
                </tr>
                <tr>
                  <td><strong>TARGET DATE</strong></td>
                  <td><strong>INDICATOR / TARGET</strong></td>
                </tr>
                <tr>
                 
                  <td>Ensure that the number of procurement transactions are managed</td>
                  <td>Annual</td>
                  <td>10% reduction in the total number of procurement transactions below R500K by the end of the
                    financial year (31 March)</td>
                  <td>Total number of procurement transactions below R500K</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_transactions_managed.enabling_condition" placeholder="edit me"></td>
                  
                </tr>
                <tr>
                  <td>
                    <p>Ensure that the nature of procurement spend is managed</p>
                  </td>
                  <td>Annual</td>
                  <td>
                    <p>10% reduction in the value of procurement spend under R500K</p>
                  </td>
                  <td>Total value of procurement transactions below R500K</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_managed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_managed.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that there is savings on procurement spend</td>
                  <td>Annual</td>
                  <td>5% saving on annual procurement spend</td>
                  <td>Current cost of specific goods and/or services</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_savings_spend.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_savings_spend.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that procurement planning is managed</td>
                  <td>Annual</td>
                  <td>The finalisation of tender awards within an average of 60 days from the date bids close</td>
                  <td>Average number of days to award tenders</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_procurement_planning_managed.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that SCM risk management is performed</td>
                  <td>Annual</td>
                  <td>Risk response plans for the top 5 SCM risks developed</td>
                  <td>Risk response (mitigation) plans</td>
                   <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_risk_management_perforemed.enabling_condition" placeholder="edit me"></td>
                </tr>
                <tr>
                  <td>Ensure that the department pays all compliant supplier invoices within 30 days of receipt of
                    invoice</td>
                  <td>Annual</td>
                  <td>100% of compliant supplier invoices paid within 30 days of receipt of invoice</td>
                  <td>Average supplier payment days</td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.resource_required" placeholder="edit me"></td>
                  <td><input v-model="doc.body.efficient_supply_chain_management_system.ensure_department_pay_all_suppliers.enabling_condition" placeholder="edit me"></td>>
                </tr>
              </tbody>
              <v-btn v-on:click="save_efficient_supply_chain_management_system" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Save Form
              </v-btn>
            </table>


     


  <br>

        
                   <h3> <strong>KEY GOVERNMENT FOCUS AREAS</strong> </h3>
                 <p>
                    Develop and implement an efficient and effective diversity
                    management and transformation system
                </p>


<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
          
            <td width="171" rowspan="2">
                <p align="center">
                    <strong>KEY FOCUS AREA ACTIVITIES / OUTPUTS</strong>
                </p>
            </td>
            <td width="312" colspan="2">
                <p align="center">
                    <strong>PERFORMANCE MEASURES</strong>
                </p>
            </td>
            <td width="137" rowspan="2">
                <p align="center">
                    <strong>BASELINE DATA</strong>
                </p>
            </td>
            <td width="132" rowspan="2">
                <p align="center">
                    <strong>ACTUAL PERFORMANCE</strong>
                </p>
            </td>
            <td width="104" rowspan="2">
                <p align="center">
                    <strong>VARIANCE / COMMENT</strong>
                </p>
            </td>
            <td width="102" rowspan="2" valign="top">
                <p align="center">
                    <strong>COMMENTS </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="84">
                <p align="center">
                    <strong>TARGET DATE</strong>
                </p>
            </td>
            <td width="227">
                <p align="center">
                    <strong>INDICATOR / TARGET</strong>
                </p>
            </td>
        </tr>
        <tr>
            
            <td width="171" valign="top">
                <p>
                    Ensure that equity targets are met
                </p>
                <p>
                    50% representation of women at sms
                </p>
                <p>
                    2% representation of persons with disabilities across all
                    levels
                </p>
                <p>
                    Attraction of youth into the Public Service
                </p>
            </td>
            <td width="84" valign="top">
                <p align="center">
                    Annual
                </p>
            </td>
            <td width="227" valign="top">
                <p>
                    At least a 1% increase in the representation of persons
                    with disabilities for departments with representation below
                    1%
                </p>
                <p>
                    At least 20% increase in the representation of women at SMS
                    for departments below 30%; 5% for departments between 30%
                    and 40% and 3% for departments between 41% and 49%
                </p>
                <p>
                    At least 30% of the staff in the department is comprised of
                    youth
                </p>
            </td>
            <td width="137" valign="top">
                <p>
                    Current percentage of representation of youth, persons with
                    disabilities and for women at SMS
                </p>
            </td>
            <td width="132" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="102" rowspan="3" valign="top">
            </td>
        </tr>
        <tr>
            <td width="171" valign="top">
                <p>
                    Ensure that reasonable accommodation is provided to
                    employees with disabilities and employees with small
                    children
                </p>
            </td>
            <td width="84" valign="top">
                <p align="center">
                    Annual
                </p>
            </td>
            <td width="227" valign="top">
                <p>
                    Report on the number of work related assistive devices
                    provided in the department.
                </p>
                <p>
                    Report on reasonable accommodation measures provided in the
                    department.
                </p>
            </td>
            <td width="137" valign="top">
                <p>
                    Current status of provision of assistive devices
                </p>
                <p>
                    Current status of reasonable accommodation measures
                    provided in the department.
                </p>
            </td>
            <td width="132" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
        </tr>
        <tr>
            <td width="171" valign="top">
                <p>
                    Ensure that reports have disaggregated data to show
                    beneficiaries in terms of age, race, disability and gender
                </p>
            </td>
            <td width="84" valign="top">
                <p align="center">
                    Annual
                </p>
            </td>
            <td width="227" valign="top">
                <p>
                    Reports with disaggregated data
                </p>
            </td>
            <td width="137" valign="top">
                <p>
                    Current status of reports in the department
                </p>
            </td>
            <td width="132" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<br>
     <p>
                    <strong>KEY GOVERNMENT FOCUS AREAS</strong>
                </p>
                <p align="center">
                    <strong>Integrated Governance</strong>
                </p>
<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
          
            <td width="192" rowspan="2" valign="top">
                <p>
                    <strong>KEY FOCUS AREA ACTIVITIES / OUTPUTS</strong>
                </p>
            </td>
            <td width="340" colspan="2" valign="top">
                <p align="center">
                    <strong>PERFORMANCE MEASURES</strong>
                </p>
            </td>
            <td width="113" rowspan="2" valign="top">
                <p align="center">
                    <strong>BASELINE DATA</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>ACTUAL PERFORMANCE</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>VARIANCE / COMMENT</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="170">
                <p align="center">
                    <strong>TARGET DATE</strong>
                </p>
            </td>
            <td width="170">
                <p align="center">
                    <strong>INDICATOR / TARGET</strong>
                </p>
            </td>
        </tr>
        
        
        <tr>
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
        <tr>
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
    
    </tbody>
</table>


<br>

   <p>
                    <strong>KEY GOVERNMENT FOCUS AREAS</strong>
                </p>
                 <p align="center">
                    <strong>
                        International and Regional Integration programmes and
                        commitments
                    </strong>
                </p>
<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
          
            <td width="192" rowspan="2" valign="top">
                <p>
                    <strong>KEY FOCUS AREA ACTIVITIES / OUTPUTS</strong>
                </p>
            </td>
            <td width="340" colspan="2" valign="top">
                <p align="center">
                    <strong>PERFORMANCE MEASURES</strong>
                </p>
            </td>
            <td width="113" rowspan="2" valign="top">
                <p align="center">
                    <strong>BASELINE DATA</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>ACTUAL PERFORMANCE</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>VARIANCE / COMMENT</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="170">
                <p align="center">
                    <strong>TARGET DATE</strong>
                </p>
            </td>
            <td width="170">
                <p align="center">
                    <strong>INDICATOR / TARGET</strong>
                </p>
            </td>
        </tr>
        <tr>
            
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
        <tr>
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
    </tbody>
</table>

<br>
  <p>
                    <strong>KEY GOVERNMENT FOCUS AREAS</strong>
                </p>

                <p align="center">
                    <strong>Minimum Information Security</strong>
                </p>
                <p align="center">
                    <strong>Standards (i.e. MISS) </strong>
                </p>
<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            
            <td width="192" rowspan="2" valign="top">
                <p>
                    <strong>KEY FOCUS AREA ACTIVITIES / OUTPUTS</strong>
                </p>
            </td>
            <td width="340" colspan="2" valign="top">
                <p align="center">
                    <strong>PERFORMANCE MEASURES</strong>
                </p>
            </td>
            <td width="113" rowspan="2" valign="top">
                <p align="center">
                    <strong>BASELINE DATA</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>ACTUAL PERFORMANCE</strong>
                </p>
            </td>
            <td width="151" rowspan="2">
                <p align="center">
                    <strong>VARIANCE / COMMENT</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="170">
                <p align="center">
                    <strong>TARGET DATE</strong>
                </p>
            </td>
            <td width="170">
                <p align="center">
                    <strong>INDICATOR / TARGET</strong>
                </p>
            </td>
        </tr>
        
        <tr>
            <td width="192" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="170" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
            <td width="151" valign="top">
            </td>
        </tr>
    </tbody>
</table>

  <v-layout row>

  
        <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Insert Your Signature</h2>
              <v-flex xs12>
                <p class="text-xs-left">Sign Below</p>
                <VueSignaturePad
                  class="signature-pad"
                  max-width="480px"
                  height="200px"
                  ref="signaturePad"
                  :options="{ onEnd }"
                />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>
            </v-flex>
            <!-- sign -->

            <v-flex xs12>
             <v-flex xs11>
                <h3>Who to sign:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" multiple />
              </v-flex>
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
  import record from "~/services/docLog";
  import {
    signatureHelpers
  } from "~/services/helpers";
  import VueSignaturePad from "vue-signature-pad";
  import {
    createDoc
  } from "~/services/DocsService";

  Vue.use(VueSignaturePad);
  Vue.use(Editor);
  export default {
    components: {
      editor: Editor,
      Toolbar,
      SelectUsers
    },
    data() {
      return {
 
       
  
        // employee performance 
        keyResArea: "",
        batPelPrinciples: "",
        weighing: "",

        // gmc personal development plan
        number: '',
        core_management_competencies: '',
        process_competencies: '',
        dev_required: false,

        //work plan
      

        menu_hod: false,
        date_hod: new Date().toISOString().substr(0, 10),

        menu_mec: false,
        date_mec: new Date().toISOString().substr(0, 10),

        series: {},
        saveDialog: false,
        attachments: [],
        isFormValid: true,
        status: "",
        iSign: false,
        doc: {
          ref: this.$route.params.ref,
          template: "PerformanceAgreementForHOD",
          author: store.state.user,
          body: {
              address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
              attachments: [],
              authorSignature: "",
              signatures: [],
              recipients: [],
              performance_agreement: [],

              name_executive_authority:"",
              name_of_hod:"",
              persal_number:"",
              province:"",
              performance_cycle:"",
              half_yearly_performance:"",
              annual_performance_assessment_date:"",

              key_activities: "",
              weight: "",
              performance_measures: {
                target_date: '',
                indicator: ''
              },
        resource_required: "",
        enabling_condition: "",

        // personal develpment plan
        number_pdp: '',
        developmental_areas: '',
        types_of_interventions: '',
        target_date_pdp: '',


        employeePerfArray: [{
          keyResArea: "",
          batPelPrinciples: "",
          weighing: ""
        }, ],
        gmc_personal_Development_plan: [{
          number: '',
          core_management_competencies: '',
          process_competencies: '',
          dev_required: false
        }],

        work_plan: [{
          key_activities: '',
          weight: '',
          performance_measures: {
            target_date: '',
            indicator: ''
          },
          resource_required: '',
          enabling_condition: ''
        }],

        personal_development_plan: [{
          number_pdp: '',
          developmental_areas: '',
          types_of_interventions: '',
          target_date_pdp: ''
        }],

        efficient_supply_chain_management_system : {
          ensure_transactions_managed: {resource_required:"this is a requirement", enabling_condition: ""},
          ensure_procurement_managed: {resource_required:"", enabling_condition: ""},
          ensure_savings_spend: {resource_required:"", enabling_condition: ""},
          ensure_procurement_planning_managed: {resource_required:"", enabling_condition: ""},
          ensure_risk_management_perforemed: {resource_required:"", enabling_condition: ""},
          ensure_department_pay_all_suppliers: {resource_required:"", enabling_condition: ""}
        },
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
      addEmployeePerf() {
        this.doc.body.employeePerfArray.push({
          keyResArea: this.keyResArea,
          batPelPrinciples: this.batPelPrinciples,
          weighing: this.weighing
        })
        //clear

        this.keyResArea = ""
        this.batPelPrinciples = ""
        this.weighing = ""
      },
      addGMC_PDP() {
        this.doc.body.gmc_personal_Development_plan.push({
          number: this.number,
          core_management_competencies: this.core_management_competencies,
          process_competencies: this.process_competencies,
          dev_required: this.dev_required,
        })

        // clear

        this.number = ""
        this.core_management_competencies = ""
        this.process_competencies = ""
        this.dev_required = ""
      },
      add_workplan() {
        this.doc.body.work_plan.push({
          key_activities: this.key_activities,
          weight: this.weight,
          performance_measures: this.performance_measures,
          resource_required: this.resource_required,
          enabling_condition: this.enabling_condition
        })

        // clear up things

        this.key_activities = ""
        this.weight = ""
        this.performance_measures = ""
        this.resource_required = ""
        this.enabling_condition = ""
      },
      add_personal_dev_plan() {
        this.doc.body.personal_development_plan.push({
          number_pdp: this.number_pdp,
          developmental_areas: this.developmental_areas,
          types_of_interventions: this.types_of_interventions,
          target_date_pdp: this.target_date_pdp,

        })

        // clear up things

        this.number_pdp = ""
        this.developmental_areas = ""
        this.types_of_interventions = ""
        this.target_date_pdp = ""

      },
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

  .signature-pad {
    max-width: 480px;
    background-color: #fff;
    border: 1px dotted black;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;

  }

  td,
  th {
    border: 1px solid #88ac89;
    text-align: left;
    padding: 8px;

  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .top-th {
    background-color: #1fb638
  }

</style>
