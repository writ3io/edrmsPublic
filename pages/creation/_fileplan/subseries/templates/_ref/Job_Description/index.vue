<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex column xs10>
<v-flex column xs10>
<p align="center">
    <strong>JOB DESCRIPTION</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    A. JOB INFORMATION SUMMARY
</p>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="151" valign="top">
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Name of jobholder:
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Job title:
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Core
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Post level and salary code
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Production Level
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Occupational class code
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Name of component
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Location
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Posts reports to
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    Date of appointment
                </p>
            </td>
            <td width="472" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<p>
    B. JOB PURPOSE
</p>
<p>
    C. KEY PERFORMANCE AREAS
</p>
<p>
    D. INHERENT REQUIREMENTS OF THE JOB:
</p>
<p>
    Skills and
</p>
<p>
    Competencies Skills required:
</p>
<p>
    E. KNOWLEDGE REQUIREMENTS
</p>
<p>
    F. APPOINTMENT REQUIREMENTS
</p>
<p>
    G. CAREER PATHING
</p>
<p>
    H. AMENDMENTS TO JOB DESCRIPTIONS
</p>
<p>
    I. PERFORMANCE AGREEMENT
</p>
<p>
    J. JOB DESCRIPTION AGREEMENT
</p>
</v-flex  >

   <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Insert Your Signature</h2>
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
                <h3>Who Approve:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" multiple />
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
      doc: {
        ref: this.$route.params.ref,
        template: "schemeBClaimForm1",
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
      this.doc.body.signatures = users;
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
