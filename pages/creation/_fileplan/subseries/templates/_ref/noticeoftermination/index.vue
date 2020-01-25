<template>
  <div id="letter">
  
    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
            <Toolbar :data="doc" />
        </v-flex>
    <v-layout  column xs8>
     
<h1 align-center >LIMPOMPO DEPARTMENT OF EDUCATION
NOTICE OF TERMINATION FORM
</h1>
<br>
<table border="1" cellspacing="0" cellpadding="0" align="left">
    <tbody>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p align="center">
                    <strong>A. </strong>
                    <strong>Personal Information</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Surname and Initials
                </p>
            </td>
            <td colspan="2" width="208" valign="top">
              <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    District
                </p>
            </td>
            <td colspan="2" width="208" valign="top">
              <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Circuit
                </p>
            </td>
            <td colspan="2" width="208" valign="top">
              <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Tax Number
                </p>
            </td>
            <td colspan="2" width="208" valign="top">
              <v-text-field number solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Persal Number
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    ID Number
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Postal Address
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
                <p>
                    Code
                </p>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Residential Number
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
                <p>
                    Code
                </p>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Cell Number
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Tel Number
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p align="center">
                    <strong>B. </strong>
                    <strong>
                        REASON FOR TERMINATION (Select the appriopriate box)
                    </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Reason
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Last day of service
                </p>
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
            <td width="208" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<br>
<br>
  <table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="623" valign="top">
                <p>
                    Comments
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<br>s
    <!-- sign -->
            <v-flex >
              <h2>Signature of Applicant</h2>
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
                <h3>Name of Supervisor :</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Supervisor:" single-line />
              </v-flex>
            </v-flex>

        </v-layout>
 

     

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
      doc: {
        ref: this.$route.params.ref,
        template: "claimFormFuel",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

          travelling_plan: [{date: "", place: "",  purpose: ""
            , time:""},]
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
