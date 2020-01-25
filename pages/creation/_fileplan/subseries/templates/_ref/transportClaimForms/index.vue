<template>
  <div id="transport">
   
    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
           <Toolbar :data="doc" />
        </v-flex>
<v-flex column xs8>

<p align="center">
    <strong>LIMPOMPO PROVINCE</strong>
</p>
<p align="center">
    <strong>GENERAL PAYMENT VOUCHER</strong>
</p>
<table border="1" cellspacing="0" cellpadding="0" >
    <tbody>
        <tr>
            <td>
                <p>
                    NAME
                </p>
            </td>
            <td  colspan="4" valign="top">
            </td>
            <td  colspan="4" valign="top">
                <p>
                    VOUCHER NUMBER
                </p>
            </td>
            
        </tr>
        <tr>
            <td width="208">
                <p>
                    I.D. NUMBER
                </p>
            </td>
            <td colspan="4" valign="top">
            </td>
            <td  colspan="4" valign="top">
            </td>
            
        </tr>
        <tr>
            <td >
                <p>
                    SALARY NUMBER
                </p>
            </td>
            <td  colspan="4" valign="top">
            </td>
            <td  colspan="4" valign="top">
                <p>
                    PAYPOINT NUMBER
                </p>
            </td>
            
        </tr>
        <tr>
            <td>
                <p>
                    SUPPLIER CODE
                </p>
            </td>
            <td  valign="top">
            </td>
            <td  colspan="2" valign="top">
                <p>
                    A/C
                </p>
            </td>
            <td width="129" valign="top">
            </td>
            <td width="208" colspan="4" valign="top">
            </td>
            
        </tr>
        <tr>
            <td >
                <p>
                    ADDRESS
                </p>
            </td>
            <td colspan="4" valign="top">
            </td>
            <td  colspan="4" valign="top">
                <p>
                    (1) Cheque No:
                </p>
            </td>
            
        </tr>
        <tr>
            <td width="208">
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="208" colspan="4" valign="top">
            </td>
            
        </tr>
        <tr>
            <td width="208">
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td  colspan="4" valign="top">
                <p>
                    (2) Cheque Date:
                </p>
            </td>
            
        </tr>
        <tr>
            <td width="208">
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="208" colspan="4" valign="top">
            </td>
           
        </tr>
        <tr>
            <td rowspan="3">
                <p>
                    PARTICULARS
                </p>
            </td>
            <td width="549" colspan="9" valign="top">
            </td>
        </tr>
        <tr>
            <td width="147" colspan="2" valign="top">
            </td>
            <td  colspan="2" valign="top">
                <p align="center">
                    Km @
                </p>
            </td>
            <td  valign="top">
            </td>
            <td  colspan="2" valign="top">
                <p>
                    Cents/km =
                </p>
            </td>
            <td width="47" valign="top">
            </td>
            
        </tr>
        <tr>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="208" colspan="4" valign="top">
            </td>
           
        </tr>
        <tr>
            <td  rowspan="4">
                <p>
                    INVOICE
                </p>
            </td>
            <td  colspan="4">
                <p>
                    ALLOCATION CODE
                </p>
            </td>
            <td  colspan="2" rowspan="2" valign="top">
                <p>
                    D.R. (1) C.R(4)
                </p>
            </td>
            <td  colspan="2" valign="top">
                <p>
                    AMOUNT
                </p>
            </td>
            
        </tr>
        <tr>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            
        </tr>
        <tr>
            <td valign="top">
                <p>
                    PROJECT CODE
                </p>
            </td>
            <td  colspan="2" valign="top">
                <p>
                    LEDGER ITEM
                </p>
            </td>
            <td valign="top">
                <p>
                    SUB-LEDGER ITEM
                </p>
            </td>
            <td colspan="2" rowspan="2" valign="top">
            </td>
            <td  valign="top">
                <p>
                    R
                </p>
            </td>
            <td  valign="top">
                <p>
                    C
                </p>
            </td>
            
        </tr>
        <tr>
            <td width="111" valign="top">
            </td>
            <td width="101" colspan="2" valign="top">
            </td>
            <td width="129" valign="top">
            </td>
            <td width="57" valign="top">
            </td>
            <td width="47" valign="top">
            </td>
            
        </tr>
        <tr>
            <td>
                <p>
                    FUND
                </p>
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            
        </tr>
        <tr>
            <td>
                <p>
                    RESPONSIBILITY
                </p>
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            
        </tr>
        <tr>
            <td>
                <p>
                    OBJECTIVE
                </p>
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
           
        </tr>
        <tr>
            <td>
                <p>
                    ITEM
                </p>
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            
        </tr>
        <tr>
            <td>
                <p>
                    PROJECT
                </p>
            </td>
            <td width="340" colspan="4" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            <td width="104" colspan="2" valign="top">
            </td>
            
        </tr>
     
    </tbody>
</table>
<br>

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
                <h3>COMPILED BY:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Compiled By:" single-line />
              </v-flex>
               <v-flex xs11>
                <h3>RECOMMENDED:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Recommender:" single-line />
              </v-flex>
               <v-flex xs11>
                <h3>HEAD OF DEPARTMENT:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Head of Department:" single-line />
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
        template: "transportClaimForms",
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
    setSigners(user) {
      this.doc.body.signatures.push(user);
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
