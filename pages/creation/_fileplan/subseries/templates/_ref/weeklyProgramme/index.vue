<template>
<div id="weeklyProgramme">
<v-dialog v-model="addSignDialog" persistent max-width="680px">
      <v-card>
        <v-card-title>
          <span class="headline">Forward To:</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap justify-space-between>
              <v-flex xs12 sm7>
                <v-combobox
                  v-model="signatory"
                  :items="users"
                  label="Choose Signatory"
                  chips
                  return-object
                  item-text="SurName"
                  item-value="EmailAdress"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item.SurName }}</v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  :items="actions"
                  v-model="signatory.action"
                  item-text="text"
                  return-object
                  label="Action"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="addSignDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat :loading="loading" @click="addSignatory">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <!-- <v-flex xs2></v-flex>
      <v-flex></v-flex>-->
      <v-flex xs9>
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">WEEKLY PROGRAMME FORM</h3>

            <!-- <v-card> -->
            <v-card-title>
              <v-flex xs12 sm12>
                <v-combobox
                  v-model="doc.body.surnameInitials"
                  :items="users"
                  label="Surname and Initials"
                  chips
                  return-object
                  item-text="SurName"
                  item-value="EmailAdress"
                  rounded
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item.SurName }}</v-chip>
                  </template>
                </v-combobox>
              </v-flex>

              <v-flex xs12 sm6>
                  <v-text-field v-model="doc.body.unit" label="UNIT: "></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6>
                  <v-menu
                    v-model="menu1a"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.date1"
                        label="Date: "
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="doc.body.date1" @input="menu1b = false"></v-date-picker>
                  </v-menu>
                </v-flex>
            </v-card-title>
            <v-card-text class="pt-0 mt-0">
              <v-layout xs12 wrap border>
                <v-flex>
                  <v-data-table
                    :headers="headers"
                    :items="doc.body.phase1"
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
                      <td class>{{props.item.dayOfWeek}}</td>
                      <td class>
                        <v-menu>
                          <template v-slot:activator="{ on }">
                            <v-text-field v-model="props.item.date1" readonly v-on="on"></v-text-field>
                          </template>
                          <v-date-picker v-model="props.item.date1" @input="menu1b = false"></v-date-picker>
                        </v-menu>
                      </td>
                      <td class>
                        <v-text-field
                          v-model="props.item.engagements"
                          single-line
                          solo
                          flat
                          placeholder
                        ></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                        <v-text-field v-model="props.item.venue" single-line solo flat placeholder></v-text-field>
                      </td>
                      <td class="px-0 py-0">
                          <v-text-field v-model="props.item.time" single-line solo flat placeholder></v-text-field>
                      </td>
                    </template>

                    <template v-slot:no-data>
                      <div :value="true" class="text-xs-center">No Form Input Fields</div>
                    </template>
                  </v-data-table>
                </v-flex>
              </v-layout>
            </v-card-text>
            <!-- </v-card> -->

            <v-flex xs12>
              <v-switch v-model="iSign" label="Add People To Sign"></v-switch>
            </v-flex>

            <v-flex v-show="iSign" xs12>
              <h3>Who to sign:</h3>
              <v-btn color="white" :loading="loading" round @click="addSignDialog = true">
                <v-icon small color="warning" left>add</v-icon>Add Signatory
              </v-btn>
              <v-btn color="warning" :loading="loading" round @click="clearSignList">
                <v-icon small color="white" left>delete</v-icon>Clear List
              </v-btn>
            </v-flex>

            <v-flex v-for="(sign, index) in doc.body.signatures" :key="index" xs12>
              <v-card-text >
                <h2 class="font-weight-medium">{{sign.action.text}}</h2>
                <hr />
                <h2 class="font-weight-regular">{{sign.SurName}}</h2>
                <h4>
                  {{sign.Designation}} |
                  <span class="grey--text">{{sign.Department}}</span>
                </h4>
              </v-card-text>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "weeklyProgramme",
  components: {
    Toolbar,
    SelectUsers
  },

  data() {
    return {
      

      headers: [
        {
          text: "DAY",
          align: "left",
          sortable: false,
          value: "",
          width: "10%"
        },
        {
          text: "DATE",
          value: ""
        },
        {
          text: "ENGAGEMENTS",
          value: "",
          width: "10%"
        },
        {
          text: "VENUE",
          value: ""
        },
        {
          text: "TIME",
          value: "",
          width: "10%"
        }
      ],

      series: {},
      saveDialog: false,
      attachments: [],
      isFormValid: true,
      status: "",
      iSign: false,
      addSignDialog: false,
      signatory: {},
      doc: {
        ref: this.$route.params.ref,
        template: "weeklyProgramme",
        author: store.state.user,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
            attachments: [],
            authorSignature: "",
            signatures: [],
            recipients: [],
            surnameInitials:"",
            date: new Date().toISOString().substr(0, 10),
            unit:"",
          
          
          phase1: [
            {
              dayOfWeek: "Monday",
              date1: new Date().toISOString().substr(0, 10),
              engagements: "",
              venue: "",
              time: ""
            },
            {
              dayOfWeek: "Tuesday",
              date1: new Date().toISOString().substr(0, 10),
              engagements: "",
              venue: "",
              time: ""
            },
            {
              dayOfWeek: "Wednesday",
              date1: new Date().toISOString().substr(0, 10),
              engagements: "",
              venue: "",
              time: ""
            },
            {
              dayOfWeek: "Thursday",
              date1: new Date().toISOString().substr(0, 10),
              engagements: "",
              venue: "",
              time: ""
            },
            {
              dayOfWeek: "Friday",
              date1: new Date().toISOString().substr(0, 10),
              engagements: "",
              venue: "",
              time: ""
            }
          ],

         
        }
      },
       actions: [
        { text: "For Approval", value: "approve", signLevel: 3 },
        { text: "For Recommendation", value: "recommend", signLevel: 2 },
        { text: "For Input", value: "input", signLevel: 1 },
        { text: "For Attention", value: "attention", signLevel: 0 }
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
    time() {
      return Date.now();
    },
    users() {
      return store.state.users;
    }
  },
  methods: {

   // sign
    clearSignList() {
      this.doc.body.signatures = [];
      console.log(this.doc.body.signatures);
    },

    addSignatory() {
      if (!this.signatory.action) {
        this.addSignDialog = false;
        return;
      }
      this.signatory.priority = this.signatory.action.signLevel;
      this.doc.body.signatures.push(this.signatory);

      //sort
      this.doc.body.signatures.sort(function(a, b) {
        return a.priority - b.priority;
      });

      this.addSignDialog = false;
      this.signatory = {};
      console.log(this.doc);
    },

    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    saveSignature() {},
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log("=== End ===");
      this.doc.body.authorSignature = data;
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
