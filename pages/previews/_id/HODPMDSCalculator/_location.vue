<template>
  <div id="circular">
    <v-container grid-list-md fluid>
      <Toolbar :data="doc" />
      <v-layout row wrap justify-space-between>
        <v-flex xs2></v-flex>
        <v-flex></v-flex>
        <v-flex xs9>
          <v-layout column wrap>
         
            <table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td  colspan="4" align="top">
              
                    <strong>Employee Performance (KRA)</strong>
             
            </td>
        </tr>
        <tr>
            <td  align="top">
                 <strong>NO</strong>
            </td>
            <td align="top">
                <strong>Weigh</strong>
            </td>
            <td  align="top">
                    <strong>Rating</strong>
            </td>
            <td  align="top">
                    <strong>Score</strong>
            </td>
        </tr>
       
        <tr v-for="(item, index) in doc.KRA" :key="index">
            <td width="50px" align="top">
               
                    {{ item.no}}
               
            </td>
            <td  width="150px" align="top">
               {{item.weight}}
                
            </td>
            <td  width="150px" align="top">
        
                {{item.rating}}
            </td>
            <td  width="150px" align="top">
                {{ score(item.weight, item.rating, index) }}
            </td>
        </tr>
        <tr>
            <td  colspan="3" align="top">
           
                    Total KRA
               
            </td>
            <td  align="top">
              <strong> {{ doc.KRA_TOTAL  || 0 }} %</strong>
            </td>
        </tr>
    </tbody>
</table>

 <!-- eND EMployees Table -->
<br>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="150" align="top">
                
                    KRA Weight
               
            </td>
            <td width="200" align="top">
              {{doc.body.kra_weight}}
            </td>
        </tr>
        <tr>
            <td  align="top">
                
                    KRA SCORE
                
            </td>
            <td  align="top">
                <h2>
                   <strong> {{ doc.body.KRA_TOTAL || 0 }} %</strong>
                </h2>
            </td>
        </tr>
    </tbody>
</table>

<br>

<table border="1"  cellpadding="0">
    <tbody>
        <tr>
            <td  align="top">
                
                    <strong>AG RATING</strong>
               
            </td>
            <td  align="top">
                {{doc.body.ag_rating}}
            </td>
        </tr>
        <tr>
            <td align="top">
            </td>
            <td  align="top">
                
                   <strong> {{ doc.body.AG_RATING || 0 }} </strong>
            
            </td>
        </tr>
        <tr>
            <td  align="top">
             
                    AG Weight
             
            </td>
            <td  align="top">
                {{doc.body.ag_weight}}
            </td>
        </tr>
        <tr>
            <td  align="top">
            
                    <strong>AG SCORE</strong>
               
            </td>
            <td align="top">
                {{ doc.body.AG_RATING || 0 }}
            </td>
        </tr>
    </tbody>
</table>

<br>

<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td  colspan="7" align="top">
            
                    <strong>KEY GOVERNMENT FOCUS AREA</strong>
           
            </td>
        </tr>
        <tr>
            <td  align="top">
                    <strong>NO</strong>
            </td>
            <td  align="top">
                
                    <strong>AREA</strong>
               
            </td>
            <td  colspan="2" align="top">
               
                    <strong>WEIGH</strong>
              
            </td>
            <td  colspan="2" align="top">
              
                    <strong>RATING</strong>
                
            </td>
            <td  align="top">
              
                    <strong>SCORE</strong>
             
            </td>
        </tr>
        <tr v-for="(item, index) in doc.body.GPA" :key="index" >
            <td  align="top">
               {{ item.no}}
            </td>
            <td  align="top">
                
                   {{ item.area}}
               
            </td>
            <td  colspan="2" align="top">
              
                    {{ item.weigh}} %
                
            </td>
            <td  colspan="2" align="top">
                 {{ item.rating}}
            </td>
            <td  align="top">
                {{ calculateGPAScore(item.weigh, item.rating, index) }}
            </td>
        </tr>
       <tr>
           <td colspan="3"> <strong>Total</strong> </td>
           <td > <strong> {{ calculateWeighTotal || 0 }} %</strong></td>
           <td colspan="2"> </td>
           <td > <strong>  {{ calculateGPAScores || 0 }} %</strong></td>
       </tr>
        <tr>
            <td align="top">
               
                    GPA Weigh
               
            </td>
            <td colspan="5" align="top">

            </td>
            <td align="top">
                 {{ doc.body.gpa_weight}}
            </td>
        </tr>
        <tr>
            <td align="top">
          
                    <strong>GPA SCORE</strong>
         
            </td>
            <td colspan="5" align="top">
            </td>
            <td align="top">
                <strong> {{ doc.body.GPA_FINAL || 0 }}% </strong>
            </td>
        </tr>
        <tr>
            <td align="top">
              
                    <strong>GPA RATING</strong>
            
            </td>
            <td colspan="5" align="top">
            </td>
            <td align="top">
             <strong> {{ doc.body.gpa_rating || 0 }} </strong>
            </td>
        </tr>
    </tbody>
</table>
<br>
<br>
    <table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td  colspan="2" align="top">
                    <strong>ANNUAL PERFORMANCE PLAN TARGETS</strong>
            </td>
        </tr>
      
        <tr>
            <td align="top">
                    <strong>NUMBER OF TARGETS IN APP</strong>
            </td>
            <td align="top">
               {{ doc.body.number_of_targets }}
            </td>
        </tr>
        <tr>
            <td align="top">
                    <strong>NUMBER OF TARGETS ACHIEVED </strong>
            </td>
            <td align="top">
                {{doc.body.number_of_targets_achieved}}
            </td>
        </tr>
        <tr>
            <td  align="top">
                <strong>PERCENTAGE OF TARGETS ACHIEVED</strong>
            </td>
            <td  align="top">
               <h2> {{ doc.body.APPTARGETS || 0}} %</h2>
            </td>
        </tr>
        <tr>
            <td  align="top">
                
                    APP WEIGHT
            
            </td>
            <td  align="top">
                  {{doc.body.app_weight}}
            </td>
        </tr>
        <tr>
            <td  align="top">
            
                    <strong>APP SCORE</strong>
             
            </td>
            <td  align="top">
                 {{ doc.body.APPTARGETS || 0  }}
            </td>
        </tr>
        <tr>
            <td align="top">
                    <strong>APP RATING</strong>
            </td>
           
            <td  align="top">
                {{ doc.body.APPRATING || 0 }}
            </td>
        </tr>
    </tbody>

</table>
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
                  <h2
                    class="text-xs-left"
                  >{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h2>
                  <hr />
                  <h2>Date</h2>
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- Responses -->
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
      loading: false,
      signatories: [],
      signature: "",
      ref: "",
      textInput: "",
    
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
    },
    calculateWeighTotal(){
          let final_answer = this.doc.body.GPA.map(a => a.weigh).reduce((a, i) => a+=i,0)
          this.doc.body.weight_total = final_answer
        return final_answer
    },
  },
  methods: {
   // sign
  
    calculateGPAScore(weight, rating, index){
        let answer = weight/100 * rating
        this.doc.body.GPA[index].score = answer
        
        return answer.toPrecision(2)
    },
     calculateGPAScores(){
        let total_score = this.doc.body.GPA.reduce((a, i) => a+=i.score, 0)
        let final_answer = total_score/3*100
        return final_answer.toPrecision(3)
    },
     score(weight, rating, index){
        let answer = weight/100 * rating
        this.doc.body.KRA[index].score = answer
        return answer.toPrecision(2)
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
</style>
