<template>
  <div id="letter">
   

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
 <Toolbar :data="doc" />
        </v-flex>
        <v-flex column xs8>


<h2>
  Kilometres Travelled as at 01 April 2019 to 31 March 2020
</h2>
<br>
<v-layout row>
<v-text-field placeholder="Name of Employee" solo></v-text-field>
<v-text-field placeholder="ID Number:" solo></v-text-field>
<v-text-field placeholder=" Persal Number:" solo></v-text-field>
</v-layout>

<v-flex xs12 fluids>
<table border="1" cellspacing="0" cellpadding="0" >
    <tbody>
        <tr>
            <td width="300px" valign="top">
           
                    Month
               
            </td>
            <td  width="400px" valign="top">
                <p align="center">
                    <strong>Kilometres Travelled (Actual)</strong>
                    <br/>
                </p>
            </td>
            <td width="400px" valign="top">
                <p align="center">
                    <strong>Kilometres Travelled (Claimed)</strong>
                    <br/>
                </p>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    April
                </p>
            </td>
            <td  valign="top">
                <v-text-field  solo></v-text-field>
            </td>
            <td  valign="top">
<v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    May
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    June
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    July
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    August
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    September
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    October
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    November
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    December
                </p>
            </td>
            <td valign="bottom">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="bottom">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    January
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    February
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    March
                </p>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo number></v-text-field>
            </td>
        </tr>
        <tr>
            <td  valign="top">
                <p>
                    <strong>TOTAL KM </strong>
                </p>
            </td>
            <td  valign="top">
                <v-text-field solo></v-text-field>
            </td>
            <td  valign="top">
              <v-text-field solo></v-text-field>
            </td>
        </tr>
    </tbody>
</table>

</v-flex>

<p align="center">
    <strong></strong>
</p>
   <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Signature of Claimant :</h2>
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
        template: "summaryOfKillometersTravelled",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

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
