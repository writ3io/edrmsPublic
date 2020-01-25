<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Application Form Temporary Incapacity Leave</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Particulars of Applicant
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Details on Current Occupation
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Details of education and training
      </v-tab>
<v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Details of education and training
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
           
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";

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
Vue.use(Vuetify);

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
      doc: {
        ref: this.$route.params.ref,
        template: "letter",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: []
        },
        questions: [
          {section: 'Particular of Applicant',
          details: [{surname: '', firstnames: '', dob:'', id_no: '', persal_no: '', gender: '', shift_worker:'',contract_employee:'',
          address_during_absence:'',contact_numbers: [],email_address:'', period_of_absence: [{start_date:'', end_date:''}]
          }]
          },
          {section: 'Details on Current Occupation',
          current_or_recent_job: [{job_title: '',department_currently_employed: '', commencement_date_of_employment_current_dep: [{date: '', number_of_mon_year: ''}], 
          commencement_date_of_employment_within_public_service: [{date: '', number_of_mon_year: ''},], how_long_have_you_been_in_your_current_job: '',have_you_held_any_in_public_service: false, 
          public_service:[{pos:'',date_from:'',date_to:''}]
          }]
          },
          {
            section:'Details of education and training', education: [{year: '',institution: '', qualification: ''},], jobs_eligible: [], are_the_jobs_available_in_your_current_department: '',
          }

        ],
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
