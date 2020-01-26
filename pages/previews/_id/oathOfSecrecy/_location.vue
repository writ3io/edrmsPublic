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
            <h2 class="text-xs-center">OATH OF SECRECY</h2>
            <br />

            <v-card>
              <br />

              <h3 class="text-xs-center red--text text">CONFIDENTIAL</h3>
              <p class="text-xs-center">
                <strong>CERTIFICATE PROTECTION OF INFORMATION ACT, 84 OF 1982</strong>
              </p>

              <v-card-text class="pt-0 mt-0">
                <v-alert pa-0 :value="true" type="info">
                  Note:
                  <ol>
                    <li>The certificate must be provided to Security Management Services, after completion.</li>
                    <li>The certificate must be printed and completed by hand.</li>
                  </ol>
                </v-alert>

                <v-layout xs12 wrap>
                  <v-flex xs12 lg5>
                      <strong>(Full Name/Surname) :</strong> {{doc.body.initialsSurname}}
                  </v-flex>
                  <v-flex xs12 lg4>
                      <strong>(Identity Number) :</strong> {{doc.body.identityNumber}}
                  </v-flex>
                  <v-flex xs12 lg3>
                      <strong>(Persal Number) :</strong> {{doc.body.persalNumber}}
                  </v-flex>
                </v-layout>

                <br />

                <v-layout xs12 wrap border class="card-border">
                  <p>Solemnly declare that:</p>
                  <br />

                  <ol>
                    <li>I have taken note of the provisions of the Protection of Information Act (Act 84 of 1982) and in particular the provisions of Section 4 of the Act.</li>
                    <li>I understand that I shall be guilty of an offense if I reveal any information, which I have at my disposal by virtue of my office and concerning which I know or should reasonably know that the security or other interests of the Republic require that it be kept secret from any person other than a person,</li>
                    <li>
                      I understand that the said provisions and instructions shall apply not only during my term of office but also after the termination of my services with the Department; and
                      <ul>
                        <li>to whom I may reveal it; or</li>
                        <li>to whom is my duty to reveal it in the interests of the Republic; or</li>
                        <li>to whom I am authorized by the Head of the Department or by an officer authorized by him to reveal it;</li>
                      </ul>
                    </li>
                    <li>I am fully aware of the serious consequences that may follow any breach or contravention of the said provisions and instructions.</li>
                  </ol>

                  <v-flex xs12>
                      <strong>Place :</strong> {{doc.body.place}}
                  </v-flex>

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

                  <v-flex xs12 lg5>
                    <strong>Witness 1 :</strong> {{doc.body.witness1}}
                  </v-flex>

                  <v-flex xs12 sm4>
                    <strong>Date :</strong> {{doc.body.date1}}
                  </v-flex>

                  <v-flex xs12 lg5>
                      <strong>Witness 2 :</strong> {{doc.body.witness2}}
                  </v-flex>

                  <v-flex xs12 sm4>
                   <strong>Date :</strong> {{doc.body.date2}}
                  </v-flex>

                  <i>
                    <u>Issued by:</u> Security Management,
                    <br />Department of Education: Limpopo
                  </i>
                </v-layout>
                <br />
              </v-card-text>
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
  name: "oathOfSecrecy",
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
          text: "CAPTURING EXAM HALL",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "HALL",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "CONTROL ROOM",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "IT SERVER ROOM",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "MEC MAIN DOOR",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "HOD MAIN DOOR",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "MAIN CASHIER BLOCK D",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "CASHIER BLOCK A",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "SCM",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "REGISTRY",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        },
        {
          text: "ANY OTHER",
          align: "left",
          sortable: false,
          value: "",
          width: "100px"
        }
      ],

      headers5: [
        {
          text: "BLOCK A",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK B",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK C",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK D",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK E",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK F",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK G",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK H",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "BLOCK I",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "WAREHOUSE",
          align: "center",
          sortable: false,
          value: "",
          width: "80px"
        },
        {
          text: "EXAM STRONG ROOM",
          align: "center",
          sortable: false,
          value: "",
          width: "80px",
          hieght: "100px"
        }
      ],

      iSign: false,

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
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
      user.signature = "";
      console.log(user);
    },
    onEnd() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
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
