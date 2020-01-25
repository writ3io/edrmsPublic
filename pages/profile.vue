<template>
  <div class="profile">
    <v-card class="mx-auto" max-width="600">
      <v-card-text>
        <div>
          <h4 class="display-1 text--primary">{{user.SurName}}</h4>
          <p><strong>{{user.Designation}}</strong> | {{user.Department}}</p>
        </div>
        <p>Email: {{user.EmailAdress}}</p>
        <p>Persal Number: {{user.PersonalNumber}}</p>
        <p>Office Number: {{user.OfficeNumber}}</p>
        <p>Phone Number: {{user.PhoneNumber}}</p>
        <p>Cell PhoneNumber: {{user.CellPhoneNumber}}</p>
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn text color="deep-purple accent-4">More</v-btn>
      </v-card-actions>-->
    </v-card>
  </div>
</template>

<script>
import store from "~/store/store";
export default {
  computed: {
    user() {
      return store.state.user;
    }
  }
};
</script>

<style>
</style>