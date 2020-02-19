<template>
  <div id="letter">
   

    <v-container grid-list-xs fluid>
      <v-layout row wrap justify-space-between >
        <v-flex xs2>
 <Toolbar :data="doc" />
        </v-flex>

<v-layout xs5 column>

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
       
        <tr v-for="(item, index) in doc.body.KRA" :key="index">
            <td width="50px" align="top">
               
                    {{ item.no}}
               
            </td>
            <td  width="150px" align="top">
                <v-text-field v-model="item.weight" min="10" max="30" hint="values between 10% and 30%" suffix="%" type="number" :rules="weightRules" solo></v-text-field>
                
            </td>
            <td  width="150px" align="top">
        
                 <v-text-field
                v-model="item.rating"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="1"
                max="4"
                type="number"
               
              ></v-text-field>
               
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
              <strong> {{ calculateKRATotalScore  || 0 }} %</strong>
            </td>
        </tr>
    </tbody>
</table>

<br>



<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="150" align="top">
                
                    KRA Weight
               
            </td>
            <td width="200" align="top">
               <v-text-field v-model="doc.body.kra_weight" hint="Provide the KRA Weight" type="number" suffix="%" solo></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
                
                    KRA SCORE
                
            </td>
            <td  align="top">
                <h2>
                   <strong> {{ calculateKRAFinalScore || 0 }} %</strong>
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
                 <v-text-field
                v-model="doc.body.ag_rating"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="1"
                max="4"
                type="number"
               
              ></v-text-field>
            </td>
        </tr>
        <tr>
            <td align="top">
            </td>
            <td  align="top">
                
                   <strong> {{ calculateAGRating || 0 }} </strong>
            
            </td>
        </tr>
        <tr>
            <td  align="top">
             
                    AG Weight
             
            </td>
            <td  align="top">
                <v-text-field
                v-model="doc.body.ag_weight"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="0"
                max="100"
                type="number"
               
              ></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
            
                    <strong>AG SCORE</strong>
               
            </td>
            <td align="top">
                {{ calculateAGFinalScore || 0 }}
            </td>
        </tr>
    </tbody>
</table>
</v-layout>
<br>
<br>


<v-layout  xs4 column style="padding: 25px;" >
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
                 <v-text-field
                v-model="item.rating"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="1"
                max="4"
                type="number"
               
              ></v-text-field>
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
                 <v-text-field
                v-model="doc.body.gpa_weight"
                class="mt-0 pt-0"
                hide-details
                single-line
                suffix="%"
                min="0"
                max="100"
                type="number"
               
              ></v-text-field>
            </td>
        </tr>
        <tr>
            <td align="top">
          
                    <strong>GPA SCORE</strong>
         
            </td>
            <td colspan="5" align="top">
            </td>
            <td align="top">
                <strong> {{ calculateGPAFinalScore || 0 }}% </strong>
            </td>
        </tr>
        <tr>
            <td align="top">
              
                    <strong>GPA RATING</strong>
            
            </td>
            <td colspan="5" align="top">
            </td>
            <td align="top">
             <strong> {{ calculateGPARating || 0 }} </strong>
            </td>
        </tr>
    </tbody>
</table>

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
                 <v-text-field
                v-model="doc.body.number_of_targets"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="0"
                max="100"
                type="number"
               
              ></v-text-field>
            </td>
        </tr>
        <tr>
            <td align="top">
                    <strong>NUMBER OF TARGETS ACHIEVED </strong>
            </td>
            <td align="top">
                 <v-text-field
                v-model="doc.body.number_of_targets_achieved"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="0"
                max="100"
                type="number"
               
              ></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
           
                    <strong>PERCENTAGE OF TARGETS ACHIEVED</strong>
               
            </td>
            <td  align="top">
               <h2> {{ calculateAPPTargets || 0}} %</h2>
            </td>
        </tr>
        <tr>
            <td  align="top">
                
                    APP WEIGHT
            
            </td>
            <td  align="top">
                  <v-text-field
                v-model="doc.body.app_weight"
                class="mt-0 pt-0"
                hide-details
                single-line
                min="0"
                max="100"
                type="number"
               
              ></v-text-field>
            </td>
        </tr>
        <tr>
            <td  align="top">
            
                    <strong>APP SCORE</strong>
             
            </td>
            <td  align="top">
                 {{ calculateAPPFinalScore || 0  }}
            </td>
        </tr>
        <tr>
            <td align="top">
                    <strong>APP RATING</strong>
            </td>
           
            <td  align="top">
                {{ calculateAPPRating || 0 }}
            </td>
        </tr>
    </tbody>

</table>
<br>
    <table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td align="top">
                    <strong>FINAL SCORE (KRA + GPA + APP + AG)</strong>
            </td>
            <td align="top">
            </td>
        </tr>
        <tr>
            <td  align="top">
                  <strong>CATEGORY OF PERFORMANCE</strong>
            </td>
            <td align="top">
                   <strong>{{  conditionOfPerformance  }}</strong> 
            </td>
        </tr>
    </tbody>
</table>


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

