<template>
  <div id="">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>

      <v-flex xs8>
        <v-layout wrap>
          <v-flex xs12>

            <h3 class="text-xs-center">
                  FEEDBACK ON DISTRIBUTION POINTS AND SECURITY REQUIREMENT FOR END OF THE YEAR EXAMINATION<br>
                  (OCT/NOV 2018)
            </h3>

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
                
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.date" single-line solo flat
                    placeholder="Date">
                  </v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.name" single-line solo flat placeholder="Name"></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.pysical_adress" single-line solo flat ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.nearest_police_station" single-line solo flat ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.key_custodian" single-line solo flat ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.storage_facility" single-line solo flat ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.security_guards" single-line solo flat ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field v-model="props.item.recommendation" single-line solo flat ></v-text-field>
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
                <td colspan="9" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
              </template>
            </v-data-table>
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
  name: 'EvaluationReport',
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
          width: "10%"
        },
        {
          text: 'NAME',
          value: 'calories',
        },
        {
          text: 'PHYSICAL ADRESS',
          value: '',
        },
        {
          text: 'NEAREST POLICE STATION',
          value: '',
        },
        {
          text: 'NAME OF KEY CUSTODIAN',
          value: '',
        },
        {
          text: 'STORAGE FACILITY',
          value: '',
        },
        {
          text: 'NO. OF SECURITY GUARDS',
          value: '',
        },
        {
          text: 'RECOMMENDATION',
          value: '',
        },{
          text: 'Action',
          value: '',
          width: "10%"
        },
      ],

      iSign: false,
      doc: {
        ref: "1-1-1",
        template: "specification_form",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          tr: [{
              description: "",
              quality: ""
            },
            {
              description: "",
              quality: ""
            },
          ],
          docRef: Math.round(+new Date() / 1000),
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
