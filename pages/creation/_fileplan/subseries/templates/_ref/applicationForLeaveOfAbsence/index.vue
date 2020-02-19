<template>
  <div id="letter">


    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
          <Toolbar :data="doc" />
        </v-flex>
        <v-flex column xs8>

          <h2>
            Application for Absence of Leave
          </h2>
          <br>
          <table border="1" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="250" valign="top">

                  <strong>Surname</strong>
                </td>
                <td width="250" valign="top">
                  <v-text-field v-model="doc.body.personal_information.surname" solo></v-text-field>
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Initials</strong>
                  </p>
                </td>
                <td width="250" valign="top">
                  <v-text-field v-model="doc.body.personal_information.initials" solo></v-text-field>
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Persal Number</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  <v-text-field type="number" v-model="doc.body.personal_information.persal_number" solo></v-text-field>
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Shift Worker</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  <v-switch v-model="doc.body.personal_information.shift_worker"></v-switch>
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Address during the period</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  <v-text-field v-model="doc.body.personal_information.address_during_leave_period" solo placeholder="Enter Addres"></v-text-field>
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Tel No:</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  <v-text-field  v-model="doc.body.personal_information.tel_no" solo number></v-text-field>
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Casual Employee</strong>
                  </p>
                </td>
                <td colspan="3" width="125" valign="top">
                  <v-switch  v-model="doc.body.personal_information.casual_worker"></v-switch>
                </td>
              </tr>
              <tr>
                <td width="172" valign="top">
                  <p>
                    <strong>Department</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  <v-text-field  v-model="doc.body.personal_information.department" solo number></v-text-field>
                </td>
                <td width="125" valign="top">
                  <p>
                    <strong>Component</strong>
                  </p>
                </td>
                <td width="125" valign="top">
                  <v-text-field  v-model="doc.body.personal_information.component" solo number></v-text-field>
                </td>

              </tr>
              <tr>
                <td width="172" valign="top">
                </td>
                <td width="125" valign="top">
                </td>
                <td width="125" valign="top">
                </td>
                <td width="125" valign="top">
                </td>

              </tr>
            </tbody>
          </table>
          <br />
          <h2>
            SECTION A: For Periods covering full day
          </h2>
          <br>
          <table border="1" cellspacing="0" cellpadding="0">
            <tbody>

              <tr>
                <td width="211" valign="top">
                  <p>
                    Type of Leave Taken as Working Days
                  </p>
                </td>
                <td width="125" valign="top">
                  <p>
                    Start Date
                  </p>
                </td>
                <td width="125" valign="top">
                  <p>
                    End Date
                  </p>
                </td>
                <td width="171" valign="top">
                  <p>
                    Number of Working days
                  </p>
                </td>

              </tr>
              <tr>
                <td width="300" valign="top">
                  <v-select :items="type_of_leave" @input="selected_leave"
                    label="Type of leave taken Calender Days/Months" v-model="doc.body.for_periods_covering_full_day_wd.type_of_leave"></v-select>
                </td>
                <td width="200" valign="top">

                  <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="start_date_wd" v-model="start_date_model_wd" :return-value.sync="date_wd_start" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.for_periods_covering_full_day_wd.start_date" label="Start Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.for_periods_covering_full_day_wd.start_date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="start_date_model_wd = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.start_date_wd.save(doc.body.for_periods_covering_full_day_wd.start_date)">OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                </td>
                <td width="200" valign="top">

                  <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="end_date_wd" v-model="end_date_model_wd" :return-value.sync="date_wd_end" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.for_periods_covering_full_day_wd.end_date" label="End Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.for_periods_covering_full_day_wd.end_date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="end_date_model_wd = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.end_date_wd.save(doc.body.for_periods_covering_full_day_wd.end_date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                </td>
                <td width="171" valign="top">
                  <v-text-field solo type="number" v-model="doc.body.for_periods_covering_full_day_wd.number_of_working_days">
                  </v-text-field>
                </td>

              </tr>
              <tr v-if="evidence_wd.message">
                <td color="red" colspan="4" width="211" valign="top">
                  {{ evidence_wd.message}}
                </td>

              </tr>
              <tr>
                <td width="211" valign="top">
                  <p>
                    Type of Leave Taken as Calendar Days/Months
                  </p>
                </td>
                <td width="125" valign="top">
                  <p>
                    Start Date
                  </p>
                </td>
                <td width="125" valign="top">
                  <p>
                    End Date
                  </p>
                </td>
                <td width="171" valign="top">
                  <p>
                    Number of Calendar days
                  </p>
                </td>

              </tr>
              <tr>
                <td width="211" valign="top">

                  <v-select :items="type_of_leave_cal" @input="selected_leave"
                    label="Type of leave taken Calender Days/Months" v-model="doc.body.for_periods_covering_full_day_dm.type_of_leave"></v-select>

                </td>
                <td width="125" valign="top">


                  <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="start_date_dm" v-model="start_date_model_dm" :return-value.sync="date" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.for_periods_covering_full_day_dm.start_date" label="Start Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>

                      </template>
                      <v-date-picker v-model="doc.body.for_periods_covering_full_day_dm.start_date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="start_date_model_dm = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.start_date_dm.save(doc.body.for_periods_covering_full_day_dm.start_date)">OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                </td>
                <td width="125" valign="top">

                  <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="end_date_dm" v-model="end_date_model_dm" :return-value.sync="date" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.for_periods_covering_full_day_dm.end_date" label="End Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>
                      </template>

                      <v-date-picker v-model="doc.body.for_periods_covering_full_day_dm.end_date" scrollable>
                        <v-spacer></v-spacer>

                        <v-btn text color="primary" @click="end_date_model_dm = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.end_date_dm.save(doc.body.for_periods_covering_full_day_dm.end_date)">OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>

                  </v-col>
                </td>
                <td width="171" valign="top">
                  <v-text-field type="number" solo v-model="doc.body.for_periods_covering_full_day_dm.number_of_working_days">
                  </v-text-field>
                </td>

              </tr>
              <tr>
                <td width="211" valign="top">
                </td>
                <td width="125" valign="top">
                </td>
                <td width="125" valign="top">
                </td>
                <td width="171" valign="top">
                  Number of Calendar Months
                </td>

              </tr>
              <tr>
                <td width="211" valign="top">
                </td>
                <td width="125" valign="top">
                </td>
                <td width="125" valign="top">
                </td>
                <td width="171" valign="top">
                  <v-text-field type="number" solo v-model="doc.body.for_periods_covering_full_day_dm.number_of_calendar_months">
                  </v-text-field>
                </td>
              </tr>
              <tr v-if="evidence_dm.message">
                <td color="red" colspan="4" width="211" valign="top">
                  {{ evidence_dm.message}}
                </td>

              </tr>
              
              
            </tbody>
          </table>
          <br>

          <h2>
              SECTION B: For Periods covering parts of day or
              fractions
          </h2>

          <br>
          <table border="1" cellspacing="0" cellpadding="0">
            <tbody>

              <tr>
                <td width="250" valign="top">
                  <p>
                    Type of Leave Taken as Working Days
                  </p>
                </td>
                <td width="150" valign="top">
                  <p>
                    Date
                  </p>
                </td>
                <td width="150" valign="top">
                  <p>
                    Start Time
                  </p>
                </td>
                <td width="140" valign="top">
                  <p>
                    End Time
                  </p>
                </td>
                <td width="190" colspan="2" valign="top">
                  <p>
                    Number of Hours/Minutes
                  </p>
                </td>
              </tr>
              <tr>
                <td width="159" valign="top">
                  <v-select :items="type_of_leave" @input="selected_leave"
                    label="Type of leave taken Calender Days/Months" v-model="doc.body.for_periods_covering_full_day_pd.type_of_leave"></v-select>
                </td>

                <td width="101" valign="top">

                  <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="start_date_pd" v-model="start_date_model" :return-value.sync="date" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.for_periods_covering_full_day_pd.start_date" label="Start Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>

                      </template>
                      <v-date-picker v-model="doc.body.for_periods_covering_full_day_pd.start_date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="start_date_model = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.start_date_pd.save(doc.body.for_periods_covering_full_day_pd.start_date)">OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                </td>

                <td width="101" valign="top">
                  
                   <v-col cols="11" sm="5">
                    <v-menu ref="start_time" v-model="start_time" :close-on-content-click="false" :nudge-right="40"
                      :return-value.sync="time_start" transition="scale-transition" offset-y max-width="290px"
                      min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="time_start" label="Start Time" prepend-icon="access_time" readonly
                          v-on="on"></v-text-field>
                      </template>
                      <v-time-picker v-if="start_time" v-model="doc.body.for_periods_covering_full_day_pd.start_time" full-width @click:minute="$refs.start_time.save(time_start)">
                      </v-time-picker>
                    </v-menu>
                  </v-col>

                </td>
                <td width="81" valign="top">

                  
                    <v-menu ref="end_time" v-model="end_time" :close-on-content-click="false" :nudge-right="40"
                      :return-value.sync="time_end" transition="scale-transition" offset-y max-width="290px"
                      min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="time_end" label="End Time" prepend-icon="access_time" readonly
                          v-on="on"></v-text-field>
                      </template>
                      <v-time-picker v-if="end_time" v-model="doc.body.for_periods_covering_full_day_pd.end_time" full-width @click:minute="$refs.end_time.save(time_end)">
                      </v-time-picker>
                    </v-menu>
               

                </td>
                <td width="94" valign="top">
                  <v-text-field v-model="doc.body.for_periods_covering_full_day_pd.number_of_hours" solo placeholder="Hours" type="number"></v-text-field>
                </td>
                <td width="95" valign="top">
                  <v-text-field v-model="doc.body.for_periods_covering_full_day_pd.number_of_minutes" solo placeholder="Minutes" type="number"></v-text-field>
                </td>
              </tr>
              <tr>
                <td width="159" valign="top">
                </td>
                <td width="101" valign="top">
                </td>
                <td width="101" valign="top">
                </td>
                <td width="81" valign="top">
                </td>
                <td width="94" valign="top">
                </td>
                <td width="95" valign="top">
                </td>
              </tr>
            </tbody>
          </table>
          <br>

            <h2>
                      SUMMARY OF INFORMATION FROM PAGE 1 (To be completed by
                      employee)
          </h2>

          <br>
          <table border="1" cellspacing="0" cellpadding="0">
            <tbody>
            
              <tr>
                <td width="150" valign="top">
                  <p>
                    Surname
                  </p>
                </td>
                <td width="140" valign="top">
                  {{ doc.body.personal_information.surname }}
                </td>
                <td width="160" valign="top">
                  <p>
                    Initials
                  </p>
                </td>
                <td width="150" valign="top">
                  {{ doc.body.personal_information.initials }}
                </td>
                <td width="150" colspan="2" valign="top">
                  <p>
                    PERSAL Number
                  </p>
                </td>
                <td width="102" colspan="2" valign="top">
                  {{ doc.body.personal_information.persal_number }}
                </td>
              </tr>
              <tr>
                <td width="243" colspan="2" valign="top">
                  <p>
                    Type of Leave Taken as Working Days
                  </p>
                </td>
                <td width="78" valign="top">
                  <p>
                    Start Date
                  </p>
                </td>
                <td width="88" valign="top">
                  <p>
                    End Date
                  </p>
                </td>
                <td width="222" colspan="4" valign="top">
                  <p>
                    Number of Working Days
                  </p>
                </td>
              </tr>
              <tr>
                <td width="243" colspan="2" valign="top">
                  {{ doc.body.for_periods_covering_full_day_wd.type_of_leave }}
                </td>
                <td width="78" valign="top">
                  {{ doc.body.for_periods_covering_full_day_wd.start_date }}
                </td>
                <td width="88" valign="top">
                  {{ doc.body.for_periods_covering_full_day_wd.end_date }}
                </td>
                <td width="222" colspan="4" valign="top">
                  {{ doc.body.for_periods_covering_full_day_wd.number_of_working_days }}
                </td>
              </tr>
              <tr>
                <td width="243" colspan="2" valign="top">
                  <p>
                    Type of Leave Taken as Working Days
                  </p>
                </td>
                <td width="78" valign="top">
                  <p>
                    Date
                  </p>
                </td>
                <td width="88" valign="top">
                  <p>
                    Start Time
                  </p>
                </td>
                <td width="111" valign="top">
                  <p>
                    End Time
                  </p>
                </td>
                <td width="111" colspan="3" valign="top">
                  <p>
                    Number of Hours/Minutes
                  </p>
                </td>
              </tr>
              <tr>
                <td width="243" colspan="2" valign="top">

                </td>
                <td width="78" valign="top">
                </td>
                <td width="88" valign="top">
                </td>
                <td width="111" valign="top">
                </td>
                <td width="55" colspan="2" valign="top">
                </td>
                <td width="55" valign="top">
                </td>
              </tr>
              <tr>
                <td width="103" valign="top">
                </td>
                <td width="140" valign="top">
                </td>
                <td width="78" valign="top">
                </td>
                <td width="88" valign="top">
                </td>
                <td width="222" colspan="4" valign="top">
                </td>
              </tr>
            </tbody>
          </table>

