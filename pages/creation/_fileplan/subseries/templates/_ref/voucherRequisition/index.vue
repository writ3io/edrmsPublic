<template>
  <div id="attendance">
    
    <v-container grid-list-md fluid>
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>
        <v-flex xs8>
          <v-layout row wrap>
            <h3>A. MEETING / WORKSHOP DESCRIPTION:</h3>
            <v-flex xs12 class="mb-4">
              <v-card outlined style="padding : 10px">

                <v-layout>
                  <v-flex cols="12" sm="4">
                    <v-text-field v-model="doc.body.meeting_name" label="Name of Meeting/ Workshop">
                    </v-text-field>
                  </v-flex>

                  <v-flex cols="12" sm="4">
                    <v-text-field v-model="doc.body.meeting_venue" label="Venue of Meeting/ Workshop">
                    </v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>

            </v-flex>

            <h3>B. ATTENDANCE RECORD: </h3>
            <v-layout row wrap>
              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  DATE
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  SURNAME
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  INITIALS
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  Persal
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  Position
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input " outlined tile v-scroll>
                  Workstation Name
                  H/O, District, Circuit/School
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  Unit
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  Office number
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  Email
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  Tel/Cell
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 remove-delegate " outlined tile>
                  Sign
                </v-card>
              </v-flex>

            </v-layout>




            <v-layout v-for="(item, index) in doc.body.delegates" :key="index" transition="slide-x-transition">
              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.date }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.initials }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.initials }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.persal }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.position }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.workstation }}

                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.unit }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.office_number }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.email }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4 ">
                <v-card class="pa-2 _input" outlined tile>
                  {{ item.cell }}
                </v-card>
              </v-flex>

              <v-flex cols="12" sm="4">
                <v-card class="pa-2 remove-delegate" outlined tile >
                  Yes
                </v-card>
              </v-flex>
            </v-layout>

           
            <h3>C. ATTENDANCE DETAILS :</h3>
            <v-flex xs12 class="mb-4">
              <v-card outlined style="padding : 10px">

                <v-layout>
                  <v-flex cols="12" sm="4">
                    <v-text-field v-model="doc.body.number_of_delegs_invited" outlined label="Number of delegates invited">
                    </v-text-field>
                  </v-flex>

                  <v-flex cols="12" sm="4">
                    <v-text-field v-model="doc.body.number_of_delegs_attended" label="Number of delegates who attended">
                    </v-text-field>
                  </v-flex>



                </v-layout>
                <v-flex cols="12" sm="4">
              <span>
                <h4>Chairperson : {{doc.body.chairperson.SurName }}</h4>
                <h4>
                  {{ doc.body.chairperson.Designation}} |
                  <span class="grey--text">{{doc.body.chairperson.Department}}</span>
                </h4>
              </span>
                </v-flex>
              </v-card>

            </v-flex>
          

            <v-flex xs6>
                    
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
import record from "~/services/docLog";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);

export default {
  components: {
    Toolbar,
    SelectUsers
  },
  data() {
    return {
        menu5: false,
        menu: false,
        
        date : "",
        
       
      
      series: {},
      saveDialog: false,
      attachments: [],
      
      status: "",
      iSign: false,
     
      signature: null,
      snackbarText: "",
      snackbar: false,
      snackbarColor: "success",
      loading: false,
      min_height: 320,
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
.signature-pad {
  max-width: 480px;
  background-color: #fff;
  border: 1px dotted black;
}

._input {
        min-width: 100px;
        max-width: 100px;
        height: 40px;
        text-overflow: ellipsis;

        /* Required for text-overflow to do anything */
        white-space: nowrap;
        overflow: hidden;
        
    }

.remove-delegate {
        min-width: 50px;
        max-width: 50px;
    }

.remove-delegate:hover{
        color: red ;
        padding: 12px;
        cursor: pointer;
    }

</style>
