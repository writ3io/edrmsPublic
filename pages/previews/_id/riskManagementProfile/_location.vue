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
                  {{props.item.No}}
                </td>
                <td class="text-xs-right">
                  {{props.item.strategicObjective}}
                </td>
                <td class="text-xs-right">
                  {{props.item.risks}}
                  
                </td>
                <td class="text-xs-right">
                  {{props.item.currentControl}}
                </td>
                <td class="text-xs-right">
                  {{props.item.residualRiskExposure}}
                </td>
                <td class="text-xs-right">
                  {{props.item.improvementMitigatingMeasure}}
                </td>
                <td class="text-xs-right">
                  {{props.item.riskOwner}}
                </td>
                <td class="text-xs-right">
                  {{props.item.timeFrame}}
                </td>
                <td class="text-xs-right">
                 {{props.item.progress}}
                </td>
                <td class="text-xs-right">
                  {{props.item.riskAdjustment}}
                </td>
                <td class="text-xs-right">
                 {{props.item.currentChallenges}}
                </td>
                <td class="text-xs-right">
                 {{props.item.intervention}}
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
import Toolbar from "~/components/PreviewToolbar";
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
        }
      ],
      
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

