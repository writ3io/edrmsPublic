<template>
  <div class="about">
    <h1 class="headline text-capitalize mb-5">{{series.number}}. {{series.description}}</h1>
    <v-container>
        <v-layout justify-end class="mb-4">
            <v-flex xs4><v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field></v-flex>
        </v-layout>
      
      <v-data-table class="elevation-1" :headers="headers" :rows-per-page-items='[10,25,50,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]' :items="docs" :loading="loading" :search="search">
        <template slot="items" slot-scope="props">
          <td :class="`${isBold(props.item)}`">{{ props.item.number }}</td>
          <td :class="`${isBold(props.item)} text-xs-left`"><v-icon color="warning" left bottom>folder</v-icon>{{ props.item.description }}</td>
          <td :class="`${isBold(props.item)} text-xs-left`"> <span v-show="props.item.disposal != 'None'">{{ props.item.disposal }}</span></td>
          <td :class="`${isBold(props.item)} justify-center layout px-0`">
            <v-btn v-if="props.item.disposal != 'None'" depressed small round color="warning" router :to="'files/' + props.item.number.replace(/\//g, '-')">open<v-icon small>chevron_right</v-icon></v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="getDocs">Reset</v-btn>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import store from '~/store/store'
export default {
  data: () => ({
    dialog: false,
    loading: false,
    snackbarText:"",
    snackbar: false,
    snackbarColor: 'success',
    search: '',
    sortable: false,
    headers: [
      {text: 'Series No.', align: 'left', value: 'number'},
      {text: 'Description', align: 'left', value: 'description'},
      {text: 'Disposal', align: 'left', value: 'disposal'},
      {text: 'Actions', align: 'left', value: 'actions'},
    ],
    disposals: [
        {text:"None",value:"parent"},
        {text:"A20",value:"20"},
        {text:"D2",value:"2"},
        {text:"D5",value:"D5"},
        {text:"D10",value:"10"},
    ],
    disposal:{},
    series:{},
    editedIndex: -1,
    editedDoc: {
    },
    rules: {
        required: value => !!value || 'Required.'
    },
  }),
  computed: {
      docs: function(){
          return store.state.series.series
      }
  },
  methods: {
        isBold(item){
            if(item.disposal == 'None'){
                return 'font-weight-black'
            }
        },

        getDocs () {
          console.log(docs)
        },

  },
  created(){
    this.route = this.$route.params.id;
    store.dispatch('getSeries',{fileplan: this.$route.params.fileplan, id:this.$route.params.id})
    console.log(this.route, this.$route);
  }
}
</script>
