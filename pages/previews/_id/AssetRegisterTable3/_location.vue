<template>
  <v-container grid-list-md>
    <v-layout justify-space-between>
      <v-flex xs3>
        <v-layout>
          <Toolbar :data="doc"/>
        </v-layout>
      </v-flex>

      <v-flex xs9>
        <v-layout wrap>
          <v-flex xs12>
            <h3 class="text-xs-center">ASSET REGISTER TABLE 3</h3>

            <v-layout wrap justify-right>
              <v-flex xs12>
               <strong>Financial Year :</strong>{{doc.body.date}}
               
              </v-flex>
              
            </v-layout>
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

              <template v-slot:items="props" v-slot:no-data="">
                <td>
                  {{props.item.assetClass}}
                </td>
                <td>
                  {{props.item.assetNumber}}
                </td>
                <td>
                 {{props.item.assetName}}
                </td>
                <td>
                  {{props.item.deliveryDate}}
                </td>
                <td>
                  {{props.item.acquisitionDate}}
                </td>
                <td>
                  {{props.item.supplier}}
                </td>
                <td>
                  {{props.item.claimNo}}
                </td>
                <td>
                  {{props.item.paymentNo}}
                </td>
                <td >
                  {{props.item.orderNo}}
                </td>
                <td>
                 {{props.item.invoice}}
                </td>
                <td>
                  {{props.item.uniqueIdentifier}}
                </td>
                <td>
                {{props.item.location}}
                </td>
                <td >
                 {{props.item.user}}
                </td>
                
                <td >
                  {{props.item.persalNo}}
                </td>

                <td >
                  {{props.item.acquisitionCost}}
                </td>

                <td >
                  {{props.item.adjustment}}
                </td>
                <td >
                  {{props.item.carryingValue}}
                </td>
                <td >
                  {{props.item.accountingArea}}
                </td>
                
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              
            </v-data-table>
            <br />
          </v-flex>

          <v-flex xs12 pt-1>
          

            

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
  name: "AssetRegisterTable3",
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {

      dialog: false,
      headers: [
        {
          text: "ASSET CLASS / SUBCAT",
          align: "left",
          value: ""
        },
        {
          text: "ASSET NUMBER",
          value: ""
        },
        {
          text: "ASSET NAME / DESCRIPTION",
          value: ""
        },
        {
          text: "DELIVERY DATE",
          value: ""
        },
        {
          text: "ACQUISITION DATE",
          value: ""
        },
        {
          text: "SUPPLIER",
          value: ""
        },
        {
          text: "CLAIM NO",
          value: ""
        },
        {
          text: "PAYMENT NO",
          value: ""
        },
        {
          text: "ORDER NO",
          value: ""
        },
        {
          text: "INVOICE",
          value: ""
        },
        {
          text: "UNIQUE IDENTIFIER",
          value: ""
        },
        {
          text: "LOCATION",
          value: ""
        },
        {
          text: "USER",
          value: ""
        },
        {
          text: "PERSAL NO.",
          value: ""
        },
        {
          text: "ACQUISITION COST",
          value: ""
        },
        {
          text: "ADJUSTMENT",
          value: ""
        },
        {
          text: "CARRYING VALUE",
          value: ""
        },
        {
          text: "ACCOUNTING AREA",
          value: ""
        },

       
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
</style>

