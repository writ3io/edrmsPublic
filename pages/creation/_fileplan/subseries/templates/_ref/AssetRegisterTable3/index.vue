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
                <v-menu transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="doc.body.date"
                      label="FINANCE YEAR: "
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <!-- <v-flex xs12>
                <v-text-field v-model="doc.body.branch" label="BRANCH/SUB-BRANCH / DIRECTORATE:"></v-text-field>
              </v-flex> -->
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
                <td class="text-xs-center">
                  <v-text-field
                    v-model="props.item.assetClass"
                    single-line
                    solo
                    flat
                    placeholder=" Asset Class"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.assetNumber"
                    single-line
                    solo
                    flat
                    placeholder="Asset Number"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.assetName"
                    single-line
                    solo
                    flat
                    placeholder="Asset Name"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.deliveryDate"
                    single-line
                    solo
                    flat
                    placeholder="Delivery Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.acquisitionDate"
                    single-line
                    solo
                    flat
                    placeholder="Acquisition Date"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.supplier"
                    single-line
                    solo
                    flat
                    placeholder="Supplier"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.claimNo"
                    single-line
                    solo
                    flat
                    placeholder="Claim No"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.paymentNo"
                    single-line
                    solo
                    flat
                    placeholder="Payment No"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.orderNo"
                    single-line
                    solo
                    flat
                    placeholder="Order No"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.invoice"
                    single-line
                    solo
                    flat
                    placeholder="Invoice"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.uniqueIdentifier"
                    single-line
                    solo
                    flat
                    placeholder="Unique Identifier"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.location"
                    single-line
                    solo
                    flat
                    placeholder="Location"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.user"
                    single-line
                    solo
                    flat
                    placeholder="User"
                  ></v-text-field>
                </td>
                
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.persalNo"
                    single-line
                    solo
                    flat
                    placeholder="Persal No"
                  ></v-text-field>
                </td>

                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.acquisitionCost"
                    single-line
                    solo
                    flat
                    placeholder="Acquisition Cost"
                  ></v-text-field>
                </td>

                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.adjustment"
                    single-line
                    solo
                    flat
                    placeholder="Adjustment"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.carryingValue"
                    single-line
                    solo
                    flat
                    placeholder="Carrying Value"
                  ></v-text-field>
                </td>
                <td class="text-xs-right px-0 py-0">
                  <v-text-field
                    v-model="props.item.accountingArea"
                    single-line
                    solo
                    flat
                    placeholder="Accounting Area"
                  ></v-text-field>
                </td>
                <td class="text-xs-center px-0 py-0">
                  <v-icon small color="red " @click="removeRow(props.index)">delete</v-icon>
                </td>
              </template>

              <template v-slot:no-data>
                <div :value="true" class="text-xs-center">No Form Input Fields</div>
              </template>

              <template v-slot:footer>
                <td colspan="100%" class="text-xs-center px-0 py-0 mx-0 primary">
                  <v-icon @click="addRow" color="white">add</v-icon>
                </td>
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
import Toolbar from "~/components/FormToolbar";
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: "OperationalPlan",
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

        {
          text: "Actions",
          value: "carbs"
        }
      ],
      iSign: false,
      doc: {
        ref: "2-1-4",
        template: "OperationalPlan",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          date: new Date().toISOString().substr(0, 10),
          name: "",
          branch: "",
          capacity: "",
          item: "",
          tr: [
            {
              assetClass: "",
              assetNumber: "",
              assetName: "",
             deliveryDate: "",
              acquisitionDate: "",
              supplier: "",
              claimNo: "",
              paymentNo: "",
              orderNo: "",
              invoice: "",
              uniqueIdentifier: "",
              location: "",
              user: "",
              persalNo: "",
              acquisitionCost: "",
              adjustment: "",
              carryingValue: "",
              accountingArea: ""
            },
            {
              assetClass: "",
              assetNumber: "",
              assetName: "",
             deliveryDate: "",
              acquisitionDate: "",
              supplier: "",
              claimNo: "",
              paymentNo: "",
              orderNo: "",
              invoice: "",
              uniqueIdentifier: "",
              location: "",
              user: "",
              persalNo: "",
              acquisitionCost: "",
              adjustment: "",
              carryingValue: "",
              accountingArea: ""
            }
          ],
          docRef: Math.round(+new Date() / 1000),
          attachments: [],
          authorSignature: "",
          authorSignatureDate: new Date().toISOString().substr(0, 10),
          signatures: []
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
    },
    addRow() {
      this.doc.body.tr.push({});
    },
    removeRow(index) {
      this.doc.body.tr.splice(index, 1);
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

