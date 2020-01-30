<template>
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
            <h2 class="text-xs-center">ANNUAL PERFORMACE PLAN QUARTERLY REPORT FORM</h2>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-left">TO BE COMPLETED BY REPORTING OFFICER:</h3>
            <v-text-field
              v-model="doc.body.nameOfInstitution"
              label="NAME OF REPORTING INSTITUTION
(School/Circuit/District/Branch/Office)"
            ></v-text-field>
            <v-text-field
              v-model="doc.body.locationOfInstitution"
              label="LOCATION OF REPORTING INSTITUTION/OFFICE:  
(Circuit/District/Branch /Office)"
            ></v-text-field>
            <v-text-field
              v-model="doc.body.reportingPeriod"
              label="REPORTING PERIOD: 
(Term / Quarter):"
            ></v-text-field>
            

          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 1: ADMINISTRATION</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.admintr"
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
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="adminremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="adminaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 2: PUBLIC ORDINARY SCHOOLS.</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.pubtr"
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

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="pubremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="pubaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 3: INDEPENDENT SCHOOLS.</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.indeptr"
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

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="indepremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="indepaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 4: PUBLIC SPECIAL SCHOOLS.</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.pubspecailtr"
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

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="pubspecailremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="pubspecailaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 5: EARLY CHILDHOOD EDUCATION</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.earlychildtr"
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

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="earlychildremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="earlychildaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 6: INFRASTRUCTURE DEVELOPMENT</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.infrastdevtr"
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

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="infrastdevremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="infrastdevaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 7: EXAMINATION AND EDUCATION RELATED</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.examedutr"
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
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.quarterTarget"
                    single-line
                    solo
                    flat
                    placeholder="Quarter Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.actualOutput"
                    single-line
                    solo
                    flat
                    placeholder="Actual Output"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.variance"
                    single-line
                    solo
                    flat
                    placeholder="Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.reasonForVariance"
                    single-line
                    solo
                    flat
                    placeholder="Reason For Variance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.yearToDate"
                    single-line
                    solo
                    flat
                    placeholder="Year-To Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.expenditure"
                    single-line
                    solo
                    flat
                    placeholder="Expenditure"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="exameduremoveRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="exameduaddRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <p>
              <strong>The undersigned hereby confirm that the information provided has been quality assured and verified for accuracy and completenes</strong>
            </p>
          </v-flex>

          <v-flex xs12>
            <v-text-field v-model="doc.body.nameReportingOfficer" label="Name of Reporting Officer:"></v-text-field>
          </v-flex>

          <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Sign Here : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.authorSignatureDate" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.authorSignatureDate" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>

            </v-layout>

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
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "annualPerformancePlanQuarterlyReport",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "PERFORMACE INDICATOR",
          align: "left",
          value: ""
        },
        {
          text: "ANNUAL TARGET",
          value: ""
        },
        {
          text: "QUARTER TARGET",
          value: ""
        },
        {
          text: "PROGRESS: ACTUAL OUTPUT",
          value: ""
        },
        {
          text: "VARIANCE",
          value: ""
        },
        {
          text: "REASON FOR VARIANCE",
          value: ""
        },
        {
          text: "INTERVENTION",
          value: ""
        },
        {
          text: "YEAR-TO DATE",
          value: ""
        },
        {
          text: "BUDGET",
          value: ""
        },
        {
          text: "EXPENDITURE",
          value: ""
        },

        {
          text: "ACTIONS",
          value: "carbs"
        }
      ],
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "annualPerformancePlanQuarterlyReport",
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
          admintr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],
          pubtr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],
          indeptr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],
          pubspecailtr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],
          earlychildtr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],
          infrastdevtr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],
          examedutr: [
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            },
            {
              performanceIndicator: "",
              annualTarget: "",
              quarterTarget: "",
              actualOutput: "",
              variance: "",
              reasonForVariance: "",
              intervention: "",
              yearToDate: "",
              budget: "",
              expenditure: ""
            }
          ],

          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: []
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
      this.doc.body.signatures = users;
    },
    onEnd() {
      this.setAuthorSignature();
    },
    //===========
    //Add Row
    //===========

    adminaddRow() {
      this.doc.body.admintr.push({});
    },

    pubaddRow() {
      this.doc.body.pubtr.push({});
    },

    indepaddRow() {
      this.doc.body.indeptr.push({});
    },

    pubspecailaddRow() {
      this.doc.body.pubspecailtr.push({});
    },

    earlychildaddRow() {
      this.doc.body.earlychildtr.push({});
    },

    infrastdevaddRow() {
      this.doc.body.infrastdevtr.push({});
    },

    exameduaddRow() {
      this.doc.body.examedutr.push({});
    },
    //===========
    //Remove Row
    //===========

    adminremoveRow(index) {
      this.doc.body.admintr.splice(index, 1);
    },

    pubremoveRow(index) {
      this.doc.body.pubtr.splice(index, 1);
    },

    indepremoveRow(index) {
      this.doc.body.indeptr.splice(index, 1);
    },

    pubspecailremoveRow(index) {
      this.doc.body.pubspecailtr.splice(index, 1);
    },

    earlychildremoveRow(index) {
      this.doc.body.earlychildtr.splice(index, 1);
    },

    infrastdevremoveRow(index) {
      this.doc.body.infrastdevtr.splice(index, 1);
    },

    exameduremoveRow(index) {
      this.doc.body.examedutr.splice(index, 1);
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

