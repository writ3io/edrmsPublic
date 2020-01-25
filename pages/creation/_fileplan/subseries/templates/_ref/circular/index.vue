<template>
  <div id="circular">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>
        <v-flex xs8>
          <v-layout row wrap>
            <v-flex xs12 class="mb-4">
              <v-layout row justify-start>
                <v-flex xs4>
                  <h3>Circular #:</h3>
                   <v-text-field v-model="doc.body.circularNumber"></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-flex xs11>
                <h3>Attention:</h3>
                <v-combobox
                  v-model="doc.body.recipients"
                  :items="users"
                  label="Email To:"
                  multiple
                  chips
                  return-object
                  item-text="SurName"
                  item-value="EmailAdress"
                  rounded
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >
                      <v-avatar
                        class="accent white--text"
                        v-text="data.item.SurName.slice(0, 1).toUpperCase()"
                      ></v-avatar>
                      {{ data.item.EmailAdress }}
                      | {{ data.item.Designation }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
            </v-flex>

            <v-flex xs12>
              <v-layout>
                <v-flex xs11>
                  <h3>SUBJECT:</h3>
                  <v-text-field v-model="doc.body.memosubject"></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <editor
                api-key="7ruk8pq3grn2940r2hkdhb5e7vc5rvtc2kdssi58s9ockt7y"
                v-model="doc.body.instructions"
                ref="editor"
                :init="{plugins,toolbar,min_height}"
              ></editor>
            </v-flex>

            <!-- sign -->
            <v-flex xs12 class="mt-5">
              <h2>Insert Your Signature</h2>
              <v-flex xs12>
                <p class="text-xs-left">Sign Below</p>
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
            </v-flex>
            <!-- sign -->

            <v-flex xs8>
              <v-card-text class="black--text ma-0 font-weight-bold text-sm-left">
                <h2>{{doc.author.SurName}}</h2>
                <h4>
                  {{doc.author.Designation}} |
                  <span class="grey--text">{{doc.author.Department}}</span>
                </h4>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <h2 class="text-xs-left">{{Date.now() | moment("(ddd) DD - MMM - YYYY")}}</h2>
              <hr />
              <h2>Date</h2>
            </v-flex>

            <v-flex xs12>
              <v-switch v-model="iSign" label="Add People To Sign"></v-switch>
            </v-flex>

            <v-flex v-show="iSign" xs12 class="my-5">
              <v-flex xs11>
                <h3>Who to sign:</h3>

                <v-combobox
                  v-model="doc.body.signatures"
                  :items="users"
                  label="Choose Signatory"
                  chips
                  return-object
                  multiple
                  item-text="SurName"
                  item-value="EmailAdress"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >
                      {{ data.item.SurName }}
                      | {{ data.item.Designation }}
                      | {{ data.item.Department }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
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
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
import record from "~/services/docLog";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  components: {
    editor: Editor,
    Toolbar
  },
  data() {
    return {
      series: {},
      saveDialog: false,
      attachments: [],
      isFormValid: true,
      status: "",
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "circular",
        author: store.state.user,
        body: {
          instructions:
            "<!DOCTYPE html><html><head></head><body><ol><li><p><strong>PURPOSE</strong></p></li><li><p><strong>BACKGROUND</strong></p></li><li><strong>INSTRUCTIONS / NOTIFICATION</strong></li></ol></body></html>",
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
      plugins:
        "fullscreen print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help",
      toolbar:
        "fullscreen | basicDateButton | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat"
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
    // sign
    clear() {
      this.$refs.signaturePad.clearSignature();
      this.signature = null;
      this.doc.body.authorSignature = null;
      console.log(this.signature);
    },
    saveSignature() {
      this.doc.body.authorSignature = this.signature;
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      this.doc.body.authorSignature = data;
      console.log("=== End ===", this.doc);
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
.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}
</style>
