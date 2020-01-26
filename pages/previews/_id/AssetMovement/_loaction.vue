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
            <h2 class="text-xs-center">ASSET MOVEMENT FORM</h2>

            <br />

            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0">
                  <h3 class="text-xs-center">OLD LOCATION</h3>
                  <br />
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    <v-flex xs12>
                      <strong>LOCATION :</strong>{{doc.body.location}}
                    </v-flex>

                    <v-flex xs12>
                      <strong>ADDRESS :</strong>{{doc.body.address}}
                    </v-flex>
                    <v-flex xs12 lg6>
                      <strong>LOCATION CODE :</strong>{{doc.body.locationCode}}
                    </v-flex>

                    <v-flex xs12 lg6>
                      <strong>ROOM NO.:</strong>{{doc.body.roomNo}}
                    </v-flex>
                    <v-flex xs12>
                      <strong>USERNAME & SURNAME :</strong>{{doc.body.username}}
                    </v-flex>

                    <v-flex xs12>
                      <strong>SECTION :</strong>{{doc.body.section}}
                    </v-flex>
                    <v-flex xs12 lg6>
                      <strong>TEL:</strong>{{doc.body.tel}}
                    </v-flex>
                    <v-flex xs12 lg6>
                     <strong>FLOOR:</strong>{{doc.body.floor}}
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>

            <br />


            <v-flex xs12>
              <v-card>
                <v-card-title class="justify-center pt-0 pb-0">
                  <h3 class="text-xs-center">NEW LOCATION</h3>
                  <br />
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-layout xs12 wrap>
                    <v-flex xs12>
                      <strong>LOCATION:</strong>{{doc.body.location1}}
                    </v-flex>

                    <v-flex xs12>
                       <strong>ADDRESS:</strong>{{doc.body.address1}}
                    </v-flex>
                    <v-flex xs12 lg6>
                     <strong>LOCATION CODE:</strong>{{doc.body.locationCode1}}
                    </v-flex>

                    <v-flex xs12 lg6>
                      <strong>ROOM NO.:</strong>{{doc.body.roomNo1}}
                    </v-flex>
                    <v-flex xs12>
                      <strong>USERNAME & SURNAME :</strong>{{doc.body.username1}}
                    </v-flex>

                    <v-flex xs12>
                      <strong>SECTION:</strong>{{doc.body.section1}}
                    </v-flex>
                    <v-flex xs12 lg6>
                      <strong>TEL:</strong>{{doc.body.tel1}}
                    </v-flex>
                    <v-flex xs12 lg6>
                      <strong>FLOOR : </strong>{{doc.body.floor1}} 
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>


          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">ASSET TO BE MOVED</h3>

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
                {{props.item.description}}
                </td>
                <td>
                  {{props.item.make}}
                </td>
                <td>
                  {{props.item.model}}
                </td>
                <td>
                  {{props.item.serialNumber}}
                </td>

                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-center">CONFIRMATION OF MOVEMENT</h3>

            <v-data-table :headers="headers1" :items="doc.body.tr1" hide-actions class="elevation-1">
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>

              <template v-slot:items="props" v-slot:no-data>
                <td class="text-xs-center">
                 
                    {{props.item.description}}
                    
                </td>
                <td>
                  {{props.item.confirmedBy}}
                </td>
                <td>
                 
                    {{props.item.description}}
                    
                </td>
                <td>
                  {{props.item.doneBy}}
                </td>
                <td>
                 
                    {{props.item.description}}
                    
                </td>
                <td>
                  {{props.item.registerUpdate}}
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
  name: "AssetMovement",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "BARCODE",
          align: "left",
          value: ""
        },
        {
          text: "DESCRIPTION",
          value: ""
        },
        {
          text: "MAKE",
          value: ""
        },
        {
          text: "MODEL",
          value: ""
        },
        {
          text: "SERIAL NUMBER",

          value: ""
        }
      ],
      headers1: [
        {
          text: "-",
          sortable: false,
          align: "left",
          value: ""
        },
        {
          text: "MOVEMENT CONFIRMED BY THE USER",
          value: ""
        },
        {
          text: "-",
          sortable: false,
          value: ""
        },
        {
          text: "MOVEMENT DONE BY ASSET MANAGEMENT",
          value: ""
        },
        {
          text: "-",
          sortable: false,
          value: ""
        },
        {
          text: "ASSET REGISTER UPDATE",
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

