<template>
  <v-container grid-list-md>
    <v-layout justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-layout wrap>
          <v-flex xs12>
            <h2 class="text-xs-center">DATA COLLECTION TABLE 1</h2>

            <br />

            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0">
                  <br />
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    
                    <v-flex xs12 lg6>
                      <strong>BUILDING NAME :</strong>{{doc.body.buildingName}}
                    </v-flex>

                    <v-flex xs12 lg6>
                      <strong>TOWN :</strong>{{doc.body.town}}
                    </v-flex>
                    
                    <v-flex xs12 lg6>
                      <strong>PHYSICAL ADDRESS :</strong>{{doc.body.address}}
                    </v-flex>
                    <v-flex xs12 lg6>
                      <strong>SURBUB :</strong>{{doc.body.surbub}}
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>

            <br />


            

          </v-flex>

          <v-flex xs12>
            

            <v-data-table :headers="headers" :items="doc.body.tr" hide-actions class="elevation-1">
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data>
                <td>
                 {{props.item.barcode}}
                </td>
                <td>
                  {{props.item.existingRoom}}
                <td>
                  {{props.item.occupant}}
                </td>
                <td>
                  {{props.item.location}}
                </td>
                <td>
                  {{props.item.phoneNumber}}
                </td>
                <td>
                 {{props.item.floor}}
                </td>
                <td>
                  {{props.item.directorate}}
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>
            </v-data-table>
            <br />
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
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "DataCollectionTable1",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "ROOM BAR CODE",
          align: "left",
          value: ""
        },
        {
          text: "EXISTING ROOM NUMBER",
          value: ""
        },
        {
          text: "OCCUPANT/RESPONIBLE PERSON NAME & SURNAME",
          value: ""
        },
        {
          text: "LOCATION/ROOM DESCRIPTION",
          value: ""
        },
        {
          text: "PHONE NUMBER",

          value: ""
        },
        ,
        {
          text: "FLOOR",

          value: ""
        },
        ,
        {
          text: "DIRECTORATE",

          value: ""
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

.card-border {
  border: 2px solid #dddddd;
  padding: 5px 10px;
}
</style>

