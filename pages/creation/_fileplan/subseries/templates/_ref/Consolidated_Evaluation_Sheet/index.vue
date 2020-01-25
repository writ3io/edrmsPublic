<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex column xs10>
<v-flex column xs10>

<h1 align-center>Consolidated Evaluation Sheet</h1>
<br>
<v-flex row >
    <v-text-field solo placeholder="Name of Post"></v-text-field>
    <v-text-field solo placeholder="Ref"></v-text-field>
</v-flex>

<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="200" valign="top">
                <p>
                    <strong>PANEL MEMBERS</strong>
                </p>
            </td>
            <td width="331" colspan="3" valign="top">
                <p>
                    <strong> NAMES OF CANDIDATES</strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
            </td>
            <td width="113" valign="top">
                <p>
                    <strong><sup>1ST </sup></strong>
                    <strong>CANDIDATE</strong>
                </p>
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong>2<sup>ND</sup> CANDIDATE</strong>
                </p>
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong>3<sup>RD</sup> CANDIDATE</strong>
                </p>
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong>4<sup>TH</sup> CANDIDATE </strong>
                </p>
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong>5<sup>TH</sup> CANDIDATE</strong>
                </p>
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong>6<sup>TH</sup> CANDIDATE</strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong>7<sup>TH</sup> CANDIDATE </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="250" valign="top">
                <p>
                    <strong>PANEL MEMBER 1</strong>
                </p>
            </td>
            <td width="113" valign="top">
              <v-text-field solo placeholder="1st candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
                <v-text-field solo placeholder="2nd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="3rd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="4th candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
               <v-text-field solo placeholder="5th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
                <v-text-field solo placeholder="6th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
               <v-text-field solo placeholder="7th candidate"></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="200" valign="top">
              <v-text-field  solo placeholder="Panel Member 1"></v-text-field>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="200" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    <strong>PANEL MEMBER 2</strong>
                </p>
            </td>
            <td width="113" valign="top">
              <v-text-field solo placeholder="1st candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
                <v-text-field solo placeholder="2nd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="3rd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="4th candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
               <v-text-field solo placeholder="5th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
                <v-text-field solo placeholder="6th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
               <v-text-field solo placeholder="7th candidate"></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <v-text-field  solo placeholder="Panel Member 2"></v-text-field>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    <strong>PANEL MEMBER 3</strong>
                </p>
            </td>
            <td width="113" valign="top">
              <v-text-field solo placeholder="1st candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
                <v-text-field solo placeholder="2nd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="3rd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="4th candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
               <v-text-field solo placeholder="5th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
                <v-text-field solo placeholder="6th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
               <v-text-field solo placeholder="7th candidate"></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <v-text-field  solo placeholder="Panel Member 3"></v-text-field>
            </td>
            <td width="113" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    <strong>PANEL MEMBER 4</strong>
                </p>
            </td>
            <td width="113" valign="top">
              <v-text-field solo placeholder="1st candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
                <v-text-field solo placeholder="2nd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="3rd candidate"></v-text-field>
            </td>
            <td width="104" valign="top">
                <v-text-field solo placeholder="4th candidate"></v-text-field>
            </td>
            <td width="113" valign="top">
               <v-text-field solo placeholder="5th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
                <v-text-field solo placeholder="6th candidate"></v-text-field>
            </td>
            <td width="123" valign="top">
               <v-text-field solo placeholder="7th candidate"></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <v-text-field  solo placeholder="Panel Member 4"></v-text-field>
            </td>
            <td width="113" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    <strong>TOTAL SCORE</strong>
                </p>
            </td>
            <td width="113" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    <strong>AVERAGE SCORE</strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="104" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="113" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
            <td width="123" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="151" valign="top">
                <p>
                    <strong>RANKING</strong>
                </p>
            </td>
            <td width="113" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="104" valign="top">
            </td>
            <td width="113" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
            <td width="123" valign="top">
            </td>
        </tr>
    </tbody>
</table>
<p>
    <strong></strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong></strong>
</p>

 <v-textarea solo placeholder="Recommendation By Panel">

 </v-textarea>
<br>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="42" valign="top">
                <p align="center">
                    <strong></strong>
                </p>
                <p align="center">
                    <strong>NO.</strong>
                </p>
            </td>
            <td width="329" valign="top">
                <p align="center">
                    <strong></strong>
                </p>
                <p>
                    <strong>PANEL MEMBERS</strong>
                </p>
            </td>
            <td width="336" valign="top">
                <p align="center">
                    <strong></strong>
                </p>
                <p align="center">
                    <strong>SIGNATURE</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    1.
                </p>
            </td>
            <td width="329" valign="top">
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    2.
                </p>
            </td>
            <td width="329" valign="top">
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    3.
                </p>
            </td>
            <td width="329" valign="top">
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    4.
                </p>
            </td>
            <td width="329" valign="top">
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    NO
                </p>
            </td>
            <td width="329" valign="top">
                <p>
                    <strong>UNION REPRESENTATIVES</strong>
                </p>
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    1.
                </p>
            </td>
            <td width="329" valign="top">
                <p>
                    <strong>NEHAWU</strong>
                </p>
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
        <tr>
            <td width="42" valign="top">
                <p>
                    2.
                </p>
            </td>
            <td width="329" valign="top">
                <p>
                    <strong>PSA</strong>
                </p>
            </td>
            <td width="336" valign="top">
            </td>
        </tr>
    </tbody>
</table>
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