<br>

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

          <!-- sign -->
          <v-flex xs12 class="mt-5">
            <h2>Signature of Employee</h2>
            <v-flex xs12>
              <p class="text-xs-left">Sign Below</p>
              <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                :options="{ onEnd }" />
              <v-btn flat color="warning" @click="clearAuthorSignature">
                <v-icon left>undo</v-icon>
                <span>Clear</span>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- sign -->

    
<!-- Supervisor Recommendation -->

          <v-flex  xs12>
              <h3>Supervisor Recommendation:</h3>
              <v-btn color="white" :loading="loading" round @click="addSignDialog = true">
                <v-icon small color="warning" left>add</v-icon>Add Signatory
              </v-btn>
              <v-btn color="warning" :loading="loading" round @click="clearSignList">
                <v-icon small color="white" left>delete</v-icon>Clear List
              </v-btn>
            </v-flex>
<!-- Supervisor Recommendation -->   

<!-- Head of Department Recommendation -->

 <v-flex  xs12>
              <h3>Head of Department Recommendation:</h3>
              <v-btn color="white" :loading="loading" round @click="addSignDialog = true">
                <v-icon small color="warning" left>add</v-icon>Add Signatory
              </v-btn>
              <v-btn color="warning" :loading="loading" round @click="clearSignList">
                <v-icon small color="white" left>delete</v-icon>Clear List
              </v-btn>
  </v-flex>

