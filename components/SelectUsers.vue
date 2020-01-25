<template>
  <div class="uselector">
    <v-combobox
      v-model="selectedUsers"
      :items="users"
      :label="label"
      :multiple="multiple"
      chips
      return-object
      item-text="SurName"
      item-value="EmailAdress"
      rounded
    >
      <template slot="selection" slot-scope="data">
        <v-chip
          :key="JSON.stringify(data.item)"
          :selected="data.item.selected"
          :disabled="data.disabled"
          class="v-chip--select-multi"
          @input="data.parent.selectItem(data.item)"
        >
          <v-avatar class="accent white--text" v-text="data.item.SurName.slice(0, 1).toUpperCase()"></v-avatar>
          {{ data.item.EmailAdress }}
          | {{ data.item.Designation }}
        </v-chip>
      </template>
    </v-combobox>
  </div>
</template>

<script>
import store from "~/store/store";
export default {
  props: {
    multiple: true,
    label: ""
  },
  data() {
    return {
      selectedUsers: null
    };
  },
  computed: {
    users() {
      return store.state.users;
    }
  },
  watch:{
      selectedUsers(){
          this.$emit('getUsers', this.selectedUsers)
      }
  }
};
</script>

<style>
</style>