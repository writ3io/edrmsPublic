<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs8>
        <v-flex>
          <v-layout>
            <v-flex xs12>
              <span>
                <v-btn disabled round>Agenda</v-btn>
                <v-btn disabled round>Meeting</v-btn>
              </span>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>

        <v-layout wrap>
          <v-flex xs12>
            <h2 class="text-xs-center">ATTENDANCE REGISTER</h2>

            <v-layout wrap justify-right>
              <v-flex xs12>
                <h3>A. MEETING / WORKSHOP DESCRIPTION:</h3>
              </v-flex>
              <v-flex xs12 md6 lg6>
                <v-text-field v-model="doc.body.meeting_name" label="Name of Meeting/ Workshop"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6>
                <v-text-field v-model="doc.body.meeting_venue" label="Venue of Meeting/ Workshop"></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12>
            <v-flex xs12>
              <h3>B. ATTENDANCE RECORD:</h3>
            </v-flex>
            <v-data-table
              :headers="headers"
              :items="doc.body.delegates"
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
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.date" single-line solo flat placeholder="Date"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.SurName"
                    single-line
                    solo
                    flat
                    placeholder="SURNAME"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.Initials"
                    single-line
                    solo
                    flat
                    placeholder="INITIALS"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.PersonalNumber"
                    single-line
                    solo
                    flat
                    placeholder="Persal"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.Designation"
                    single-line
                    solo
                    flat
                    placeholder="Position"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.Workstation"
                    single-line
                    solo
                    flat
                    placeholder="Workstation Name H/O, District, Circuit/School"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.Department"
                    single-line
                    solo
                    flat
                    placeholder="Unit"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.OfficeNumber"
                    single-line
                    solo
                    flat
                    placeholder="Office Number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.EmailAdress"
                    single-line
                    solo
                    flat
                    placeholder="Email"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.PhoneNumber"
                    single-line
                    solo
                    flat
                    placeholder="Cell"
                  ></v-text-field>
                </td>

                <td class="text-xs-center px-0 py-0">No</td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
          </v-flex>

          <v-flex xs12 pt-1>
            <v-layout wrap>
              <v-flex xs12 lg12>
                <h3>C. ATTENDANCE DETAILS :</h3>
              </v-flex>
              <v-flex xs2 lg2>
                <v-text-field
                  v-model="doc.body.number_of_delegs_invited"
                  outlined
                  label="Number of delegates invited"
                ></v-text-field>
              </v-flex>

              <v-flex xs2 lg2>
                <v-text-field
                  v-model="doc.body.number_of_delegs_attended"
                  label="Number of delegates who attended"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout wrap>
              <v-flex xs12 lg12 pb-0 mb-0>
                <span>
                  <h4>Chairperson : {{doc.body.signatures[0].SurName }}</h4>
                  <h4>
                    {{ doc.body.signatures[0].Designation}} |
                    <span
                      class="grey--text"
                    >{{doc.body.signatures[0].Department}}</span>
                  </h4>
                </span>
              </v-flex>
            </v-layout>
            <v-layout wrap v-if="$route.params.location != 'records'">
              <v-flex xs12 lg6>
                <p class="text-xs-left">Signature of Chairperson/Facilitator:</p>
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
                <v-menu
                  v-model="menu5"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
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
import Toolbar from "~/components/PreviewToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "Attendance",
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

      TIDs: {
        // document Tracking Ids
        parentId: this.$route.params.parentId,
        docReference: this.$route.params.docRef,
        updateValue: "meeting"
      },

      hasParentId: false,

      pendingMeetings: [],
      headers: [
        {
          text: "DATE",
          align: "left",
          sortable: false,
          value: "name",
          width: "15%"
        },
        {
          text: "SURNAME",
          value: "",
          width: "15%"
        },
        {
          text: "INITIALS",
          value: "",
          width: "10%"
        },
        {
          text: "Persal ",
          value: "",
          width: "15%"
        },
        {
          text: "Position ",
          value: "",
          width: "15%"
        },
        {
          text: "Workstation Name H/O, District, Circuit/School",
          value: "",
          width: "15%"
        },
        {
          text: "Unit ",
          value: "",
          width: "15%"
        },
        {
          text: "Office number ",
          value: "",
          width: "15%"
        },
        {
          text: "Email ",
          value: "",
          width: "15%"
        },
        {
          text: "Tel/Cell ",
          value: "",
          width: "15%"
        },
        {
          text: "Sign",
          value: "",
          width: "5%"
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
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
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
