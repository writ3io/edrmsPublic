<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Records</h1>

    <v-container class="my-5">
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('template')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By Name</span>
          </v-btn>
          <span>Sort by author name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('time')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">By Date</span>
          </v-btn>
          <span>Sort by date</span>
        </v-tooltip>
      </v-layout>

      <v-card
        flat
        v-for="doc in docs"
        :key="doc.id"
        :to="`/previews/${doc.id}/${doc.template}/records`"
      >
        <v-layout row wrap :class="`pa-3 project ${doc.action}`">
          <v-flex xs12 md2>
            <div class="caption">Ref:</div>
            <div class="font-weight-black">{{doc.ref}}</div>
          </v-flex>
          <v-flex xs6 sm5 md3>
            <div class="caption">From</div>
            <div class="font-weight-black">{{docAuthor(doc).SurName}}</div>
            <div class="font-weight-black primary--text">{{docAuthor(doc).Department}}</div>
            <div>{{docAuthor(doc).Designation}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">To</div>
            <div class="names-wraper">
              <p
                class="names caption"
                v-for="name in docBody(doc).recipients"
                :key="name.EmailAdress"
              >{{name.SurName}}</p>
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Subject</div>
            <div class="font-weight-black">{{doc.template}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Date</div>
            <div class="font-weight-black">{{ doc.createdAt | moment("ddd, DD-MMM-YY hA") }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import store from "~/store/store";
export default {
  data: () => ({
    route: "",
    action: {},
    loading: false,
  }),
  computed: {
    docs(){
        console.log(store.state.docs)
      return store.state.docs;
    }
  },
  methods: {
    docBody(doc){
      if(doc.body){
        return JSON.parse(doc.body)
      }
      return {}
    },
    docAuthor(doc){
      if(doc.author){
        return JSON.parse(doc.author)
      }
      return {}
    },
    sortBy(prop) {
      this.docs.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },

    send() {}
  },

  created() {
    this.route = this.$route.params.route;
    console.log(this.route, this.$route);
    store.dispatch('getAllDocs', 'records')
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