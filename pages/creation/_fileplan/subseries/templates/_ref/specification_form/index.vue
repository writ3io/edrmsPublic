<template>

  <v-container grid-list-md>
    <v-layout justify-space-between>

      <v-flex mb-5>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs2></v-flex>
      <v-flex></v-flex>
      <v-flex xs8>
        <v-flex justify-end>
          <hr style="color:grey">
        </v-flex>
        <v-layout wrap>
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
                <SelectUsers v-on:getUsers="setRequestingOfficer($event)"
                  label="Surname and initials of the requesting officer:"  />
              </v-flex>
              <v-flex xs12 md12 lg2>
                <v-text-field v-model="doc.ref" label="Reference number:">
                </v-text-field>
              </v-flex>
              <v-flex sm12 md12 lg4>
                <v-text-field v-model="doc.body.telephone" label="Telephone No:">
                </v-text-field>
              </v-flex>
              <v-flex sm12 md12 lg4>
                <v-text-field v-model="doc.body.fax" label="Fax NO: ">
                </v-text-field>
              </v-flex>
            </v-layout>


            <v-layout wrap>
              <v-flex sm12 md12 lg6>
                  <SelectUsers v-on:getUsers="setDirectorate($event)"
                    label="Directorate: " />
              </v-flex>
              <v-flex sm12 md12 lg4>
                <v-menu v-model="menu1a" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.date" label="Date :" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date" @input="menu1b = false"></v-date-picker>
                </v-menu>
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
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.description" single-line solo flat
                    placeholder="Detailed Description">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.quality" single-line solo flat placeholder="Quality"></v-text-field>
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
                <td colspan="4" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
          </v-flex>

          <v-flex xs12 pt-1>
            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Requesting Officer : </p>
                <VueSignaturePad 
                  class="signature-pad" 
                  max-width="480px" 
                  height="200px" 
                  ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu2a" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.date2" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date2" @input="menu2b = false"></v-date-picker>
                </v-menu>
              </v-flex>

            </v-layout>

            <v-flex sm12 md12 lg12>
                <SelectUsers v-on:getUsers="setResponsibleManager($event)"
                  label="Add Responsible Manager:"  />
              </v-flex>

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
        {
          text: 'Actions',
          value: 'carbs',
          width: "10%"
        },
      ],

      iSign: false,
      doc: {
        ref: this.$route.params.ref || "",
        template: "specification_form",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          requestingOfficer : {},
          telephone : "",
          fax : "",
          date: new Date().toISOString().substr(0, 10),
          date2: new Date().toISOString().substr(0, 10),
          action : "",
          directorate : {
            CellPhoneNumber:"",
            Department:"",
            Designation:"",
            EmailAdress:"",
            OfficeNumber:"",
            PersonalNumber:"",
            PhoneNumber:"",
            SurName:""
          },
          responsibleManger : {},
          tr: [{
              description: "",
              quality: ""
            },
            {
              description: "",
              quality: ""
            },
          ],
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: []
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
    setRequestingOfficer(users) {
      this.doc.body.requestingOfficer = users;
    },
    setDirectorate(users) {
      this.doc.body.directorate.CellPhoneNumber = users.CellPhoneNumber;
      this.doc.body.directorate.Department = users.Department;
      this.doc.body.directorate.EmailAdress = users.EmailAdress;
      this.doc.body.directorate.OfficeNumber = users.OfficeNumber;
      this.doc.body.directorate.PersonalNumber = users.PersonalNumber;
      this.doc.body.directorate.PhoneNumber = users.PhoneNumber;
      this.doc.body.directorate.SurName = users.SurName;
    },

    setResponsibleManager(users) {
      //this.doc.body.responsibleManger = users;
      this.doc.body.signatures.push(users);
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
