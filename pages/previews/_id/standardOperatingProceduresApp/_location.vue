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
                 {{props.item.performanceIndicator}}
                 
                </td>
                <td class="text-xs-right px-0 py-0">
                 {{props.item.target}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.processFlow}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.informationSystem}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.processProcedures}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.responsibility}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.sourceInformation}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.processProceduresMonitoring}}
                </td>
                <td class="text-xs-right px-0 py-0">
                  {{props.item.istSource}}
                 
                </td>
               
              </template>

             
            </v-data-table>
            <br />
          </v-flex>
          <v-flex xs12>
            <p>
              <strong>The undersigned hereby confirm that the information provided has been quality assured and verified for accuracy and completeness</strong></p>
          </v-flex>

           <v-flex xs12 lg6>  
              <p><strong>Name of Reporting Officer:</strong>  {{doc.body.signatures[0].SurName}}</p>
                  </v-flex>

          <v-flex xs12 lg6>
                <p><strong>Name of Reporting Officer:</strong> {{doc.body.signatures[0].Designation}}</p>
          </v-flex>

           <v-layout wrap>
              <v-flex xs12 lg6>
                <v-flex xs12 lg6>
                  <p><strong>Signature of Reporting Officer:</strong>  </p>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>
              </v-flex>

              <v-flex xs12 lg3>
                <p><strong>Date:</strong> {{doc.body.authorSignatureDate}}</p>
              </v-flex>

            </v-layout>
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
import {
  signatureHelpers
} from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import {
  createDoc
} from "~/services/DocsService";

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
        }
      ],
      iSign: false,
      

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

