<template>
    <div id="clearanceLetter">
        <v-dialog v-model="addSignDialog" persistent max-width="680px">
            <v-card>
                <v-card-title>
                    <span class="headline">Forward To:</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap justify-space-between>
                            <v-flex xs12 sm7>
                                <v-combobox v-model="signatory" :items="users" label="Choose Signatory" chips return-object item-text="SurName" item-value="EmailAdress">
                                    <template slot="selection" slot-scope="data">
                        <v-chip
                          :key="JSON.stringify(data.item)"
                          :selected="data.item.selected"
                          item-value="data.item.value"
                          :disabled="data.disabled"
                          class="v-chip--select-multi"
                          @input="data.parent.selectItem(data.item)"
                        >{{ data.item.SurName }}</v-chip>
</template>
                </v-combobox>
              </v-flex>
              <v-flex xs12 sm4>
                <v-select
                  :items="actions"
                  v-model="signatory.action"
                  item-text="text"
                  return-object
                  label="Action"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="addSignDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat :loading="loading" @click="addSignatory">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container grid-list-md>
        <v-layout justify-space-between>
            <v-flex xs3>
                <v-layout>
                    <Toolbar :data="doc" />
                </v-layout>
            </v-flex>
    
            <v-flex xs9>
                <v-layout wrap>
                    <v-flex xs12>
                        <h3 class="text-xs-center red--text text">CONFIDENTIAL</h3>
    
                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field v-model="doc.ref" label="Our ref"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field v-model="doc.body.rfq" label="Enquiries :"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field v-model="doc.body.tel" label="Telephone : "></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field v-model="doc.body.email" label="Email : "></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
    
                    <v-flex xs12>
                        <v-menu transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="doc.body.date" label="Date: " readonly v-on="on">
                                </v-text-field>
                            </template>
                            <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker>
                         </v-menu>
                     </v-flex>

          <v-flex xs12>
            <h3 class="text-xs-left">SECURITY CLEARANCE: YOURSELF</h3>
            <br />
            <p>1. With regards to the above, security vetting investigations were conducted on you by State Security Agency and found positive/negative. As such a security clearance to the level of “TOP SECRET/SECRET/CONFIDENTIAL” has been issued to the Department.</p>
            <p>2. Your security clearance is valid for a period of five <v-text-field v-model="doc.body.period" ></v-text-field> years and will expire on the <v-menu transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on }">
                <v-text-field v-model="doc.body.date1" readonly v-on="on">
                </v-text-field>
            </template>
                                                                                                                                                           <v-date-picker v-model="doc.body.date" @input="menu2 = false"></v-date-picker></v-menu>
                                                                                                                                                           , unless there are compelling reasons to conduct another investigation prior to the expiry date.</p>
            <p>3. The following applies as per the “MISS” Minimum Information Security Standards and the Security Policy.</p>
                <p>a. The clearance is only applicable for your current position.</p>
                <p>b. Vetting certificate remains the property of the Departmental and no copies will be given to officials.</p>
                <p>c. Vetting Certificate is not automatically transferrable between departments.</p>
            <p>4. Thank you for your cooperation.</p>
          </v-flex>

          <v-flex xs12 pt-1>
            <v-flex xs12>
              <v-switch v-model="iSign" label="Add People To Sign"></v-switch>
            </v-flex>

            <v-flex v-show="iSign" xs12>
              <h3>Who to sign:</h3>
              <v-btn color="white" :loading="loading" round @click="addSignDialog = true">
                <v-icon small color="warning" left>add</v-icon>Add Signatory
              </v-btn>
              <v-btn color="warning" :loading="loading" round @click="clearSignList">
                <v-icon small color="white" left>delete</v-icon>Clear List
              </v-btn>
            </v-flex>

            <v-flex v-for="(sign, index) in doc.body.signatures" :key="index" xs12>
              <v-card-text >
                <h2 class="font-weight-medium">{{sign.action.text}}</h2>
                <hr />
                <h2 class="font-weight-regular">{{sign.SurName}}</h2>
                <h4>
                  {{sign.Designation}} |
                  <span class="grey--text">{{sign.Department}}</span>
                </h4>
              </v-card-text>
            </v-flex>
              </v-flex>

            </v-layout>
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
import Editor from "@tinymce/tinymce-vue";
import store from "~/store/store";
import { signatureHelpers } from "~/services/helpers";
import VueSignaturePad from "vue-signature-pad";
import { createDoc } from "~/services/DocsService";

Vue.use(VueSignaturePad);
Vue.use(Editor);
export default {
    name: "clearanceLetter",
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
            addSignDialog: false,
            signatory: {},
            doc: {
                ref: this.$route.params.ref,
                template: "clearanceLetter",
                author: store.state.user,

                body: {
                    address: "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
                    attachments: [],
                    authorSignature: "",
                    signatures: [],
                    recipients: [],
                    surnameInitials: "",
                    date: new Date().toISOString().substr(0, 10),
                    date1: new Date().toISOString().substr(0, 10),
                    name: "",
                    period: "",
                    capacity: "",
                    item: "",
                    rfq: "",
                    enquiries: "",
                    tel: "",
                    email: "",
                }
            },

            actions: [
                { text: "For Approval", value: "approve", signLevel: 3 },
                { text: "For Recommendation", value: "recommend", signLevel: 2 },
                { text: "For Input", value: "input", signLevel: 1 },
                { text: "For Attention", value: "attention", signLevel: 0 }
            ],

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

        // sign
        clearSignList() {
            this.doc.body.signatures = [];
            console.log(this.doc.body.signatures);
        },

        addSignatory() {
            if (!this.signatory.action) {
                this.addSignDialog = false;
                return;
            }
            this.signatory.priority = this.signatory.action.signLevel;
            this.doc.body.signatures.push(this.signatory);

            //sort
            this.doc.body.signatures.sort(function(a, b) {
                return a.priority - b.priority;
            });

            this.addSignDialog = false;
            this.signatory = {};
            console.log(this.doc);
        },

        clear() {
            this.$refs.signaturePad.clearSignature();
            this.signature = null;
            this.doc.body.authorSignature = null;
            console.log(this.signature);
        },
        saveSignature() {},
        onEnd() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log("=== End ===");
            this.doc.body.authorSignature = data;
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

