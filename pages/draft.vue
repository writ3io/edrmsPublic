<template>
  <div class="activities">
      <h2>Draft</h2>
      <v-card
        flat
        class="pa-4"
        v-for="doc in outDocs"
        :key="doc.id"
        router
        :to="`/creation/general/subseries/templates/${doc.ref.replace(/\//g, '-')}/${doc.template}/${doc.id}`"
      >
        <v-layout row wrap>
          <v-flex xs12 md1>
            <div class="caption">Ref:</div>
            <div class="font-weight-black">{{doc.ref}}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption">From</div>
            <div class="font-weight-black">{{JSON.parse(doc.author).SurName}}</div>
            <div class="font-weight-black primary--text">{{JSON.parse(doc.author).Department}}</div>
            <div>{{doc.author.position}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">To</div>
            <div class="names-wraper">
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
          <v-flex xs2 sm4 md2>
            <div class="caption">Actions</div>
            <div class="right">
              
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
  </div>
</template>

<script>
import store from "~/store/store";
export default {
  data: () => ({}),
  computed: {
    outDocs: function() {
      console.log(store.state.docs);
      return store.state.docs;
    }
  },
  methods: {
    getoutDocs(user) {}
  },
  created() {
    store.dispatch("getUserDocs", 'draft');
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