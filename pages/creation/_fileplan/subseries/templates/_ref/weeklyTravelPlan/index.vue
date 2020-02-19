<template>
  <div id="letter">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
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
                <v-text-field v-model="doc.body.weekly_schedule_data.surname_initials"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
                <p>
                    <strong>Position</strong>
                </p>
            </td>
            <td   align="top">
               <v-text-field v-model="doc.body.weekly_schedule_data.position"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
             Date
            </td>
            <td  align="top">
                 <v-text-field v-model="doc.body.weekly_schedule_data.date"  solo></v-text-field>
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

<br>


<br>

<v-layout column>
            
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
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>
            </v-flex>
            <!-- sign -->

            <v-flex xs12 row>
             <v-flex xs11>
                <h3>Approved By</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" single />
              </v-flex>
              
            </v-flex>

</v-layout>
</v-layout >


        </v-flex>
     

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Toolbar from "~/components/FormToolbar";
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
      series: {},
      saveDialog: false,
      attachments: [],
      isFormValid: true,
      status: "",
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "weeklyTravelPlan",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

          travelling_plan: [{date: "", place: "",  purpose: ""
            , time:""},],

          weekly_schedule_data: {surname_initials: "", position:" ", date: ""},
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
    ...signatureHelpers(),
    setRecipients(users) {
      this.doc.recipients = users;
    },
    setSigners(users) {
      this.doc.body.signatures.push(users);
    },
    onEnd() {
      this.setAuthorSignature();
    }
  ,                                                                                                                                                                                                                                                             
    add_travelling_plan() {
       this.doc.body.travelling_plan.push({date: "", place: "",  purpose: ""
            , time:""})
  },

  delete_row(doc, index) {
        if(doc.length != 1 ){
          doc.splice(index, 1)
        }
      },
  },
 created() {
    console.log(this.ref, this.$route.params.id);
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
