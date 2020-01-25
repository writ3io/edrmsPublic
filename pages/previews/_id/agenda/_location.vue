<template>

  <v-container grid-list-md>
    <v-layout row wrap justify-space-between >

      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex >
        <v-layout>
          <v-flex xs12>
              
              <span v-if="doc.docStage == 'attendance'">
                <v-btn color="warning" round @click="navigate('creation-fileplan-subseries-templates-ref-attendance', '/creation/subseries/templates/1-1-1/attendance')">
                  Attendence
                </v-btn>
                <v-btn disabled round >
                  Meeting
                </v-btn>
              </span>

              <span v-if="doc.docStage == 'meeting'">
                <v-btn color="primary" round @click="openFromRecords()">
                  Attendence
                </v-btn>
                <v-btn color="warning" round @click="navigate('creation-fileplan-subseries-templates-ref-minutes', '/creation/subseries/templates/1-1-P/minutes')">
                  Meeting
                </v-btn>
              </span>
              
              <span v-if="doc.docStage == 'disposal'">
                <v-btn color="primary" round @click="openFromRecords()">
                  Attendence
                </v-btn>
                <v-btn color="primary" round @click="openFromRecords()">
                  Meeting
                </v-btn>
              </span>

            </v-flex>
        </v-layout>
      </v-flex>

      

      <v-flex xs8>
        <v-flex justify-end>
          <hr style="color:grey">
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>

            <h3 class="text-xs-center red--text text">CONFIDENTIAL</h3>

            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0" >
                    <h3 class="text-xs-center">AUDIT REVIEW SESSION</h3><br>
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
                <h2>Chairperson : {{ chairperson.SurName }}</h2>
                <h4>
                  {{ chairperson.Designation}} |
                  <span class="grey--text">{{chairperson.Department}}</span>
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
                <td class="text-xs-center px-0 py-0">
                  
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="5" class="text-xs-center px-0 py-0 mx-0 primary">
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
                <td class="text-xs-center px-0 py-0">
                   
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="5" class="text-xs-center px-0 py-0 mx-0 primary">
                  
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
                <td class="text-xs-center px-0 py-0">
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="5" class="text-xs-center px-0 py-0 mx-0 primary">
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
                <td class="text-xs-center px-0 py-0">
                 
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              <template v-slot:footer>
                <td colspan="5" class="text-xs-center px-0 py-0 mx-0 primary">
                  
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
import Toolbar from "~/components/PreviewToolbar";
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
        chairperson : {
            SurName : "",
            Designation : "",
            Department : ""
        },
        headers: [{
            text: 'Item No',
            align: 'left',
            sortable: false,
            value: 'name',
            width: "10%"
          },
          {
            text: 'DISCUSSION TOPIC',
            value: 'calories',
          },
          {
            text: 'PURPOSE',
            value: 'fat',
            width: "20%"
          },
          {
            text: 'RESPONSIBILITY',
            value: 'fat',
            width: "20%"
          },
          {
            text: 'Actions',
            value: 'carbs',
            width: "10%"
          },
        ],

      
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
   methods: {
    navigate(name, navPath){
      
      this.$router.push({ 
        name: name,
        path: navPath,
      
        params : {
          docRef : this.doc.body.docRef,
          parentId : this.doc.id,
          docStage : this.doc.docStage,
        } ,
        
        });
    },

    openFromRecords(){
      alert ("Go open from records for now")
    }

  },

  async created() {
    await store.dispatch("getDocById", this.$route.params.id);
    
    /***then(()=> {
    console.log("sapppppppppppppppppppppp",store.state.doc.body.chairperson)
       this.chairperson.SurName = this.doc.body.chairperson.SurName || "";
         this.chairperson.Designation = store.state.doc.body.chairperson.Designation || "";
         this.chairperson.Department = store.state.doc.body.chairperson.Department || "";
    }
         );

    } ***/
  }
  }
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
