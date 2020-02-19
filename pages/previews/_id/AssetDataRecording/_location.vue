<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

      <!-- <v-flex xs2></v-flex>
      <v-flex></v-flex>-->
      <v-flex xs9>
        <!-- <v-flex justify-end>
              <hr style="color:grey" />
        </v-flex>-->
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">ASSET DATA RECORDING FORM</h3>

            <v-card>
              <br />

              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers2"
                      :items="doc.body.phase2"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.item.description }}</td>

                        <td>
                          {{props.item.boolean}}
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-flex xs12 sm6>
                      <strong>Folio No.:</strong>{{doc.body.folioNo}}
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-text class="pt-0 mt-0">
                <v-layout xs12 wrap border>
                  <v-flex>
                    <v-data-table
                      :headers="headers"
                      :items="doc.body.phase1"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.item.description }}</td>

                        <td>
                        {{props.item.inputSpace}}
                        </td>

                        <td class="comment-bg">{{ props.item.comment }}</td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>

                    <v-data-table
                      :headers="headers3"
                      :items="doc.body.phase3"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">{{ props.header.text }}</span>
                          </template>
                          <span>{{ props.header.text }}</span>
                        </v-tooltip>
                      </template>

                      <template v-slot:items="props" v-slot:no-data>
                        <td class>{{ props.item.description }}</td>

                        <td>
                          <v-text-field
                            v-model="props.item.inputSpace"
                            solo
                            flat
                            placeholder
                            class="styled-input"
                          ></v-text-field>
                        </td>

                        <td class="comment-bg">{{ props.item.comment }}</td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-text class="pt-0">
                <v-layout xs12 wrap>
                  <v-flex xs12 pt-1>
                    <v-layout wrap>
                      <v-flex xs12 lg6>
                        <v-flex xs12 lg6>
                          <p>Signature:</p>
                          <img style="width:100%" :src="doc.body.authorSignature" alt />
                        </v-flex>
                      </v-flex>

                      <v-flex xs12 lg3>
                        <p>Date: {{doc.body.authorSignatureDate}}</p>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs12 lg4>
                    <strong>User Parsel No.:</strong>{{doc.body.parselNo}}
                  </v-flex>

                  <v-flex xs12 lg6>
                       <strong>Verifier Name :</strong>{{doc.body.verifierName}}
                  </v-flex>
                  <v-flex xs12 lg6>
                      <strong>Capture Initial :</strong>{{doc.body.captureInitial}}
                  </v-flex>
                </v-layout>
              </v-card-text>

              <br />
            </v-card>
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
import Editor from "@tinymce/tinymce-vue";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  name: "AssetDataRecording",
  components: {
    editor: Editor,
    Toolbar,
    SelectUsers
  },

  data() {
    return {
      menu1a: false,
      menu1b: false,
      menu2a: false,
      menu2b: false,
      menu3a: false,
      menu3b: false,
      menu4a: false,
      menu4b: false,

      headers2: [
        {
          text: "-",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "YES / NO",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],
      headers3: [
        {
          text: "VEHICLES ONLY",
          align: "center",
          sortable: false,
          value: ""
          //   width: "10%"
        }
      ],

      headers: [
        {
          text: "ALL ASSETS",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        }
        // {
        //   text: "ITEM CHECKED",
        //   value: ""
        // },
        // {
        //   text: "YES / NO",
        //   value: ""
        //   //   width: "10%"
        // },
        // {
        //   text: "COMMENTS",
        //   value: ""
        // }
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
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

.main-heading {
  border: 2px solid #dddddd;
  padding: 5%;
  border-radius: 5px;
}

.card-border {
  border: 2px solid #dddddd;
  padding: 5px 10px;
}
.comment-bg {
  background-color: #f4f4f4;
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

.styled-input {
  min-width: 200px;
  /* font-size: 20pt; */
}
</style>
