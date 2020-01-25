<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex column xs10>


<h3>INSTITUTIONS VISITED</h3>

<br>
<table border="1" cellspacing="0" cellpadding="0" >
    <tbody>
        <tr>
            <td width="52" valign="top">
                <p>
                    <strong>DATE</strong>
                </p>
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    <strong>INSTITUTION NO.1</strong>
                </p>
            </td>
            <td width="133" valign="top">
                <p>
                    <strong>REASONS FOR A VISIT</strong>
                </p>
            </td>
            <td width="136" valign="top">
                <p>
                    <strong>PASSENGER</strong>
                </p>
            </td>
            <td width="177" valign="top">
                <p>
                    <strong>INSTITUTION STAMP AND SIGNATURE</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
                <p>
                    Surname &amp; Initials (head/rep)
                </p>
            </td>
            <td width="66" valign="top">
                <p>
                    Time
                </p>
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" rowspan="3" valign="top">

               

            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
              <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="66" valign="top">
               <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="133" valign="top">
              <v-text-field v-model="doc.body.institution_1.reason_for_a_visit"  solo></v-text-field>
            </td>
            <td width="136" valign="top">
               <v-text-field v-model="doc.body.institution_1.passenger"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
                <p>
                    <strong>DESIGNATION</strong>
                </p>
            </td>
            <td width="66" valign="top">
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    <strong>EMPLOYEE’S SIGNATURE</strong>
                </p>
            </td>
            <td width="133" valign="top">
                <p>
                    <strong>DATE</strong>
                </p>
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="198" colspan="2" valign="top">
                
            </td>
            <td width="133" valign="top">
              <v-text-field v-model="doc.body.institution_1.passenger"  solo></v-text-field>
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
                <p>
                    <strong>DATE</strong>
                </p>
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    <strong>INSTITUTION NO.2</strong>
                </p>
            </td>
            <td width="133" valign="top">
                <p>
                    <strong>REASONS FOR A VISIT</strong>
                </p>
            </td>
            <td width="136" valign="top">
                <p>
                    <strong>PASSENGER</strong>
                </p>
            </td>
            <td width="177" valign="top">
                <p>
                    <strong>INSTITUTION STAMP AND SIGNATURE</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
                <p>
                    Surname &amp; Initials (head/rep)
                </p>
            </td>
            <td width="66" valign="top">
                <p>
                    Time
                </p>
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" rowspan="3" valign="top">
            </td>
        </tr>
        <tr>
             <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
              <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="66" valign="top">
               <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="133" valign="top">
              <v-text-field v-model="doc.body.institution_1.reason_for_a_visit"  solo></v-text-field>
            </td>
            <td width="136" valign="top">
               <v-text-field v-model="doc.body.institution_1.passenger"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    DESIGNATION
                </p>
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
        </tr>
        <tr>
            <td  valign="top">
            </td>
            <td width="644" colspan="5" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="644" colspan="5" valign="top">
                <p>
                    <strong></strong>
                </p>
                <p>
                    <strong>EMPLOYEE’S</strong>
                </p>
                <p>
                    <strong>
                        SIGNATURE…………………………………………………………………………..DATE…………………………………….................
                    </strong>
                </p>
            </td>
        </tr>
    </tbody>
</table>
<br>
<br>

   <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Employees Signature</h2>
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
                  label="Select Executive Authority:" single />
              </v-flex>
              <v-flex xs11>
                <h3>BEC Signature:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="BEC:" single />
              </v-flex>
              <v-flex xs11>
                <h3>EMPLOYEE SIGNATURES:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Employee:" single />
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
        template: "evidenceForminstitutionSupportVisit",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

          institution_1: [{date: "", surname_initials: "",  time: ""
            , reason_for_a_visit:"", passenger: "", institution_stamp_signature: ""},],

          institution_2: [{date: "", surname_initials: "",  time: ""
            , reason_for_a_visit:"", passenger: "", institution_stamp_signature: ""},]
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
