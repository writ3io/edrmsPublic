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
                <SelectUsers v-on:getUsers="setSigner($event)" label="Secretariat:"  />
              </v-flex>
              <v-flex xsm12>
                <SelectUsers v-on:getUsers="setSigner($event)" label="Chairperson:"  />
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
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeSecA(props.index)">
                    delete
                  </v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addSecA" color="white">add</v-icon>
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
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeSecB(props.index)">
                    delete
                  </v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addSecB" color="white">add</v-icon>
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
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeSecC(props.index)">
                    delete
                  </v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addSecC" color="white">add</v-icon>
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
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeSecD(props.index)">
                    delete
                  </v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addSecD" color="white">add</v-icon>
                  <div class="text-truncate white--text">
                  SECTION D: ANNOUNCEMENT AND CLOSURE
                  </div>
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
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import record from "~/services/docLog";

import {
  createDoc
} from "~/services/DocsService";

export default {
  name: 'agenda',
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
          {
            text: 'Actions',
            value: 'carbs',
            width: "10%"
          },
        ],


        doc: {
          ref: this.$route.params.ref,
          template: "minutes",
          author: store.state.user,
          formValid: true,
          docReference: "",
          docStage: "",
          signatures : [],
          body: {
            address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
            chairperson: {},
            signatures : [],
            aud_rev_date: new Date().toISOString().substr(0, 10),
            aud_rev_venue: "",
            aud_rev_time : "",
            secAArray: [
              {
              discussionT_a    : "Opening and Welcome",
              purpose_a        : "",
              responsibility_a : "",
              timeframes_a     : ""
              },
              {
              discussionT_a    : "Attendance and Apologies",
              purpose_a        : "",
              responsibility_a : "",
              timeframes_a     : ""
              
              },
              {
              discussionT_a    : "Adoption of Agenda",
              purpose_a        : "",
              responsibility_a : "",
              timeframes_a     : ""
              },
              {
              discussionT_a    : "Adoption of minutes",
              purpose_a        : "",
              responsibility_a : "",
              timeframes_a     : ""
              }
                ],
            secBArray: [{ discussionT_b : "", purpose_b : "",  responsibility_b : "", timeframes_b : "" }],
            secCArray: [{ discussionT_c : "", purpose_c : "",  responsibility_c : "", timeframes_c : "" }],
            secDArray: [{ discussionT_d : "", purpose_d : "",  responsibility_d : "", timeframes_d : "" }],
            docRef: "",
          }
        },
        snackbarText: "",
        snackbar: false,
        snackbarColor: "success",
        loading: false,
      
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
     
      setSigner(users) {
        this.doc.body.signatures.push(users);
      },

      addSecA() { this.doc.body.secAArray.push({}); },
       
      addSecB() { this.doc.body.secBArray.push({});  },
    
      addSecC() { this.doc.body.secCArray.push({}); },
      
      addSecD() {  this.doc.body.secDArray.push({});},
      
      removeSecA(index) {
        this.doc.body.secAArray.splice(index, 1);
      },
      removeSecB(index) {
        this.doc.body.secBArray.splice(index, 1);
      },
      removeSecC(index) {
        this.doc.body.secCArray.splice(index, 1);
      },
      removeSecD(index) {
        this.doc.body.secDArray.splice(index, 1);
      },
        
     dialogClick(){
      this.dialog = false;
      this.hasParentId = true;
      this.TIDs.parentId = this.dialogm1.id,
      this.TIDs.docReference = this.dialogm1.docReference,
      this.doc.docReference = this.dialogm1.docReference,
      this.TIDs.updateValue = "disposal"
      console.log(this.dialogm1);
    },

    setHasParentId(value){
      this.hasParentId = true;
    }
  
  },

  /***
  async created() {
    await store.dispatch("getDocByColumn", {column : "docStage", value : "meeting"});
    
    if(this.$route.params.docRef){
        this.hasParentId = true;
        this.TIDs.parentId = this.$route.params.parentId,
        this.TIDs.docReference = this.$route.params.docRef,
        this.doc.docReference = this.$route.params.docRef,
        this.TIDs.updateValue = "disposal"
    }else{
        //call function to enter selctcted document and set TIDs
      this.pendingMeetings = store.state.trackableDocs;
    }
      
    
  }
  **/
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


</style>
