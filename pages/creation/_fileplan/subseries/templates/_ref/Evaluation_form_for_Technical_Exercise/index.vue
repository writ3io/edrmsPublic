<template>
  <div id="letter">
    

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2>
                <Toolbar :data="doc" />
        </v-flex>

        <v-flex column xs10>
<v-flex column xs10>
    
    <h1 align="center">
    <strong><u>TECHNICAL EXERCISE </u></strong>
    <strong><u>INDIVIDUAL PANEL EVALUATION FORM</u></strong>
   
</h1>

<br>

<p>
    Panel Member’s Name : ___________________________________________
</p>
<p>
    Name of the post : ___________________________________________
</p>
<p>
    Candidate’s Name : ___________________________________________
</p>
<p>
    Date of the Technical Exercise : _____________________________________
</p>

<p>
    <strong>PANEL MEMBERS ARE REQUIRED TO SCORE AS FOLLOWS:</strong>
</p>

<table border="1" cellspacing="0" cellpadding="0" >
    <tbody>
        <tr>
            <td width="239" valign="top">
                <p>
                    <strong>Descriptor</strong>
                </p>
            </td>
            <td width="326" valign="top">
                <p>
                    <strong>Indicator</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="239" valign="top">
                <ol start="1" type="1">
                    <li>
                        Not achieved
                    </li>
                </ol>
            </td>
            <td width="326" valign="top">
                <p>
                    Poor demonstration of competency
                </p>
            </td>
        </tr>
        <tr>
            <td width="239" valign="top">
                <ol start="2" type="1">
                    <li>
                        Partially achieved
                    </li>
                </ol>
            </td>
            <td width="326" valign="top">
                <p>
                    Marginal Demonstration of competency
                </p>
            </td>
        </tr>
        <tr>
            <td width="239" valign="top">
                <ol start="3" type="1">
                    <li>
                        Achieved
                    </li>
                </ol>
            </td>
            <td width="326" valign="top">
                <p>
                    Acceptable Demonstration of competency
                </p>
            </td>
        </tr>
        <tr>
            <td width="239" valign="top">
                <ol start="4" type="1">
                    <li>
                        Exceeded expectation
                    </li>
                </ol>
            </td>
            <td width="326" valign="top">
                <p>
                    Good demonstration of competency
                </p>
            </td>
        </tr>
        <tr>
            <td width="239" valign="top">
                <ol start="5" type="1">
                    <li>
                        Excellent
                    </li>
                </ol>
            </td>
            <td width="326" valign="top">
                <p>
                    Exceptionally well
                </p>
            </td>
        </tr>
    </tbody>
</table>
<br>
    <h2>
        Technical exercise will be based on the following categories
    </h2>

<br>
<table border="1" cellspacing="0" cellpadding="0" >
    <tbody>
        <tr>
            <td width="416" rowspan="2" valign="top">
                <p>
                    <strong>EVALUATION CRITERIA</strong>
                </p>
            </td>
            <td width="227" colspan="5">
                <p align="center">
                    <strong>SCORES</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="48">
                <p align="center">
                    1
                </p>
            </td>
            <td width="48">
                <p align="center">
                    2
                </p>
            </td>
            <td width="40">
                <p align="center">
                    3
                </p>
            </td>
            <td width="48">
                <p align="center">
                    4
                </p>
            </td>
            <td width="43">
                <p align="center">
                    5
                </p>
            </td>
        </tr>
        <tr>
            <td width="416" valign="top">
                <p>
                    Preparations
                </p>
            </td>
            <td width="48">
            </td>
            <td width="48">
            </td>
            <td width="40">
            </td>
            <td width="48">
            </td>
            <td width="43">
            </td>
        </tr>
        <tr>
            <td width="416" valign="top">
                <p>
                    Presentation skills
                </p>
            </td>
            <td width="48">
            </td>
            <td width="48">
            </td>
            <td width="40">
            </td>
            <td width="48">
            </td>
            <td width="43">
            </td>
        </tr>
        <tr>
            <td width="416" valign="top">
                <p>
                    Relevance to topic
                </p>
            </td>
            <td width="48">
            </td>
            <td width="48">
            </td>
            <td width="40">
            </td>
            <td width="48">
            </td>
            <td width="43">
            </td>
        </tr>
        <tr>
            <td width="416" valign="top">
                <p>
                    Knowledge of job content
                </p>
            </td>
            <td width="48">
            </td>
            <td width="48">
            </td>
            <td width="40">
            </td>
            <td width="48">
            </td>
            <td width="43">
            </td>
        </tr>
        <tr>
            <td width="416" valign="top">
                <p>
                    Time Management
                </p>
            </td>
            <td width="48">
            </td>
            <td width="48">
            </td>
            <td width="40">
            </td>
            <td width="48">
            </td>
            <td width="43">
            </td>
        </tr>
    </tbody>
</table>

<p>
    Score out of 25 X 2 = ………………….
</p>
<p>
    <strong>Comments of Panelist:…………………………………………………………………………………………</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>………………………………………………………………………………………………………</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>………………………………………………………………………………………………………</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>………………………………………………………………………………………………………</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>………………………………………………………………………………………………………</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>………………………………………………………………………………………………………</strong>
</p>


<p>
    <strong>Signature of a Panelist: ………………………………………..</strong>
</p>


</v-flex>

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
