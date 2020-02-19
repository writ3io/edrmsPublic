<template>
  <div id="letter">
   
    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2>
          <Toolbar :data="doc" />

        </v-flex>
        <v-flex column xs10>
<v-layout column xs10>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td colspan="2" valign="top">
                <h2>
                    WEEKLY SCHEDULE
                </h2>
            </td>
        </tr>
        <tr>
            <td   align="top">
                <h2>
                    Surname and Initials
                </h2>
            </td>
            <td  align="top">
               
            </td>
        </tr>
        <tr>
            <td  align="top">
                <p>
                    <strong>Position</strong>
                </p>
            </td>
            <td   align="top">
                <p align="center">
                    
                </p>
            </td>
        </tr>
        <tr>
            <td  align="top">
                <p>
                    <strong>Date</strong>
                </p>
            </td>
            <td  align="top">
                <p align="center">
                    <strong></strong>
                </p>
            </td>
        </tr>
    </tbody>
</table>

<br>
<br>
<h3>Travelling Plan</h3>
<table border="1" cellspacing="0" cellpadding="0" >
   
    <tbody>
      <tr>
            <td  align="top">
                <p align="center">
                    <strong>DATE</strong>
                </p>
            </td>
            <td  align="top">
                <p align="center">
                    <strong>PLACE</strong>
                </p>
            </td>
            <td  align="top">
                <p align="center">
                    <strong>PURPOSE</strong>
                </p>
            </td>
            <td  align="top">
                <p align="center">
                    <strong>TIME</strong>
                </p>
            </td>
            <td></td>
        </tr>
        <tr v-for="(item, index) in doc.body.travelling_plan" :key="index">
            <td align="top">
               <v-text-field v-model="item.date"  solo></v-text-field>
            </td>
            <td  align="top">
               <v-text-field v-model="item.place"  solo></v-text-field>
            </td>
            <td align="top">
               <v-text-field v-model="item.purpose"  solo></v-text-field>
            </td>
            <td  align="top">
               <v-text-field v-model="item.time"  solo></v-text-field>
            </td>
             <td><v-btn v-on:click="delete_row(doc.body.travelling_plan, index)" small color="error">Delete</v-btn></td>
        </tr>
          
    </tbody>
    <v-btn v-on:click="add_travelling_plan" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>
</v-layout  >

<br>

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
                <h2>{{signatory.response}}</h2>
                <div v-html="signatory.comment"></div>
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
                  <h2
                    class="text-xs-left"
                  >{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- Responses -->
        </v-flex>

                    </v-layout>
            
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/PreviewToolbar";
import SelectUsers from "~/components/SelectUsers";
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
import record from "~/services/docLog";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
  components: {
    editor: Editor,
    Toolbar,
    SelectUsers
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
    users() {
      return store.state.users;
    }
  },watch: {
    doc(data) {
      console.log("We have data!", data);

      let pos = this.doc.body.signatures
        .map(function(e) {
          return e.EmailAdress;
        })
        .indexOf(store.state.user.EmailAdress);

      this.signer = this.doc.body.signatures[pos];
    
    }}
  ,
  methods: {
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
    },                                                                                                                                                                                                                                                      
  
  delete_row(doc, index) {
        if(doc.length != 1 ){
          doc.splice(index, 1)
        }
      }
  }
  ,
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
