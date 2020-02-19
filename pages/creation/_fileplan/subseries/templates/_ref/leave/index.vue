<template>
  <div id="circular">
    

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-around>

        <v-flex xs2>
            <Toolbar :data="doc" />
        </v-flex>
        <v-flex xs8>
          <p class="text-capitalize headline font-weight-bold" display-4>Application for leave of absence</p>
          <v-layout row wrap>

            <v-flex xs6>

              <v-col cols="12" sm="6" md="3">
                <v-text-field v-model="surname" label="Surname"></v-text-field>
                <v-text-field v-model="personal_number" label="Personal Number"></v-text-field>
                <v-textarea v-model="address_for_leave" outlined name="input-7-4" label="Address during the leave period" value=""></v-textarea>
                <v-text-field v-model="tel_number" label="Tel Number"></v-text-field>
              </v-col>

            </v-flex>

            <v-flex xs6>

              <v-col cols="12" sm="6" md="3">
                <v-text-field label="Initials"></v-text-field>
              </v-col>
              <v-switch v-model="shift_worker" label="Shift Worker"></v-switch>
              <v-switch v-model="casual_employee" label="Casual Employee"></v-switch>
              <v-text-field label="Department"></v-text-field>
              <v-text-field label="Component"></v-text-field>
            </v-flex>


          </v-layout>
          <v-divider insert></v-divider>

          <p class="text-capitalize subtitle-2 font-weight-bold" display-4>Section A: For periods covering full day</p>

          <v-layout row wrap>
            <v-flex xs6>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="type_of_leave" label="Type of leave taken as Working days"></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="type_of_leave_cal" label="Type of leave taken Calender Days/Months"></v-select>
              </v-col>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs6>
              <v-layout>

                <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="start_date" label="Start Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="start_date" @input="menu = false"></v-date-picker>
                </v-menu>


                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="end_date" label="End Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="end_date" @input="menu2 = false"></v-date-picker>

                </v-menu>
                <v-text-field label="Number of Working Days"></v-text-field>
              </v-layout>

              <v-layout>

                <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="start_date2" label="Start Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="start_date" @input="menu = false"></v-date-picker>
                </v-menu>


                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="end_date2" label="End Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="end_date" @input="menu4 = false"></v-date-picker>
                </v-menu>
                <v-text-field label="Number of Calender Days"></v-text-field>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-divider insert></v-divider>

          <p class="text-capitalize subtitle-2 font-weight-bold" display-4>Section B: For periods covering parts of a
            day or fractions</p>

          <v-layout row wrap>
            <v-flex xs6>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="type_of_leave" label="Type of leave taken as Working days"></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="type_of_leave_cal" label="Type of leave taken Calender Days/Months"></v-select>
              </v-col>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs6>
              <v-layout>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="date3" label="Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date2" @input="menu = false"></v-date-picker>
                </v-menu>

                <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="start_date" label="Start Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="start_date" @input="menu = false"></v-date-picker>
                </v-menu>


                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="end_date" label="End Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="end_date" @input="menu2 = false"></v-date-picker>

                </v-menu>
                <v-text-field label="Number of Working Days"></v-text-field>

                <v-col cols="8">
                  <v-text-field label="Hours /Minutes" value="00:00:00" type="time" suffix="h.m"></v-text-field>
                </v-col>
              </v-layout>

              <v-layout>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="date2" label="Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
                </v-menu>

                <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="start_date2" label="Start Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="start_date2" @input="menu3 = false"></v-date-picker>
                </v-menu>


                <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="end_date2" label="End Date" prepend-icon="event" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="end_date2" @input="menu4 = false"></v-date-picker>
                </v-menu>

                <v-col cols="8">
                  <v-text-field label="Hours /Minutes" value="00:00:00" type="time" suffix="h.m"></v-text-field>
                </v-col>

              </v-layout>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>


          
        </v-flex>

        <p class="text-justify">
          I hereby certify that I have acquainted myself of my available leave credits and with the rules governing the
          leave I have applied for.
          further, I am certifying that the information provided is correct. Any falsification of information in this
          regard may
          form ground for disciplinary action. Furthermore, I fully understand that if I do not have sufficient leave
          credits from my previous or current leave cycle to
          cover for my application, my capped leave as at 30 june 2020 will be automatically utilised.
        </p>
      </v-layout>
      <v-layout>
        <v-flex xs6>
          <h2>Employee Signature</h2>
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


        <v-flex xs6>
          <h2>Date</h2>
          <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
            offset-y min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field v-model="date2" label="Date" prepend-icon="event" readonly v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>

        
      </v-layout>

      <v-divider></v-divider>
      <p class="text-capitalize subtitle-2 font-weight-bold" display-4>SUMMARY OF INFORMATION FROM PAGE 1 (To be
        completed by employee)</p>
      <v-layout>

        <v-flex xs6>
          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Surname"></v-text-field>
            <v-text-field label="Initials"></v-text-field>
            <v-text-field label="Tel Number"></v-text-field>
          </v-col>






          <v-layout>
            <v-flex xs6>
              <h2>Employee Signature</h2>
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
            <v-flex xs6>
              <h2>Date</h2>
              <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date2" label="Date" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>

        </v-flex>

        <v-flex xs6>
          <v-layout>
            <v-flex xs3>
              <v-text-field label="Type of leave"></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-menu v-model="menu6" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date6" label="Start Date" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="date2" @input="menu6 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs3>
              <v-menu v-model="menu7" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date7" label="End Date" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="date2" @input="menu7 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs3>
              <v-text-field label="Number of Days "></v-text-field>
            </v-flex>

          </v-layout>
          <v-layout>
            <v-flex xs3>
              <v-text-field label="Type of leave"></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-menu v-model="menu9" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date9" label="Date" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="date9" @input="menu9 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs3>

              <v-menu v-model="menu8" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date8" label="Start Date" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="date8" @input="menu8 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs3>
              <v-menu v-model="menu7" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date8" label="End Date" prepend-icon="event" readonly v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="date8" @input="menu8 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs3>
              <v-text-field label="Number of Days "></v-text-field>
            </v-flex>

          </v-layout>

        </v-flex>

      </v-layout>
      <v-divider></v-divider>
      <v-layout>
        <p class="text-capitalize subtitle-2 font-weight-bold" display-4>RECOMMENDATION BY SUPERVISOR/MANAGER </p>
        <v-layout>
          <v-flex xs12>
            <v-radio-group v-model="row" row>
              <v-radio label="Recommended" value="recommended"></v-radio>
              <v-radio label="Not Recommended" value="not_recommended"></v-radio>
              <v-radio label="Rescheduled" value="rescheduled"></v-radio>
            </v-radio-group>
          </v-flex>


        </v-layout>

      </v-layout>
      <v-flex xs12>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-7-4"
            label="Remarks (If not recommended please state the reason and the dates in the case of rescheduling)"
            value=""></v-textarea>
        </v-col>
      </v-flex>

      <v-flex xs12>

        <v-layout>
          <v-flex xs6>
            <h2>Managers's/Supervisor Signature</h2>
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
          <v-flex xs6>
            <h2>Date</h2>
            <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
              offset-y min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="date2" label="Date" prepend-icon="event" readonly v-on="on">
                </v-text-field>
              </template>
              <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-divider></v-divider>
      <v-layout>
        <p class="text-capitalize subtitle-2 font-weight-bold" display-4>Approval by Head of Department </p>
        <v-layout>
          <v-flex xs12>
            <v-radio-group v-model="row" row>
              <v-radio label="Approved wtih Full Pay" value="approved_with_full_pay"></v-radio>
              <v-radio label="Approved wtihout Full Pay" value="approved_without_pay"></v-radio>
              <v-radio label="Not Approved" value="not_approved"></v-radio>
            </v-radio-group>
          </v-flex>


        </v-layout>

      </v-layout>
      <v-flex xs12>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-7-4"
            label="Remarks (If approved with a change in condition of payment or not approved, please provide a motivation)"
            value=""></v-textarea>
        </v-col>
      </v-flex>
      <v-flex xs6>
        <h2>Signature of HOD or Designee</h2>
        <v-flex xs12>
          <p class="text-xs-left">Sign Below</p>
          <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
            :options="{ onEnd }" />
          <v-btn flat color="warning" @click="clearAuthorSignature">
            <v-icon left>undo</v-icon>
            <span>Clear</span>
          </v-btn>
        </v-flex>
        <v-flex xs12>
          <h2>Date</h2>
          <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
            offset-y min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field v-model="date2" label="Date" prepend-icon="event" readonly v-on="on">
              </v-text-field>
            </template>
            <v-date-picker v-model="date2" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-flex>
      <v-divider></v-divider>
      <v-layout>

        <v-flex xs3>

            <v-text-field
            label="Captured By"
          ></v-text-field>

        </v-flex>
         <v-flex xs3>

            <v-text-field
            label="Captured on"
          ></v-text-field>

        </v-flex>

        <v-flex xs6>

          <p class="text-xs-left">Sign Below</p>
          <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
            :options="{ onEnd }" />
          <v-btn flat color="warning" @click="clearAuthorSignature">
            <v-icon left>undo</v-icon>
            <span>Clear</span>
          </v-btn>
        </v-flex>

      </v-layout>
 <v-layout>

        <v-flex xs3>

            <v-text-field
            label="Checked By "
          ></v-text-field>

        </v-flex>
         <v-flex xs3>

            <v-text-field
            label="Checked By "
          ></v-text-field>

        </v-flex>

        <v-flex xs6>
 <p class="text-xs-left">Sign Below</p>
          <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
            :options="{ onEnd: setAnotherSignature }" />
          <v-btn flat color="warning" @click="clearAuthorSignature">
            <v-icon left>undo</v-icon>
            <span>Clear</span>
          </v-btn>

        </v-flex>

      </v-layout>

    </v-container>
  </div>
