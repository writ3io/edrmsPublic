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
                   Iternary Log Sheet Of Official Trips
                </h2>
            </td>
        </tr>
        <tr>
            <td   align="top">
                <h2>
                     NAME OF DRIVER 
                </h2>
            </td>
            <td  align="top">
                <v-text-field v-model="doc.body.log_sheet_data.name_of_driver"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
                <p>
                    <strong>BRANCH/SECTION:</strong>
                </p>
            </td>
            <td   align="top">
               <v-text-field v-model="doc.body.log_sheet_data.branch_section"  solo></v-text-field>
            </td>
        </tr>
         <tr>
            <td  align="top">
                <p>
                    <strong>MAKE OF VEHICLE:</strong>
                </p>
            </td>
            <td   align="top">
               <v-text-field v-model="doc.body.log_sheet_data.make_of_vehicle"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
                <p>
                    <strong>MONTH:</strong>
                </p>
            </td>
            <td   align="top">
               <v-text-field v-model="doc.body.log_sheet_data.month"  solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
             REG. NUMBER
            </td>
            <td  align="top">
                 <v-text-field v-model="doc.body.log_sheet_data.reg_number"  solo></v-text-field>
            </td>


        </tr>
    </tbody>
</table>

<br>
<br>

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
                    <strong>Departure / Return</strong>
                </p>
            </td>
            <td  align="top">
                <p align="center">
                    <strong>Purpose of journey</strong>
                </p>
            </td>
            <td  align="top">
                <p align="center">
                    <strong>OFFICIAL KM TRAVELLED</strong>
                </p>
            </td>
            <td></td>
        </tr>
        <tr v-for="(item, index) in doc.body.log_sheet_officials" :key="index">
            <td align="top">
               <v-text-field v-model="item.date"  solo></v-text-field>
            </td>
            <td  align="top">
               <v-text-field v-model="item.departure_return"  solo></v-text-field>
            </td>
            <td align="top">
               <v-text-field v-model="item.purpose_of_journey"  solo></v-text-field>
            </td>
            <td  align="top">
               <v-text-field v-model="item.official_killometers_travelled"  solo></v-text-field>
            </td>
            
             <td><v-btn v-on:click="delete_row(doc.body.log_sheet_officials, index)" small color="error">Delete</v-btn></td>
        </tr>
        <tr>
          <td><strong><h3>Total</h3></strong></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
          
    </tbody>
    <v-btn v-on:click="add_log_sheet_officials" class="mx-2" dark color="green">
                <v-icon dark>mdi-plus</v-icon>
                Add more
              </v-btn>
</table>


<br>
<br>
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

            <v-flex xs12>
             <v-flex xs11>
                <h3>Who Approve:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" multiple />
              </v-flex>
            </v-flex>
</v-layout  >


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
        template: "iternaryLogSheetOfOfficialTrips",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

          log_sheet_officials: [{date: "", departure_return: "",  purpose_of_journey: ""
            , official_killometers_travelled:""},],

          log_sheet_data: {name_of_driver: "", branch_section:" ", reg_number: "", month: "", make_of_vehicle: ""},
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
      this.doc.body.signatures = users;
    },
    onEnd() {
      this.setAuthorSignature();
    }
  ,                                                                                                                                                                                                                                                             
    add_log_sheet_officials() {
       this.doc.body.log_sheet_officials.push({date: "", departure_return: "",  purpose_of_journey: ""
            , official_killometers_travelled:""})
  },

  delete_row(doc, index) {
        if(doc.length != 1 ){
          doc.splice(index, 1)
        }
      },
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
