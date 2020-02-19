<template>

  <v-container grid-list-md fluid>
    <v-layout justify-space-between>

      <v-flex >
        <Toolbar :data="doc" />
      </v-flex>

      <v-flex xs2></v-flex>
      <v-flex></v-flex>
      
      <v-flex xs9>
        
        <v-flex justify-end>
          <hr style="color:grey">
        </v-flex>
        <v-layout row wrap>
          
          <v-flex xs12>

            <h3 class="text-xs-center">SPECIFICATION FORM</h3>

            <v-flex xs12>
              <v-card>
                <v-card-text>
                  This specification form must be completed by requisitioning officer for the approval of the
                  Responsibility
                  Manager to enable procurement to provide with accurate quotations. This form will be referred back to
                  the
                  office of the requisitioning officer should he/she fails to comply with the request.
                </v-card-text>
              </v-card>
            </v-flex>

            <v-layout wrap justify-right>
              <v-flex sm12 md12 lg12>
                <h2>Requesting Officer : <u>{{ doc.body.requestingOfficer.SurName }}</u></h2>
                  <h4>
                    <u>{{doc.body.requestingOfficer.Designation}}</u> |
                    <span class="grey--text"><u>{{doc.body.requestingOfficer.Department}} </u></span>
                  </h4>
              </v-flex>
              <v-flex xs12 md12 lg2>
                <p>Reference number <b><u>{{ doc.ref }} </u></b> </p>
                
              </v-flex>
              <v-flex sm12 md12 lg4>
                
                <p>Telephone No: <b><u>{{ doc.body.telephone }}</u> </b> </p>
              </v-flex>
              <v-flex sm12 md12 lg4>
               
                <p>Fax NO: <b><u>{{ doc.body.fax }}</u> </b> </p>
              </v-flex>
            </v-layout>


            <v-layout wrap>
              <v-flex sm12 md12 lg6>

                  <h2>Directorate: <u>{{ doc.body.directorate.SurName }}</u></h2>
                  <h4>
                    <u>{{doc.body.directorate.Designation}}</u> |
                    <span class="grey--text"><u>{{doc.body.directorate.Department}}</u></span>
                  </h4>
              </v-flex>
              <v-flex sm12 md12 lg4>
                 <p>Date : <b><u>{{ doc.body.date }} </u></b> </p>
              </v-flex>
            </v-layout>

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
                  {{ props.index + 1 }}
                </td>
                <td class="text-xs-lef">
                  {{props.item.description}}
                </td>
                <td class="text-xs-left ">
                  {{ props.item.quality }}
                </td>
               
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">
                  No Form Input Fields
                </div>
              </template>
            </v-data-table>
          </v-flex>


          <v-flex xs12 pt-1 mb-0 pb-0>
            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Requesting Officer : </p>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>

              <v-flex xs12 lg3>
                <p>Date : <u>{{ doc.body.date2 }}</u></p>
              </v-flex>

            </v-layout>

            <v-layout wrap class="pb-0 mb-0">

              <v-flex v-if="$route.params.location != 'records'" xs12>
                <p class="text-xs-left">Responsible Manager :</p>
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
              class="pt-0 mt-0"
              
            >
              
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{signatory.SurName}}</h2>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>

               
                </v-flex>

              </v-layout>
            </v-flex>

            <v-flex v-if="$route.params.location != 'records'">
              
              <v-btn color="primary" small dark @click="setActio('Approved')">Approved</v-btn>
              <v-btn color="warning" small dark @click="setActio('Disapproved')">Disapproved</v-btn>
              <br>
              {{ this.doc.body.action }}<br>
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
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import {
  createDoc
} from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: 'SpecificationForm',
  components: {
    Toolbar,
    SelectUsers,
  },

  data() {
    return {

      menu1a: false,
      menu1b: false,
      menu2a: false,
      menu2b: false,
      menu: false,

      //time picker
      
      modal2: false,
      //

      action : "",
      headers: [{
          text: 'Item No',
          align: 'left',
          sortable: false,
          value: 'name',
          width: "10%"
        },
        {
          text: 'Detailed Description',
          value: 'calories',
        },
        {
          text: 'Quality',
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
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      console.log(this.doc.body.signatures)
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures.map(function(e) { return e.EmailAdress; }).indexOf(store.state.user.EmailAdress);    
      let user = this.doc.body.signatures[pos]
      user.signature = data;
      user.signatureDate = Date.now();
      console.log(user);
      console.log("=== End ===");
    },
    setActio(action){
      this.doc.body.action = action
      //this.action = action
    }
  },

  async created() {
    console.log("eeeeeeeeeeeeeeeeeeeeeeREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",this.ref, this.$route.params.id);
    
    await store.dispatch("getDocById", this.$route.params.id);
    console.log("EEEEEaaaaaaaaaaaaaaaaaaaaaaaaaE",this.doc );
    //this.requestingOfficer.Surname = JSON.stringify(store.state.doc.body.requestingOfficer).SurName;
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
