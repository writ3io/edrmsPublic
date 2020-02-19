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
                    
                    


                  </div>
                </template>
              </v-flex>
            </v-layout>


            <v-layout wrap>
              <v-flex xs12 lg6>
                <v-flex xs12 lg6>
                    <img style="width:100%" :src="doc.body.authorSignature" alt />
                  </v-flex>

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
                  
                </template>

                <template v-slot:no-data>
                  <div :value="true" class="text-xs-center">
                    No Form Input Fields
                  </div>
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

      menu1a: false,
      menu1b: false,
      
      menu5: false,
      menu: false,

      //time picker
      menu2: false,
      modal2: false,
      //

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
        }
      ],

      user: {},
      users: [],
      loading: false,
      response: {},
      signatories: [],
      signature: "",
      ref: "",
      textInput: "",
      actions: [
        { text: "For Approval", value: "approve" },
        { text: "For Reccomendation", value: "reccomend" },
        { text: "For Input", value: "input" },
        { text: "For Attention", value: "attention" }
      ],
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
    console.log("LKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",this.doc);
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
