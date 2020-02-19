<template>

  <v-container grid-list-md>
    <v-layout justify-space-between>

      <v-flex mb-5>
        <v-layout>
          <!-- <Toolbar v-if="hasParentId" :data="doc" :canAttachFile="false" :trackingIds="TIDs" /> -->

          <Toolbar :data="doc" /> 
        </v-layout>
      </v-flex>
      <!--
      <v-flex v-if="!hasParentId">

        <v-layout row >
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on }">
              <v-btn color="warning" dark v-on="on">Choose Agenda</v-btn>
            </template>
            <span v-if="pendingMeetings">
              <v-card>
                <v-card-title>Select Meeting</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                  <v-radio-group v-model="dialogm1" column>
                    <v-radio v-for="(item, index) in pendingMeetings" :key="index" :label="item.id+''" :value="item">
                    </v-radio>
                  </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" flat @click="dialogClick">Save</v-btn>
                </v-card-actions>
              </v-card>
            </span>
            <span v-else>
              <v-card>
                <v-card-title>Select Meeting</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  No meetings, create agenda
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </span>
          </v-dialog>
        </v-layout>

      </v-flex>

      -->

     <v-flex xs2></v-flex>
                <v-flex></v-flex>
      <v-flex xs8>
        <v-flex justify-end>
        <hr style="color:grey">
      </v-flex>
        <v-layout wrap>
          Ref: 8/5/1/R         
          <v-flex xs12>

            <h3 class="text-xs-center red--text text">CONFIDENTIAL</h3>

            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0" >
                    <h3 class="text-xs-center">AUDIT REVIEW SESSION MINUTES</h3><br>
                </v-card-title>
                <v-card-text class="pt-0">
                 <v-layout xs12 wrap>

                  <v-flex xs12 lg6>
                    <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40"
                      transition="scale-transition" offset-y min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="doc.body.aud_rev_date" label="Date" readonly v-on="on">
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="doc.body.aud_rev_date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-flex>


                  <v-flex xs12 lg3>
                    <v-text-field v-model="doc.body.aud_rev_venue" label="Venue">
                    </v-text-field>
                  </v-flex>

                  <v-flex xs12 lg3>
                  <v-menu
                    ref="menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="doc.body.aud_rev_time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="doc.body.aud_rev_time"
                        label="Time"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu2"
                      v-model="doc.body.aud_rev_time"
                      full-width
                      @click:minute="$refs.menu.save(doc.body.aud_rev_time)"
                    ></v-time-picker>
                  </v-menu>

                   </v-flex>

                </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>

            
              <v-flex xsm12>
                 <span>
                <h2>Chairperson : {{ doc.body.signatures[1].SurName }}</h2>
                <h4>
                  {{ doc.body.signatures[1].Designation}} |
                  <span class="grey--text">{{doc.body.signatures[1].Department}}</span>
                </h4>
              </span>
              </v-flex>

              <v-flex xsm12>
                 <span>
                <h2>Secretariat : {{ doc.body.signatures[0].SurName }}</h2>
                <h4>
                  {{ doc.body.signatures[0].Designation}} |
                  <span class="grey--text">{{doc.body.signatures[0].Department}}</span>
                </h4>
              </span>
              </v-flex>
              
          </v-flex>
         
          <v-flex xs12>

            <v-data-table :headers="headers" :items="doc.body.secAArray" hide-actions class="elevation-1">

              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">
                      {{ props.header.text }}
                    </span>
                  </template>
                  <span>
                    {{ props.header.text }}
                  </span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data="Hello">
                <td class="text-xs-center ">
                  A. {{ props.index + 1 }}
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.discussionT_a" single-line solo flat placeholder="Discussion Topic ">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.purpose_a" single-line solo flat placeholder="Purpose"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.responsibility_a" single-line solo flat placeholder="Responsibility"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.timeframe_a" single-line solo flat placeholder="Timeframes"></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <div class="text-truncate white--text">
                  SECTION A: PROCEDURAL MATTERS
                  </div>
                </td>
              </template>
            </v-data-table>

            <v-data-table  :items="doc.body.secBArray" hide-actions hide-headers class="elevation-1">

              <template v-slot:items="props" v-slot:no-data="Hello">
                <td class="text-xs-center ">
                  B. {{ props.index + 1 }}
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.discussionT_b" single-line solo flat placeholder="Discussion Topic ">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.purpose_b" single-line solo flat placeholder="Purpose"></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.responsibility_b" single-line solo flat placeholder="Responsibility"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.timeframe_b" single-line solo flat placeholder="Timeframes"></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <div class="text-truncate white--text">
                  SECTION B: MATTERS ARISING
                  </div>
                </td>
              </template>
            </v-data-table>

            <v-data-table  :items="doc.body.secCArray" hide-actions hide-headers class="elevation-1">

              <template v-slot:items="props" v-slot:no-data="Hello">
                <td class="text-xs-center ">
                  C. {{ props.index + 1 }}
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.discussionT_c" single-line solo flat placeholder="Discussion Topic ">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.purpose_c" single-line solo flat placeholder="Purpose"></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.responsibility_c" single-line solo flat placeholder="Responsibility"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.timeframe_c" single-line solo flat placeholder="Timeframes"></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <div class="text-truncate white--text">
                  SECTION C: MATTERS FOR DISCUSSION 
                  </div>
                </td>
              </template>
            </v-data-table>

            <v-data-table  :items="doc.body.secDArray" hide-actions hide-headers class="elevation-1">

              <template v-slot:items="props" v-slot:no-data="Hello">
                <td class="text-xs-center ">
                  D. {{ props.index + 1 }}
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.discussionT_d" single-line solo flat placeholder="Discussion Topic ">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.purpose_d" single-line solo flat placeholder="Purpose"></v-text-field>
                </td>
                 <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.responsibility_d" single-line solo flat placeholder="Responsibility"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.timeframe_d" single-line solo flat placeholder="Timeframes"></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  
                  <div class="text-truncate white--text">
                  SECTION D: ANNOUNCEMENT AND CLOSURE
                  </div>
                </td>
              </template>
            </v-data-table>

          </v-flex>

          <v-flex v-if="$route.params.location != 'records'" xs12>
            <v-layout wrap>
              <v-flex xs12 md6>
                <p class="text-xs-left">Sign Below</p>
                <VueSignaturePad
                  class="signature-pad"
                  max-width="480px"
                  height="200px"
                  ref="signaturePad"
                  :options="{ onEnd }"
                />
                <v-btn flat color="warning" @click="clear">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>
              
            </v-layout>
            
            <v-flex
              v-for="signatory in doc.body.signatures"
              :key="signatory.SurName"
              xs12
              class="my-5"
            >
              <v-flex xs12>
                <p v-html="signatory.response"></p>
              </v-flex>
              <v-flex xs4>
                <img style="width:100%" :src="signatory.signature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{signatory.SurName}}</h2>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>

                
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>

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
  name: 'Attendance',
  components: {
    Toolbar,
    SelectUsers,
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
          updateValue : "disposal"
        },

      hasParentId : false,
      
      pendingMeetings : [],

        headers: [{
            text: 'Item No',
            align: 'left',
            sortable: false,
            value: '',
            width: "10%"
          },
          {
            text: 'DISCUSSION',
            value: '',
          },
          {
            text: 'RESOLUTIONS',
            value: 'fat',
            width: "20%"
          },
          {
            text: 'RESPONSIBLE OFFICIAL',
            value: 'fat',
            width: "20%"
          },
          {
            text: 'TIME FRAMES',
            value: 'fat',
            width: "20%"
          },
         
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
  border: 1px solid #DDDDDD;
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
