<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="email">Email: {{email}}</p>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteUser">Delete user</button>

    <br><br>
    <button class="btn btn-primary" v-on:click="deleteAllUser">Delete all users</button>
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
      deleteUser(){
          this.$store.dispatch('deleteUser');
      },
      deleteAllUser(){
          this.$store.dispatch('deleteAllUser');
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