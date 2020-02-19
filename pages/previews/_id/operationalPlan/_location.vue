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
            <br/>
            <v-layout wrap justify-right>
              <v-flex xs12>
                <p>OPERATIONAL PLAN FOR YEAR ENDING: {{doc.body.date}}</p>
              </v-flex>
              <v-flex xs12>
                <p>BRANCH/SUB-BRANCH / DIRECTORATE: {{doc.body.branch}}</p>
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

              <template v-slot:items="props" v-slot:no-data="">
                <td class="text-xs-center">
                  <p>{{props.item.strategicObjective}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.outcome}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.performanceIndicator}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.baseline}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.annualTarget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.activities}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.timeFrames}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.meansOfVerification}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.budget}}</p>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <p>{{props.item.responsibility}}</p>
                </td>
                
              </template>
            </v-data-table>
            <br/>
          </v-flex>


          <v-flex xs12 lg4>
            <p>I {{doc.body.name}}</p>
          </v-flex>
          <v-flex xs12 lg4>
            <p>In my capacity as {{doc.body.capacity}}</p>
            
          </v-flex>
          <v-flex xs12>
                <p>hereby confirm that I have verified this plan for accuracy and completeness to the best of my ability.</p>
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
  name: "operationalPlan",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
       menu5: false,
      menu: false,
      //time picker
      menu2: false,
      modal2: false,
      //

      dialogm1: {},
      dialog: false,

      TIDs : { // document Tracking Ids
        parentId : this.$route.params.parentId,
        docReference: this.$route.params.docRef,
        updateValue : "meeting"
      },

      hasParentId : false,
      
      pendingMeetings : [],
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

