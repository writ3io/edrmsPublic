<template>
  <v-container grid-list-md>
    <v-layout justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-layout wrap>
          <v-flex xs12>
            <h2 class="text-xs-center">ANNUAL PERFORMACE PLAN QUARTERLY REPORT FORM</h2>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-left">TO BE COMPLETED BY REPORTING OFFICER:</h3>
            <br />
             <p><strong>NAME OF REPORTING INSTITUTION</strong> (School/Circuit/District/Branch/Office)<strong>:</strong> {{doc.body.nameOfInstitution}}</p>
           
            <p><strong>LOCATION OF REPORTING INSTITUTION/OFFICE</strong> (Circuit/District/Branch /Office)<strong>:</strong> {{doc.body.locationOfInstitution}}</p>

            <p><strong>REPORTING PERIOD</strong> (Term / Quarter)<strong>:</strong> {{doc.body.reportingPeriod}}</p>

          </v-flex>

          <!-- 
          =======================================
          PROGRAMME 1: ADMINISTRATION
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 1: ADMINISTRATION</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.admintr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
          =======================================
          PROGRAMME 2: PUBLIC ORDINARY SCHOOLS.
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 2: PUBLIC ORDINARY SCHOOLS.</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.pubtr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <!-- 
          =======================================
          PROGRAMME 3: INDEPENDENT SCHOOLS.
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 3: INDEPENDENT SCHOOLS.</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.indeptr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>

            </v-data-table>
            <br />
          </v-flex>
          
          <!-- 
          =======================================
          PROGRAMME 4: PUBLIC SPECIAL SCHOOLS.
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 4: PUBLIC SPECIAL SCHOOLS.</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.pubspecailtr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

           <!-- 
          =======================================
          PROGRAMME 5: EARLY CHILDHOOD EDUCATION
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 5: EARLY CHILDHOOD EDUCATION</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.earlychildtr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>

            </v-data-table>
            <br />
          </v-flex>
          
          <!-- 
          =======================================
          PROGRAMME 6: INFRASTRUCTURE DEVELOPMENT
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 6: INFRASTRUCTURE DEVELOPMENT</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.infrastdevtr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>

            </v-data-table>
            <br />
          </v-flex>

          <!-- 
          =======================================
          PROGRAMME 7: EXAMINATION AND EDUCATION RELATED
          =======================================
          -->

          <v-flex xs12>
            <h3 class="text-xs-center">PROGRAMME 7: EXAMINATION AND EDUCATION RELATED</h3>
          </v-flex>

          <v-flex xs12>
            <v-data-table
              :headers="headers"
              :items="doc.body.examedutr"
              hide-actions
              class="elevation-1"
            >
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.quarterTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.actualOutput}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.variance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.reasonForVariance}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.intervention}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.yearToDate}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.expenditure}}</p>
                </td>
              </template>
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <p>
              <strong>The undersigned hereby confirm that the information provided has been quality assured and verified for accuracy and completenes</strong>
            </p>
          </v-flex>

          <v-flex xs12>
            <p>Name of Reporting Officer: {{doc.body.nameReportingOfficer}}</p>
            <!-- <v-text-field v-model="doc.body.branch" label="Name of Reporting Officer:"></v-text-field> -->
          </v-flex>

          <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <v-flex xs12 lg6>
                  <p>Signature: </p>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>
              </v-flex>

              <v-flex xs12 lg3>
                <p>Date: {{doc.body.authorSignatureDate}}</p>
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
import Toolbar from "~/components/PreviewToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "annualPerformancePlanQR",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "PERFORMACE INDICATOR",
          align: "left",
          value: ""
        },
        {
          text: "ANNUAL TARGET",
          value: ""
        },
        {
          text: "QUARTER TARGET",
          value: ""
        },
        {
          text: "PROGRESS: ACTUAL OUTPUT",
          value: ""
        },
        {
          text: "VARIANCE",
          value: ""
        },
        {
          text: "REASON FOR VARIANCE",
          value: ""
        },
        {
          text: "INTERVENTION",
          value: ""
        },
        {
          text: "YEAR-TO DATE",
          value: ""
        },
        {
          text: "BUDGET",
          value: ""
        },
        {
          text: "EXPENDITURE",
          value: ""
        },

        // {
        //   text: "Actions",
        //   value: "carbs"
        // }
      ],
      iSign: false,

      signature: null,
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      loading: false,
      min_height: 320,
      plugins: "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
      toolbar: "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
    };
  },
  computed: {
    doc() {
      return store.state.doc;
    },
    time() {
      return Date.now();
    },
    setAction(action) {
      return doc.action == action;
    }
  },
  watch: {
    doc(data) {
      console.log("We have data!", data);
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = data;
      user.signatureDate = Date.now();
      console.log(user);
      console.log("=== End ===");
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id);
  }
};
</script>

<style scoped>
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

/* p.tableInput{
 font-size: 14px;
} */

.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}

.terms_conditions {
  list-style: initial;
}
</style>