<!-- Head of Department Recommendation -->


            <v-flex v-for="(sign, index) in doc.body.signatures" :key="index" xs12>
              <v-card-text class="black--text ma-0 font-weight-bold text-sm-left">
                <h1>{{sign.action.text}}</h1>
                <hr />
                <h2>{{sign.SurName}}</h2>
                <h4>
                  {{sign.Designation}} |
                  <span class="grey--text">{{sign.Department}}</span>
                </h4>
              </v-card-text>
            </v-flex>

        </v-flex>


      </v-layout>
    </v-container>
  </div>
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
        series: {},
        saveDialog: false,
        attachments: [],
        isFormValid: true,
        status: "",
        iSign: false,
        signatory: {},
        addSignDialog: false,
        type_of_leave: [
          'Annual Leave', 'Normal Sick Leave', 'Temporary Incapacity Leave', 'Adoptation Leave',
          'Leave for Occupational Injuries and Diseases', 'Familiy Responsibility Leave',
          'Pre-natal Leave', 'Special Leave', 'Leave for Office Bearers',
          'Leave for Shop Steward', 'Leave for Union Office Bearers', 'Leave for Union Shop Stewards'

        ],
        type_of_leave_cal: [
          'Unpaid Leave', 'Maternity Leave'
        ],
        menu2: false,
        time_end: null,
        time_start: null,

    
        end_time: false,
        start_time: false,

        date_wd_start: new Date().toISOString().substr(0, 10),
        date_wd_end: new Date().toISOString().substr(0, 10),

        date_dm_start: new Date().toISOString().substr(0, 10),
        date_dm_end: new Date().toISOString().substr(0, 10),

        date_pd_start: new Date().toISOString().substr(0, 10),
        date_pd_end: new Date().toISOString().substr(0, 10),



        start_date_model_wd: false,  
        end_date_model_wd: false,

        evidence_wd: {
          message: "",
          leave_type: ""
        },
        evidence_dm: {
          message: "",
          leave_type: ""
        },
        evidence_pd: {
          message: "",
          leave_type: ""
        },
        doc: {
          ref: this.$route.params.ref,
          template: "applicationForLeaveOfAbsence",
          author: store.state.user,
          body: {
            address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
            attachments: [],
            authorSignature: "",
            signatures: [],
            recipients: [],

            personal_information: { 
              surname: "", 
              initials: "" , 
              persal_number: "", 
              shift_worker: null, 
              casual_employee: null, 
              department: "",
              component: "", 
              tel_no: "", 
              address_during_leave_period: ""
            },

            for_periods_covering_full_day_wd: {
              type_of_leave: "",
              start_date: "",
              end_date: "",
              number_of_working_days: 0
            },
            for_periods_covering_full_day_dm: {
              type_of_leave: "",
              start_date: "",
              end_date: "",
              number_of_working_days: 0,
              number_of_calendar_months: 0
            },
            for_periods_covering_full_day_pd: {
              type_of_leave: "",
              start_time: "",
              end_time: "",
              number_of_working_days: 0,
              number_of_hours: 0,
              number_of_minutes: 0
            },
          }
        },
        actions: [
        { text: "For Approval", value: "approve", signLevel: 1 },
        { text: "For Recommendation", value: "recommend", signLevel: 0 },
      ],
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
        this.doc.body.signatures.push(users);
      },
      onEnd() {
        this.setAuthorSignature();
      },
  
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
      selected_leave(leave) {
        if (leave == 'Familiy Responsibility Leave' || leave == 'Pre-natal Leave' ||
          leave == 'Leave for Union Shop Stewards' ||
          leave == 'Leave for Union Office Bearers') {
          this.evidence_wd.message = "Please Provide evidence_wd for the selected leave type: " + leave
          this.evidence_wd.leave_type = leave
          this.doc.body.for_periods_covering_full_day_wd.leave_type = leave
          console.log("Please Provide evidence_wd for the selected leave type")
          return
        }
        if (leave == 'Maternity Leave') {
          this.evidence_dm.message = "Please Provide medical Attachment for the selected leave type: " + leave
          this.evidence_dm.leave_type = leave
          this.doc.body.for_periods_covering_full_day_dm.leave_type = leave
          console.log("Please attach medical report")
          return
        }
        if (leave == 'Unpaid Leave') {
          this.evidence_dm.message = "Please provide motivation : " + leave
          this.evidence_dm.leave_type = leave
          this.doc.body.for_periods_covering_full_day_dm.leave_type = leave
          console.log("Please provide motivation")
          return
        }
        return this.evidence_wd.message = null

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

  .signature-pad {
    max-width: 480px;
    background-color: #fff;
    border: 1px dotted black;
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