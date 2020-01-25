<template>
  <div id="circular">
   

    <v-container grid-list-md fluid>
      <v-layout row>

     
        <v-flex xs4>
           <Toolbar :data="doc" />
        </v-flex>

        <v-flex xs8column>
          <h2 align="center" class="title" color="redprimary">
            <strong color="red">Confidential</strong>
          </h2>
          <br>
          <v-flex  row xs5>
            
            <strong>
              Performance Assessment and Motivation Form for the First term between
              Employee :
            </strong>
          <v-text-field placeholder="Employee"  :rules="rules" solo></v-text-field>
    
    <br>
          <v-text-field placeholder="Supervisor" :rules="rules" solo></v-text-field>
             
          </v-flex>
           <v-flex  row xs5>
            
           <p>
            <strong>
              Based on the agreed upon targets set in the Performance Contract /
              Workplan and additional work done during the first term of the 2018/19
              Cycle
            </strong>
          </p>
         
           <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="computedDateFormattedMomentjs"
              clearable
              label="Date of Assessment"
              readonly
              v-on="on"
              @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @change="menu1 = false"
          ></v-date-picker>
        </v-menu>
             
          </v-flex>
          
          <p>
            <strong>
              Motivation and proof for exceeding expectation in the role or salary
              level or evidence of distinguished performance during the first term
              per Key Result Area. Employee will state the fact and Supervisor must
              also confirm and motivate for a higher rating for those KRAs rated
              higher than 3. Employee must show areas where they exceeded expectation
              e.g. Creativity, Problem Solving, Responsibility in
            </strong>
          </p>
          <h3>
            <strong>KRA – 1</strong>
            (Write the KRA as it appears in the Performance Agreement)
          </h3>
            
        <v-textarea
      name="input-7-1"
      filled
      label="Supervisee"
      auto-grow
      value=""
    ></v-textarea>
         <br>

            
        <v-textarea
      name="input-7-1"
      filled
      label="Superviser"
      auto-grow
      value=""
    ></v-textarea>
          <h3>
            <strong>KRA – 2</strong>
            (Write the KRA as it appears in the Performance Agreement)
          </h3>
        
        <v-textarea
      name="input-7-1"
      filled
      label="Supervisee"
      auto-grow
      value=""
    ></v-textarea>

          
       <br>
  <v-textarea
      name="input-7-1"
      filled
      label="Superviser"
      auto-grow
      value=""
    ></v-textarea>
          <h3>
            <strong>KRA – 3 </strong>
            (Write the KRA as it appears in the Performance Agreement)
          </h3>
     
          <v-textarea
      name="input-7-1"
      filled
      label="Superviser"
      auto-grow
      value=""
    ></v-textarea>
       <br>
          <v-textarea
      name="input-7-1"
      filled
      label="Superviser"
      auto-grow
      value=""
    ></v-textarea>
         
      
          <p>
            <strong><em>Signatures</em></strong>
          </p>
           <v-flex xs12>
             <v-flex xs11>
                <h3>Head of Department:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" single />
              </v-flex>
              <v-flex xs11>
                <h3>Executive Authority:</h3>
                <SelectUsers v-on:getUsers="setSigners($event)"
                  label="Select Executive Authority:" single />
              </v-flex>
            </v-flex>

          <p>
            <strong>
              Employee’s Signature &amp; date Supervisor’s Signature &amp; date
            </strong>
          </p>
      
    <br>
        
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

                <!-- <h3 class="warning--text mt-4">Change Signatory:</h3>
                <v-combobox
                  v-model="newSignatory"
                  :items="users"
                  label="Change Signatory"
                  chips
                  return-object
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      :selected="data.item.selected"
                      item-value="data.item.value"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >
                      {{ data.item.name }}
                      | {{ data.item.position }}
                      | {{ data.item.office }}
                    </v-chip>
                  </template>
                  </v-combobox>-->
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
        template: "DiscussionandMotivationForm",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",
          signatures: [],
          recipients: [],

          travelling_plan: [{date: "", place: "",  purpose: ""
            , time:""},]
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
  },                                                                                                                                                                                                                                                             
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id)
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

</style>
