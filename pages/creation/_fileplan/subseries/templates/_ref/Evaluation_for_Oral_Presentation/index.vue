<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex column xs10>
<v-flex column xs10>
<h1 align="center">
    ASSESSMENT RATING FORM FOR SMS APPLICANT
</h1>
<p>
    NAME OF POST : …………………………………………………………………………..
</p>
<p>
    NAME OF CANDIDATE : …………………………………………………………………………..
</p>
<p>
    NAME OF PANELIST : ………………………………………………………………………….
</p>
<p>
    DATE OF INTERVIEW : ………………………………………………………………………….
</p>
<table border="1" cellspacing="0" cellpadding="0" width="100%">
    <tbody>
        <tr>
            <td width="8%" rowspan="2" valign="top">
                <p>
                    <strong>NO</strong>
                </p>
            </td>
            <td width="71%" rowspan="2" valign="top">
                <p>
                    <strong>EVALUATION CRITERIA</strong>
                </p>
            </td>
            <td width="20%" colspan="5">
                <p align="center">
                    <strong>SCORES</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="4%">
                <p align="center">
                    1
                </p>
            </td>
            <td width="4%">
                <p align="center">
                    2
                </p>
            </td>
            <td width="3%">
                <p align="center">
                    3
                </p>
            </td>
            <td width="4%">
                <p align="center">
                    4
                </p>
            </td>
            <td width="3%">
                <p align="center">
                    5
                </p>
            </td>
        </tr>
        <tr>
            <td width="8%" valign="top">
                <p>
                    1
                </p>
            </td>
            <td width="71%" valign="top">
                <p>
                    Why do you think you are the best candidate in relation to
                    the competencies as advertised
                </p>
            </td>
            <td width="4%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
        </tr>
        <tr>
            <td width="8%" valign="top">
                <p>
                    2
                </p>
            </td>
            <td width="71%" valign="top">
                <p>
                    What is your approach to management and development of
                    staff within your unit
                </p>
            </td>
            <td width="4%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
        </tr>
        <tr>
            <td width="8%" valign="top">
                <p>
                    3
                </p>
            </td>
            <td width="71%" valign="top">
                <p>
                    What is your understanding of strategic sourcing and
                    provide example of a commodity within the education sector
                    that you can apply strategic sourcing to
                </p>
            </td>
            <td width="4%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
        </tr>
        <tr>
            <td width="8%" valign="top">
                <p>
                    4
                </p>
            </td>
            <td width="71%" valign="top">
                <p>
                    Given the large volume of inventory that the department
                    holds, how would you manage the inventory in an effort to
                    reduce losses
                </p>
            </td>
            <td width="4%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
        </tr>
        <tr>
            <td width="8%" valign="top">
                <p>
                    5
                </p>
            </td>
            <td width="71%" valign="top">
                <p>
                    What is your understanding of supplier performance and how
                    will you manage it to ensure value for money
                </p>
            </td>
            <td width="4%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
            <td width="4%">
            </td>
            <td width="3%">
            </td>
        </tr>
    </tbody>
</table>
<br clear="all"/>
<p>
    Legend
</p>
<p>
    1 = not acceptable
</p>
<p>
    2 = satisfactory
</p>
<p>
    3 = good
</p>
<p>
    4 = very good
</p>
<p>
    5 = excellent
</p>
<p>
    Score out of 25 X 2 = ………………….
</p>
<p>
    Comments of panelist:…………………………………………………………………………………….
</p>
<p>
    ………………………………………………………………………………………………………………
</p>
<p>
    ………………………………………………………………………………………………………………
</p>
<p>
    …………………………………….
</p>
<p>
    <strong>SIGNATURE OF PANELIST</strong>
</p>
<p>
    <strong></strong>
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
