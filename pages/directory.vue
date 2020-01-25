<template>
  <div class="about">
    <h1 class="subheading">Department Directory</h1>
    <v-container>
      <v-toolbar flat color="white">
        <v-toolbar-title>Users</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" dark class="mb-2" @click="print"><v-icon>print</v-icon></v-btn>
      </v-toolbar>

      <div id="print" class="printPreview">
      <v-data-table class="elevation-1" :headers="headers" :items="users" :search="search" :rows-per-page-items='[50,100,500,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]'>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.SurName }}</td>
          <td class="text-xs-left">{{ props.item.Designation }}</td>
          <td class="text-xs-left">{{ props.item.Department }}</td>
          <td class="text-xs-left">{{ props.item.PhoneNumber }}</td>
          <td class="text-xs-left">{{ props.item.EmailAdress }}</td>
          <td v-if="props.item.role" class="text-xs-left">{{ props.item.role.text }}</td>
          <td v-else class="text-xs-left">Creator</td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';
import {registerUser} from '../services/AuthService'
import store from '~/store/store'
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'print.css'
  ]
}
Vue.use(VueHtmlToPaper, options);


export default {
  data: () => ({
    dialog: false,
    loading: false,
    setClaimsLoading: false,
    message:"",
    successMessage:"",
    search: '',
    headers: [
      {text: 'Surname &  Initials', align: 'left', value: 'displayname'},
      {text: 'Position', align: 'left', value: 'position'},
      {text: 'Office', align: 'left', value: 'office'},
      {text: 'Telephone', align: 'left', value: 'telephone'},
      {text: 'Email', align: 'left', value: 'email'},
      {text: 'User Role', align: 'left', value: 'role'}
    ],
    editedIndex: -1,
    editedUser: {
    },
    userRole: null,
    userRoles: [
      {text:"Records Manager", value:"recordsmanager"},
      {text:"IT", value:"it"}
    ]
  }),

  computed: {
    users: function(){
        return store.state.users
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New User' : 'Edit User'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    initialize () {
        //.....

    },
    print() {
      // Pass the element id here
      this.$htmlToPaper('print');
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedUser = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1);
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedUser = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
        this.message = "";
        this.successMessage = "";
      }, 500)
    },

    setUserRole(){
        //....
    },

    save () {
        //....
        registerUser(this.editedUser)
        console.log(this.editedUser)
    }
  },
  created(){
    console.log(store.state.users)
  }
}
</script>
