<template>
  <div class="printPreview">
    <div class="content">
      <v-layout fluid justify-center>
        <v-flex xs10>
          <center class="my-5"><h3>Circular Number: {{doc.body.circularNumber}}</h3></center>

          <h4 class="mt-4">ATTENTION:</h4>
          <h4
            class="mb-4"
            v-for="receipient in doc.recipients"
            :key="receipient.SurName"
          >{{receipient.SurName}},</h4>

          <h4 class="my-4">DEAR COLLEGUE</h4>

          <h4 class="reference">
            <u>RE: {{doc.body.memosubject}}</u>
          </h4>

          <p class="letter" v-html="doc.body.instructions"></p>
        </v-flex>
      </v-layout>
    </div>

    <!-- Responses -->
    <v-layout fluid justify-center>
      <v-flex xs10>
        <v-layout justify-space-between align-baseline class="footnotes mb-5">
          <v-flex xs4>
            <img :src="doc.body.authorSignature" alt="signature" style="max-width:100%" />
            <hr />
            <h4>{{doc.author.SurName}}</h4>
            <h4>{{doc.author.Designation}} | {{doc.author.Department}}</h4>
          </v-flex>
          <v-flex xs4>
            <h4>{{doc.createdAt | moment("(ddd) DD - MMM - YYYY")}}</h4>
            <hr />
            <h4>DATE</h4>
          </v-flex>
        </v-layout>

        <!-- ------- -->
        <v-layout
          v-for="signatory in doc.body.signatures"
          :key="signatory.value"
          justify-space-between
          align-baseline
          class="footnotes mb-5"
        >
          <v-flex xs4>
            <img :src="signatory.signature" alt="signature" style="max-width:100%" />
            <hr />
            <h4>{{signatory.SurName}}</h4>
            <h4>{{signatory.Designation}} | {{signatory.Department}}</h4>
          </v-flex>
          <v-flex xs4>
            <h4>{{signatory.signatureDate | moment("(ddd) DD - MMM - YYYY")}}</h4>
            <hr />
            <h4>DATE</h4>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <!-- Responses -->
  </div>
  <!-- Preview -->
</template>

<script>
import Vue from "vue";
import store from "~/store/store";
export default {
  layout: "print",
  computed: {
    doc() {
      return store.state.doc;
    }
  },
  async created() {
    console.log(this.ref, this.$route.params.id);
    await store.dispatch("getDocById", this.$route.params.id);
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