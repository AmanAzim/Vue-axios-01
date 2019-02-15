<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="email">Email: {{email}}</p>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserNormalData">Delete current user's normal Data</button>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserAge">Delete current user's age</button>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserAuthData">Delete current user's Auth Data</button>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteAllUsersNormalData">Delete all users normal Data</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    computed:{
      email(){
        return this.$store.getters.user?  this.$store.getters.user.email : false;
      }
    },
    methods:{
      deleteCurrentUserNormalData(){
          this.$store.dispatch('deleteCurrentUserNormalData');
      },
      deleteCurrentUserAge(){
          this.$store.dispatch('deleteCurrentUserAge');
      },
      deleteCurrentUserAuthData(){
          this.$store.dispatch('deleteCurrentUserAuthData');
      },
      deleteAllUsersNormalData(){
          this.$store.dispatch('deleteAllUsersNormalData');
      }
    },
    created() {
      this.$store.dispatch('fetchUser');
      console.log('created');

    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>