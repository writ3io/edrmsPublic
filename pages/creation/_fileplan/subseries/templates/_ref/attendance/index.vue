<template>

  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>

      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc"  />
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
                    <v-radio v-for="(item, index) in pendingMeetings" :key="index" :label="JSON.parse(item.body).aud_rev_venue+' - '+JSON.parse(item.body).aud_rev_date" :value="item">
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
      <v-flex xs9> 
        <v-flex justify-end>
        <hr style="color:grey">
      </v-flex>
        <v-layout wrap>
          <v-flex xs12>

            <h2 class="text-xs-center">ATTENDANCE REGISTER </h2>

            <v-layout wrap justify-right>
              <v-flex xs12>
                <h3>A. MEETING / WORKSHOP DESCRIPTION:</h3>
              </v-flex>
              <v-flex xs12 md6 lg6>
                <v-text-field v-model="doc.body.meeting_name" label="Name of Meeting/ Workshop">
                </v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg6>
                <v-text-field v-model="doc.body.meeting_venue" label="Venue of Meeting/ Workshop">
                </v-text-field>
              </v-flex>
            </v-layout>

          </v-flex>


          <v-flex xs12>
            <v-flex xs12>
              <h3>B. ATTENDANCE RECORD: {{TIDs.docReference}}</h3>
            </v-flex>
            <v-data-table :headers="headers" :items="doc.body.delegates" hide-actions class="elevation-1">

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
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.date" single-line solo flat placeholder="Date">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <SelectUsers v-on:getUsers="setAttendee($event, props.index)" label="SURNAME:"  />
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.Initials" single-line solo flat placeholder="INITIALS">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.PersonalNumber" single-line solo flat placeholder="Persal">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.Designation" single-line solo flat placeholder="Position">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.Workstation" single-line solo flat
                    placeholder="Workstation Name H/O, District, Circuit/School">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.Department" single-line solo flat placeholder="Unit">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.OfficeNumber" single-line solo flat placeholder="Office Number">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.EmailAdress" single-line solo flat placeholder="Email">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.PhoneNumber" single-line solo flat placeholder="Cell">
                  </v-text-field>
                </td>

                <td class="text-xs-center px-0 py-0">
                  No
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red" @click="removeDelegate(index)">
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
                <td colspan="12" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="add" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
          </v-flex>

          <v-flex xs12 pt-1>
            <v-layout wrap>
              <v-flex xs12 lg12>
                <h3>C. ATTENDANCE DETAILS :</h3>
              </v-flex>
              <v-flex xs2 lg2>
                <v-text-field v-model="doc.body.number_of_delegs_invited" outlined label="Number of delegates invited">
                </v-text-field>
              </v-flex>

              <v-flex xs2 lg2>
                <v-text-field v-model="doc.body.number_of_delegs_attended" label="Number of delegates who attended">
                </v-text-field>
              </v-flex>

            </v-layout>

            <v-layout wrap>
              <v-flex xs12 lg12 pb-0 mb-0>
                <SelectUsers v-on:getUsers="setFacilitator($event)" label="Chairperson / Facilitator:" />
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
import Toolbar from "~/components/FormToolbar";
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
        updateValue : "meeting"
      },

      hasParentId : false,
      
      pendingMeetings : [],
      headers: [{
          text: 'DATE',
          align: 'left',
          sortable: false,
          value: 'name',
          width: "15%"
        },
        {
          text: 'SURNAME',
          value: '',
          width: "15%"
        },
        {
          text: 'INITIALS',
          value: '',
          width: "10%"
        },
        {
          text: 'Persal ',
          value: '',
          width: "15%"
        },
        {
          text: 'Position ',
          value: '',
          width: "15%"
        },
        {
          text: 'Workstation Name H/O, District, Circuit/School',
          value: '',
          width: "15%"
        },
        {
          text: 'Unit ',
          value: '',
          width: "15%"
        },
        {
          text: 'Office number ',
          value: '',
          width: "15%"
        },
        {
          text: 'Email ',
          value: '',
          width: "15%"
        },
        {
          text: 'Tel/Cell ',
          value: '',
          width: "15%"
        },
        {
          text: 'Sign',
          value: '',
          width: "5%"
        },
        {
          text: 'Action',
          value: '',
          width: "5%"
        }
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        docReference: "",
        template: "attendance",
        author: store.state.user,
        formValid: true,
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          authorSignature: "",
          signatures: [],
          recipients: [],
          chairperson : {},
          delegates : [ 
            {
              Initials : "",
              SurName : "",
              CellPhoneNumber : "",
              Department : "",
              Designation : "",
              EmailAdress : "",
              OfficeNumber: "",
              PersonalNumber: "",
              PhoneNumber : ""
            },
            

           ],
          meeting_venue : "",
          meeting_name : "",
          number_of_delegs_invited : 0,
          number_of_delegs_attended : "",
          bottom_date: new Date().toISOString().substr(0, 10),
          docReference: this.$route.params.docRef,
        }
      },
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
    time() {
      return Date.now();
    },

    users() {
      return store.state.users;
    },
    
  },

  methods: {
    ...signatureHelpers(),
    setRecipients(users) {
      this.doc.recipients = users;
    },
    setFacilitator(users) {
      console.log(users)
      this.doc.body.signatures.push(users);
    },
    setAttendee(users,index) {
        this.doc.body.delegates[index].Initials = users.Initials || "Not Set";
        this.doc.body.delegates[index].SurName = users.SurName || "Not Set";
        this.doc.body.delegates[index].CellPhoneNumber = users.CellPhoneNumber;
        this.doc.body.delegates[index].Department = users.Department;
        this.doc.body.delegates[index].Designation = users.Designation;
        this.doc.body.delegates[index].EmailAdress = users.EmailAdress;
        this.doc.body.delegates[index].OfficeNumber = users.OfficeNumber;
        this.doc.body.delegates[index].PersonalNumber = users.PersonalNumber;
        this.doc.body.delegates[index].PhoneNumber = users.PhoneNumber;
        this.doc.body.number_of_delegs_invited = this.doc.body.delegates.length;
      },
    onEnd() {
      this.setAuthorSignature();
    },
    add() {
      this.doc.body.delegates.push({ });
      this.doc.body.number_of_delegs_invited = this.doc.body.delegates.length;

    }
    ,
    removeDelegate(index) {
      this.doc.body.delegates.splice(index,1);
      this.doc.body.number_of_delegs_invited = this.doc.body.delegates.length;
    },


    dialogClick(){
      this.dialog = false;
      this.hasParentId = true;
      this.TIDs.parentId = this.dialogm1.id,
      this.TIDs.docReference = this.dialogm1.docReference,
      this.doc.docReference = this.dialogm1.docReference,
      this.doc.body.meeting_venue = JSON.parse(this.dialogm1.body).aud_rev_venue,
      this.TIDs.updateValue = "meeting"
      console.log(this.dialogm1);
    },

    setHasParentId(value){
      this.hasParentId = true;
    }
  
  },

  async created() {
    //await store.dispatch("getDocByColumn", {column : "docStage", value : "attendance"});
    
    if(this.$route.params.docRef){
        this.hasParentId = true;
        this.TIDs.parentId = this.$route.params.parentId,
        this.TIDs.docReference = this.$route.params.docRef,
        this.doc.docReference = this.$route.params.docRef,
        this.TIDs.updateValue = "meeting"
    }else{
        //call function to enter selctcted document and set TIDs
      this.pendingMeetings = store.state.trackableDocs;
    }
      
    
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
