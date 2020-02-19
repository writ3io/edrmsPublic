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
                <v-text-field v-model="doc.body.unit" label="Unit:">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="doc.body.infrastructure" label="Infrastructure:">
                </v-text-field>
              </v-flex>
              <v-flex sm12>
                <v-text-field v-model="doc.body.fund" label="Fund">
                </v-text-field>
              </v-flex>
              <v-flex sm12>
                <v-text-field v-model="doc.body.objective" label="Objective:  ">
                </v-text-field>
              </v-flex>

              <v-flex sm12>
                <v-text-field v-model="doc.body.project" label="Project:  ">
                </v-text-field>
              </v-flex>

              <v-flex sm12>
                <v-text-field v-model="doc.body.responsibilty" label="Responsibility: :">
                </v-text-field>
              </v-flex>
              <v-flex sm12>
                <v-text-field v-model="doc.body.item" label="Item: ">
                </v-text-field>
              </v-flex>
              <v-flex sm12>
                <v-text-field v-model="doc.body.assets" label="Assets: ">
                </v-text-field>
              </v-flex>

              <v-flex sm12>
                <v-text-field v-model="doc.body.indicator" label="Indicator: ">
                </v-text-field>
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
                <td class="text-xs-center px-0 py-0">

                  <v-icon small color="red " @click="removeRow(props.index)">
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
                <td colspan="8" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
          
          </v-flex>

   
          <v-flex xs12 pt-1>
          

            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Sign Here : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
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
  name: 'CommitmentRegisterForm',
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

      headers: [{
          text: 'DATE',
          align: 'left',
          sortable: false,
          value: '',
        },
        {
          text: 'ITEM DESCRIPTION',
          value: '',
           width: "30%"
        },
        {
          text: 'ORDER NO.',
          value: '',
         
        },
        {
          text: 'COMPANY/SUPPLIER',
          value: '',
          width: "20%"
        },
        {
          text: 'ESTIMATED EXPENDITURE',
          value: '',
        },
        {
          text: 'ESTIMATED BALANCE',
          value: '',
        },
        {
          text: 'ACTUAL BALANCE',
          value: '',
        },
        {
          text: 'Actions',
          value: 'carbs',
        },
      ],

      iSign: false,
      doc: {
        ref: "1-1-1",
        template: "commitmentRegisterForm",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          unit : "",
          infrastructure : "",
          fund : "",
          objective: "",
          project: "",
          responsibility : "",
          item : "",
          assets : "",
          indicator : "",
          tr: [{
              date : "",
              description: "",
              quality: "",
              order: "",
              supplier: "",
              estExpenditure : "",
              estBalance : "",
              actualBalance : ""
            },
            {
              date : "",
              description: "",
              quality: "",
              order: "",
              supplier: "",
              estExpenditure : "",
              estBalance : "",
              actualBalance : ""
            },
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate : new Date().toISOString().substr(0, 10),
          signatures: [],
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
    }
  },
  methods: {
    ...signatureHelpers(),
    setRecipients(users) {
      this.doc.recipients = users;
    },
    setSigners(users) {
      this.doc.body.signatures = users;
    },
    onEnd() {
      this.setAuthorSignature();
    },
    addRow() {
      this.doc.body.tr.push({});
    },
    removeRow(index) {
      this.doc.body.tr.splice(index, 1);
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

.tg  {
  border-collapse:collapse;
  border-spacing:0;
  border-color:#ccc;
  }
.tg td{
  font-family:Arial, sans-serif;
  font-size:14px;
  padding:10px 5px;
  border-style:solid;
  border-width:1px;
  overflow:hidden;
  word-break:normal;
  border-color:#ccc;
  color:#333;
  background-color:#fff;
  }
.tg th{
  font-family:Arial, sans-serif;
  font-size:14px;
  font-weight:normal;
  padding:10px 5px;
  border-style:solid;
  border-width:1px;
  overflow:hidden;
  word-break:normal;
  border-color:#ccc;
  color:#333;
  background-color:#f0f0f0;
  }
.tg .tg-xrmn{
  font-weight:bold;
  font-style:italic;
  font-size:16px;
  font-family:Verdana, Geneva, sans-serif !important;;
  text-align:left;
  vertical-align:top}
.tg .tg-0lax{
  text-align:left;
  vertical-align:top
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
