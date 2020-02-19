<template>
  <div class="home">
    <h1 class="headline">General</h1>

    <v-container>
      <v-layout row wrap justify-space-around>

        <v-flex xs12 md2>
          <v-btn large block round depressed class="white warning--text" router :to="'/creation/' + route ">
            <v-icon left>create_new_folder</v-icon>
            <span>Creation</span>
          </v-btn>
        </v-flex>

        <v-flex xs12 md3>
          <v-btn large block round depressed class="white warning--text" router :to="'/usage/' + route ">
            <v-icon left>people</v-icon>
            <span>Usage</span>
          </v-btn>
        </v-flex>

        <v-flex xs12 md3 router>
          <v-btn large block round depressed class="white warning--text" router :to="'/maintenance/' + route ">
            <v-icon left>work</v-icon>
            <span>Maintenance</span>
          </v-btn>
        </v-flex>

        <v-flex xs12 md2>
          <v-btn large block round depressed class="white warning--text" router :to="'/disposal/' + route ">
            <v-icon left>archive</v-icon>
            <span>Disposal</span>
          </v-btn>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    data() {
        return {
            route: ""
        }
    },
    created(){
      this.route = this.$route.params.fileplan;
      console.log(this.$route.params.fileplan)
    }
  }
</script>
