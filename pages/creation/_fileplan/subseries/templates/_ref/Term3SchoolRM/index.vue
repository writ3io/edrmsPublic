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
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">TERM 3 SCHOOL REOPENNG MONITORING</h3>

            <!-- <v-card> -->
            <v-card-title>
              <v-alert
                pa-0
                :value="true"
                type="info"
              >Note: The form must be signed by both the Principal and the Department Official.</v-alert>

              <p>
                It is the duty of institutions to provide information to the Education
                Department in terms of Section 59 of the South African Schools Act 1996
                (Act no 84 of 1996).This duty is elaborated in Sections 45 to 48 of the
                Education Information Policy Gazette 26710 (27 August 2004) The school
                has to provide evidence for all the information they claim to have
              </p>
              <v-flex xs12 sm6></v-flex>
            </v-card-title>
            <v-card-text class="pt-0 mt-0">
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

                    <template v-slot:items="props" v-slot:no-data>
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 1 }}.</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <!-- 
                    ==================================================
                    PART B: OBSERVATIONS 
                    ================================================== 
                  -->
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
                  </v-data-table>

                  <v-data-table
                    :headers="headers3"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 1 }}.</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>
                      <td class>
                        <v-radio-group v-model="props.item.boolean" :mandatory="false">
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </td>

                      <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers4"
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
                  </v-data-table>

                  <v-data-table
                    :headers="headers5"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 3 }}.</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>
                      <td class>
                        <v-radio-group v-model="props.item.boolean" :mandatory="false">
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </td>
                    </template>

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers6"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 4 }}.</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers7"
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
                          <span v-on="on">{{ props.header.text }}</span>
                        </template>
                        <span>{{ props.header.text }}</span>
                      </v-tooltip>
                    </template>

                    <template v-slot:items="props" v-slot:no-data>
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 7 }}.</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <!-- <v-data-table
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
                  </v-data-table>-->

                  <v-data-table
                    :headers="headers8"
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
                  </v-data-table>

                  <v-data-table
                    :headers="headers3"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 9 }}.</v-flex>
                          <v-flex>
                            {{props.item.description}}
                            <div v-if="props.index == 7">
                              <div v-for="n in 2" :key="n">
                                <v-layout wrap>
                                  <v-flex>{{ props.item.descriptionArray[n]}}</v-flex>
                                </v-layout>
                              </div>
                            </div>
                          </v-flex>
                        </v-layout>
                      </td>
                      <td class>
                        <v-radio-group v-model="props.item.boolean" :mandatory="false">
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </td>

                      <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <!-- 
                    ==================================================
                    PART C: PRINCIPAL AND SCHOOL MANAGEMENT TEAM
                    ================================================== 
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
                  </v-data-table>

                  <v-data-table
                    :headers="headers10"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 1 }}.</v-flex>
                          <v-flex>
                            {{ props.item.description }}
                            <div v-if="props.index == 0 || props.index == 25">
                              <div v-for="n in 2" :key="n">
                                <v-layout wrap>
                                  <v-flex>
                                    <ul>
                                      <li>{{ props.item.listItems[n]}}</li>
                                    </ul>
                                  </v-flex>
                                </v-layout>
                              </div>
                            </div>
                            <div v-if="props.index == 14 || props.index == 27 || props.index == 30">
                              <div v-for="n in 2" :key="n">
                                <v-layout wrap>
                                  <v-flex>{{ props.item.descriptionArray[n]}}</v-flex>
                                </v-layout>
                              </div>
                            </div>
                            <div v-if="props.index == 16">
                              <div v-for="n in 3" :key="n">
                                <v-layout wrap>
                                  <v-flex>{{ props.item.descriptionArray[n]}}</v-flex>
                                </v-layout>
                              </div>
                            </div>
                          </v-flex>
                          <v-flex>
                            <div v-if="props.index == 9 || 10">
                              <v-layout wrap>
                                <v-flex>
                                  <strong>{{ props.item.description1}}</strong>
                                </v-flex>
                              </v-layout>
                            </div>
                          </v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
                        <div v-if="props.index == 9">
                          <v-layout wrap>
                            <v-flex>{{ props.item.altDescription}}</v-flex>
                          </v-layout>
                        </div>
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <div v-if="props.index == 9 ">
                          <v-layout wrap>
                            <v-flex>{{ props.item.altDescription1}}</v-flex>
                          </v-layout>
                        </div>
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <!-- 
                  ==================================================
                  PART G: SCHOOL GOVERNING BODIES
                  ================================================== 
                  -->
                  <v-data-table
                    :headers="headers11"
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
                  </v-data-table>

                  <v-data-table
                    :headers="headers10"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 1 }}.</v-flex>
                          <v-flex>
                            <div v-if="props.index == 0">
                              <div v-for="n in 2" :key="n">
                                <v-layout wrap>
                                  <v-flex>{{ props.item.descriptionArray[n]}}</v-flex>
                                </v-layout>
                              </div>
                            </div>
                            <div v-else>{{ props.item.description }}</div>
                          </v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>

                      <td class="px-0 py-0">
                        <div v-if="props.index == 9 ">
                          <v-layout wrap>
                            <v-flex>{{ props.item.altDescription1}}</v-flex>
                          </v-layout>
                        </div>
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-card-text>
            <!-- </v-card> -->

           <br/>
            <!--
            ==================================================
            ANNEXURE 01 (Primary Schools)
            ================================================== 
            -->

            <v-card-text class="pt-0 mt-0">
              <h4>ANNEXURE 01 (Primary Schools)</h4>
              <p>
                <strong>Please complete the table below on overall learner pass percentage per term.</strong>
              </p>

              <v-layout xs12 wrap border>
                <v-flex>
                  <v-data-table
                    :headers="headers12"
                    :items="doc.body.phase9"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 1 }}</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-card-text>

            <br/>
             <!--
            ==================================================
            ANNEXURE 02: (Secondary Schools)
            ================================================== 
            -->

            <v-card-text class="pt-0 mt-0">
              <h4>ANNEXURE 02: (Secondary Schools)</h4>
              <p>
                <strong>Please complete the table below on overall learner pass percentage per term.</strong>
              </p>

              <v-layout xs12 wrap border>
                <v-flex>
                  <v-data-table
                    :headers="headers13"
                    :items="doc.body.phase10"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 1 }}</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>

                      <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-card-text>

            <br/>
             <!--
            ==================================================
           ANNEXURE 3 (Primary Schools)
            ================================================== 
            -->

            <v-card-text class="pt-0 mt-0">
              <h4>ANNEXURE 3 (Primary Schools)</h4>
              <p>
                <strong>Please indicate percentage of learners who obtained 60% or more per subject per grade.</strong>
              </p>

              <v-layout xs12 wrap border>
                <v-flex>

                 

                  <v-data-table
                    :headers="headers15"
                    :items="doc.body.phase11"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 4 }}</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers16"
                    :items="doc.body.phase12"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 7 }}</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                  
                  </v-flex>
              </v-layout>
            </v-card-text>

            <br/>


            <!--
            ==================================================
            ANNEXURE 04 (Secondary Schools)
            ================================================== 
            -->

            <v-card-text class="pt-0 mt-0">
              <h4>ANNEXURE 04 (Secondary Schools)</h4>
              <p>
                <strong>Please indicate percentage of learners who obtained 60% or more per subject per grade.</strong>
              </p>

              <v-layout xs12 wrap border>
                <v-flex>

                 

                  <v-data-table
                    :headers="headers16"
                    :items="doc.body.phase12"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 9 }}</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers17"
                    :items="doc.body.phase12"
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
                      <td class>
                        <v-layout wrap>
                          <v-flex xs1>{{ props.index + 12 }}</v-flex>
                          <v-flex>{{props.item.description}}</v-flex>
                        </v-layout>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
                        <v-text-field
                          v-model="props.item.comment"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                       <td class="px-0 py-0">
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
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                   <br>
                      
                          <v-flex xs12>
                                <v-text-field v-model="doc.rfq" label="H. GENERAL COMMENTS:"></v-text-field>
                            </v-flex>

                </v-flex>
              </v-layout>
            </v-card-text>



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
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "Checklist",
  components: {
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

      headers: [
        {
          text: "PART A: SCHOOL INFORMATION",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers1: [
        {
          text: "PART B: OBSERVATIONS",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers2: [
        {
          text: "Environment",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers3: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "YES / NO",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "COMMENT",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers4: [
        {
          text: "Teaching and learning",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers5: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "YES / NO",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers6: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: "",
          width: "248px"
        },
        {
          text: "NONE",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "SOME",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "MOST",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ALL",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers7: [
        {
          text: "Classes(Please go to any class and check the following)",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers8: [
        {
          text: "Documents",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers9: [
        {
          text: "PART C: PRINCIPAL AND SCHOOL MANAGEMENT TEAM",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers10: [
        {
          text: "NON-NEGOTIABLES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "FINDINGS / EVIDENCE",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "REMARKS / CHALLENGES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers11: [
        {
          text: "PART G: SCHOOL GOVERNING BODIES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers12: [
        {
          text: "TERM",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 8",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 9",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 10",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 11",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 12",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
        
      ],
      headers13: [
        {
          text: "TERM",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 3",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 4",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 5",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 6",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GRADE 7",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
        
      ],
      headers14: [
        {
          text: "GRADE",
          align: "left",
          sortable: false,
          value: "",
          width: "99px"
        },
        {
          text: "SUBJECTS",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers15: [
        {
          text: "GRADE",
          align: "left",
          sortable: false,
          value: "",
          width: "99px"
        },
        {
          text: "ENGLISH",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }, 
        {
          text: "MATHEMATICS",
          align: "left",
          sortable: false,
          value: "",
          
        },
        {
          text: "ECONOMIC & MANAGEMENT SCIENCES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "NATURAL SCIENCES / TECHNOLOGY",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers16: [
        {
          text: "GRADE",
          align: "left",
          sortable: false,
          value: "",
          width: "99px"
        },
        {
          text: "ENGLISH",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }, 
        {
          text: "MATHEMATICS",
          align: "left",
          sortable: false,
          value: "",
          
        },
        {
          text: "ECONOMIC & MANAGEMENT SCIENCES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "NATURAL SCIENCES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers17: [
        {
          text: "GRADE",
          align: "left",
          sortable: false,
          value: "",
          width: "99px"
        },
        {
          text: "ENGLISH",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }, 
        {
          text: "MATHEMATICS",
          align: "left",
          sortable: false,
          value: "",
          
        },
        {
          text: "MATHEMATICAL LITERACY",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "GEOGRAPHY",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "LIFE SCIENCES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACCOUNTING",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "checklist",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          date1: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          date3: new Date().toISOString().substr(0, 10),
          date4: new Date().toISOString().substr(0, 10),
          enderUser: {},
          initialsSurname: "",

          // days: [
          //   { dayOfWeek: "Monday", value: "", width: "10%" },
          //   { dayOfWeek: "Tuesday", value: "" },
          //   { dayOfWeek: "Wednesday", value: "" },
          //   { dayOfWeek: "Thursday", value: "" },
          //   { dayOfWeek: "Friday", value: "" }
          // ],
          phase1: [
            {
              description: "Province",
              comment: ""
            },
            {
              description: "District:",
              comment: ""
            },
            {
              description: "Name of school:",
              comment: ""
            },
            {
              description: "National EMIS number of school:",
              comment: ""
            },
            {
              description: "Physical address of school:",
              comment: ""
            },
            {
              description: "Principal’s name: ",
              comment: ""
            },
            {
              description: "School landline number:",
              comment: ""
            },
            {
              description: "Contact cell number:",
              comment: ""
            },
            {
              description: "Other contact number:",
              comment: ""
            },
            {
              description: "Quintile rank number:",
              comment: ""
            }
          ],

          phase2: [
            {
              description: "Is there an access control system?",
              boolean: "",
              comment: ""
            },
            {
              description: "Is the school clean and welcoming?",
              boolean: "",
              comment: ""
            }
          ],
          phase3: [
            {
              description:
                "Is effective teaching and learning in progress in the school? (Please circle on your answer)",
              boolean: ""
            }
          ],

          phase4: [
            {
              description:
                "Did you observe any classes that were without a teacher?",
              boolean: "",
              comment: ""
            },
            {
              description: "Are learners in class learning?",
              boolean: "",
              comment: ""
            },
            {
              description: "Are teachers in class teaching?",
              boolean: "",
              comment: ""
            }
          ],
          phase5: [
            {
              description: "Learners have  workbooks ",
              boolean: "",
              comment: ""
            },
            {
              description: "Learners have textbooks",
              boolean: "",
              comment: ""
            }
          ],
          phase6: [
            {
              description:
                "Did you see a teacher attendance register (Time book) for 2019?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Did teachers sign the teacher attendance register for the day?",
              boolean: "",
              comment: ""
            },
            {
              description: "Is the Time Book controlled by the principal?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Did you see learner attendance registers for 2019? Is the attendance register correctly controlled?",
              boolean: "",
              comment: ""
            },
            {
              description: "What is the % of learner absenteeism per quarter?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Does the school has learner attendance register for Term 1 & 2? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Do these registers correlate with the data captured in SASAMS",
              boolean: "",
              comment: ""
            },
            {
              descriptionArray: [
                "",
                "a) Is there a composite school timetable for 2019?",
                "b) Does it Is it complying to the notional time?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is time provided in the time table for control of learner attendance ",
              boolean: "",
              comment: ""
            }
            // ,
            // {
            //   description:"Learners have textbooks",
            //   boolean: "",
            //   comment: "",

            // }
          ],
          phase7: [
            {
              description: "Post provisioning ",
              listItems: [
                "",
                "Are all vacancies being filled? if no, why?",
                "Has absorption process being finalized? if not, why?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description: "Has the school developed School Improvement Plan?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is the School Improvement Plan (SIP) being implemented?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is the underperforming secondary school implementing the Academic Performance Improvement Plan (APIP)",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Has the school submitted progress report on the implementation of APIP to the Circuit Manager?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Classes/ subjects without educators? State the subject/grades/phases and number of learners affected and indicate what action has been taken?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Are there subjects still having textbooks shortages?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Do you have textbooks retrieval system, is it successful?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Does the school still have shortage of desks? If yes- how many?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Overall % pass of all grades in Term 1 & 2: Grade 8, 9, 10, 11 & 12",
              description1:
                "NB: PLEASE POPULATE ANNEXURE 01 OR 02 AT THE END OF THIS INSTRUMENT",
              altDescription:
                "Indicate strategies put in place to improve learner performance for Term 3 this academic year (2019).",
              altDescription1:
                "What is the school’s target for Grade 12? How is it aligned to the Provincial Target of 80%?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "% of grade 9, 10, 11 and 12 learners who obtained 60% in English, Geo, Life Sciences, Maths, Maths Literacy, Physical Science and Accounting.",
              description1:
                "NB: PLEASE POPULATE ANNEXURE 01 OR 02 AT THE END OF THIS INSTRUMENT",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Are there measures taken to improve results towards Provincial target of 80% in 2019? ",
              boolean: "",
              comment: ""
            },

            {
              description:
                "Does the SMT have plans to monitor, support teaching and learning? ",
              boolean: "",
              comment: ""
            },
            {
              description: "Is there a monitoring tool? ",
              boolean: "",
              comment: ""
            },
            {
              descriptionArray: [
                "",
                "a) Does the school have an IQMS management plan?",
                "b) Is there an elected Staff Development Team?",
                "c) Is there evidence of teacher development on IQMS Performance Standards 1 – 4?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description:
                "If yes, is there evidence of on-going implementation of IQMS on performance standards 1-4 by SMT/immediate seniors? ",
              boolean: "",
              comment: ""
            },
            {
              descriptionArray: [
                "",
                "a) Does the school have a school safety committee?",
                "b) Is the school safety committee function?",
                "(c) Does the school keep records of incidences?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description:
                "How does your school deal with learner disciplinary cases?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is there a mechanism to address bullying in school? ",
              boolean: "",
              comment: ""
            },
            {
              description: "Is there a Code of conduct for teachers? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is the Code of Conduct for teachers being implemented? ",
              boolean: "",
              comment: ""
            },
            {
              description: "Is there a Code of conduct for learners? ",
              boolean: "",
              comment: ""
            },
            {
              description: "Is the Code for Learners being implemented? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "How is teacher attendance and movement controlled? provide monitoring tool ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Has the school established QLTC steering committee? Is it functional? Evidence of meetings and implementation of decisions.",
              boolean: "",
              comment: ""
            },
            {
              description: "Is there approved school budget?",
              listItems: [
                "",
                "Was there a consultation with parents?",
                "Is the school having an audited financial statement?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is the procurement process adhering to the prescripts?",
              boolean: "",
              comment: ""
            },
            {
              descriptionArray: [
                "",
                "(a) Does the school know what to do if there are illegal drugs, guns etc on the premises?",
                "(b) Is the school linked to a police station?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description:
                "Does the School have Emergency contacts and are they displayed?",
              boolean: "",
              comment: ""
            },
            {
              description: "How is feeding monitored?",
              boolean: "",
              comment: ""
            },
            {
              descriptionArray: [
                "",
                "a) Does the school have a list / record of Orphan and Vulnerable Children (OVC)?",
                "b) What kind of support is provided to them by the school?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description: "Is there a functional NSNP Committee? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Is the school providing food to the learners in terms of policy prescripts? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Are there learners benefiting from scholar transport? If yes is there a list of the beneficiaries?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Do learners who use scholar transport arriving at school on time?",
              boolean: "",
              comment: ""
            }
          ],
          phase8: [
            {
              descriptionArray: [
                "",
                "a) Have you established SGBs Committees?",
                "b) Are SGB committees functional?"
              ],
              boolean: "",
              comment: ""
            },
            {
              description: "Does the SGB have a Constitution? ",
              boolean: "",
              comment: ""
            },
            {
              description: "Does the SGB meet quarterly as per SASA?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Has the SMT presented learner performance report in the SGB meeting?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Has the school convened parents meeting for term 1 & 2 in 2019?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Has a report on learner performance presented to parents meeting in every term?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Has the SGB attended to learners disciplinary cases? ",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Are there policies adopted including Risk Assessment and intervention Plan?",
              boolean: "",
              comment: ""
            },
            {
              description:
                "Are there Programmes developed for school improvement for 2019?",
              boolean: "",
              comment: ""
            }
          ],
          phase9: [
          {
            description: "",
            boolean: "",
            comment: ""
          },
          {
            description: "",
            boolean: "",
            comment: ""
          }],
           phase10: [
          {
            description: "",
            boolean: "",
            comment: ""
          },
          {
            description: "",
            boolean: "",
            comment: ""
          }],
          phase11: [
          {
            description: "",
            boolean: "",
            comment: ""
          },
          {
            description: "",
            boolean: "",
            comment: ""
          },
          {
            description: "",
            boolean: "",
            comment: ""
          }],
          phase12: [
          {
            description: "",
            boolean: "",
            comment: ""
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
    onEnd() {
      this.setAuthorSignature();
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
