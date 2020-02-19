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
              <h3 class="text-xs-center red--text text">CONFIDENTIAL</h3>
              <v-flex xs6 offset-xs3>
                <h3 class="text-xs-center main-heading">SECURITY CLEARANCE FORM</h3>
              </v-flex>

              <v-card-text class="pt-0 mt-0">
                <v-alert pa-0 :value="true" type="info">
                  <strong>
                    THIS QUESTIONNARE IS A SWORN/AFFIRMED STATEMENT ___ ANY FALSE INFORMATION
                    FURNISHED CONSTITUTES PERJURY
                  </strong>
                </v-alert>

                <br />
                <v-layout xs12 wrap border class="card-border">
                  <strong>TO BE COMPLETED BY THE INSTITUTION REQUESTING THE SECURITY CLEARANCE</strong>
                </v-layout>
                <v-layout xs12 wrap border class="card-border">
                  <v-flex xs12>
                    <SelectUsers
                      v-on:getUsers="setSigners($event)"
                      label="IMMEDIATE SUPERVISOR/DELEGATED OFFICIAL: "
                    />
                  </v-flex>
                  <v-flex xs12 lg6>
                    <v-text-field v-model="doc.body.tel" label="TEL. "></v-text-field>
                  </v-flex>

                  <v-flex xs12 lg6>
                    <p>LEVEL OF CLEARANCE:</p>
                    <v-radio-group v-model="doc.body.levelOfClearance" :mandatory="false">
                      <v-radio label="RECORD" value="Records"></v-radio>
                      <v-radio label="COFIDENTIAL" value="Confidentail"></v-radio>
                      <v-radio label="SECRET" value="secret"></v-radio>
                      <v-radio label="TOP SECRET" value="TopSecret"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <br />
              <br />

              <!-- 
                =====================================
                INSTRUCTIONS FOR THE COMPLETION OF THE QUESTIONNARE
                =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border class="heading-bg">
                  <v-flex xs12>
                    <h4 class="text-xs-center">INSTRUCTIONS FOR THE COMPLETION OF THE QUESTIONNARE</h4>
                  </v-flex>
                </v-layout>

                <v-layout xs12 wrap border class="card-border">
                  <v-flex>
                    <ol>
                      <li>This questionnare is issued for completion in order to fulfil the functions as stipulated in section 2A of the national Strategic Intelligencce Act, act of 1994 as amended.</li>
                      <li>This questionnaire must be completed in PRINT WITH BLACK PEN or typed and submitted as SOON AS POSSIBLE/WITHIN ONE MONTH.</li>
                      <li>ALL QUESTIONS MUST BE ANSWERED by furnishing the required information or by making a cross in the appropriate block or by using appropriate words such as Yes, No, N/A etc.</li>
                      <li>Attach additional pages if more spaces are required.</li>
                      <li>Addresses must be completed in full, for example: Flat number and/or street name, number and town/city or plot number/name of farm and district.</li>
                      <li>Only the page of the fingerprints for security clearance’ may be removed from this form.</li>
                      <li>This form must be sworn to/affirmed.</li>
                      <li>
                        The names of the President, members of the Cabinet, members of Parliament, jurists, physicians as well as ,managing directors of large institutions must preferably not be given as references, because the clearing
                        institutions conduct interviews with every reference during their investigation, and their busy programmes should not be encroached upon.
                      </li>
                      <li>
                        Please attach the following items to this questionnaire when completed:
                        <ul>
                          <li>Certified copy of identity document and passport (applicant, spouse and/or cohabiting partner).</li>

                          <li>Certified copy of marriage and/or divorce certificate</li>

                          <li>Certified copy of academic qualification (s)</li>

                          <li>Copies of all bank statements: savings, cheque, credit card(s), bond accounts and other financial loans. These should cover the recent four months.</li>

                          <li>Declaration of directorship(s) in business venture(s)</li>

                          <li>One passport size recent colour photo of the applicant.</li>
                        </ul>
                      </li>
                    </ol>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <br />
              <br />

              <!-- 
                                =====================================
                                1. PERSONAL PARTICULARS
                                =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>1. PERSONAL PARTICULARS</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers27"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.item.description }}</td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.idNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td>
                          <v-radio-group v-model="props.item.boolean" :mandatory="false">
                            <v-radio label="Male" value="Male"></v-radio>
                            <v-radio label="Female" value="Female"></v-radio>
                          </v-radio-group>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers28"
                      :items="doc.body.phase22"
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
                        <td class>{{ props.item.description }}</td>

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
                            v-model="props.item.comment1"
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
                      :headers="headers29"
                      :items="doc.body.phase23"
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
                          <v-radio-group v-model="props.item.levelOfClearance" :mandatory="false">
                            <v-radio label="SINGLE" value="single"></v-radio>
                            <v-radio label="MARRIED" value="married"></v-radio>
                            <v-radio label="SEPARATED" value="separated"></v-radio>
                            <v-radio label="DIVORCED" value="divorvced"></v-radio>
                            <v-radio label="WIDOW/WIDOWER" value="widow-widower"></v-radio>
                            <v-radio label="COHABITING" value="cohabiting"></v-radio>
                          </v-radio-group>
                        </td>

                        <td class="px-0 py-0">
                          <v-menu
                            v-model="menu10a"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="props.item.date10" label=" " readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="props.item.date10" @input="menu10b = false"></v-date-picker>
                          </v-menu>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers30"
                      :items="doc.body.phase24"
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
                        <td class>{{ props.item.description }}</td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.surName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.fisrtName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.medianName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nameCalled"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <div v-if="props.index == 1">
                            <v-menu
                              v-model="menu3a"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field v-model="doc.body.date3" readonly v-on="on"></v-text-field>
                              </template>
                              <v-date-picker v-model="doc.body.date3" @input="menu3b = false"></v-date-picker>
                            </v-menu>
                          </div>
                          <div v-else>
                            <v-menu
                              v-model="menu2a"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field v-model="doc.body.date2" readonly v-on="on"></v-text-field>
                              </template>
                              <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                            </v-menu>
                          </div>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers32"
                      :items="doc.body.phase25"
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

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers31"
                      :items="doc.body.phase25"
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
                          <v-text-field v-model="props.item.day" single-line solo flat placeholder></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.month"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field v-model="props.item.year" single-line solo flat placeholder></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.country"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.place"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.phoneNumber"
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

              <!-- 
                                =====================================
                                2.	RESIDENTIAL ADDRESSES
                                =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>2. RESIDENTIAL ADDRESSES</h4>KINDLY FURNISH THE FOLLOWING PARTICULARS REGARDING YOUR CURRENT AND PREVIOUS ADDRESSES
                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers33"
                      :items="doc.body.phase26"
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
                        <td class>{{ props.item.description }}</td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.numberNameOfStreet"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.cityTown"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.province"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.country"
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
                          <div v-if="props.index == 1">
                            <v-menu
                              v-model="menu5a"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field v-model="doc.body.date5" readonly v-on="on"></v-text-field>
                              </template>
                              <v-date-picker v-model="doc.body.date5" @input="menu5b = false"></v-date-picker>
                            </v-menu>
                          </div>
                          <div v-else>
                            <v-menu
                              v-model="menu4a"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field v-model="doc.body.date4" readonly v-on="on"></v-text-field>
                              </template>
                              <v-date-picker v-model="doc.body.date4" @input="menu4b = false"></v-date-picker>
                            </v-menu>
                          </div>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                                =====================================
                                3. EDUCATIONAL QUALIFICATIONS
                                =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>3. EDUCATIONAL QUALIFICATIONS</h4>KINDLY FURNISH THE FOLLOWING PARTICULARS REGARDING ALL SECONDARY AND TERTIARY EDUCATIONAL INSTITUTIONS
                (E.G. SECONDARY SCHOOLS, TECHNIKONS, COLLEGES AND UNIVERSITIES) THAT YOU HAVE ATTENDED
                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers34"
                      :items="doc.body.phase27"
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
                          <v-text-field
                            v-model="props.item.qualification"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nameOfInstitution"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.cityAndCountry"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field v-model="props.item.from" single-line solo flat placeholder></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field v-model="props.item.to" single-line solo flat placeholder></v-text-field>
                        </td>

                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            =====================================
                            4. SPOUSE OR COHABITING PARTNER
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>4. SPOUSE OR COHABITING PARTNER</h4>

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
                        <td class>{{ props.item.description }}</td>

                        <td>
                          <v-text-field
                            v-model="props.item.comment"
                            solo
                            flat
                            placeholder
                            class="styled-input"
                          ></v-text-field>
                        </td>

                        <!--  <td class="px-0 py-0">
                                            <v-text-field
                                                v-model="props.item.comment"
                                                single-line
                                                solo
                                                flat
                                                placeholder
                                            ></v-text-field>
                        </td>-->
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            =====================================
                            5. HEALTH
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>5. HEALTH</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers2"
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
                        <td class>{{ props.item.description }}</td>

                        <td>
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
                      :headers="headers3"
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
                      :headers="headers2"
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
                        <td class>{{ props.item.description }}</td>

                        <td>
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
                      :headers="headers5"
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
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.description"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.counsellor"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.contactNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.natureOfProblem"
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

              <!-- 
                            =====================================
                            6. PREVIOUS MARRIAGE(S)
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>6. PREVIOUS MARRIAGE(S)</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers6"
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
                    </v-data-table>

                    <v-data-table
                      :headers="headers7"
                      :items="doc.body.phase33"
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
                          <v-menu
                            v-model="menu6a"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="doc.body.date6"
                                label="(1) Date: "
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date6" @input="menu6b = false"></v-date-picker>
                          </v-menu>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.surName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.firstName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.idNumber"
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
                      :headers="headers8"
                      :items="doc.body.phase8"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props" class="styled-input">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0"></td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.countryOfBirth"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nationality"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.address"
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
                      :items="doc.body.phase28"
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
                          <v-menu
                            v-model="menu7a"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="doc.body.date7"
                                label="(2) Date: "
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date7" @input="menu7b = false"></v-date-picker>
                          </v-menu>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.surName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.firstName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.idNumber"
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
                      :headers="headers8"
                      :items="doc.body.phase29"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props" class="styled-input">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0"></td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.countryOfBirth"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nationality"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.address"
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

              <!-- 
                            ================================================================================================================
                            7. RELATIVES: Include parents, parents in law, siblings and all children (not applicable to deceased persons)
                            ================================================================================================================ 
              -->

              <v-card-text>
                <h4>7. RELATIVES: Include parents, parents in law, siblings and all children (not applicable to deceased persons)</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers9"
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
                        <td class="text-xs-center">
                          <v-text-field
                            v-model="props.item.relationship"
                            single-line
                            solo
                            flat
                            placeholder="Relationship"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.presentSurname"
                            single-line
                            solo
                            flat
                            placeholder="Present Surname"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.previousSurname"
                            single-line
                            solo
                            flat
                            placeholder="Performance Indicator"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.firstNames"
                            single-line
                            solo
                            flat
                            placeholder="First Names"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.identityNumber"
                            single-line
                            solo
                            flat
                            placeholder="Identity Number"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.countryOfBirth"
                            single-line
                            solo
                            flat
                            placeholder="Country Of Birth"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.nationality"
                            single-line
                            solo
                            flat
                            placeholder="Nationality"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-right px-0 py-0">
                          <v-text-field
                            v-model="props.item.fullResidentialAddress"
                            single-line
                            solo
                            flat
                            placeholder="Full Residential Address"
                          ></v-text-field>
                        </td>
                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow1(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow1" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            ================
                            8. IMMIGRANT
                            ================ 
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>8. IMMIGRANT</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers10"
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
                    </v-data-table>

                    <v-data-table
                      :headers="headers11"
                      :items="doc.body.phase32"
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
                          <v-text-field v-model="props.item.port" single-line solo flat placeholder></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.fromWhichCountry"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.permit"
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
                      :headers="headers12"
                      :items="doc.body.phase30"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props" class="styled-input">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0"></td>
                        <td class="px-0 py-0">
                          <v-menu
                            v-model="menu8a"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date8" readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date8" @input="menu8b = false"></v-date-picker>
                          </v-menu>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.certificateNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <!-- <td class="px-0 py-0">
                                            <v-text-field
                                                v-model="props.item.comment"
                                                single-line
                                                solo
                                                flat
                                                placeholder
                                            ></v-text-field>
                        </td>-->
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers14"
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
                      :headers="headers2"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.item.description }}</td>

                        <td>
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
                      :headers="headers13"
                      :items="doc.body.phase31"
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
                          <v-text-field
                            v-model="props.item.passportNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.counrtyIssued"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-menu
                            v-model="menu9a"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field v-model="doc.body.date9" readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date9" @input="menu9b = false"></v-date-picker>
                          </v-menu>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            =====================================
                            9.VISITS/RESIDENCE OUTSIDE THE RSA
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>9. VISITS/RESIDENCE OUTSIDE THE RSA</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    LIST ALL VISITS TO AND/OR PERIODS OF RESIDENCE IN COUNTRIES OUTSIDE THE BORDERS OF THE RSA BY YOU OR YOUR COHABITANT AND/OR YOUR SPOUSE DURING THE PAST 5 YEARS:
                    <v-data-table
                      :headers="headers16"
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
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.country"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.purposeOfVisit"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.dateFrom"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.dateTo"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow2(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow2" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            =====================================
                            10. CONTACT OR SUSPECTED CONTACT WITH FOREIGN INTELLIGENCE SERVICES
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>10. CONTACT OR SUSPECTED CONTACT WITH FOREIGN INTELLIGENCE SERVICES</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    HAVE YOU HAD ANY CONTACT WITH FOREIGN INTELLIGENCE SERVICES OR SUSPECTED MEMBERS OF FOREIGN INTELLIGENCE SERVICES:
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
                        <td class="px-0 py-0">
                          <v-menu
                            v-model="menu1a"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="doc.body.date1"
                                label="(1) Date: "
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                          </v-menu>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.serviceName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.contactName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <!-- <td class="text-xs-right px-0 py-0">
                                            <v-text-field
                                                v-model="props.item.fullResidentialAddress"
                                                single-line
                                                solo
                                                flat
                                                placeholder="Full Residential Address"
                                            ></v-text-field>
                        </td>-->
                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow3(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow3" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            =====================================
                            11.	LEGAL ACTIONS
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>11. LEGAL ACTIONS</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers2"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.item.description }}</td>

                        <td>
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
                      :headers="headers18"
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
                      :headers="headers19"
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
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.place"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.date"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.natureOfcase"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.finding"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          
                        </td>

                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow4(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow4" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                    <v-data-table
                      :headers="headers20"
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
                      :headers="headers21"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.place"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.date"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.byWhom"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.finding"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>

                         

                        </td>

                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow5(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow5" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>

                    <v-flex
                      xs12
                      class="card-border"
                    >IF YOU OR YOUR SPOUSE AND/OR YOUR COHABITANT HAVE EVER BEEN DECLARED INSOLVENT, OR YOUR ESTATE PLACED UNDER ADMINISTRATION, OR A COMPANY IN RESPECT OF WHICH YOU ARE OR WERE A DIRECTOR OR OFFICER, OR A CLOSE CORPORATION OF WHICH YOU ARE OR WERE A MEMBER WAS LEQUIDATED, STATE THE FOLLOWNG:</v-flex>

                    <v-data-table
                      :headers="headers17"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.date"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nameOfService"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nameOfContact"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        

                        <!-- <td class="text-xs-right px-0 py-0">
                                            <v-text-field
                                                v-model="props.item.fullResidentialAddress"
                                                single-line
                                                solo
                                                flat
                                                placeholder="Full Residential Address"
                                            ></v-text-field>
                        </td>-->
                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow6(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow6" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                =====================================
                12. EMPLOYMENT HISTORY
                =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>12. EMPLOYMENT HISTORY</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    NAME ALL PLACES OF EMPLOYMENT DURING THE PST 10 YEARS INCLUDING YOUR PRESENT OCCUPATION:
                    <v-data-table
                      :headers="headers23"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.serviceNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.nameOfEmployer"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.supervisorName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.supervisorTel"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.address"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          
                        </td>
                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow7(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow7" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            =====================================
                            13. REFERENCES
                            =====================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>13. REFERENCES</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    NAME 5 PERSONS (NOT RELATIVES) TO WHOM YOU HAVE BEEN WELL-KNOWN FOR A PERIOD OF 5-20 YEARS
                    <v-data-table
                      :headers="headers24"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.title"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.surname"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.firstName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.address"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td>
                          <v-text-field
                            v-model="props.item.homeTel"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.businessAddress"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.busTel"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.yearsKnown"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.idNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>

                         
                        </td>
                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow8(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow8" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            ==================================================================
                            14. SERVICE IN SECURITY SERVICES (INCLUDING SAPS/FOREIGN SERVICES)
                            ==================================================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>14. SERVICE IN SECURITY SERVICES (INCLUDING SAPS/FOREIGN SERVICES)</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers25"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.country"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>

                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.serviceNumber"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.from"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.to"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.serviceName"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                          
                        </td>
                        <td class="text-xs-center px-0 py-0">
                          <v-icon small color="red " @click="removeRow9(props.index)">delete</v-icon>
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>

                      <template v-slot:footer>
                        <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                          <v-icon @click="addRow9" color="white">add</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <!-- 
                            ==================================================================
                            15. HAVE YOU EVER BEEN ISSUED WITH A SECURITY CLEARANCE/DENIED
                            ==================================================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>15. HAVE YOU EVER BEEN ISSUED WITH A SECURITY CLEARANCE/DENIED</h4>

                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers26"
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

                      <template v-slot:items="props" v-slot:no-data>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.level"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.dateIssued"
                            single-line
                            solo
                            flat
                            placeholder
                          ></v-text-field>
                        </td>
                        <td class="px-0 py-0">
                          <v-text-field
                            v-model="props.item.Institution"
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
                  </v-flex>
                </v-layout>
              </v-card-text>
              <br />

              <!-- 
                            ==================================================================
                            16. DECLARATION
                            ==================================================================
              -->

              <v-card-text class="pt-0 mt-0">
                <h4>16. DECLARATION</h4>

                <v-layout xs12 wrap border class="card-border">
                  <v-flex>
                    <p>(A) DO YOU AND UNDERSTAND THE CONTENTS OF THE ABOVE DECLARATION?</p>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.answerA" label="ANSWER: "></v-text-field>
                    </v-flex>
                    <p>(B) DO YOU HAVE ANY OBJECTIONS TO TAKING THE PRESCRIBED OATH/AFFIRMATION?</p>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.answerB" label="ANSWER: "></v-text-field>
                    </v-flex>
                    <p>(C) DO YOU CONSIDER THE PRESCRIBED OATH/AFFIRMATION TO BE BINDING ON YOUR CONSCIENCE?</p>
                    <v-flex xs12 lg6>
                      <v-text-field v-model="doc.body.answerC" label="ANSWER: "></v-text-field>
                    </v-flex>
                    <p>
                      (D) I CERTIFY THAT THE ABOVE QUESTIONS WERE PUT TO ME AND THAT THE ANSWERS, AS REFLECTED ABOVE, WERE
                      WRITTEN DOWN IN MY PRESENCE.
                    </p>
                    <v-flex xs6 offset-xs3>
                      <SelectUsers
                      v-on:getUsers="setSigners1($event)"
                      label="SIGNATURE OF DEPONENT "
                    />
                    </v-flex>

                    <br />
                    <p>
                      (E) CERTIFY THAT THE DEPONET HAS ACKNOWLEDGED THAT HE/SHE KNOWS AND UNDERSTANDS THE CONTENTS OF THIS
                      DECLARATION WHICH WAS SWORN TO/AFFIRMED BEFORE ME AND THE DEPONENT’S SIGNATURE/THUMB PRINT/MARK WAS
                      PLACED THERON IN MY PRESENCE.
                    </p>
                    <v-flex xs6 offset-xs3>
                      <SelectUsers
                      v-on:getUsers="setSigners2($event)"
                      label="COMMISSIONER OF OATH / JUSTICE OF THE PEACE "
                    />
                    </v-flex>
                   
                    <p>EX OFFICIO REPUBLIC OF SOUTH AFRICA</p>
                    <v-flex xs12>
                      <v-text-field v-model="doc.body.physicalAddress" label="PHYSICAL ADDRESS: "></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm4>
                      <v-menu
                        v-model="menua"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field v-model="doc.body.date" label="DATE: " readonly v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="doc.body.date" @input="menub = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field v-model="doc.body.place" label="PLACE: "></v-text-field>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <br />
              <v-card-text>
                <v-flex xs12>
                  <h3 class="text-xs-center">ADDITIONAL INFORMATION</h3>

                  <editor
                    api-key="7ruk8pq3grn2940r2hkdhb5e7vc5rvtc2kdssi58s9ockt7y"
                    v-model="doc.body.address"
                    ref="editor"
                    :init="{min_height}"
                  ></editor>
                </v-flex>
              </v-card-text>
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
  name: "SecurityClearance",
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

      headers1: [
        {
          text:
            "IF YOUR ANSWER TO ANY OF THE ABOVE QUESTIONS IS ‘YES’, STATE THE FOLLOWING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers27: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "MALE / FEMALE",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers28: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "(i)",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "(ii)",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers29: [
        {
          text: "MARITAL STATUS",
          align: "left",
          sortable: false,
          value: "",
          width: "50%"
        },
        {
          text: "DATES",
          align: "left",
          sortable: false,
          value: "",
          width: "50%"
        }
      ],
      headers30: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "SURNAME",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "FULL FIRST NAMES",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "MAIDEN NAME",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "NAME CALLED BY",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "DATE OF CHANGE",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers31: [
        {
          text: "DAY",
          align: "left",
          sortable: false,
          value: "",
          width: "16.5%"
        },
        {
          text: "MONTH",
          align: "left",
          sortable: false,
          value: "",
          width: "16.5%"
        },
        {
          text: "YEAR",
          align: "left",
          sortable: false,
          value: "",
          width: "16.5%"
        },
        {
          text: "COUNTRY",
          align: "left",
          sortable: false,
          value: "",
          width: "16.5%"
        },
        {
          text: "PLACE",
          align: "left",
          sortable: false,
          value: "",
          width: "16.5%"
        },
        {
          text: "PHONE NO.",
          align: "left",
          sortable: false,
          value: "",
          width: "16.5%"
        }
      ],
      headers32: [
        {
          text: "DATE OF BIRTH",
          align: "center",
          sortable: false,
          value: "",
          width: "49.5%"
        },
        {
          text: "PLACE OF BIRTH",
          align: "center",
          sortable: false,
          value: "",
          width: "49.5%"
        }
      ],
      headers33: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "NUMBER AND NAME OF STREET/FLAT OR NAME OF FARM",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "CITY/TOWN",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "PROVINCE",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "COUNTRY",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "TEL. No",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "DATE OF CHANGE",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers34: [
        {
          text: "QUALIFICATIONS OBTAINED",
          align: "left",
          sortable: false,
          value: ""
        },
        {
          text: "NAME OF SCHOOL OR INSTITUTION",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "CITY/TOWN AND COUNTRY",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "FROM",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "TO",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "scarbs"
        }
      ],
      headers2: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },

        {
          text: "YES/NO",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers3: [
        {
          text:
            "IF YOUR ANSWER TO ANY OF THE ABOVE QUESTIONS IS ‘YES’, STATE THE FOLLOWING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers5: [
        {
          text: "INSTITUTION (IF ADMITTED)",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "COUNSELLOR",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "CONTACT NUMBER",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "NATURE OF PROBLEM",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers6: [
        {
          text:
            "KINDLY PROVIDE THE FOLLOWING PARTICULARS OF YOUR PREVIOUS SPOUSE(S)/OR COHABITANTS",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers7: [
        {
          text: "DATE OF DIVORCE/ SEPARATION",
          align: "center",
          sortable: false,
          value: "",
          width: "230px"
        },
        {
          text: "SURNAME",
          align: "center",
          sortable: false,
          value: "",
          width: "180px"
        },
        {
          text: "FIRST NAMES",
          align: "center",
          sortable: false,
          value: "",
          width: "150px"
        },
        {
          text: "IDENTITY NUMBER",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers8: [
        {
          text: "-",
          align: "center",
          sortable: false,
          value: "",
          width: "230px"
        },
        {
          text: "COUNTRY OF BIRTH",
          align: "center",
          sortable: false,
          value: "",
          width: "180px"
        },
        {
          text: "NATIONALITY",
          align: "center",
          sortable: false,
          value: "",
          width: "150px"
        },
        {
          text: "FULL RESIDENTIAL ADDRESS",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers9: [
        {
          text: "RELATIONSHIP",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "PRESENT SURNAME",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "PREVIOUS SURNAME",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "FIRST NAMES",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "IDENTITY NUMBER",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "COUNTRY OF BIRTH",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "NATIONALITY",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "FULL RESIDENTIAL ADDRESS",
          align: "center",
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          value: "carbs"
        }
      ],
      headers10: [
        {
          text: "IF IMMIGRATED TO THE RSA, STATE THE FOLLOWING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers: [
        {
          text:
            "KINDLY PROVIDE THE FOLLOWING PARTICULARS I.R.O YOUR SPOUSE OR COHABITANT",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
        // {
        //   text: "ITEM CHECKED",
        //   value: ""
        // },
        // {
        //   text: "YES / NO",
        //   value: ""
        //   //   width: "10%"
        // },
        // {
        //   text: "COMMENTS",
        //   value: ""
        // }
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],
      headers11: [
        {
          text: "HARBOUR, AIRPORT OR PORT OF ENTRY AND DATE OF ARRIVAL",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "COUNTRY FROM WHICH EMIGRITED",
          align: "center",
          sortable: false,
          value: "",
          maxWidth: "180px"
        },
        {
          text: "DATE AND NUMBER OF IMMIGRATION PERMIT",
          align: "center",
          sortable: false,
          value: "",
          width: "150px"
        }
      ],
      headers12: [
        {
          text: "IF NATURALISED, STATE",
          align: "center",
          sortable: false,
          value: "",
          width: "230px"
        },
        {
          text: "DATE: ",
          align: "center",
          sortable: false,
          value: "",
          width: "180px"
        },
        {
          text: "CERTIFICATE No: ",
          align: "center",
          sortable: false,
          value: "",
          width: "150px"
        }
        // {
        //   text: "FULL RESIDENTIAL ADDRESS",
        //   align: "center",
        //   sortable: false,
        //   value: ""
        //   //   width: "10%"
        // }
      ],

      headers13: [
        {
          text: "PASSPORT No.",
          align: "center",
          sortable: false,
          value: "",
          width: "230px"
        },
        {
          text: "COUNTRY ISSUED ",
          align: "center",
          sortable: false,
          value: "",
          width: "180px"
        },
        {
          text: "DATE: ",
          align: "center",
          sortable: false,
          value: "",
          width: "150px"
        }
        // {
        //   text: "FULL RESIDENTIAL ADDRESS",
        //   align: "center",
        //   sortable: false,
        //   value: ""
        //   //   width: "10%"
        // }
      ],
      headers14: [
        {
          text: "A COPY OF THE CERTIFICATE OF NATURALISATION IS REQUIRED",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers16: [
        {
          text: "COUNTRY",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "PURPOSE OF VISIT/RESIDENCE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "DATE FROM",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "DATE TO",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "Actions",
          value: "scarbs"
        }
      ],

      headers17: [
        {
          text: "DATE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "NAME OF SERVICE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "NAME OF CONTACT",
          align: "center",
          sortable: false,
          value: ""
        },
        // {
        //   text: "DATE TO",
        //   align: "center",
        //   sortable: false,
        //   value: ""
        //   //   width: "10%"
        // },
        {
          text: "ACTIONS",
          sortable: false,
          value: "carbs"
        }
      ],
      headers18: [
        {
          text:
            "IF YOUR  ANSWER TO THE ABOVE QUESTION IS ‘YES’, STATE THE FOLLOWING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers19: [
        {
          text: "PLACE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "DATE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "NATURE OF CASE/CHARGE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "FINDING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "carbs"
        }
      ],
      headers20: [
        {
          text:
            "IF YOU HAVE EVER HAD A SUMMONS SERVED ON YOU FOR DEBT, STATE THE FOLLOWING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers21: [
        {
          text: "PLACE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "DATE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "BY  WHOM",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "FINDING",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "carbs"
        }
      ],
      headers22: [
        {
          text: "PLACE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "DATE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "NAME OF COMPANY/CLOSE CORPORATION",
          align: "center",
          sortable: false,
          value: ""
        },
        // {
        //   text: "DATE TO",
        //   align: "center",
        //   sortable: false,
        //   value: ""
        //   //   width: "10%"
        // },
        {
          text: "ACTIONS",
          sortable: false,
          value: "carbs"
        }
      ],
      headers23: [
        {
          text: "DESIGNATION (RANK) AND SERVICE NUMBER",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "NAME OF EMPLOYER",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "SUPERVISOR NAME",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "SUPERVISOR TEL. No.",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "PHYSICAL ADDRESS",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "scarbs"
        }
      ],
      headers24: [
        {
          text: "TITLE",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "SURNAME",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "FULL FIRST NAMES",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "RESIDENTIAL ADDRESS(NOT POSTAL ADDRESS)",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "HOME TEL. No.(DIALING CODE)",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "OCCUPATIONAL AND BUSINESS ADDRESS(NOT POSTAL ADDRESS)",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "BUS. TEL. No.(DIALING CODE)",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "YEARS KNOWN",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "IDENTITY No.",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "scarbs"
        }
      ],

      headers25: [
        {
          text: "COUNTRY",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "SERVICE NUMBER",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "FROM",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "TO",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "NAME OF SERVICE",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "scarbs"
        }
      ],
      headers26: [
        {
          text: "LEVEL",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "DATE ISSUED/DENIED",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "INSTITUTION",
          align: "center",
          sortable: false,
          value: ""
        },
        {
          text: "ACTIONS",
          sortable: false,
          value: "scarbs"
        }
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "SecurityClearance",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "",
          enderUser: {},
          initialsSurname: "",
          tel: "",
          maritalStatus: "",
          answerA:"",
          answerB:"",
          answerC:"",
          physicalAddress:"",
          place:"",
          date: new Date().toISOString().substr(0, 10),

          phase1: [
            {
              description: " IDENTITY No.",
              comment: ""
            },
            {
              description: "SURNAME",
              comment: ""
            },
            {
              description: "FULL FIRST NAMES",
              comment: ""
            },
            {
              description: "PRESENT",
              comment: ""
            },
            {
              description: "PREVIOUS",
              comment: ""
            },
            {
              description: "HOME ADDRESS",
              comment: ""
            },
            {
              description: "TEL. HOME",
              comment: ""
            },
            {
              description: "TEL. WORK",
              comment: ""
            }
          ],

          phase2: [
            {
              description:
                "HAVE YOU EVER UNDERGONE PSYCHIATRIC TREATMENT AND/OR PSYCHOLOGICAL THERAPY?",
              boolean: ""
            }
          ],

          phase3: [
            {
              description:
                "Invite 5 quotations, preferably between 3 and 7 days depending on the type and urgency of service/commodity required.  Attach proof of invitation.",
              boolean: "",
              comment: ""
            }
          ],
          phase4: [
            {
              description: "HAVE YOU EVER BEEN TREATED FOR ALCOHOL ABUSE?",
              boolean: ""
            },
            {
              description: "HAVE YOU EVER BEEN TREATED FOR DRUG ABUSE?",
              boolean: ""
            }
          ],

          phase5: [
            {
              description: "(i)",
              counsellor: "",
              contactNumber: "",
              natureOfProblem: ""
            },
            {
              description: "(ii)",
              counsellor: "",
              contactNumber: "",
              natureOfProblem: ""
            },
            {
              description: "(iii)",
              counsellor: "",
              contactNumber: "",
              natureOfProblem: ""
            }
          ],

          phase6: [
            {
              description: "(i)",
              boolean: "",
              comment: ""
            },
            {
              description: "(ii)",
              boolean: "",
              comment: ""
            },
            {
              description: "(iii)",
              boolean: "",
              comment: ""
            }
          ],
          phase7: [
            {
                place:"",
                          date:"",
                          natureOfcase:"",
                          finding:""

            }
          ],
          phase8: [
            {
              countryOfBirth: "",
              nationality: "",
              address: ""
            }
          ],
          phase9: [
            {
              relationship: "",
              presentSurname: "",
              previousSurname: "",
              firstNames: "",
              identityNumber: "",
              countryOfBirth: "",
              nationality: "",
              fullResidentialAddress: ""
            },
            {
              relationship: "",
              presentSurname: "",
              previousSurname: "",
              firstNames: "",
              identityNumber: "",
              countryOfBirth: "",
              nationality: "",
              fullResidentialAddress: ""
            }
          ],
          phase10: [
            {
              comment: ""
            }
          ],
          phase11: [
            {
              country: "",
              purposeOfVisit: "",
              dateFrom: "",
              dateTo: ""
            }
          ],
          phase12: [
            {
              seviceName: "",
              contactName: "",
              date1: new Date().toISOString().substr(0, 10),
            }
          ],
          phase13: [
            {
               place:"",
                          date:"",
                          byWhom:"",
                          finding:""
            }
          ],
          phase14: [
            {
              date:"",
                        nameOfService:"",
                        nameOfContact:""
            }
          ],
          phase15: [
            {
              description:
                "DO YOU HAVE A PERMANENT RESIDENCE PERMIT FOR THE RSA?",
              boolean: "",
              comment: ""
            }
          ],
          phase16: [
            {
              serviceNumber:"",
                          nameOfEmployer:"",
                          supervisorName:"",
                          supervisorTel:"",
                          address:""
            }
          ],
          phase17: [
            {
               title:"",
                          surname:"",
                          firstName:"",
                          address:"",
                          homeTel:"",
                          businessAddress:"",
                          busTel:"",
                          yearsKnown:"",
                          idNumber:""
            }
          ],
          phase18: [
            {
              country:"",
                          serviceNumber:"",
                          from:"",
                          to:"",
                          serviceName:""
            }
          ],
          phase19: [
            {
              level:"",
                          dateIssued:"",
                          Institution:""
            }
          ],
          phase20: [
            {
              description:
                "HAVE YOU EVER BEEN CONVICTED OR ARE THERE ANY PENDING CASES FOR A CRIMINAL/ DEPARTMENTAL OFFENCE(S)? ( ADMISSION OF GUILT OUTSIDE A COURT MUST ALSO BE SUBMITTED )",
              boolean: "",
              comment: ""
            }
          ],
          phase21: [
            {
              description: "IDENTITY No.",
              idNumber: "",
              boolean: ""
            }
          ],
          phase22: [
            {
              description: "CITIZENSHIP",
              comment: "",
              comment1: ""
            }
          ],
          phase23: [
            {
              levelOfClearance: "",
              date10: new Date().toISOString().substr(0, 10)
            }
          ],
          phase24: [
            {
              description: "PRESENT",
              surName: "",
              fisrtName: "",
              medianName: "",
              nameCalled: "",
              date2: new Date().toISOString().substr(0, 10)
            },
            {
              description: "PREVIOUS",
              surName: "",
              fisrtName: "",
              medianName: "",
              nameCalled: "",
              date3: new Date().toISOString().substr(0, 10)
            }
          ],
          phase25: [
            {
              day: "",
              month: "",
              year: "",
              country: "",
              place: "",
              phoneNumber: ""
            }
          ],
          phase26: [
            {
              description: "CURRENT ADDRESS (NOT POSTAL ADDRESS)",
              numberNameOfStreet: "",
              cityTown: "",
              province: "",
              country: "",
              telNumber: "",
              date4: new Date().toISOString().substr(0, 10)
            },
            {
              description: "PREVIOUS ADDRESS (NOT POSTAL ADDRESS)",
              numberNameOfStreet: "",
              cityTown: "",
              province: "",
              country: "",
              telNumber: "",
              date5: new Date().toISOString().substr(0, 10)
            }
          ],
          phase27: [
            {
              qualification: "",
              nameOfInstitution: "",
              cityAndCountry: "",
              from: "",
              to: ""
            },
            {
              qualification: "",
              nameOfInstitution: "",
              cityAndCountry: "",
              from: "",
              to: ""
            }
          ],
          phase28: [
            {
              date6: new Date().toISOString().substr(0, 10),
              surName: "",
              firstName: "",
              idNumber: ""
            }
          ],
          phase29: [
            {
              countryOfBirth: "",
              nationality: "",
              address: ""
            }
          ],

          phase30: [
            {
              certificateNumber: ""
            }
          ],
          phase31: [
            {
              passportNumber: "",
              counrtyIssued: "",
              date9: new Date().toISOString().substr(0, 10)
            }
          ],

          phase32: [
            {
              port: "",
              fromWhichCountry: "",
              permit: ""
            }
          ],

          phase33: [
            {
              date6: new Date().toISOString().substr(0, 10),
              surName: "",
              firstName: "",
              idNumber: ""
            }
          ],

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
      this.doc.body.phase27.push({});
    },
    removeRow(index) {
      this.doc.body.phase27.splice(index, 1);
    },
    addRow1() {
      this.doc.body.phase9.push({});
    },
    removeRow1(index) {
      this.doc.body.phase9.splice(index, 1);
    },
    addRow2() {
      this.doc.body.phase11.push({});
    },
    removeRow2(index) {
      this.doc.body.phase11.splice(index, 1);
    },
    addRow3() {
      this.doc.body.phase12.push({});
    },
    removeRow3(index) {
      this.doc.body.phase12.splice(index, 1);
    },
    addRow4() {
      this.doc.body.phase7.push({});
    },
    removeRow4(index) {
      this.doc.body.phase7.splice(index, 1);
    },
    addRow5() {
      this.doc.body.phase13.push({});
    },
    removeRow5(index) {
      this.doc.body.phase13.splice(index, 1);
    },
    addRow6() {
      this.doc.body.phase14.push({});
    },
    removeRow6(index) {
      this.doc.body.phase14.splice(index, 1);
    },
    addRow7() {
      this.doc.body.phase16.push({});
    },
    removeRow7(index) {
      this.doc.body.phase16.splice(index, 1);
    },
    addRow8() {
      this.doc.body.phase17.push({});
    },
    removeRow8(index) {
      this.doc.body.phase17.splice(index, 1);
    },
    addRow9() {
      this.doc.body.phase18.push({});
    },
    removeRow9(index) {
      this.doc.body.phase18.splice(index, 1);
    },
    addRow10() {
      this.doc.body.phase19.push({});
    },
    removeRow10(index) {
      this.doc.body.phase19.splice(index, 1);
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

.heading-bg {
  background-color: #dddddd;
  padding: 2%;
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
