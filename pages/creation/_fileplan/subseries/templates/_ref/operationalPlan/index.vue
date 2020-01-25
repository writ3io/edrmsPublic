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
            <h3 class="text-xs-center">OPERATIONAL PLAN FORM</h3>

            <v-layout wrap justify-right>
              <v-flex xs12>
                <v-menu transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="doc.body.date"
                      label="OPERATIONAL PLAN FOR YEAR ENDING: "
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="doc.body.branch" label="BRANCH/SUB-BRANCH / DIRECTORATE:"></v-text-field>
              </v-flex>
            </v-layout>
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
                    v-model="props.item.strategicObjective"
                    single-line
                    solo
                    flat
                    placeholder="Strategic Objective"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.outcome"
                    single-line
                    solo
                    flat
                    placeholder="Outcome"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.performanceIndicator"
                    single-line
                    solo
                    flat
                    placeholder="Performance Indicator"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.baseline"
                    single-line
                    solo
                    flat
                    placeholder="Baseline"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.annualTarget"
                    single-line
                    solo
                    flat
                    placeholder="Annual Target"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.activities"
                    single-line
                    solo
                    flat
                    placeholder="Activities"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.timeFrames"
                    single-line
                    solo
                    flat
                    placeholder="Time Frames"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.meansOfVerification"
                    single-line
                    solo
                    flat
                    placeholder="Means of Verification"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.budget"
                    single-line
                    solo
                    flat
                    placeholder="Budget"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.responsibility"
                    single-line
                    solo
                    flat
                    placeholder="Responsibility"
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
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
          </v-flex>
          <!-- <v-flex xs12>
             <p> I, <v-text-field v-model="doc.body.name"></v-text-field> In my capacity as <v-text-field v-model="doc.body.capacity"></v-text-field> hereby confirm that I have verified this plan for accuracy and completeness to the best of my ability.</p>
          </v-flex> -->
          <v-flex xs12 lg6>
                <v-text-field v-model="doc.body.name" label="I"></v-text-field>
          </v-flex>
          <v-flex xs12 lg6>
                <v-text-field v-model="doc.body.capacity" label="In my capacity as"></v-text-field>
          </v-flex>
          <v-flex xs12>
                <p>hereby confirm that I have verified this plan for accuracy and completeness to the best of my ability.</p>
          </v-flex>

          <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Sign Here : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.authorSignatureDate" label="Date" readonly v-on="on">
                    </v-text-field>
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
  name: "operationalPlan",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {

      dialog: false,
      headers: [
        {
          text: "STRATEGIC OBJECTIVE",
          align: "left",
          value: ""
        },
        {
          text: "OUTCOME",
          value: ""
        },
        {
          text: "PERFORMANCE INDICATOR",
          value: ""
        },
        {
          text: "BASELINE",
          value: ""
        },
        {
          text: "ANNUAL TARGET",
          value: ""
        },
        {
          text: "ACTIVITIES",
          value: ""
        },
        {
          text: "TIME FRAMES",
          value: ""
        },
        {
          text: "MEANS OF VERIFICATION",
          value: ""
        },
        {
          text: "BUDGET",
          value: ""
        },
        {
          text: "RESPONSIBILITY",
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
        template: "operationalPlan",
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
              strategicObjective: "",
              outcome: "",
              performanceIndicator: "",
              baseline: "",
              annualTarget: "",
              activities: "",
              timeFrames: "",
              meansOfVerification: "",
              budget: "",
              responsibility: ""
            },
            {
              strategicObjective: "",
              outcome: "",
              performanceIndicator: "",
              baseline: "",
              annualTarget: "",
              activities: "",
              timeFrames: "",
              meansOfVerification: "",
              budget: "",
              responsibility: ""
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

