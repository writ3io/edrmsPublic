<template>
  <div class="home">
    <h1 class="subheading">Home Page</h1>

    <v-container>
       <v-list two-line subheader>
          <v-layout row wrap justify-space-around>
          <v-flex xs12 sm6 md3 v-for="link in links" :key="link.text" avatar>
          <v-list-tile class="warning lighten-4 ma-1" router :to="link.route">
            <v-list-tile-avatar>
              <v-icon class="warning white--text">folder</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{link.text}}</v-list-tile-title>
              <v-list-tile-sub-title>{{link.subHeading}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="warning lighten-1">chevron_right</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          </v-flex>
          </v-layout>
        </v-list>
    </v-container>

  </div>
</template>

<script>

  export default {
    data(){
        return{
           links: [
               {subHeading: 'General file plan', text: 'General', route: 'fileplan/general'},
               {subHeading: 'Staff file plan', text: 'Staff', route: 'fileplan/staff'},
               {subHeading: 'Schedule file plan', text: 'Schedule', route: 'fileplan/schedule'},
               {subHeading: 'Ministerial file plan', text: 'Ministerial', route: 'fileplan/ministerial'}
           ]
        }
    },
  }
</script>
