<template>
  <div class="usage">
    <v-snackbar
      v-model="snackbar"
      color="success"
      multi-line
      right
      top
      :timeout="timeout"
    >{{ snackbarText }}</v-snackbar>

    <v-container>
      <v-toolbar flat color="white">
        <v-toolbar-title>Requests</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
      </v-toolbar>
      <v-data-table :headers="headers" :items="docs" disable-initial-sort :rows-per-page-items='[50,100,500,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]'>
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.initialDate | moment("ddd/MMM-DD h:mmA")}}</td>
          <td>{{ props.item.template }} | {{ props.item.ref }}</td>
          <td class="text-xs-left">{{ JSON.parse(props.item.user).SurName }}</td>
          <td class="text-xs-left">{{ JSON.parse(props.item.author).SurName }}</td>
          <td class="justify-center layout px-0">
            <v-icon class="mr-2 success--text" @click="grantAccess(props.item)">done</v-icon>
            <v-icon class="mr-2 error--text" @click="deniAccess(props.item)">cancel</v-icon>
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
import { updateRequests, removeRequest } from "~/services/RecordService";
export default {
  data: () => ({
    route: "",
    snackbar: false,
    snackbarText: "",
    timeout: 3000,
    action: {},
    loading: false,
    headers: [
      { text: "Date Created", align: "left", value: "time" },
      { text: "REF:", align: "left", value: "ref" },
      { text: "Requested By", align: "left", value: "user" },
      { text: "Record's Author", align: "left", value: "email" },
      { text: "Actions", value: "actions" }
    ]
  }),
  computed: {
    docs() {
      console.log(store.state.docs);
      return store.state.docs;
    }
  },
  methods: {
    docBody(doc) {
      if (doc.body) {
        return JSON.parse(doc.body);
      }
      return {};
    },
    docAuthor(doc) {
      if (doc.author) {
        return JSON.parse(doc.author);
      }
      return {};
    },
    initialize() {
      store.dispatch("getAllRequests", "records");
    },

    async grantAccess(record) {
      record.location = store.state.user.EmailAdress;
      console.log(record);
      await updateRequests(record);
      this.initialize()
    },

    async deniAccess(record) {
      record.location = store.state.user.EmailAdress;
      console.log(record);
      await removeRequest(record.id);
      this.initialize()
    },

    send() {}
  },

  created() {
    this.route = this.$route.params.route;
    console.log(this.route, this.$route);
    store.dispatch("getAllRequests", "records");
  }
};
</script>

<style>
.project {
  transition: background-color 0.5s;
}
.project:hover {
  background-color: #eeeeef;
}
.project {
  border-left: 4px solid #c7c7c7;
}
.project.Approval {
  border-left: 4px solid #3cd1c2;
}
.project.Input {
  border-left: 4px solid #ffaa2c;
}
.project.Attention {
  border-left: 4px solid #f83e70;
}
.v-chip.Approval {
  background-color: #3cd1c2;
}
.v-chip.Input {
  background-color: #ffaa2c;
}
.v-chip.Attention {
  background-color: #f83e70;
}
.names {
  margin: 0;
}
.names-wraper {
  height: 64px;
  overflow-y: auto;
}
</style>