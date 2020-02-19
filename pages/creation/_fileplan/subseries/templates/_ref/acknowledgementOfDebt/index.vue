<template>
  <div id="">
    <Toolbar :data="doc" />

    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>

        <v-flex xs8>
          <v-layout wrap>

            <v-flex xs12>
              <h3 class="text-xs-center red--text">
                Confidential
              </h3>
            </v-flex>
            <v-flex xs12>
              <h3 class="text-xs-center ">
                <u>ACKNOWLEDGEMENT OF DEBT</u>
              </h3>
            </v-flex>

            <v-layout wrap>

              <v-flex>
                <template>
                  <div>
                    <p>I <u>{{ doc.body.debtInfo.name }}</u> ID <u>{{ doc.body.debtInfo.id }} </u> Persal No:
                      <u>{{ doc.body.debtInfo.persalNo }}</u>
                      Acknowledge that I am indebted to <u>{{ doc.body.debtInfo.institution }}</u> (Name of
                      institution)<br>For the sum of R <u>{{ doc.body.debtInfo.amountOwed }}</u>
                      (Total Amount) the reason for the debt being <b>SEE THE ATTACHED DOCUMENTS OF DEBT NOTIFICATION
                      </b></p>
                    <p>I agree to repay this debt with effect from <u>{{ doc.body.debtInfo.paymentCommencement }}</u> an
                      amount of R <u>{{ doc.body.debtInfo.amountToPay }}</u>
                      On a monthly basis, this amount may be deducted from my salary,<br> should my service be
                      terminated before the debt is settled I agree that the outstanding balance may be deducted from my
                      <b>LEAVE GRATUITY</b>.
                    </p>
                    <p><b>NB: RECOVERY SHOULD BE MADE WITHIN 12 MONTHS</b> </p>
                    
                    <v-row justify="center">
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="orange" small dark v-on="on">Add Data</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Debt Info</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-flex>
                                <v-flex xs12 >
                                  <SelectUsers v-on:getUsers="setDebtor($event)" label="Debtor :"  />
                                </v-flex>
                                <v-flex xs12  >
                                  <v-text-field label="Name of institution" v-model="doc.body.debtInfo.institution">
                                  </v-text-field>
                                </v-flex>
                                <v-flex xs12  >
                                  <v-text-field label="Total Amount Owed" v-model="doc.body.debtInfo.amountOwed"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-menu v-model="menu1a" :close-on-content-click="false" :nudge-right="40"
                                    transition="scale-transition" offset-y min-width="290px">
                                    <template v-slot:activator="{ on }">
                                      <v-text-field v-model="doc.body.debtInfo.paymentCommencement" label="Date" readonly v-on="on">
                                      </v-text-field>
                                    </template>
                                    <v-date-picker v-model="doc.body.debtInfo.paymentCommencement" @input="menu1b = false"></v-date-picker>
                                  </v-menu>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Amount to repay*" v-model="doc.body.debtInfo.amountToPay" ></v-text-field>
                                </v-flex>
                                
                              </v-flex>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>


                  </div>
                </template>
              </v-flex>
            </v-layout>


            <v-layout wrap>
              <v-flex xs12 lg6>
                <p class="text-xs-left">Employee : </p>
                <VueSignaturePad class="signature-pad" max-width="480px" height="200px" ref="signaturePad"
                  :options="{ onEnd }" />
                <v-btn flat color="warning" @click="clearAuthorSignature">
                  <v-icon left>undo</v-icon>
                  <span>Clear</span>
                </v-btn>
              </v-flex>

              <v-flex xs12 lg3>
                <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="doc.body.bottom_date" label="Date" readonly v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="doc.body.bottom_date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>

            </v-layout>

            <v-flex xs12>
              <h3 class="text-xs-center ">
                <u>REPAYMENT SCHEDULE </u>
              </h3>
            </v-flex>
            <v-flex xs12>

              <v-data-table :headers="headers" :items="doc.body.schedule" hide-actions class="elevation-1">

                <template slot="headerCell" slot-scope="props">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <span v-on="on">
                        {{ props.header.text }}
                      </span>
                    </template>
                    <span>
                      {{ props.header.text }}
                    </span>
                  </v-tooltip>
                </template>

                <template v-slot:items="props" v-slot:no-data="Hello">

                  <td class="text-xs-right px-0 py-0">
                    <v-text-field v-model="props.item.date" single-line solo flat placeholder="Date">
                    </v-text-field>
                  </td>
                  <td class="text-xs-right px-0 py-0">
                    <v-text-field v-model="props.item.details" single-line solo flat placeholder="Name"></v-text-field>
                  </td>
                  <td class="text-xs-right px-0 py-0">
                    <v-text-field v-model="props.item.debit" single-line solo flat></v-text-field>
                  </td>
                  <td class="text-xs-right px-0 py-0">
                    <v-text-field v-model="props.item.credit" single-line solo flat></v-text-field>
                  </td>
                  <td class="text-xs-right px-0 py-0">
                    <v-text-field v-model="props.item.balance" single-line solo flat></v-text-field>
                  </td>
                  
                  <td class="text-xs-center px-0 py-0">

                    <v-icon small color="red " @click="removeRow(props.index)">
                      delete
                    </v-icon>
                  </td>
                </template>

                <template v-slot:no-data>
                  <div :value="true" class="text-xs-center">
                    No Form Input Fields
                  </div>
                </template>

                <template v-slot:footer>
                  <td colspan="6" class="text-xs-center px-0 py-0 mx-0 primary">
                    <v-icon @click="addRow" color="white">add</v-icon>
                  </td>
                </template>
              </v-data-table>
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
import SelectUsers from "~/components/SelectUsers";
import store from "~/store/store";
import {
  signatureHelpers
} from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import record from "~/services/docLog";

