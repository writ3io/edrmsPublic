<template>
  <div class="templates">
    <h1 class="headline text-capitalize mb-5">{{route}}. {{series.description}}</h1>
    <v-container>
      <v-toolbar flat color="white">
        <v-toolbar-title>Templates</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout wrap align-center>
          <v-flex xs12 ms6 md4 v-for="template in commonTemps" :key="template.id">
            <v-card class="mt-5 mx-2">
                <v-avatar :size="60" class="ma-2" color="grey lighten-2">
                    <img src="https://edrms.co.za/img/doe_logo_sm.2486ca70.png" alt="avatar">
                </v-avatar>
                <v-card-title>
                    <div>
                        <span class="headline">{{template.name}}</span><br>
                        <span class="subheadng grey--text">{{series.description}}</span><br>
                        <v-btn small flat color="orange"  router :to="`/creation/subseries/templates/${route}/${template.name}`">Open Template <v-icon right>folder</v-icon></v-btn>
                    </div>
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
      <v-layout wrap align-center>
          <v-flex xs12 ms6 md4 v-for="template in templates" :key="template.name">
            <v-card class="mt-5 mx-2">
                <v-avatar :size="60" class="ma-2" color="grey lighten-2">
                    <img src="https://edrms.co.za/img/doe_logo_sm.2486ca70.png" alt="avatar">
                </v-avatar>
                <v-card-title>
                    <div>
                        <span class="headline">{{template.name}}</span><br>
                        <span class="subheadng grey--text">{{series.description}}</span><br>
                        <v-btn small flat color="orange"  router :to="`/creation/subseries/templates/${route}/${template.name}`">Open Template <v-icon right>folder</v-icon></v-btn>
                    </div>
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import templates from '@/templates.json'
export default {

  data: () => ({
    message:"",
    successMessage:"",
    series:{},
    common:false,
    headers: [
      {text: 'Template Name', align: 'left', value: 'name'},
      {text: 'Ref:', align: 'left', value: 'ref'},
      {text: 'File Plan', align: 'left', value: 'fileplan'},
      {text: 'Actions',  value: 'actions'}
    ],
    templates: [],
    commonTemps: [],
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Template' : 'Edit Template'
    }
  },

  created(){
    this.route = this.$route.params.number;
    //common templates
    //templates
    console.log(templates, this.$route.params)
    this.commonTemps = templates.common
    this.templates = templates[this.$route.params.number]
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
