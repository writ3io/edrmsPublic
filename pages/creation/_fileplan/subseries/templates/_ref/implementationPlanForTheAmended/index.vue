<template>
<div id="implementationPlanForTheAmended">
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
              <v-flex xs5 offset-xs3>
                <h3
                  class="text-xs-center main-heading"
                >IMPLEMENTATION PLAN FOR THE AMENDED EDUCATION DISTRICT POLICY</h3>
              </v-flex>
              <br />
              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border class="card-border">
                  <v-flex xs12>
                    <v-text-field v-model="doc.body.initials" label="Name of Province: "></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field v-model="doc.body.initials" label="Name of contact person: "></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field v-model="doc.body.initials" label="Email address: "></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field v-model="doc.body.initials" label="Telephone numbers: "></v-text-field>
                  </v-flex>

                  <v-flex>
                    <h4>Introduction and background</h4>
                    <ol>
                      <li>On 3 April 2013 Minister Angie Motshekga gazetted the Organization Roles and Responsibilities and of Education Districts;</li>
                      <li>The Policy guided on</li>
                      <ol type="a">
                        <li>Minimum size norms for education districts and circuits;</li>
                        <li>Common nomenclature to be used for Education Districts and associated levels of operation; and</li>
                        <li>Minimum Delegations</li>
                      </ol>
                      <li>Five years into the implementation of the Policy it became clear that the size norms in particular were almost impossible to implement for particularly for largely provinces due to the cost of implementation.</li>
                      <li>On 19 January 2018 an Amended Policy was gazetted with revised and more generous district and size norms. The Amended Policy also guides on minimum staffing norms for districts.</li>
                    </ol>
                    <h4>Instruction on completion of the template:</h4>
                    <p>
                      Kindly provide information about the current status in
                      <strong>SECTION A.</strong>
                    </p>
                    <h4>SECTIONS B & C: MULTI-YEAR POLICY IMPLEMENTATION PLAN</h4>
                    <p>
                      Information should be provided, only in cases, where there is need for alignment with the amended policy, including the budget needed per activity per year.
                      Please indicate with N/A where the item has been addressed by the province/ does not apply.
                      The
                      <strong>Minimum District Staffing Norms (Section B)</strong> and Tools of Trade
                      <strong>(Section C)</strong> are attached, for reference.
                    </p>
                  </v-flex>
                </v-layout>
                <br />
                <v-flex justify-end>
                  <hr style="color:grey" />
                </v-flex>
              </v-card-text>

              <v-card-text>
                <!-- 
              ================================================================
              SECTION A – STATUS REPORTS
              ================================================================
                -->

                <h3 class="text-xs-center">SECTION A – STATUS REPORTS</h3>

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
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items v-slot:no-data></template>
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
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers2"
                      :items="doc.body.phase1"
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
                        <td class="px-0 py-0">{{props.item.item}}</td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.aligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.notAligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
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
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <!--
                    ======================================
                    1.2 EDUCATION DISTRICT BOUNDARIES
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers3"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers4"
                      :items="doc.body.phase2"
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
                        <td class="px-0 py-0">{{props.item.district}}</td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.aligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.notAligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
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
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <!--
                    ======================================
                    1.3 EDUCATION CIRCUIT BOUNDARIES
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers5"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers6"
                      :items="doc.body.phase3"
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
                        <td class="px-0 py-0">{{props.item.circuit}}</td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.aligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.notAligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
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
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <!--
                    ======================================
                    1.4 DELEGATIONS
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers7"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers8"
                      :items="doc.body.phase4"
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
                        <td class="px-0 py-0">{{props.item.authority}}</td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.aligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.notAligned"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
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
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <!--
                    ======================================
                    SECTION B: MULTI-YEAR POLICY IMPLEMENTATION
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers9"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers10"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers11"
                      :items="doc.body.phase5"
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
                        <td class="px-0 py-0">{{props.item.authority}}</td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <!--
                    ======================================
                    2.1 DISTRICT DIRECTORS
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers12"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers13"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers14"
                      :items="doc.body.phase6"
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
                        <td class="px-0 py-0">
                          <div v-if="props.index == 5">
                            <v-layout wrap>
                              <v-flex>
                                <div>{{props.item.district}}</div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.district"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                    <!--
                    ======================================
                    2.2 CIRCUIT MANAGEMENT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers15"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers16"
                      :items="doc.body.phase7"
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
                        <td class="px-0 py-0">{{props.item.staffingPerCirciut}}</td>

                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.activities"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>

                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.budget"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank1"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.budget1"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank2"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.budget2"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank3"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.budget3"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank4"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.budget4"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank5"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.budget5"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                              v-model="props.item.blank6"
                              single-line
                              solo
                              flat
                              placeholder
                            ></v-text-field>
                          </div>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />


                     <!--
                    ======================================
                    2.3 DISTRICT MANAGEMENT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers17"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers18"
                      :items="doc.body.phase8"
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
                        <td class="px-0 py-0">
                         
                                {{props.item.officeDistrictDirectorPosts}}
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                     <!--
                    ======================================
                    2.4 CURRICULUM DELIVERY AND SUPPORT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers19"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers20"
                      :items="doc.body.phase9"
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
                        <td class="px-0 py-0">
                         
                                {{props.item.professionalSupportServices}}
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                     <!--
                    ======================================
                    2.5 SUBJECT ADVISORS
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers21"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers22"
                      :items="doc.body.phase10"
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
                        <td class="px-0 py-0">
                         
                                {{props.item.professionalSupportServices}}
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                     <!--
                    ======================================
                    2.6 EXAMINATION AND ASSESSMENT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers23"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers24"
                      :items="doc.body.phase11"
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
                        
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div><strong><i>{{props.item.staffingPerDistrict}}</i></strong></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.staffingPerDistrict}}
                          </div>
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>

                        <td class="px-0 py-0">



                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">


                           <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">
                           <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                         
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                             <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                         
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                           <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                           <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 9 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                     <!--
                    ======================================
                    2.7 INSTITUTIONAL GOVERNANCE AND SUPPORT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers25"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers24"
                      :items="doc.body.phase12"
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
                        
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div><strong><i>{{props.item.staffingPerDistrict}}</i></strong></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.staffingPerDistrict}}
                          </div>
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>

                        <td class="px-0 py-0">



                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                         
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                             <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                         
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                           <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                           <div v-if="props.index == 6 ">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                     <!--
                    ======================================
                    2.8 DISTRICT LEARNER SUPPORT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers26"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers24"
                      :items="doc.body.phase13"
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
                        
                        <td class="px-0 py-0">

                          <div v-if="props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div><strong><i>{{props.item.staffingPerDistrict}}</i></strong></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.staffingPerDistrict}}
                          </div>
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>

                        <td class="px-0 py-0">



                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                         
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                             <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                         
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                           <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                           <div v-if="props.index == 0
                          || props.index == 6 
                          || props.index == 8 
                          || props.index == 10
                          || props.index == 12
                          || props.index == 14
                          || props.index == 16
                          || props.index == 18
                          || props.index == 20 
                          || props.index == 23
                          || props.index == 26">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                   <!--
                    ======================================
                    2.9 HUMAN RESOURCE MANAGEMENT
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers27"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers24"
                      :items="doc.body.phase14"
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
                        
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div><strong><i>{{props.item.staffingPerDistrict}}</i></strong></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.staffingPerDistrict}}
                          </div>
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>

                        <td class="px-0 py-0">



                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                         
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                             <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                         
                        </td>
                        <td class="px-0 py-0">


                         <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 6 
                          || props.index == 10
                          || props.index == 14">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                    <!--
                    ======================================
                    2.10 FINANCE AND AUXILLARY SERVICE
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers28"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers24"
                      :items="doc.body.phase15"
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
                        
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div><strong><i>{{props.item.staffingPerDistrict}}</i></strong></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.staffingPerDistrict}}
                          </div>
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>

                        <td class="px-0 py-0">



                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>


                          
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                           <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                         
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                        </td>
                        <td class="px-0 py-0">
                         <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                             <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                         
                        </td>
                        <td class="px-0 py-0">


                         <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">


                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>
                          
                        </td>
                        <td class="px-0 py-0">

                          <div v-if="props.index == 2 
                          || props.index == 4 
                          || props.index == 7
                          || props.index == 9
                          || props.index == 13
                          || props.index == 15
                          || props.index == 18
                          || props.index == 22">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

                     <!--
                    ======================================
                    SECTION C
                    ====================================== 
                    -->

                    <v-data-table
                      :headers="headers29"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers30"
                      :items="doc.body.phase1"
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

                      <template v-slot:items v-slot:no-data></template>
                    </v-data-table>

                    

                    <v-data-table
                      :headers="headers31"
                      :items="doc.body.phase16"
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
                        <td class="px-0 py-0">
                         
                                {{props.item.resourcePerOffice}}
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.activities"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget1"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget2"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget3"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget4"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.budget5"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.blank6"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      <v-text-field v-model="doc.body.cardIssued" label="COMMENT/S: "></v-text-field>
                    </v-flex>

                    <br />

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
</div>
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
  name: "implementationPlanForTheAmended",
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
          text: "ALIGNMENT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],
      headers1: [
        {
          text: "1.1 NOMENCLATURE",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers2: [
        {
          text: "ITEM",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Not aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Comments",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers3: [
        {
          text: "1.2 EDUCATION DISTRICT BOUNDARIES",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers4: [
        {
          text: "District",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Not aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Comments",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers5: [
        {
          text: "1.3 EDUCATION CIRCUIT BOUNDARIES",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers6: [
        {
          text: "Circuit",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Not aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Comments",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers7: [
        {
          text: "1.4 DELEGATIONS",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers8: [
        {
          text: "AUTHORITY",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Not aligned",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Comments",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers9: [
        {
          text: "SECTION B: MULTI-YEAR POLICY IMPLEMENTATION",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers10: [
        {
          text: "DELEGATIONS",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers11: [
        {
          text: "AUTHORITY",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers12: [
        {
          text: "STAFFING NORMS",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers13: [
        {
          text: "2.1 DISTRICT DIRECTORS",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers14: [
        {
          text: "District",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2018/19",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2019/20",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2020/21",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2021/22",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2022/23",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2023/24",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2024/25",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers15: [
        {
          text: "2.2 CIRCUIT MANAGEMENT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers16: [
        {
          text: "Staffing per Circiut",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers17: [
        {
          text: "2.3 DISTRICT MANAGEMENT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers18: [
        {
          text: "Office of the District Director Posts",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        }
      ],
      headers19: [
        {
          text: "2.4 CURRICULUM DELIVERY AND SUPPORT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers20: [
        {
          text: "Professional Support Services: <br/> Staffing per district",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2018/19",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2019/20",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2020/21",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2021/22",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2022/23",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2023/24",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2024/25",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers21: [
        {
          text: "2.5 SUBJECT ADVISORS",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers22: [
        {
          text: "Professional Support Services: <br/> Staffing per district",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
        },
        {
          text: "2024/25",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers23: [
        {
          text: "2.6 EXAMINATION AND ASSESSMENT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers24: [
        {
          text: "Staffing per district",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
          value: ""
        }
      ],

      headers25: [
        {
          text: "2.7 INSTITUTIONAL GOVERNANCE AND SUPPORT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],
      headers26: [
        {
          text: "2.8 DISTRICT LEARNER SUPPORT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],
      headers27: [
        {
          text: "2.9 HUMAN RESOURCE MANAGEMENT",
          align: "center",
          sortable: false,
          value: ""
        }
      ],
      headers28: [
        {
          text: "2.10 FINANCE AND AUXILLARY SERVICE",
          align: "center",
          sortable: false,
          value: ""
        }
      ],
      headers29: [
        {
          text: "SECTION C",
          align: "center",
          sortable: false,
          value: ""
        }
      ],
      headers30: [
        {
          text: "TOOLS OF TRADE",
          align: "center",
          sortable: false,
          value: ""
        }
      ],

      headers31: [
        {
          text: "Resources per Office",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIVITIES",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
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
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "2022/23",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "Budget",
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
          text: "Budget",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "",
          align: "left",
          sortable: false,
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
        template: "implementationPlanForTheAmended",
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
          initials: "",
          surname: "",
          idNumber: "",
          persalNumber: "",
          directorate: "",
          position: "",
          employmentType: "",
          printName2: "",
          enderUser: {},
          initialsSurname: "",
          printName: "",
          printName1: "",
          cardNumber: "",
          cardIssued: "",
          e1: null,
          boolean: "",

          phase1: [
            {
              item: "Education district",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              item: "District director",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              item: "Circuit Office",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              item: "Circuit Manager",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              item: "Subject Advisor",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              item: "Circuit Office",
              aligned: "",
              notAligned: "",
              comments: ""
            }
          ],

          phase2: [
            {
              district: "",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              district: "",
              aligned: "",
              notAligned: "",
              comments: ""
            }
          ],

          phase3: [
            {
              circuit: "",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              circuit: "",
              aligned: "",
              notAligned: "",
              comments: ""
            }
          ],

          phase4: [
            {
              authority: "Appointment/Transfer of stuff members",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              authority: "Management of a new school",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              authority: "Institution of displinary proceedings",
              aligned: "",
              notAligned: "",
              comments: ""
            },
            {
              authority: "Financial Management",
              aligned: "",
              notAligned: "",
              comments: ""
            }
          ],

          phase5: [
            {
              authority: "Appointment/Transfer of stuff members",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              authority: "Management of a new school",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              authority: "Institution of displinary proceedings",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              authority: "Financial Management",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              authority: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            }
          ],

          phase6: [
            {
              district: "",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              district: "",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              district: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              district: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              district: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            },
            {
              district: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: "",
              budget6: ""
            }
          ],

          phase7: [
            {
              staffingPerCirciut: "Circuit Manager (DCES)",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerCirciut: "Admin Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerCirciut: "Diverse Support Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerCirciut: "Admin assiatnt  (EMIS/Data Capturer/Typist)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerCirciut: "Driver",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerCirciut: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase8: [
            {
              officeDistrictDirectorPosts: "District Director",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              officeDistrictDirectorPosts: "Personal Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              officeDistrictDirectorPosts: "Administrative Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              officeDistrictDirectorPosts: "DCES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              officeDistrictDirectorPosts: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],
          
          phase9: [
            {
              professionalSupportServices: "CES",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Admin Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "DCES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Admin Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase10: [
            {
              professionalSupportServices: "Subject Advisor (SES): Foundation Phase (Gr R - 3) (for each of the 4 subjects)",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Subject Advisor (SES): Intermediate Phase (Gr 4 - 6) (for each of 9 subjects)",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Subject Advisor (SES): Senior Phase (Gr 7 - 9) (for each of 12 high-enrolment subjects)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Subject Advisor (SES): FET Phase (for each of 14 high-enrolment subjects)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Subject Advisor (SES): Low-enrolment subjects",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase9: [
            {
              professionalSupportServices: "CES",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Admin Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "DCES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "Admin Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              professionalSupportServices: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase11: [
            {
              staffingPerDistrict: "CES",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Clerk",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assessment and examination information management system",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }, 
            {
              staffingPerDistrict: "Senior Admin Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Clerks",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assessment material, distribution & collection of scripts",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Clerks",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Policy development, monitoring and moderation of SBA",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "DCES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SAO",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Clerks",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],
          phase12: [
            {
              staffingPerDistrict: "CES (District IMGS & Circuit Managers coordination)",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "DCES (Governance)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }, 
            {
              staffingPerDistrict: "DCES (Management)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "School Safety",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase13: [
            {
              staffingPerDistrict: "Component: Inclusive Education Services",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "CES: Inclusive Education, Specialized Curriculum, Psycho-Social, Health and Learning Support",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "DCES: Senior Education Psychologist (Education,Counselling) <br/> DCES: Senior Education Counsellor",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }, 
            {
              staffingPerDistrict: "Admin Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Therapeutic Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES: Occupational Therapist",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Social Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES: School Social Work Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Psychological Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES: Education Psychologist",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Special Institutional Support Services (LSEN)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES: Education Counsellor",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Component: Co-Curricular Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "DCES (Sports & Music and Values in Education & HIV/AIDS)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Institutional School Sports & Recreation",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Institutional  School Music, Eisteddford & Arts",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Institutional  School Multi-Media",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "SES (library qualification)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director (NSNP, Transport)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Component: School Nutrition Feeding Scheme",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Senior Admin Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "NSNP Fieldworkers (Monitoring)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Component: Learner Transport",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Senior Admin Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase14: [
            {
              staffingPerDistrict: "Deputy Director",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Administration of Recruitment, Selection and Placement Services & Personnel Admin",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }, 
            {
              staffingPerDistrict: "Principal HR Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "HR Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Administration of Service Benefits  (Conditions of service)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Principal HR Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "HR Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "HR Management & Development Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Principal HR Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "HR Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Labour Relations Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "LR Practitioner",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase15: [
            {
              staffingPerDistrict: "Deputy Director",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Assistant",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Component: Budget Planning, Management & Support Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }, 
            {
              staffingPerDistrict: "Budget Planning, Management & Support Services (Learning Institutions)",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Chief Accounting Clerks",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Accounting Clerks",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Debt Collection Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "State Accountant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Accounts & Payment Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "State Accountant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Chief Accounting Clerk",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Accounting Clerk",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Component: Procurement Systems Management",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Assistant Director",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Sub-division: Procurement Management Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Admin Officer",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Procurement Assistant",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Asset/Inventory Management Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Asset Manager",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Asset inspectors",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Procurement Admin Assistants",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "EMIS & Technology Services",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Data-base Administrator",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              staffingPerDistrict: "Data Technologist",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],

          phase16: [
            {
              resourcePerOffice: "Office ICT",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              resourcePerOffice: "Mobile ICT",
              activities: "",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              resourcePerOffice: "Office Equipment",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              resourcePerOffice: "Vehicles",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }, 
            {
              resourcePerOffice: "Parking",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            },
            {
              resourcePerOffice: "TOTAL",
              blank: "",
              budget: "",
              blank1: "",
              budget1: "",
              blank2: "",
              budget2: "",
              blank3: "",
              budget3: "",
              blank4: "",
              budget4: "",
              blank5: "",
              budget5: "",
              blank6: ""
            }
          ],



          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          signatures: [],
          signatures2: []
        }
      },

       actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
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

.main-heading {
  border: 2px solid #dddddd;
  padding: 5%;
  border-radius: 5px;
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
