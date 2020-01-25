<template>
  <div id="weeklyProgramme">
    
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
              <h3 class="text-xs-center red--text">CONFIDENTIAL</h3>

              <v-layout wrap>
                <v-flex xs6>
                    <h4>Our Ref :</h4>
                    {{doc.ref}}
                </v-flex>
                <v-flex xs6>
                    <h4>Enquiries :</h4>
                 {{doc.body.rfq}}
                </v-flex>
                <v-flex xs6>
                    <h4>Telephone :</h4>
                  {{doc.body.tel}}
                </v-flex>
                <v-flex xs6>
                    <h4>Email :</h4>
                  {{doc.body.email}}
                </v-flex>
              </v-layout>
            </v-flex>

           
             <v-flex v-if="$route.params.location != 'records'" xs12>
                 <h4>Address:</h4>
              <editor
                api-key="7ruk8pq3grn2940r2hkdhb5e7vc5rvtc2kdssi58s9ockt7y"
                v-model="signer.comment"
                ref="editor"
                :init="{min_height}"
              ></editor>
            </v-flex>

            <v-flex xs12>
                <h4>Date:</h4>
              {{doc.body.date}}
            </v-flex>

            <v-flex xs12>
              <h3 class="text-xs-left">
                <u>REQUEST FOR VETTING OF OFFICIALS: DEPARTMENT OF EDUCATION</u>
              </h3>
              <br />

              <p>1. Request is hereby made for vetting of the following officials:</p>
              <p>2. Your assistance is valued.</p>
            </v-flex>

            <v-card-text>
           <v-flex
              v-for="signatory in doc.body.signatures"
              :key="signatory.SurName"
              xs12
              class="my-5"
            >
              <v-flex xs12>
                <h2>{{signatory.response}}</h2>
                <div v-html="signatory.comment"></div>
              </v-flex>
              <v-flex xs4>
                <img style="width:100%" :src="signatory.signature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h3>{{signatory.SurName}}</h3>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>
                </v-flex>

                <v-flex xs4>
                  <p
                    class="text-xs-left"
                  >{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</p>
                  <hr />
                  <h4>Date</h4>
                </v-flex>
              </v-layout>
            </v-flex>

             </v-card-text>

          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
 
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/PreviewToolbar";
import SelectUsers from "~/components/SelectUsers";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "SSAVettingRequest",
  components: {
    editor: Editor,
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

       user: {},
      users: [],
      loading: false,
      response: {},
      signatories: [],
      signature: "",
      ref: "",
      textInput: "",
      comment: "",
      action: {},

       actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
      ],

      signer: {
        action: {}
      },
      min_height: 320
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

      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);

      this.signer = this.doc.body.signatures[pos];
      if (this.signer) {
        this.action = this.respondText(this.signer.action);
      }
    }
  },
  methods: {
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    respondText(action) {
      if (action.value == "approve") {
        return {
          text: "Approve",
          value: "Approved",
          altText: "Not Approved",
          altValue: "Not Approved"
        };
      }
      if (action.value == "recommend") {
        return {
          text: "Recommended",
          value: "Recommended",
          altText: "Not Recommended",
          altValue: "Not Recommended"
        };
      }
    },
    saveSignature() {
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
      user.signature = this.signature;
      user.signatureDate = Date.now();
      console.log(this.doc);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log("=== End ===");
      this.signature = data;
      this.saveSignature()
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id);
    console.log(store.state.doc);
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

