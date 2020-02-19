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
            <h3 class="text-xs-center">SCHOOL MONITORING TOOL</h3>

            <v-layout wrap>
              <v-flex xs1>a.</v-flex>
              <v-flex xs3>
                <v-text-field v-model="doc.rfq" label="District:"></v-text-field>
              </v-flex>
              <v-flex xs1>b.</v-flex>
              <v-flex xs3>
                <v-text-field v-model="doc.body.rfq" label="Name of school:"></v-text-field>
              </v-flex>
              <v-flex xs1>c.</v-flex>
              <v-flex xs2>
                <v-text-field v-model="doc.body.rfq" label="Emis No.:"></v-text-field>
              </v-flex>
            </v-layout>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                     1 ADMISSIONS
                    ============================================ 
          -->

          <v-flex>
            <br />
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 3">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                     2 LEADERSHIP MANAGEMENT AND PLANNING
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0 || 
                             props.index == 1">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                     3. PLANNING AND MANAGING SCHOOL IMPROVEMENT
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    4  IMPROVED LEARNER PERFORMANCE
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    5.1 The school has:
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    6 FINANCE
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    7 FURNITURE
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    8 HUMAN RESOURCES
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    9 LEARNER SUPPORT SERVICES
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    10 EDUCATIONAL RESOURCES (LTSM)
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    11 NUTRITION
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    12 SCHOLAR TRANSPORT
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    13 MANAGING THE PERFORMANCE OF THE PRINCIPAL
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase13"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>
          <!-- 
                    ============================================
                    14 DA AND PMDS
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase14"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>
          <!-- 
                    ============================================
                    15 SCHOOLS ARE GOVERNED EFFECTIVELY
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase15"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    16 THE SCHOOL HAS SYSTEMS IN PLACE
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase16"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    17 QUARTERLY REPORTING AND FEEDBACK
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase17"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>
          <!-- 
                    ============================================
                    18 RISK MANAGEMENT
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase18"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ============================================
                    19 CAPACITY BUILDING IS TAKING PLACE
                    ============================================ 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase19"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ==============================================
                    20 MONITORING VISITS ARE UNDERTAKEN TO SCHOOLS
                    ============================================== 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase20"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
                    ==============================================
                    21 PARTNERSHIPS AND COMMUNICATION
                    ============================================== 
          -->

          <v-flex>
            <br />
            <v-data-table
              :headers="headers"
              :items="doc.body.phase21"
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
                <td class="px-0 py-0">{{ props.item.description }}</td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment1" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment2" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale1_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale2_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.scale3_3" single-line solo flat placeholder></v-text-field>
                  </div>
                </td>

                <td class>
                  <div v-if="props.index == 0">
                    <v-layout wrap>
                      <v-flex>
                        <div></div>
                      </v-flex>
                    </v-layout>
                  </div>
                  <div v-else>
                    <v-text-field v-model="props.item.comment3" single-line solo flat placeholder></v-text-field>
                  </div>
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
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "ClearanceLetter",
  components: {
    editor: Editor,
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      headers: [
        {
          text: "OBJECTIVE / THEME / ACTIVITY",
          align: "center",
          value: "",
          sortable: false
          //   width: "10%"
        },
        {
          text: "1",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "2",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "3",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "TERM 1 (COMMENTS)",
          align: "center",
          value: "",
          sortable: false
          //   width: "10%"
        },
        {
          text: "1",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "2",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "3",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "TERM 2 (COMMENTS)",
          align: "center",
          value: "",
          sortable: false
          //   width: "10%"
        },
        {
          text: "1",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "2",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "3",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "TERM 3 (COMMENTS)",
          align: "center",
          value: "",
          sortable: false
          //   width: "10%"
        },
        {
          text: "1",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "2",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "3",
          align: "center",
          value: "",
          width: "10%",
          sortable: false
        },
        {
          text: "TERM 4 (COMMENTS)",
          align: "center",
          value: "",
          sortable: false
          //   width: "10%"
        }
      ],

      dialog: false,

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "School Monitoring Tool",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          date: new Date().toISOString().substr(0, 10),
          name: "",
          branch: "",
          capacity: "",
          item: "",
          rfq: "",
          enquiries: "",
          tel: "",
          email: "",

          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: [],

          phase1: [
            {
              description: "SCHOOL READNESS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* School completed Self Evaluation form",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Verification completed by District/Circuit manager",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "1 ADMISSIONS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "1.1 The Admissions team planned and prepared for the admission process.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school has an admissions policy.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school's policy has been adapted to suit the school's needs.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "1.2 The school has a management plan with reference to the following admissions processes and procedures:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Advocacy - Process - Timeframes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Internal re-registrations and external applications for learner admission",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Waiting Lists (A and B)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> School adhered to the closing date for placement of learners.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Learners on Waiting Lists A or B placed - (Waiting list B - only if space available)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Feedback to parents on outcomes of their registration applications",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Phase orientation Plan",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Class group allocations",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "Language of learning and teaching (LOLT) determination review",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Temporary class lists and registers compiled for all grades",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* School received post establishment for the current/following year",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* School determined growth posts for the following year based on (possible) learner enrolment",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school’s admission register and SA-SAMS is updated – new entries for following year are inserted",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Followed correct procedure to have school declared full",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Each learner has an admission number",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Learner enrollment information is updated electronically, as well as on registers.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Updated admission register for learners from the school is available on SA- SAMS (Admin Computer) or admission register, 31 January of new school year",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* 10th School Day Head Count submitted to district",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Admission of learners who relocated from other provinces, depending on available space and compatibility of subjects offered.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Finalised Post Establishment",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Application for extra educators submitted - to be advertised in next gazette",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Growth posts (both CS and PS) discussed and finalised with District/Circuit manager",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Permission granted to have these posts advertised in the next vacancy list",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Advertise Vacant Posts (PS / CS)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has systems in place for the selection, appointment, induction and management of school personnel.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase2: [
            {
              description: "2 LEADERSHIP MANAGEMENT AND PLANNING",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "2.1 COMMUNICATION",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school established a clear channel of communication within and with other stakeholders.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school communicate effectively, both orally and in writing, with other staff members, the SGB and the District/Circuit manager.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school explains the objective of any intervention/s to learners, educators and others.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "YEAR/OPERATIONAL PLAN",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "2.2 The school's year/operational plan is implemented.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school prepares management plans to achieve targets as well as to meet the needs of learners, educators, others.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Systems are in place to monitor and review progress made and challenges encountered.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "2.3 Progress reports of the following are available:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Core (Curriculum) and extra-curricular activities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Curriculum management (class visits/staff observation)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Administration, monitoring and reporting activities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Human Resource Development activities - DA / PMDS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "2.4 The following school-based structure meetings were held and minutes are available:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SMT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SGB",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> All staff (Admin and CS)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Learning Area/subject meetings (HOD’s)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Sport and Cultural Committee",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Safety committee",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> RCL",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SBST",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Finance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "2.5 The school has a year/operational plan for the following year,signed off by the District/Circuit manager, which indicates the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All school activities (Core and extra-curricular)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Administration, monitoring and reporting activities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Human Resource Development activities - DA / PMDS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The establishment and/or review of structures, i.e. SDT, DSG",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Important dates for activities are indicated, such as:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SDT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SIP (Review)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> DSG",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Staff/Class observation",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Commencement of cycles (tests and exams)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Compilation and implementation of PGP’s/PDP’s",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Submission of summative results",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "2.6 Dates are in the School Year/Operational Plan for:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> classroom visits by the principal and the SMT for DA and for non-DA visits (as per item 35 of the OSD ELRC Resolution)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> the controlling of educators’ work by SMT members",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> the controlling of HODs work by the deputy principal",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The procurement (and Section 20 Schools) for the submission of requisition forms to the District Office) for:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> LTSM",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Media Centre resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> ICT resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Laboratory resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Subject related material",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Dates are in the School Year/Operational Plan for the procurement, distribution and retrieval of LTSM resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* the school has an environment that creates and fosters commitment and confidence among colleagues",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* the school promotes fairness in the workplace",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* the educators can identify, assess and meet the needs of the learners",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* the management & educators disseminate and encourage the application of good practices in all areas of work",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* the school implements systems and structures and present innovative ideas that are",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* the school maintain sound human relations among colleagues",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* the school enhances the spirit of co-operation at all levels",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Dates are in the School Year/Operational Plan for the admission of learners (captured on SA- SAMS/Admission register (Align with Admission Circular)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The following school-based structure meetings are planned for and indicated in the Year Plan:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SMT, at least bi-weekly",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SGB, at least once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Staff, including Public Servants, at least twice per year",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Learning Area/subject meetings (HOD’s) at least once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Sport and Cultural Committee at least once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Parents, at least twice per year",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Safety committee at least once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Bereavement and Entertainment committee, as the need arises",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> RCL, at least twice per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SBST, at least once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Finance, at least once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Hostel Task team, at least twice per term (where applicable)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase3: [
            {
              description: " 3. PLANNING AND MANAGING SCHOOL IMPROVEMENT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "3.1 The EWSE report is available (where applicable).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Date of EWSE visit is indicated.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The school received a copy of the EWSE report from Quality Assurance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The recommendations are incorporated/infused into the SIP.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "3.2 SIP",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Evidence of Analysis of ANA results is in place",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Evidence of Analysis of NSC results is in place",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The management plan for conducting the process of IWSE, is in place.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The IWSE coordinator and his/her team planned and prepared for the school self evaluation process.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* All stakeholders took part in the SWOT analysis.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* A SIP was developed.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has an IWSE report of meetings held and activities carried out, available.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The relevant stakeholders were involved in the IWSE process and the compilation of the report.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Key areas for development were identified.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a District Ratified School Improvement Plan (SIP) for the following year.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The processes of DA, PMDS, IWSE and SDP are infused into SIP priorities.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has made provisions for funding the SIP and have measures in place of how possible deficits will be dealt with.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has systems in place to monitor and review progress made, and challenges encountered throughout the year.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Systems and procedures are in place to monitor the implementation of SIP.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Quarterly reports on implementation and progress of SIP were submitted to District/Circuit manager.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The implementation of the recommendations from the QA report are monitored",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Systems are in place to report against the timeframes indicated.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The responsible people in the SIP are held accountable for the activities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* School held a quarterly review to deal with variances in the SIP.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "3.3 SDP",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school analyses the external and internal environment when they do strategic planning",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school identifies the needs of learners, educators, others.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school prepares strategic plans with the intention of achieving the goals of the Department.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school has a School Development Plan.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All relevant stakeholders were involved in the development of the SDP.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SDP add value to the Vision and Mission of the school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SDP is aligned to the school's annual budget and School Improvement Plan.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "3.4 Effective functioning of the SMT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Systems are in place to monitor and support the SMT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> The SMT understand their roles and functions",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Systems are in place to manage members of the SMT.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> SMT members are involved in the decision-making processes at school",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Systems are in place and implemented to deal with conflict resolution",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The SMT attends to complaints from parents, learners and other officials.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> SMT have contingency plans in place when a teacher is absent/not in class during teaching hours",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Academic noise vs ordinary noise (unsupervised learners) is monitored",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> SMT manage, monitor and support their Learning Areas effectively",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "3.5 Registration forms of Grade 12 learners submitted to district.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "3.6 First verification of registered Grade 12 learners.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "3.7 Second (final) verification of registered Grade 12 learners.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "3.8 TEACHING AND LEARNING",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "All teachers trained on CAPS for Grade 4 to 6 and 11",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "Traning on multi-grade teaching done if multi-grade are in the school",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SMT ensures stability in the teaching and learning environment of the school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal and SMT monitor education delivery for the purposes of both accountability and improvement.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Progress report on Academic Improvement Plan (APIP) is available",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The library period / reading period is utilised",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The School Composite Timetable is aligned with CAPS (and NCS where appropriate) requirements.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "3.9.1 The school has developed timetables for:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Educators",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Classes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Learning areas",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Grades",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Relief and duty rosters",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Homework",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The school has a Duty Roster for Specific extra-curricular activities.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The school has made provision for learners to attend SSIP classes (secondary schools only).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "3.9.2 The school has a management plan for each Learning Area , which reflects the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Learning Area Workshops and Seminars are indicated on the plan",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The plan caters for monitoring processes to evaluate the achievement of Learning Outcomes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Work allocation of staff is available, in line with PAM.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Duty sheets for each staff member are available.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> SMT attendance register, minutes and reports available",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Curriculum support by SBST, DBST and LFS is taking place (minutes and reports) - [Early identification",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Curriculum time tables are CAPS compliant (and NCS compliant where appropriate)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Planning of SMT in place (class visits, meetings, control of teachers work)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase4: [
            {
              description: "4. IMPROVED LEANER PERFORMANCE",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.1 Assessment",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The annual assessment programme has been developed in collaboration with all stakeholders",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Assessment plan communicated to all learners and parents.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Assessment comply with NCS requirements.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "4.2 The school has a functional School Assessment Team which ensures that the following are in place, using appropriate management plans:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Internal / External Examination procedures to conduct examinations",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All recommendations of Learning Facilitators implemented as per their reports.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Finalisation of Internal moderation processes and preparation for external processes.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Finalisation of Possible retention schedules in consultation with district office.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The correct processes were employed in the moderation of summative results for all learners (according to NCS & CAPS).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* School assist District/Circuit manager to conduct an internal assessment audit to verify NCS & CAPS compliance in all grades",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* School assist District/Circuit manager to conduct an Assessment Criteria meeting in October to ensure NCS compliance on promotion and progression",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Copy of Promotion Schedule is available at school",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Quarterly analysis of learner results is available.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Learners received progression reports at the end of the term.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Annual academic performance report is drafted for final SGB meeting",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Subject Improvement Plans drafted and captured in School Improvement Plan",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Promotion and progression requirements correctly applied according to NCS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Internal moderation process of educator and Learner portfolios.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* External (Provincial) moderation of educator and learner portfolios",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Detailed management plan for final assessment in place",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Special staff meeting held by principal to ensure correct invigilation processes and the application of NCS compliant promotion and progression requirements.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Moderation of assessment is taking place (marks adjusted up or down)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.3 Implement EMSTA (Learners Enrichment Project)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• English, Maths, Science, Technology and Accounting are managed as per EMSTA guidelines",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Attendance register, minutes and reports available",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.4 Implement Foundations for Learning (ANA)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• All grade 3, 6 and 9 learners benchmarked for improved academic performance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• Reading hour grades 1 - 6 in place",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Assessment results are submitted to the District Office as per District Office Assessment Plan",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Meetings are scheduled to discuss the exam analysis for grades 3, 6 and 9",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "4.5 Implement E-Education White Paper roll out plan, if applicable",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• Roll out plan is implemented",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.6 Implement Inclusive Education White Paper",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• School applied for formal concession regarding grade 12 learners",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Tuition time table available for learners with learning barriers",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• Correct referral procedures followed",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.7 Implement ELITS (library policy)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Library policy available at school and implemented",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.8 Implement SSIP",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school provides examination support services and Gr.12 intervention where necessary.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Extra classes are conducted in the under-performing subjects / learning areas",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• All grade 12 learners benchmarked for improved academic performance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Principal submitted a SIP/ASIP/SSIP to district (underperforming schools)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.9 Implement climate of high expectation",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Educators believe all learners can achieve - no child is left behind",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Educators believe that they have the capacity to help learners.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Learners careeer guidance through Life Orientation",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.10 Psycho Social Services",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Early identification of learners who experience barriers to learning.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.11 GPLS - province Primary Learning Strategy",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> School received the required LRP resource packs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> School ensures maximum utilization of LRP resource packs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> School conducts common assessment tasks/tests",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> School participates in Readathon & Spellathon competitions",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "4.12 Numeracy/Math strategy",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> School received the required LTSM resource packs/books",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> School conducts common assessment tasks",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> School ensures maximum utilization of MST resource packs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school implements provincial building policies and manage departmental assets.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase5: [
            {
              description: "5.1 The school has:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sufficient classrooms",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sufficient ablution Facilities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sufficient specialist rooms (eg Science labs)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Security Measures",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* province-On-Line",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "5.2 The school ensures that the condition of the following is maintained:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Cleanliness of ablution Facilities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* School Building (clean walls, class rooms, etc.)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* An intact school fence",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Windows (indicate number of broken windows)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No broken or collapsed ceilings",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No broken doors.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No damaged blackboards",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No broken / damaged floors in the classrooms",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No electrical wire(s) exposed",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No leaking pipes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No broken lights",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* No leaking roofs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* No open manholes, sewerage systems, drains or holes in the ground",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Grass on the premises is cut - The sports grounds are maintained - The school premises are clean",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school is entered for the School Beautification competition",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "All of the aforementioned are applicable to Hostels.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "The school liaises with the Physical Planner on the above matters",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "The school has basic amenities such as:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Running water",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Electricity",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Telephone Services",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase6: [
            {
              description: "6 FINANCE",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a Finance Policy, ratified/approved by district director.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Agendas, attendance registers and minutes of meetings are available.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school priporitises activities in terms of costs and education needs in preparation for strategic planning.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school plan their budget in trems of a medium term expenditure framework (MTEF).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school manages their projects within the set budget.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal advises the SMT and relevant stakeholders on the planning, utilisation and monitoring of budgets in order to meet school objectives.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school maintains records to disseminate information for financial accountability.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Approved budget is submitted to District Office by 31 January of the new year",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• BAS reports (spending) are analysed every month by Section 20 schools",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• School Finance Committee tables a financial report to the SGB & Finance Committee monthly",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school submitted its Annual Audited Financial Statement to the district by 30th June as required by SASA",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Procurement is done (LTSM, etc) in accordance with the plan by Section 21 Schools.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* District Office is informed of the procurement needs of the school if Section 20 school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Auditors report is available and discussed with parents by 30 May",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Auditors report and audited financial statements are submitted to District Office by 30 June",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Accounting Official accounting officer, SGB treasurer and external auditor are appointed in writing by SGB",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Schools received their indicative budget allocation (from the district) for the following year",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Internal financial audit is conducted once per year, every second year, before 30 September to verify the correct application of financial directives and principles by using a financial management instrument.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Budgets compiled for following academic year and tabled at AGM before 30 November (SGB)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• AGM agenda's, attendance registers and minutes of meetings are available",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase7: [
            {
              description: "7 FURNITURE",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has enough and appropriate furniture for educators (class room, staff room; admin block)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has enough and appropriate furniture for all grades and phases (also in specialist class rooms)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school reported all damaged furniture to the Facilities Unit at the District- and or Head Office",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has taken stock of all assets and the asset register is updated",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school manages furniture shortages and/or surplusses",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase8: [
            {
              description: "8 HUMAN RESOURCES",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "8.1 Post establishment of CS staff",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The school has filled the required number of posts as allocated by GDE.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The educator workloads are according to specific qualifications/ learning areas",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Each staff member has a personalised Job Description.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The key performance indicators are measured and monitored for each member",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },

            {
              description: "8.2 Post Establishment of PS staff",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The school has filled the required number of posts as allocated by GDE.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The workloads are more or less equal and according to expertise and competency.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Each staff member has a personalised Job Description.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The key performance indicators are measured and monitored for each member",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "8.3 Grievance Procedures (Code of Professional Ethics)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The protocol is followed.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "8.4 Professional Development",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "8.4.1 The Management Plan for conducting the first cycle of DA and PMDS is in place and makes provision for the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Establishment and review of the DSG structure(s)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Dates when the following activities took place: Staff/ class observation, completion of first cycle, compilation and implementation of PGP's /PDP's, submission of summative results",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> All new members inducted / trained",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> A progress report is available w.r.t thecompletion of the First Developmental Cycle as outlined in the SIP.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "8.4.2 The Management Plan for conducting the second cycle of DA and PMDS is in place and makes provision for the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Establishment and review of the DSG structure(s)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Dates when the following activities took place: Staff/ class observation, completion of second cycle, compilation and implementation of PGP's /PDP's, submission of summative results",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "8.4.3 SMT training needs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> SMT's developmental needs were identified and facilitated",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Systems and procedures were implemented to monitor the progress of the SMT's developmental needs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "8.5 Vacant temporary/permanent posts",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Vacant temporary/permanent posts have been advertised and correct procedures followed",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Developed a management plan for shortlisting and interviews.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Shortlisting and interview minutes kept.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "8.6 Induction of new staff",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* New staff is inducted by relevant line managers.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Learner SUPPORT SERVICES",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase9: [
            {
              description:
                "9.1 Learner absenteeism is controlled, investigated and support provided where necessary.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "9.2 Systems and procedures are in place to deal with the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> disruptive/disturbing behaviour in class (Boys/Girls Town Content Methodology)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> drug and alcohol abuse",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> safety in class rooms and on school premises",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> accommodating learners with special needs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> referral of learners with special needs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> how to deal with pregnant learners/prevention of pregnancy",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase10: [
            {
              description: "10 EDUCATIONAL RESOURCES (LTSM)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal facilitates and co-ordinates the delivery of equipment and resources to the school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Verify LTSM",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All learners have workbooks which are DBE-approved and distributed",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All learners have textbooks (CAPS Aligned) or from the National Catalogue",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Educators received and are using the Teaching resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All LTSM are recorded in the stock and asset register",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a functional LTSM committee and policy, which outlines the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Ordering; Criteria for purchasing curricular resources; Selection criteria.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Retrieval - Annual Statistics.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Distribution strategy & Effective record-keeping.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Procedure for replacing lost items.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> List of approved service providers.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Provision for storage facilities.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Utilisation of LTSM budget.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Available resources are used optimally (SASA and ELITS library policy)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Serialised resources (e.g. computers, data projectors, interactive white boards) are issued out quarterly to teachers, recorded in the distribution register.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Subject related resources (e.g. maps, charts) issued out to teachers as per the subject policies and as reflected in the distribution register.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Available library resources are captured on a stock register, displayed in accordance with the Dewey System and distributed to educators once per quarter. Check the distribution register.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a Management Plan for the distribution of LTSM & educator teaching resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school takes stock of textbooks at the end of each term.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school follows the procedure for replacing lost items, as per LTSM policy.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school follows up on LTSM orders placed with service provider.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* School retrieved all learner textbooks",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* School retrieved all (Educator) teaching resources",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school ensures service provider delivers all LTSM before school closes in December",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* All LTSM are recorded in the asset register",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase11: [
            {
              description: "11 NUTRITION",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a register of learners who benefit from the School Nutritional Programme.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has facilities available for preparation and storage of food.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Equipment is in good working order.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase12: [
            {
              description: "12 SCHOLAR TRANSPORT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a register of learners who make use of Departmental School Transport Services, which also reflects the distances travelled.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],
          phase13: [
            {
              description: "13 MANAGING THE PERFORMANCE OF THE PRINCIPAL",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal monitors the basic functioning of the school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school participates in national, provincial and district quality assurance initiatives.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "13.1 Evaluate the performance of the principal",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The correct process was followed in evaluating the principal's performance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Systems are in place to monitor and support the principal's performance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The principal's summative evaluation was moderated",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "13.2 Facilitate the development of the principal",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The principal's developmental needs were identified and facilitated",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Systems and procedures are in place to monitor the progress of the principal",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "13.3. The principal has systems and or procedures in place to deal with the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Queries and complaints",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Labour relations matters",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Accountability w.r.t. the implementation of developmental recommendations from various facilitators and or directorates.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> A Plan of Action in place w.r.t. the development, support and monitoring of the recommendations received from EWSE (QA) reports.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Ratification of the Progress Report on Academic Performance Improvement Plan",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Ratification of the summative assessment records of performance of educators and the moderation thereof.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Finalise School Improvement Planning (School Improvement Plans) for submission to the district office.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase14: [
            {
              description: "14 DA AND PMDS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Professional Development",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal and management undertakes small scale research to improve service delivery.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* District/Circuit manager track and monitor progress of school with reference to the implementation of the",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal support/plans staff development activities based on needs.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal ensures the implementation of and the staff's participation in development programmes.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The progress report in terms of educator Development Practices for the First Developmental Cycle as outlined in the SIP is available.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The progress made in terms of initiating and proceeding with Internal Whole School Evaluation structures, processes and procedures is available.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The various staff development needs as captured by individual Personal Growth Plans were infused into the School Improvement Plan.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Systems are in place to monitor and evaluate the success/ problems of staff development programmes in terms of the goals of the institution/Department.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has systems in place to provide support for professional growth of educators within an appraisal system.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has systems in place to regularly review the educators' professional practices.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The staff members attend courses/workshops initiated by the district.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The correct processes were employed in the moderation of summative results for all educators and other staff members",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* District/Circuit manager moderated the school's PMDS at the end of cycle assessment.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* These results were forwarded to the PMS sub-directorate at District Office by 30 October.",
              cscale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase15: [
            {
              description: "15 SCHOOLS ARE GOVERNED EFFECTIVELY",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "15.1 School Policies",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal facillitates the day-to-day use and application of policies affecting the management and governance of the school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The principal disseminates and mediate policy documents, circulars and other official documents to all staff members.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school formulates, analise and implements policies.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* All policies are compliant with legislation.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The following school policies are in place:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Code of conduct for learners",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Code of conduct SGB members,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Learner Attendance (+ early departure & late arrival),",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Admission,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Religion,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Language,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Finance,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Safety,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> HIV and AIDS,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Curriculum, Extra/Co-Curricular,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Homework,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Assessment,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> SGB constitution,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Transport of Learners,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> RCL roles, responsibilities and capacity building,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Learner pregnancy,",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Learners with specialized learning needs",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* All policies are updated and signed off by the relevant person, i.e. the principal or Chairperson of the SGB and finally the District/Circuit manager (assisted by the legal section) who must verify that the policies are compliant with legislation",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The Learner Attendance Policy is implemented and adhered to.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Each class has a class register and a period control register.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Learners are punctual and attend regularly",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> The school follows the standard procedures for recording, managing and monitoring learner attendance.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> All policies pertaining to absenteeism, late-coming, time-off, school discipline and truancy are up to",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "15.2 Learners",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The class register is marked in the registration period on each school day in accordance with the instructions in Schedule 1",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* A period register is marked at least once per month or more frequently (in every period) as determined by the principal",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school stores learner attendance data in an electronic administration system, but must ensure that:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Attendance data is captured on the electronic system at least once a week",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> A hard copy is generated monthly for the previous month, signed by the principal and filed for audit purposes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> Quarterly attendance returns are generated and submitted to district office",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "> They adapt and apply paragraphs 39 – 47 as per Attendance Policy.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "15.3 Educators",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Educators sign the time book upon arrival at/dismissal from school",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Principal monitors the time book regularly.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Educators complete late arrival/early departure register, when applicable",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Educators understand the 8-week rule w.r.t leave of absence",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Principal ensures leave forms are completed and submitted to the district office weekly/ regularly.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "15.4 Functionality of the SGB",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has systems in place to support SGBs in promoting effective school governance.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school has a functional SGB.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The SGB has a full compliment of members.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The SGB has a Constitution.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* SGB developed a Code of Conduct for learners.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The SGB members were trained on the following:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Roles, functions and duties;",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Formulating a vision and mission for the school",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> Financial Management",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Parental involvement in the activities of the school",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The management plan, yearplan and School Development Plan are available and they are aligned to the Budget.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Governance policies are in compliance with national requirements and they are implemented eg. Admission policy, Language policy, School safety, HIV/AIDS,etc.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The Election of office-bearers for the new 3-year term was a democratic and transparent process.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The processes and procedures followed in the filling of prematurely vacated positions were democratic.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SGB determined training needs of members and made provision for it for next year.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Audited financial statements are available to reflect the financial position of the institution.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SGB considered the option of the school being a fee paying school or a non-fee paying school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The budget for next year is drawn up.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SGB finalised the school fee exemption applications.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The SGB determined the auditors for next year.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SGB prepared the reports to be presented at the AGM.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The SGB meets once per term",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> at school and",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "> at district with the director.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "15.4 Functionality of the RCL",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The RCL does has the required elected structures: Chairman office-bearers, etc.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The Election of office-bearers for the new 1-year term was a democratic, transparent process.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The RCL has a constitution.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* RCL members were trained on their roles, functions and duties.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* RCL participate in decision-making processes.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The RCL is functioning well.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The RCL chairperson prepared the hand-over reports.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The RCL determined training needs of members and made provision for it for next year.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase16: [
            {
              description: "16 THE SCHOOL HAS SYSTEMS IN PLACE",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school develops infromation (statistics/surveys) and communication technology as a means of gathering and disseminating information about learners.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school maintains a data base of learners'/educators' needs eg. Professional development needs and achievements.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Information Systems",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school has software to develop timetables.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has a timetable for the use of the computer laboratory.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school has a policy regarding cellphones.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school's ICT resources are in working order.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school is in partnership with the community regarding the use of ICT.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The staff is trained in basic use of ICT.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* The school is utilising the SA SAMS program",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school's filing and archiving systems are effective.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The school has developed a comprehensive school profile.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Learner profiles are readily available and updated regularly (to be sent to secondary school).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "EMIS data surveys",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Principal submitted snap survey on 10th school day in January.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Principal submitted annual return by 1st Tuesday in March.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Correctness of identified EMIS data columns as per EMIS guidelines has been verified by the diatrict.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* CD data to be submitted by principals monthly, excluding the survey month",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Quarterly Reports to be submitted by principals at the end of every quarter. Printouts that must be submitted with CD: Data base and Printed version",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* ICT survey must be submitted by principals at the end of the fourth quarter",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Pass rate survey must be submitted at the end of the fourth quarter",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase17: [
            {
              description: "17 QUARTERLY REPORTING AND FEEDBACK",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "The District/Circuit manager received the following reports from the school:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Activities planned for each term as per SIP.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Reports on specific incidents that happened at school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Evidence of Development and Support provided to school.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Excursions/tours completed per term.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase18: [
            {
              description: "18 RISK MANAGEMENT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Leave register",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Leave registers for Teachers and Learners ( SA SAMS or Manual) is in line with the attendance register and leave forms",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Leave forms are submitted every Friday to the District Office",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Leave days are monitored and members are counselled when absent frequently.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Early departure and late arrival registers are monitored and regularly addressed.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "The school maintains the following registers:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• Stock",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Telephone",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Attendance",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Summary",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Asset",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Mail Register for Incoming and Outgoing mail",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Handling of orphans and vulnerable children",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Handling pregnancy of learners",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Injury in particular sport, in place and controlled",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Logbook",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* It has the following columns: date of visit, time of arrival, purpose of visit, time of departure, signature of official/visitor, signature of principal, findings and recommendations.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• All meetings, functions, events held at the school are noted in the logbook (of the school)",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase19: [
            {
              description: "19 CAPACITY BUILDING IS TAKING PLACE",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Capacity building of SGB",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Roles and Responsibilities as per SASA.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Policy mediation and implementation.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Financial management and administrative systems.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Strategic management",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sport/cultural and social programmes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Interviewing and Selection Procedures",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Code of Conduct for learners, disciplinary procedures",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* SASA re: safety of learners at school/on excursions, or tours",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Knowledge and understanding of the principles of the Convention on the Rights of the Child",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Understanding the role and purpose of the school library and how this should be managed",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* Understanding and articulation of the strategy on racial integration and human rights",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "* The SGB ensures that the community is aware of the fact that education is a societal priority.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Capacity building of RCL",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• RCL structures at schools are in place and functioning",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• RCL members have been capacitated and understand their roles and responsibilities",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Policy mediation and implementation.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Financial management and administrative systems.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Strategic management",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sport/cultural and social programmes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Capacity building of SBST",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• SBSTs have been capacitated by the district officials regarding how to support learners who experience barriers to learning, referral procedures and how to support learners with emotional challenges",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• SBSTs developed IESPs (Educational Plans and Inclusive Programmes for Learners).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• SBSTs meet regularly",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Capacity building of Principal",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The District/Circuit manager monitors the participation of the principal in the ACE program, where",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The District/Circuit manager inducted newly appointed principals.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Policy mediation and implementation.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Financial management and administrative systems.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Strategic management",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sport/cultural and social programmes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Capacity building of SMT",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Curriculum management, content of the subjects allocated to them, drug testing and seizure procedures, how to handle disturbing behaviour in the classroom, promoting national symbols and values in education, handling of pregnant learners, managing learners with different abilities, Labour Relations Act.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Knowledge and understanding of the principles of the Convention of the Rights of the Child",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Understanding and articulation of the Strategy on Racial Integration and Human Rights",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Policy mediation and implementation.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Financial management and administrative systems.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Strategic management",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "* Sport/cultural and social programmes",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Capacity building of educators",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Educators are supported by district officials to enhance their professional development concerning teaching and learning in particular",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase20: [
            {
              description: "20 MONITORING VISITS ARE UNDERTAKEN TO SCHOOLS",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The school submitted the results analysis and an accompanying report on what the school intends to do to improve the results to the District/Circuit manager.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The school has a report on the progress of the Academic Improvement Plan.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• Progress reports w.r.t the implementation of QA recommendations are sent monthly to the SIP unit at Head",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The school submits a results analysis and a report to the District/Circuit manager on its intention to improve",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The school submits an Academic Improvement Plan (APIP) to the District/Circuit manager.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The school was regularly monitored and supported by the District/Circuit manager (indicate dates of visits).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• The school has sent progress reports monthly to the SIP unit at Head Office (indicate dates).",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ],

          phase21: [
            {
              description: "21 PARTNERSHIPS AND COMMUNICATION",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "Schools establish partnerships with:",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description:
                "• other government departments, including the local government structures.",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• business, where relevant",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• churches where relevant",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• NGOs where relevant",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            },
            {
              description: "• community leaders where relevant",
              scale1: "",
              scale2: "",
              scale3: "",
              comment: "",
              scale1_1: "",
              scale2_1: "",
              scale3_1: "",
              comment1: "",
              scale1_2: "",
              scale2_2: "",
              scale3_2: "",
              comment2: "",
              scale1_3: "",
              scale2_3: "",
              scale3_3: "",
              comment3: ""
            }
          ]
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
    addRow() {
      this.doc.body.tr.push({});
    },
    removeRow(index) {
      this.doc.body.tr.splice(index, 1);
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
.black-block {
  background-color: #ddd;
  height: 80px;
  border: 2px solid #fff;
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

