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
            <h3 class="text-xs-center">RISK MANAGEMENT PROFILE FORM</h3>
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
                    v-model="props.item.No"
                    single-line
                    solo
                    flat
                    placeholder="No"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.strategicObjective"
                    single-line
                    solo
                    flat
                    placeholder="Strategic Objective"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.risks"
                    single-line
                    solo
                    flat
                    placeholder="Risks"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.currentControl"
                    single-line
                    solo
                    flat
                    placeholder="Current control"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.residualRiskExposure"
                    single-line
                    solo
                    flat
                    placeholder="Residual Risk Exposure"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.improvementMitigatingMeasure"
                    single-line
                    solo
                    flat
                    placeholder="Improvement / Mitigating Measure"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.riskOwner"
                    single-line
                    solo
                    flat
                    placeholder="Risk Owner"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.timeFrame"
                    single-line
                    solo
                    flat
                    placeholder="Time Frame"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.progress"
                    single-line
                    solo
                    flat
                    placeholder="Progress"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.riskAdjustment"
                    single-line
                    solo
                    flat
                    placeholder="Risk Adjustment"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.currentChallenges"
                    single-line
                    solo
                    flat
                    placeholder="Current Challenges"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.intervention"
                    single-line
                    solo
                    flat
                    placeholder="Intervention"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="100%" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
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
  name: "riskManagementProfile",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {

      dialog: false,
      headers: [
        {
          text: "ITEM NO",
          align: "left",
          value: "",
        },
        {
          text: "STRATEGIC OBJECTIVE",
          value: ""
        },
        {
          text: "RISKS",
          value: ""
        },
        {
          text: "CURRENT CONTROL",
          value: ""
        },
        {
          text: "RESIDUAL RISK EXPOSURE",
          value: ""
        },
        {
          text: "IMPROVEMENT / MITIGATING MEASURE",
          value: ""
        },
        {
          text: "RISK OWNER",
          value: ""
        },
        {
          text: "TIME FRAME",
          value: ""
        },
        {
          text: "PROGRESS",
          value: ""
        },
        {
          text: "RISK ADJUSTMENT",
          value: ""
        },
        {
          text: "CURRENT CHALLENGES",
          value: ""
        },
        {
          text: "INTERVENTION",
          value: ""
        },
        {
          text: "ACTIONS",
          value: "carbs"
        }
      ],
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "riskManagementProfile",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          name: "",
          branch: "",
          capacity: "",
          item: "",
          tr: [
            {
              No: "",
              strategicObjective: "",
              risks: "",
              currentControl: "",
              residualRiskExposure: "",
              improvementMitigatingMeasure: "",
              riskOwner: "",
              timeFrame: "",
              progress: "",
              riskAdjustment: "",
              currentChallenges: "",
              intervention: ""
            },
            {
              No: "",
              strategicObjective: "",
              risks: "",
              currentControl: "",
              residualRiskExposure: "",
              improvementMitigatingMeasure: "",
              riskOwner: "",
              timeFrame: "",
              progress: "",
              riskAdjustment: "",
              currentChallenges: "",
              intervention: ""
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
      this.doc.body.signatures = users;
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

