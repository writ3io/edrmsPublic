<template>
  <div id="letter">
    

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
            <Toolbar :data="doc" />
        </v-flex>

    <v-flex column xs8>
<h1>LEAVE REGISTER WHERE-IN THE EMPLOYEE HAS LEAVE CREDIT FOR PREVIOUS AND CURRENT LEAVE CYCLES</h1>
<p>(To be completed each employee w.e.f.10.01.2020)</p>
<br>
<v-flex row >
   <v-text-field  solo placeholder="Name of Employee"></v-text-field>
    <v-text-field  solo placeholder="Persal Number" type="number"></v-text-field>
     <v-text-field  solo placeholder="Rank"></v-text-field>
      <v-text-field  solo placeholder="Station"></v-text-field>
</v-flex>
<br>
<table border="1" cellspacing="0" cellpadding="0" width="0">
    <tbody>
        <tr>
            <td width="150" rowspan="2" valign="top">
                <p align="center">
                    Start Date of Leave
                </p>
            </td>
            <td width="150" rowspan="2" valign="top">
                <p align="center">
                    End Date of Leave
                </p>
            </td>
            <td width="150" rowspan="2" valign="top">
                <p align="center">
                    No. of Working Days Taken
                </p>
            </td>
            <td width="150" colspan="2" valign="top">
                <p align="center">
                    Annual Leave
                    *22/26 days
                      credits as
                      per attached
                      annexure
                      (letter from
                      HR)

                </p>
            </td>
            <td width="150" colspan="2" valign="top">
                <p align="center">
                    Normal Sick Leave
                    2010 - 2012
                    Credits=36
                    working
                    Days over a
                    3 year sick
                    Leave cycle

                </p>
            </td>
            <td width="150" colspan="2" valign="top">
                <p align="center">
                    Family Responsibility Leave
                    credit= 5
                    working days
                    per leave cycle

                </p>
            </td>
            <td width="150" rowspan="2" valign="top">
                <p align="center">
                    Remarks
                </p>
            </td>
        </tr>
        <tr>
            <td width="62" valign="top">
                <p>
                    USED
                </p>
            </td>
            <td width="62" valign="top">
                <p>
                    LEFT
                </p>
            </td>
            <td width="62" valign="top">
                <p>
                    USED
                </p>
            </td>
            <td width="62" valign="top">
                <p>
                    LEFT
                </p>
            </td>
            <td width="62" valign="top">
                <p>
                    USED
                </p>
            </td>
            <td width="77" valign="top">
                <p>
                    LEFT
                </p>
            </td>
        </tr>
        <tr>
            <td width="123" valign="top">

               <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="start_date_wd" v-model="start_date_model_wd" :return-value.sync="date_wd_start" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.leave_register.start_date" label="Start Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.leave_register.start_date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="start_date_model_wd = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.start_date_wd.save(doc.body.leave_register.start_date)">OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

            </td>
            <td width="123" valign="top">

              
                  <v-col cols="12" sm="6" md="4">
                    <v-dialog ref="end_date_wd" v-model="end_date_model_wd" :return-value.sync="date_wd_end" persistent
                      width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.leave_register.end_date" label="End Date"
                          prepend-icon="event" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.leave_register.end_date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="end_date_model_wd = false">Cancel</v-btn>
                        <v-btn text color="primary"
                          @click="$refs.end_date_wd.save(doc.body.leave_register.end_date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

            </td>
            <td width="123" valign="top">
              <v-text-field v-model="doc.body.leave_register.number_of_working_days" solo type="number">
                  </v-text-field>
            </td>
            <td width="100" valign="top">

              <v-text-field min="0" max="26" v-model="doc.body.leave_register.annual_leave.used" solo type="number"></v-text-field>
    
            </td>
            <td width="100" valign="top">
              {{ annual_leave_left }}
            </td>
            <td width="100" valign="top">
              <v-text-field min="0" max="36" v-model="doc.body.leave_register.normal_sick_leave.used" solo type="number"></v-text-field>
            </td>
            <td width="100" valign="top">
                 {{ normal_sick_leave_left }}
            </td>
            <td width="100" valign="top">
              <v-text-field min="0" max="5" v-model="doc.body.leave_register.Family_responsibility.used"  solo type="number"></v-text-field>
            </td>
            <td width="100" valign="top">
               {{ Family_responsibility_left }}
            </td>
            <td width="123" valign="top">
              <v-textarea min="0" max="36" v-model="doc.body.leave_register.remarks" solo type="number"></v-textarea>
            </td>
        </tr>
        <tr>
            <td width="123" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
            <td width="123" colspan="2" valign="top">
            </td>
            <td width="123" colspan="2" valign="top">
            </td>
            <td width="139" colspan="2" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<br/>

   <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Signature of Employee</h2>
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
                <h3>Responsibility Manager :</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" single-line />
              </v-flex>
               <v-flex xs11>
                <h3>Signature of Officer in HR :</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" single-line />
              </v-flex>
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
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

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
      
      time_end: null,
      time_start: null,

    
      end_time: false,
      start_time: false,

      date_wd_start: new Date().toISOString().substr(0, 10),
      date_wd_end: new Date().toISOString().substr(0, 10),

        start_date_model_wd: false,  
        end_date_model_wd: false,

      doc: {
        ref: this.$route.params.ref,
        template: "LeaveRegister",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

         leave_register: {
              type_of_leave: "",
              start_date: "",
              end_date: "",
              number_of_working_days: 0,
              annual_leave: {
                used: 0,
                left: 26,
                credit: 26
              },
              normal_sick_leave: {
                used: 0,
                left: 36,
                credit: 36
              },
              Family_responsibility: {
                used: 0,
                left: 5,
                credit: 5
              },
              remarks: ""
            },
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
    },
          
    annual_leave_left(){
      
      let used = this.doc.body.leave_register.annual_leave.used
      let left = this.doc.body.leave_register.annual_leave.credit - used

      while(used > 0 ){
         return this.doc.body.leave_register.annual_leave.left = left
      }
     return left

    },
    normal_sick_leave_left(){
       let used = this.doc.body.leave_register.normal_sick_leave.used
      let left = this.doc.body.leave_register.normal_sick_leave.credit - used

      while(used > 0 ){
         return this.doc.body.leave_register.normal_sick_leave.left = left
      }
     return left
    },
    Family_responsibility_left(){
        let used = this.doc.body.leave_register.Family_responsibility.used
      let left = this.doc.body.leave_register.Family_responsibility.credit - used

      while(used > 0 ){
         return this.doc.body.leave_register.Family_responsibility.left = left
      }
     return left
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
    add_travelling_plan() {
       this.doc.body.travelling_plan.push({date: "", place: "",  purpose: ""
            , time:""})
  },

  delete_row(doc, index) {
        if(doc.length != 1 ){
          doc.splice(index, 1)
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
