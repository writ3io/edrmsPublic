<template>
  <div class="maintenance">
    <v-container>
      <v-toolbar flat color="white">
        <v-toolbar-title class="text-uppercase">Maintenance</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
      </v-toolbar>
      <v-data-table :headers="headers" :items="docs" disable-initial-sort :rows-per-page-items='[50,100,500,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]'>
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.createdAt | moment("ddd/MMM-DD h:mmA")}}</td>
          <td>{{ props.item.template }} | {{ props.item.ref }}</td>
          <td class="text-xs-left">{{ JSON.parse(props.item.author).SurName }}</td>
          <td class="text-xs-left">{{ JSON.parse(props.item.author).Department }}</td>
          <td class="text-xs-left">{{ JSON.parse(props.item.author).EmailAdress }}</td>
          <td class="justify-center layout px-0">
            <v-icon class="mr-2" @click="goToPrint(props.item.id, props.item.template)">print</v-icon>
            <v-icon class="mr-2" @click="requestFile(props.item)">reply</v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import store from "~/store/store";
import { newRequest } from "~/services/RecordService";
export default {
  data: () => ({
    users: [],
    user: {},
    editedIndex: -1,
    editedUser: {
    },
    headers: [
      {text: 'Date', align: 'left', value: 'time'},
      {text: 'REF:', align: 'left', value: 'ref'},
      {text: 'Surname &  Initials', align: 'left', value: 'displayname'},
      {text: 'Office', align: 'left', value: 'office'},
      {text: 'Email', align: 'left', value: 'email'},
      {text: 'Actions',  value: 'actions'}
    ],
  }),
  computed: {
    docs: function() {
      console.log(store.state.docs)
      return store.state.docs;
    }
  },
  methods: {
    initialize () {
      store.dispatch('getAllRecords', {location:'maintenance', ref:this.$route.params.ref})
    },
    requestFile(item) {
      console.log(item)
      newRequest(item)
    },
    goToPrint(id, template){
        this.$router.push(`/previews/${id}/${template}/print`)
    }
  },
  created(){
    console.log(this.$route)
    this.initialize()
  }
}
</script>
