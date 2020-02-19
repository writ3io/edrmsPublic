<template>
  <div id="letter">
    

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
            <Toolbar :data="doc" />
        </v-flex>
    <v-flex column xs8>
      <h2 align="center">
              
                        A. APPLICATION TO PERFORM REMUNERATIVE WORK OUTSIDE THE
                        PUBLIC SERVICE [RWOPS]
                    
                </h2>
                <br>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p>
                    <strong>PERSONAL PARTICULARS</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Name :
                </p>
            </td>
          
            <td width="208" valign="top">
              <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="208" valign="top">
                <p>
                    Rank
                </p>
            </td>
          
            <td width="208" valign="top">
              <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
               
                <v-text-field solo placeholder="INSTITUTION"></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p>
                    <strong> B. </strong>
                    <strong>
                        DETAILS OF REMUNERATIVE WORK OUTSIDE THE PUBLIC SERVICE
                    </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p>
                    i) Institution / Organisation / Site where RQOPS will be
                    performed
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p>
                    ii) Describe nature of duties to be performed:-
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p>
                    iii) Indicate the periods during which RWOPS will be
                    performed [day (s) of the week and starting and finishing
                    times]:-
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <v-text-field solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <p>
                    iv) Indicate remuneration to be received [ hourly / weekly
                    / monthly
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" colspan="3" valign="top">
                <v-text-field solo></v-text-field>
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
                    <strong>C. </strong>
                    <strong>DECLARATION BY APPLICANT</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="623" valign="top">
                <p>
                    I understand and accept that:-
                </p>
                <p>
                    a) The additional work will no way hamper me in or
                    adversely affect the performance of my official duties.
                </p>
                <p>
                    b) The additional work will be performed entirely outside
                    my prescribed hours of duty, periods of standby duty or
                    overtime which I have agreed to perform.
                </p>
                <p>
                    c) The additional work willnot cause embarassment to the
                    Department or Public Service in any way.
                </p>
                <p>
                    d) Should there be a conflict of interest between the work
                    that will be performed outside the Public Service and my
                    duties within the Public Service, authority to perform
                    RWOPS will cease.
                </p>
                <p>
                    e) This application is valid for twelve (12) months and on
                    expiry of this period a re-application will be necessary if
                    wish to continue with RWOPS.
                </p>
                <p>
                    f) Authority to perform RWOPS, if granted may be withdrawn
                    at any time if it is found that any of the above conditions
                    are not being adhered to.
                </p>
            </td>
        </tr>
    </tbody>
</table>
<br>

  <v-flex xs11>
                <h3>Name of Supervisor :</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Supervisor:" single-line />
    </v-flex>
<br>
   <!-- sign -->
            <v-flex xs12 class="mt-5">
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
               <v-flex xs11>
                <h3>Name of Head of Branch :</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Supervisor:" single-line />
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
