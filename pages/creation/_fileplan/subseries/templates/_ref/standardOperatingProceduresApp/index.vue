<template>
  <v-container grid-list-md>
    <v-layout justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc"/>
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">STANDARD OPERATING PROCEDURES</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table :headers="headers" :items="doc.body.tr" hide-actions class="elevation-1">
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="Hello">
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance indicator/measure"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.target"
                    single-line
                    solo
                    flat
                    placeholder="Target(s)"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.processFlow"
                    single-line
                    solo
                    flat
                    placeholder="Process flow"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.informationSystem"
                    single-line
                    solo
                    flat
                    placeholder="information system(s) used for the process documentation (manual / electronic)"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.processProcedures"
                    single-line
                    solo
                    flat
                    placeholder="Process & procedures followed"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.responsibility"
                    single-line
                    solo
                    flat
                    placeholder="Responsibility for the processes"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.sourceInformation"
                    single-line
                    solo
                    flat
                    placeholder="Source of information relevant to the process"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.processProceduresMonitoring"
                    single-line
                    solo
                    flat
                    placeholder="Process & procedures followed in monitoring & validation of the actual performmance"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.istSource"
                    single-line
                    solo
                    flat
                    placeholder="List the source(s) of information used for  collating the information"
                  ></v-text-field>
                </td>
                <!-- <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.responsibility"
                    single-line
                    solo
                    flat
                    placeholder="Responsibility"
                  ></v-text-field>
                </td> -->
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>
          <v-flex xs12>
            <p>
              <strong>The undersigned hereby confirm that the information provided has been quality assured and verified for accuracy and completeness</strong></p>
          </v-flex>

           <v-flex xs12 sm12>
                    <SelectUsers v-on:getUsers="setSigners($event)" label="Name of Reporting Officer: " />
                  </v-flex>

          

          <v-flex xs12 pt-1>
            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Sign Here :</p>
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

              <v-flex xs12 lg3>
                <v-menu transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="doc.body.authorSignatureDate"
                      label="Date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.authorSignatureDate" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "standardOperatingProceduresApp",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {

      dialog: false,
      headers: [
        {
          text: "PERFORMANCE INDICATOR/MEASURE",
          align: "left",
          value: ""
        },
        {
          text: "TARGET(S)",
          value: ""
        },
        {
          text: "PROCESS FLOW",
          value: ""
        },
        {
          text: "INFORMATION SYSTEM(S) USED FOR THE PROCESS DOCUMENTATION (MANUAL / ELECTRONIC)",
          value: ""
        },
        {
          text: "PROCESS & PROCEDURES FOLLOWED",
          value: ""
        },
        {
          text: "RESPONSIBILITY FOR THE PROCESSES",
          value: ""
        },
        {
          text: "SOURCE OF INFORMATION RELEVANT TO THE PROCESS",
          value: ""
        },
        {
          text: "PROCESS & PROCEDURES FOLLOWED IN MONITORING & VALIDATION OF THE ACTUAL PERFORMMANCE",
          value: ""
        },
        {
          text: "LIST THE SOURCE(S) OF INFORMATION USED FOR COLLATING THE INFORMATION(list the type, number, etc. of locations)",
          value: ""
        },
        {
          text: "Actions",
          value: "carbs"
        }
      ],
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "standardOperatingProceduresApp",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          name: "",
          DReportingOfficer: "",
          capacity: "",
          item: "",
          tr: [
            {
              performanceIndicator: "",
              target: "",
              processFlow: "",
              informationSystem: "",
              processProcedures: "",
              responsibility: "",
              sourceInformation: "",
              processProceduresMonitoring: "",
              listSource: ""
            },
            {
              performanceIndicator: "",
              target: "",
              processFlow: "",
              informationSystem: "",
              processProcedures: "",
              responsibility: "",
              sourceInformation: "",
              processProceduresMonitoring: "",
              listSource: ""
            }
            
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: []
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
    },
    addRow() {
      this.doc.body.tr.push({});
    },
    removeRow(index) {
      this.doc.body.tr.splice(index, 1);
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

table {
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #dddddd;
}

.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}

.terms_conditions {
  list-style: initial;
}
</style>

