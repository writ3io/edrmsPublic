<template>
<div id="implementationPlanForTheAmended">

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
                    Name of Province: {{doc.body.nameProvince}}
                  </v-flex>

                  <v-flex xs12>
                    Name of contact person: {{doc.body.nameOfContact}}
                  </v-flex>

                  <v-flex xs12>
                    Email address: {{doc.body.emailAddress}}
                  </v-flex>

                  <v-flex xs12>
                    Telephone numbers: {{doc.body.telephoneNumber}}
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
                        <td>{{props.item.item}}</td>
                        <td class="px-0 py-0">
                          {{props.item.aligned}}

                        <td class="px-0 py-0">
                          {{props.item.notAligned}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.comments}}
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
                        <td >
                          {{props.item.district}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.aligned}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.notAligned}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.comments}}
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
                        
                        <td>
                          {{props.item.circuit}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.aligned}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.notAligned}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.comments}}
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
                        <td>{{props.item.authority}}</td>
                        <td class="px-0 py-0">
                          {{props.item.aligned}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.notAligned}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.comments}}
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
                        <td>{{props.item.authority}}</td>
                        <td class="px-0 py-0">
                          {{props.item.activities}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.blank}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank6}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget6}}
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments}}  
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
                        <td>
                          <div v-if="props.index == 5">
                            <v-layout wrap>
                              <v-flex>
                                <div>{{props.item.district}}</div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.district}}
                          </div>
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.activities}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.blank}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank6}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget6}}
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments1}}  
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
                        <td>{{props.item.staffingPerCirciut}}</td>

                        <td class="px-0 py-0">
                          <div v-if="props.index == 2">
                            <v-layout wrap>
                              <v-flex>
                                <div></div>
                              </v-flex>
                            </v-layout>
                          </div>
                          <div v-else>
                            {{props.item.activities}}
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
                            {{props.item.blank}}
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
                            {{props.item.budget}}
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
                            {{props.item.blank1}}
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
                            {{props.item.budget1}}
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
                            {{props.item.blank2}}
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
                            {{props.item.budget2}}
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
                            {{props.item.blank3}}
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
                            {{props.item.budget3}}
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
                            {{props.item.blank4}}
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
                            {{props.item.budget4}}
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
                            {{props.item.blank5}}
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
                            {{props.item.budget5}}
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
                            {{props.item.blank6}}
                          </div>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments2}} 
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
                        <td>
                         
                                {{props.item.officeDistrictDirectorPosts}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.activities}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.blank}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank6}}
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments3}}  
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
                        <td>
                         
                                {{props.item.professionalSupportServices}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.activities}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.blank}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank6}}
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments4}}  
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
                        <td>
                         
                                {{props.item.professionalSupportServices}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.activities}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.blank}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank6}}
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments5}}
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
                        
                        <td>

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
                            {{props.item.activities}}
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
                            {{props.item.blank}}
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
                           {{props.item.budget}}
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
                           {{props.item.blank1}}
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
                            {{props.item.budget1}}
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
                            {{props.item.blank2}}
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
                             {{props.item.budget2}}
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
                            {{props.item.blank3}}
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
                            {{props.item.budget3}}
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
                            {{props.item.blank4}}
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
                            {{props.item.budget4}}
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
                            {{props.item.blank5}}
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
                            {{props.item.budget5}}
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
                            {{props.item.blank6}}
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments6}}
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
                        
                        <td>

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
                            {{props.item.activities}}
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
                            {{props.item.blank}}
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
                           {{props.item.budget}}
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
                           {{props.item.blank1}}
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
                            {{props.item.budget1}}
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
                            {{props.item.blank2}}
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
                             {{props.item.budget2}}
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
                            {{props.item.blank3}}
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
                            {{props.item.budget3}}
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
                            {{props.item.blank4}}
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
                            {{props.item.budget4}}
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
                            {{props.item.blank5}}
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
                            {{props.item.budget5}}
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
                            {{props.item.blank6}}
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments7}} 
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
                        
                        <td>

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
                            {{props.item.activities}}
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
                            {{props.item.blank}}
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
                           {{props.item.budget}}
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
                           {{props.item.blank1}}
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
                            {{props.item.budget1}}
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
                            {{props.item.blank2}}
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
                             {{props.item.budget2}}
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
                            {{props.item.blank3}}
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
                            {{props.item.budget3}}
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
                            {{props.item.blank4}}
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
                            {{props.item.budget4}}
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
                            {{props.item.blank5}}
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
                            {{props.item.budget5}}
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
                            {{props.item.blank6}}
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments8}}
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
                        
                        <td>

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
                            {{props.item.activities}}
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
                            {{props.item.blank}}
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
                           {{props.item.budget}}
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
                           {{props.item.blank1}}
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
                            {{props.item.budget1}}
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
                            {{props.item.blank2}}
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
                             {{props.item.budget2}}
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
                            {{props.item.blank3}}
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
                            {{props.item.budget3}}
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
                            {{props.item.blank4}}
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
                            {{props.item.budget4}}
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
                            {{props.item.blank5}}
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
                            {{props.item.budget5}}
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
                            {{props.item.blank6}}
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments9}}
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
                        
                        <td>

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
                            {{props.item.activities}}
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
                            {{props.item.blank}}
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
                           {{props.item.budget}}
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
                           {{props.item.blank1}}
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
                            {{props.item.budget1}}
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
                            {{props.item.blank2}}
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
                             {{props.item.budget2}}
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
                            {{props.item.blank3}}
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
                            {{props.item.budget3}}
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
                            {{props.item.blank4}}
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
                            {{props.item.budget4}}
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
                            {{props.item.blank5}}
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
                            {{props.item.budget5}}
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
                            {{props.item.blank6}}
                          </div>

                          
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments10}} 
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
                        <td>
                         
                                {{props.item.resourcePerOffice}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.activities}}
                        </td>

                        <td class="px-0 py-0">
                          {{props.item.blank}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget1}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget2}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget3}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget4}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.budget5}}
                        </td>
                        <td class="px-0 py-0">
                          {{props.item.blank6}}
                        </td>
                        
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <br />

                    <v-flex xs12>
                      COMMENT/S: {{doc.body.comments11}} 
                    </v-flex>

                    <br />

                    

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
