<template>
  <div class="dashboard">
    
    <v-snackbar v-model="snackbar" right :timeout=6000 top :color="snackbarColor">
        {{ snackbarText }}
        <v-btn flat icon><v-icon>close</v-icon></v-btn>
    </v-snackbar>

    <h1 class="headline text-capitalize">{{this.route}}</h1>

    <v-container class="my-5">
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('number')" slot="activator">
            <v-icon small left>swap_vert</v-icon>
            <span class="caption text-lowercase">SERIES NO.</span>
          </v-btn>
          <span>Sort by author series number</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('description')" slot="activator">
            <v-icon small left>swap_vert</v-icon>
            <span class="caption text-lowercase">DESCRIPTION</span>
          </v-btn>
          <span>Sort by description</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="(doc, i) in series" :key="doc._id" router :to="`${doc.fileplan}/subseries/${i}`">
        <v-layout row wrap class="pa-3 project">
          <v-flex xs2>
            <div class="caption">SERIES NO:</div>
            <div class="font-weight-black">{{doc.number}}.</div>
          </v-flex>
          <v-flex xs7>
            <div class="caption">DESCRIPTION</div>
            <div class="font-weight-black"><v-icon color="warning" large left bottom>folder</v-icon>{{doc.description}} | 
            <span class="grey--text font-weight-black text-capitalize">{{doc.fileplan}}</span></div>
          </v-flex>
          <v-flex xs3>
            <div class="caption left ml-2"></div>
            <div class="left">
              
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
   
  </div>
</template>

<script>
import store from '~/store/store'
import { error } from 'util';
  export default {
    data: () => ({
        route: "",
        number:"",
        description:"",
        snackbarText:"",
        snackbar: false,
        snackbarColor: 'success',
        rules: {
          required: value => !!value || 'Required.'
        },
        loading:false,
        docs:[]
      }),
      computed: {
          series: function(){
              return store.state.filePlan[this.$route.params.fileplan]
          }
      },
      methods: {
        sortBy(prop) {
            this.docs.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        },

        getDocs () {
            //get docs
        }
      },
      created(){
        this.route = this.$route.params.fileplan;
        console.log(this.route, this.$route);
        console.log('store', store.state.filePlan);
        //get docs
        this.getDocs();
      }
  }
</script>

<style>
.project{
   transition: background-color .5s;
}
.project:hover{
  background-color: #eeeeef;
}
.project{
   border-left: 4px solid #c7c7c7;
}
</style>