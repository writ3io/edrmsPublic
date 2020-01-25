<template>
  <div class="printPreview">
    <v-layout>
      <v-card v-if="JSON.parse(doc.author).SurName" class="mx-auto" min-width="300" width="640">
        <v-card-text>
          <h4 class="text-uppercase">{{JSON.parse(doc.author).SurName}}</h4>
          <div class="mb-5">{{JSON.parse(doc.author).EmailAdress}}</div>
          <p class="display-1 text--primary text-uppercase">{{doc.ref}} | {{doc.template}}</p>
          <p>{{doc.initialDate | moment("(ddd) DD - MMM - YYYY")}}</p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn text color="deep-purple accent-4">More Details</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
  <!-- Preview -->
</template>

<script>
import Vue from "vue";
import store from "~/store/store";
export default {
  layout: "print",
  data: () => ({
    doc: {
      author: "{}"
    }
  }),
  computed: {
    docData() {
      return store.state.doc;
    }
  },
  watch:{
    docData(){
      this.doc = this.docData
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getRecord", this.$route.params.id);
    console.log(store.state.doc);
  }
};
</script>

<style scoped>
.first-header {
  margin-top: -40px;
}
th {
  font-weight: 400;
}
</style>