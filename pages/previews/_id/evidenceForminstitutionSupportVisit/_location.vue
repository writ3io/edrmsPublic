<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex column xs10>
<v-layout column xs10>

<h3>INSTITUTIONS VISITED</h3>

<br>
<table border="1" cellspacing="0" cellpadding="0" >
    <tbody>
        <tr>
            <td width="52" valign="top">
                <p>
                    <strong>DATE</strong>
                </p>
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    <strong>INSTITUTION NO.1</strong>
                </p>
            </td>
            <td width="133" valign="top">
                <p>
                    <strong>REASONS FOR A VISIT</strong>
                </p>
            </td>
            <td width="136" valign="top">
                <p>
                    <strong>PASSENGER</strong>
                </p>
            </td>
            <td width="177" valign="top">
                <p>
                    <strong>INSTITUTION STAMP AND SIGNATURE</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
                <p>
                    Surname &amp; Initials (head/rep)
                </p>
            </td>
            <td width="66" valign="top">
                <p>
                    Time
                </p>
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" rowspan="3" valign="top">

               <p class="text-xs-left">BEC SIGNATURES : </p>
               <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select BEC:" single />

            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
              <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="66" valign="top">
               <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="133" valign="top">
              <v-text-field v-model="doc.body.institution_1.reason_for_a_visit"  solo></v-text-field>
            </td>
            <td width="136" valign="top">
               <v-text-field v-model="doc.body.institution_1.passenger"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
                <p>
                    <strong>DESIGNATION</strong>
                </p>
            </td>
            <td width="66" valign="top">
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    <strong>EMPLOYEE’S SIGNATURE</strong>
                </p>
            </td>
            <td width="133" valign="top">
                <p>
                    <strong>DATE</strong>
                </p>
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="198" colspan="2" valign="top">
                <p class="text-xs-left">EMPLOYEE SIGNATURES : </p>
               <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Employee:" single />
            </td>
            <td width="133" valign="top">
              <v-text-field v-model="doc.body.institution_1.passenger"  solo></v-text-field>
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
                <p>
                    <strong>DATE</strong>
                </p>
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    <strong>INSTITUTION NO.2</strong>
                </p>
            </td>
            <td width="133" valign="top">
                <p>
                    <strong>REASONS FOR A VISIT</strong>
                </p>
            </td>
            <td width="136" valign="top">
                <p>
                    <strong>PASSENGER</strong>
                </p>
            </td>
            <td width="177" valign="top">
                <p>
                    <strong>INSTITUTION STAMP AND SIGNATURE</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
                <p>
                    Surname &amp; Initials (head/rep)
                </p>
            </td>
            <td width="66" valign="top">
                <p>
                    Time
                </p>
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
            <td width="177" rowspan="3" valign="top">
            </td>
        </tr>
        <tr>
             <td width="52" valign="top">
            </td>
            <td width="132" valign="top">
              <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="66" valign="top">
               <v-text-field v-model="doc.body.institution_1.surname_initials"  solo></v-text-field>
            </td>
            <td width="133" valign="top">
              <v-text-field v-model="doc.body.institution_1.reason_for_a_visit"  solo></v-text-field>
            </td>
            <td width="136" valign="top">
               <v-text-field v-model="doc.body.institution_1.passenger"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="198" colspan="2" valign="top">
                <p>
                    DESIGNATION
                </p>
            </td>
            <td width="133" valign="top">
            </td>
            <td width="136" valign="top">
            </td>
        </tr>
        <tr>
            <td  valign="top">
            </td>
            <td width="644" colspan="5" valign="top">
            </td>
        </tr>
        <tr>
            <td width="52" valign="top">
            </td>
            <td width="644" colspan="5" valign="top">
                <p>
                    <strong></strong>
                </p>
                <p>
                    <strong>EMPLOYEE’S</strong>
                </p>
                <p>
                    <strong>
                        SIGNATURE…………………………………………………………………………..DATE…………………………………….................
                    </strong>
                </p>
            </td>
        </tr>
    </tbody>
</table>
<br>
<br>
</v-layout  >

        
            <!-- Author's Signature -->
            <v-flex xs12 class="my-5">
              <v-flex xs4>
                <img style="width:100%" :src="doc.body.authorSignature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{doc.author.SurName}}</h2>
                  <h4>
                    {{doc.author.Designation}} |
                    <span class="grey--text">{{doc.author.Department}}</span>
                  </h4>
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{doc.createdAt | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>

            <!-- Author's Signature -->
      <!-- Responses -->
            <v-flex v-if="$route.params.location != 'records'" xs12>
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
            <v-flex
              v-for="signatory in doc.body.signatures"
              :key="signatory.SurName"
              xs12
              class="my-5"
            >
              <v-flex xs12>
                <p v-html="signatory.response"></p>
              </v-flex>
              <v-flex xs4>
                <img style="width:100%" :src="signatory.signature" alt />
              </v-flex>
              <v-layout xs12>
                <v-flex xs8 class="black--text ma-0 font-weight-bold text-sm-left">
                  <h2>{{signatory.SurName}}</h2>
                  <h4>
                    {{signatory.Designation}} |
                    <span class="grey--text">{{signatory.Department}}</span>
                  </h4>
                </v-flex>

                <v-flex xs4>
                  <h2 class="text-xs-left">{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>




            

    </v-flex>
    </v-layout>
    </v-container>    
  </div>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/PreviewToolbar";
import VueSignaturePad from "vue-signature-pad";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
Vue.use(Editor);

Vue.use(VueSignaturePad);
export default {
  components: {
    editor: Editor,
    Toolbar
  },
  data() {
    return {
      user: {},
      users: [],
      loading: false,
      signatories: [],
      signature: "",
      ref: "",
    
      action: {},

      signer: {
        action: {}
      },
      min_height: 320
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

      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);

      this.signer = this.doc.body.signatures[pos];
    
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
      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);
      let user = this.doc.body.signatures[pos];
      user.signature = this.signature;
      user.signatureDate = Date.now();
      console.log(this.doc);
    },
     // sign
    onEnd() {
      console.log(this.doc.body.signatures)
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
    console.log(store.state.doc);
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
 td,
  th {
    border: 1px solid #88ac89;
    text-align: left;
    padding: 8px;

  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .top-th {
    background-color: #1fb638
  }
</style>
