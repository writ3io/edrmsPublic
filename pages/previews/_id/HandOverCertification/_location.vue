<template>
  <div id="HandOverCertification">
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
              <h3 class="text-xs-center">HAND OVER CERTIFICATE</h3>
              <br />
            </v-flex>
            <v-card>
              <v-flex xs12>
                <v-card-text>
                  <v-layout wrap justify-right>
                    <v-flex xs12>
                      <strong>Department Name :</strong>{{doc.body.departmentName}}
                    </v-flex>
                    <v-flex xs12>
                        <strong>Office :</strong>{{doc.body.office}}
                    </v-flex>

                    <v-flex xs12>
                      
                        <strong>Hereby I (Surname and Initials) :</strong>{{doc.body.surname}}
            
                    </v-flex>
                    <v-flex xs12>
                      
                      <strong>Handover the the content of the safe to (Surname and Initials) :</strong>{{doc.body.surname1}}
                    </v-flex>
                    <v-flex xs12>
                      
                        <strong>In the presence of (Head of Office) :</strong>{{doc.body.headOfOffice}}
                      
                    </v-flex>

                    <v-flex xs12>
                     <strong>On (Date) :</strong> {{doc.body.date}}
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-flex>

              <v-flex xs12>
                <h4 class="text-xs-center">THE FOLLOWING MONIES ARE HANDED OVER</h4>
                <br />
                <v-card-text>
                  <v-data-table
                    :headers="headers"
                    :items="doc.body.tr"
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

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers1"
                    :items="doc.body.tr"
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

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="text-xs-left">{{props.item.type}}</td>
                      <td>
                        {{props.item.rand}}
                      </td>
                      <td>
                        {{props.item.cents}}
                      </td>
                    </template>

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers2"
                    :items="doc.body.tr2"
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

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="text-xs-left styled-input">{{ props.item.total }}</td>
                      <td>
                       {{props.item.rand}}
                      <td>
                        {{props.item.cents}}
                      </td>
                    </template>

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                </v-card-text>
                <br />
              </v-flex>

              <v-flex xs12>
                <h4 class="text-xs-center">RECEIPTS ISSUED</h4>

                <v-card-text>
                  <v-data-table
                    :headers="headers3"
                    :items="doc.body.tr3"
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

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="text-xs-left">{{props.item.range}}</td>
                      <td class="text-xs-center px-0 py-0">{{props.item.period}}</td>
                      <td>
                        {{props.item.cents}}
                      </td>
                    </template>

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>

                  <v-data-table
                    :headers="headers2"
                    :items="doc.body.tr2"
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

                    <template v-slot:items="props" v-slot:no-data>
                      <td class="text-xs-left styled-input">{{ props.item.total }}</td>
                      <td>
                        {{props.item.rand}}
                      </td>
                      <td>
                        {{props.item.cents}}
                      </td>
                    </template>

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                </v-card-text>
                <br />
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
            </v-card>
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
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "HandOverCertification",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "DESCRIPTION",
          align: "left",
          sortable: false,
          value: "",
          width: "230px"
        },
        {
          text: "AMOUNT",
          sortable: false,
          align: "center",
          value: ""
        }
      ],
      headers1: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "",
          width: "230px"
        },
        {
          text: "RAND",
          sortable: false,
          value: ""
        },
        {
          text: "CENTS",
          sortable: false,
          value: ""
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
      this.saveSignature();
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
.styled-input {
  width: 230px;
  /* font-size: 20pt; */
}
</style>