</template>


<script>
  import Vue from "vue";
  import Vuetify from 'vuetify';
  import Toolbar from "~/components/FormToolbar";
  import SelectUsers from "~/components/SelectUsers";
  import Editor from "@tinymce/tinymce-vue";
  import store from "~/store/store";
  import record from "~/services/docLog";

  import {
    signatureHelpers,
  } from "~/services/helpers";
  import VueSignaturePad from "vue-signature-pad";
  import {
    createDoc
  } from "~/services/DocsService";


  Vue.use(VueSignaturePad);
  Vue.use(Editor);
  Vue.use(Vuetify);

  export default {
    components: {
      editor: Editor,
      Toolbar,
      SelectUsers
    },
    data() {
      return {
        type_of_leave: [
          'Annual Leave', 'Normal Sick Leave', 'Temporary Incapacity Leave', 'Adoptation Leave',
          'Leave for Occupational Injuries and Diseases', 'Familiy Responsibility Leave',
          'Pre-natal Leave (Provide Evidence)', 'Special Leave --??', 'Leave for Office Bearers ( Provide Evidence)',
          'Leave for Shop Steward ( Provide Evidence) --??',
        ],
        type_of_leave_cal: [
          'Unpaid Leave (Provide Motivation)', 'Maternity Leave (Attach Medical Certificate'

        ],
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        
        date2: new Date().toISOString().substr(0, 10),
        date3: new Date().toISOString().substr(0, 10),
        menu2: false,
        menu: false,
        start_date2: new Date().toISOString().substr(0, 10),
        end_date2: new Date().toISOString().substr(0, 10),
        menu3: false,
        menu4: false,
        picker: null,

        series: {},
        saveDialog: false,
        attachments: [],
        isFormValid: true,
        status: "",
        iSign: false,
        doc: {
          ref: this.$route.params.ref,
          template: "letter",
          author: store.state.user,
          body: {
            address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
            attachments: [],
            authorSignature: "",
            signatures: [],
            recipients: []
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
      setAnotherSigner() {
        this.setSignature('signature2', 'signer')
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

</style>
