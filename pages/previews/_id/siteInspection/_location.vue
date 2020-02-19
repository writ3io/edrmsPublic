<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc" />
        </v-layout>
      </v-flex>

     
      <v-flex xs9>
        <v-flex justify-end>
          <hr style="color:grey" />
        </v-flex>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">SITE INSPECTION</h3>

            <v-card>
              <v-card-title>
                <v-flex xs12 lg6>
                  <p><strong>Site:</strong>{{doc.body.site}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                  <p><strong>Sec Company:</strong>{{doc.body.secCompany}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                 <p><strong>Date:</strong>{{doc.body.date}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                  <p><strong>Number Of Guards:</strong>{{doc.body.numberOfGuards}}</p>
                </v-flex>
              </v-card-title>
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
                        <td class>{{ props.index + 1 }}.</td>
                        <td class>{{ props.item.description }}</td>
                        <td class>
                          {{props.item.condition}}
                        </td>
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-text>
                <v-flex xs12>
                  <p><strong>Comments:</strong>{{doc.body.comments}}</p>
                </v-flex>

                <v-flex xs12>
                  <v-layout wrap>
                    <v-flex sm12 md12 lg6>
                      <p><strong>END User:</strong>{{doc.body.signatures[0].SurName}}</p> 
                    </v-flex>
                    <v-flex sm12 md12 lg4>
                      <p><strong>Date:</strong>{{doc.body.date2}}</p>
                    </v-flex>
                    <v-flex sm12 md12 lg6>
                     <p><strong>Receiving Officer:</strong> <span v-if="doc.body.signatures != []"> {{doc.body.signatures[1].SurName}}</span></p> 
                    </v-flex>
                    <v-flex sm12 md12 lg4>
                      <p><strong>Date:</strong>{{doc.body.date3}}</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <br />
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">CHECK LIST FOR AUDIT</h3>

            <v-card>
              <v-card-title>
                <v-flex xs12 lg6>
                  <p><strong>Institution/ Office:</strong>{{doc.body.recomandations}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                  <p><strong>Date:</strong>{{doc.body.date4}}</p>
                </v-flex>
              </v-card-title>
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
                        <td class>{{ props.index + 1 }}.</td>
                        <td class>{{ props.item.description }}</td>
                        <td class>
                          {{props.item.boolean}}
                        </td>
                        <td class>
                          {{props.item.comment}}
                        </td>
                       
                      </template>

                      <template v-slot:no-data>
                        <div :value="true" class="text-xs-center">No Form Input Fields</div>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-text>
                <v-flex xs12>
                  <p><strong>Recomandations:</strong>{{doc.body.recomandations}}</p>
                </v-flex>
              </v-card-text>

              <v-card-title>
                <v-flex xs12 sm6>
                  <p><strong>END User:</strong>{{doc.body.signatures[2].SurName}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                 <p><strong>Date:</strong>{{doc.body.date5}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                  <p><strong>Receiving Officer:</strong>{{doc.body.signatures[3].SurName}}</p>
                </v-flex>

                <v-flex xs12 sm6>
                    <p><strong>Date:</strong>{{doc.body.date6}}</p>
                </v-flex>
              </v-card-title>
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
  name: "siteInspection",
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

      headers: [
        {
          text: "ITEM No.",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ITEM CHECKED",
          value: ""
        },
        {
          text: "CONDITION",
          value: ""
          //   width: "10%"
        }
        // {
        //   text: "VENUE",
        //   value: ""
        // },
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],
      headers2: [
        {
          text: "ITEM No.",
          align: "left",
          sortable: false,
          value: ""
          //   width: "10%"
        },
        {
          text: "ITEM CHECKED",
          value: ""
        },
        {
          text: "YES / NO",
          value: ""
          //   width: "10%"
        },
        {
          text: "COMMENTS",
          value: ""
        }
        // {
        //   text: "TIME",
        //   value: "",
        //   width: "10%"
        // }
      ],

       signature: null,
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      loading: false,
      min_height: 320,
      plugins:
        "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
      toolbar:
        "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
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
</style>