import {
  createDoc
} from "~/services/DocsService";

Vue.use(VueSignaturePad);
export default {
  name: 'AcknowledgementOfDebt',
  components: {
    Toolbar,
    SelectUsers,
  },

  data() {
    return {

      menu5: false,
      menu: false,

      //time picker
      menu2: false,
      modal2: false,
      //
      dialog: false,
      headers: [{
          text: 'DATE',
          align: 'left',
          sortable: false,
          value: '',
          width: "10%"
        },
        {
          text: 'DETAILS',
          value: '',
        },
        {
          text: 'DEBIT',
          value: '',
        },
        {
          text: 'CREDIT',
          value: '',
        },
        {
          text: 'BALANCE',
          value: '',
        },
        {
          text: 'Action',
          value: '',
          width: "10%"
        },
      ],

      iSign: false,
      doc: {
        menu1a: false,
        menu1b: false,
        menu2a: false,
        menu2b: false,
        ref: "4-1-1",
        template: "acknowledgementOfDebt",
        author: store.state.user,
        formValid: true,
        docRef: Math.round(+new Date() / 1000),
        body: {
          address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          debtInfo: {
            name : "Debtor Name",
            id : "000000",
            persalNo : "000000",
            institution : "Institution Name",
            amountOwed : "000",
            paymentCommencement :  new Date().toISOString().substr(0, 10),
            amountToPay : "000"
          },
          schedule: [{
              date: "",
              details: "",
              debit : "",
              credit : "",
              balance : ""
            }
          ],
          docRef: Math.round(+new Date() / 1000),
        }
      },
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
    setDebtor(users) {
      
      this.doc.body.debtInfo.name = users.SurName || '';
      this.doc.body.debtInfo.id = users.PersonalNumber || '';
      this.doc.body.debtInfo.persalNo = users.PersonalNumber || '';
    },
    onEnd() {
      this.setAuthorSignature();
    },
    addRow() {
      this.doc.body.schedule.push({});
    },
    removeRow(index) {
      this.doc.body.schedule.splice(index, 1);
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
  border: 1px solid #DDDDDD;
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
