<template>
  <div id="letter">
    

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs4>
            <Toolbar :data="doc" />
        </v-flex>
    <v-flex column xs8>

        <H2>Leave Checklist </H2>
        <br>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="66" valign="top">
                <p>
                    <strong>ITEM NO</strong>
                </p>
            </td>
            <td width="354" valign="top">
                <p align="center">
                    <strong>DESCRIPTION</strong>
                </p>
            </td>
            <td width="60" valign="top">
                <p>
                    <strong>YES/NO</strong>
                </p>
            </td>
            <td width="144" align="center" valign="top">
              <strong align="center">COMMENT</strong>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.1
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Requisition Voucher Fully completed and signed the relevant
                    delegated officials(Refer to Procurement Delegations)
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                   
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.2
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Verify the following:
                </p>
                <p>
                    · Whether submissions together with specifications are
                    proved by the Accounting Officer
                </p>
                <p>
                    · Whether the service or commodity is designated in terms
                    local content and production.
                </p>
            </td>
            <td width="60" valign="top">
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.3
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Specification considered by the BSC
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.4
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Confirm whether the goods/services are on contract or not
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.5
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Budget Expenditure report is attached and the requisition
                    is signed by the budget officer confirming the availability
                    of funds for the required goods or services to be procured
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.6
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Approval to procure to be in line with the approved
                    procurement plan
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.7
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Requisition Memo to be submitted seven days (7) prior event
                    date
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.8
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Submit the requisition for allocation
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    1.9
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Ensure that ICT equipment related orders are approved by
                    relevant ICT delegated officials as per the financials
                    delegated limits and acquired through SITA
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    10
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Did the BSC sign Declaration of interest and the attendance
                    register (Where applicable)
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    11
                </p>
            </td>
            <td width="354" valign="top">
                <p>
                    Is the BSC report attached and signed by the Chair and the
                    secretary (Where applicable)
                </p>
            </td>
            <td width="60" valign="top">
                <v-switch value input-value="false"></v-switch>
            </td>
            <td width="144" valign="top">
                <v-text-field
                    label=""
                    textarea
                    rows="3"
                    auto-grow
                    counter=4000
                    v-model="description"
                ></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="66" valign="top">
                <p>
                    NB
                </p>
            </td>
            <td width="558" colspan="3" valign="top">
                <p>
                    Please don’t pass to the next Phase in case of
                    non-compliance to all items above
                </p>
            </td>
        </tr>
    </tbody>
</table>


   <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Signature of Claimant</h2>
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
                <h3>Senior Manager :</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" single-line />
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
