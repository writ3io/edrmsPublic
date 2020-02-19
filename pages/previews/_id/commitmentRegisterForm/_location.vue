<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>

     

      <v-flex xs8>
        <v-layout wrap>
          <v-flex xs12>

            <h3 class="text-xs-center"> COMMITMENT REGISTER </h3>


            <v-layout wrap justify-right>
             <v-flex xs12>
                
                <p>Unit: <u>{{ doc.body.unit }}</u></p>
              </v-flex>
              <v-flex xs12>
               
                <p>Infrastructure: <u>{{ doc.body.infrastructure }}</u></p>
              </v-flex>
              <v-flex sm12>
                
                <p>Fund: <u>{{ doc.body.fund }}</u></p>
              </v-flex>
              <v-flex sm12>
                
                <p>Objective: <u>{{ doc.body.objective }}</u></p>
              </v-flex>

              <v-flex sm12>
                
                <p>Project: <u>{{ doc.body.project }}</u></p>
              </v-flex>

              <v-flex sm12>
                
                <p>Responsibility: <u>{{ doc.body.responsibilty }}</u></p>
              </v-flex>
              <v-flex sm12>
                
                <p>Item: <u>{{ doc.body.item }}</u></p>
              </v-flex>
              <v-flex sm12>
                
                <p>Assets: <u>{{ doc.body.assets }}</u></p>
              </v-flex>

              <v-flex sm12>
               
                <p>Indicator: <u>{{ doc.body.indicator }}</u></p>
              </v-flex>
            </v-layout>

          </v-flex>
          <v-flex xs12>

           
          </v-flex>

          <v-flex xs12>
          
            <v-data-table :headers="headers" :items="doc.body.tr" hide-actions class="elevation-1">

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
                  <v-text-field v-model="props.item.date" single-line solo flat
                    placeholder="Date">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.description" single-line solo flat
                    placeholder="item Description">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.order" single-line solo flat placeholder="Order No"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.Supplier" single-line solo flat placeholder=" Company/Supplier "></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.estExpenditure" single-line solo flat placeholder="Estimated Expenditure"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.estBalance" single-line solo flat placeholder="Estimated Balance"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.actualBalance" single-line solo flat placeholder="Actual Balance"></v-text-field>
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>

              
            </v-data-table>
          
          </v-flex>

   
          <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <v-flex xs12 lg6>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.authorSignatureDate" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.authorSignatureDate" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>

            </v-layout>

          </v-flex>
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
        }
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