</v-layout>
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

      weightRules: [
          w => this.weightValidation(w),
      ],
      ratingRules: [
          r => this.ratingtValidation(r)
      ],
     

    range: [1, 4],
      series: {},
      saveDialog: false,
      attachments: [],
      isFormValid: true,
      status: "",
      iSign: false,
      doc: {
        ref: this.$route.params.ref,
        template: "HODPMDSCalculator",
        author: store.state.user,
        body: {
          address:
            "<h3>The Head of Department</h3><h3>Limpopo Provincial Treasury</h3><h3>Polokwane</h3><h3>0700</h3>",
          attachments: [],
          authorSignature: "",



          signatures: [],
          recipients: [],


          kra_weight: 0,
          ag_rating: 0,
          ag_weight: 0,

          app_weight: 0,
          gpa_rating: 0,
          gpa_weight: 0,

          number_of_targets_achieved: 0,
          number_of_targets: 0,

          weight_total: 0,
          APPRATING: 0,
          APPTARGETS: 0,
          APP_FINAL: 0,

          KRA: [
          {no: 1,weight: 10,rating: 0, score: 0.00},
          {no: 2,weight: 10,rating: 0, score: 0.00},
          {no: 3,weight: 10,rating: 0, score: 0.00},
          {no: 4,weight: 10,rating: 0, score: 0.00},
          {no: 5,weight: 10,rating: 0, score: 0.00},
          {no: 6,weight: 10,rating: 0, score: 0.00},
          {no: 7,weight: 10,rating: 0, score: 0.00},
          {no: 8,weight: 10,rating: 0, score: 0.00},
          {no: 9,weight: 10,rating: 0, score: 0.00},
          {no: 10,weight: 10,rating: 0, score: 0.00}
          ],

          GPA: [
          {no: 1,area: "Integrated Governance", weigh: 20, rating: 0, score: 0},
          {no: 2,area: "Regional Integration", weigh: 20, rating: 0, score: 0},
          {no: 3,area: "MISS", weigh: 20, rating: 0, rating: 0, score: 0},
          {no: 4,area: "SCM", weigh: 20, rating: 0, rating: 0, score: 0},
          {no: 5,area: "Diversity and Transformation", weigh: 20, rating: 0, score: 0},
          ],
        final_score: [{KRA: "", GPA: "" , APP: "", AG: ""}],
        KRA_TOTAL: 0,
        
        },
      
       
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
    },

    conditionOfPerformance() {
        return this.calculateFinalScores
    },
 
      calculateFinalScores(){
       // let finalScore = parseInt(this.calculateAPPFinalScore) + parseInt(this.calculateGPAFinalScores) + parseInt(this.calculateAGFinalScore) + parseInt(this.calculateKRAFinalScore)
       // console.log(finalScore)
        return 0
    },
     calculateKRATotalScore(){
        let total_score = this.doc.body.KRA.reduce((a, i) => a+=i.score, 0)
        let final_answer = total_score/3*100
        this.doc.body.KRA_TOTAL = final_answer.toPrecision(2)
        return final_answer.toPrecision(2)
    },
    
     calculateGPAScores(){
        let total_score = this.doc.body.GPA.reduce((a, i) => a+=i.score, 0)
        let final_answer = total_score/3*100
        return final_answer.toPrecision(3)
    },
  
    calculateGPARating(){
        let final_answer = this.doc.body.GPA.map(a => a.score).reduce((a, i) => a+=i, 0)
        this.doc.body.gpa_rating = final_answer.toPrecision(1)
       return final_answer.toPrecision(1)
    },
    
    calculateAGRating(){
       let total =  (this.doc.body.ag_rating / 3 * 100).toPrecision(4)
       this.doc.body.AG_RATING = total
       return total
    },


    calculateGPAFinalScore(){
       let final_answer = this.gpa_weight * this.calculateGPAScores
        this.doc.body.GPA_FINAL = final_answer
        return (final_answer/100).toPrecision(4)
    },

    calculateAGFinalScore(){
        return (this.ag_weight * this.calculateAGRating /100).toPrecision(4)
    },
    calculateKRAFinalScore(){
        
        return ((this.doc.body.kra_weight * this.calculateKRATotalScore)/100)
    },
    calculateAPPFinalScore() {
      let final_answer = (this.app_weight * this.calculateAPPTargets/100).toPrecision(2)
        this.doc.body.APP_FINAL = (final_answer/100).toPrecision(4)
        return (final_answer/100).toPrecision(4)
        r
    },

    calculateAPPTargets(){
        let final_answer = (this.number_of_targets_achieved / this.number_of_targets) * 100
        this.doc.body.APPTARGETS = final_answer
        return 
    },
    calculateAPPRating(){
        if(this.calculateAPPTargets >= 1 && this.calculateAPPTargets <= 59.5){
            this.doc.body.APPRATING = 1
            return 1
        }
        if(this.calculateAPPTargets >= 59.5 && this.calculateAPPTargets <= 79){
          this.doc.body.APPRATING = 2
            return 2
        }
        if(this.calculateAPPTargets >= 79.5 && this.calculateAPPTargets <= 100){
          this.doc.body.APPRATING = 3
            return 3
        } 
        this.doc.body.APPRATING = 0
        return 0
    },

    calculateWeighTotal(){
          let final_answer = this.doc.body.GPA.map(a => a.weigh).reduce((a, i) => a+=i,0)
          this.doc.body.weight_total = final_answer
        return final_answer
    },

    
   
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
    },
   
  
    score(weight, rating, index){
        let answer = weight/100 * rating
        this.doc.body.KRA[index].score = answer
        return answer.toPrecision(2)
    },
     calculateGPAScore(weight, rating, index){
        let answer = weight/100 * rating
        this.doc.body.GPA[index].score = answer
        
        return answer.toPrecision(2)
    },
   
    weightValidation(w) {
        if(w < 10 || w > 30){
            return "The weight can only be between 10%  and 30%"
        }else {
            return true
        }
    },
    ratingtValidation(r) {
        if(r < 1 || r > 4){
            return "The rating can only be between 1  and 4"
        }else {
            return true
        }
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
