<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Users info:</p><hr><br><br>
    <div class="container" v-for="(x, index) in users">
      <p>User No. {{index}}:</p>
      <table class="table" >
        <thead>
          <tr>
            <th>Email</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody class="table">
          <tr>
            <td>{{x.email}}</td>
            <td> {{x.age}}</td>
            <td>{{x.country}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserAge">Delete current user's age</button>
    <p>Add/Edit age of current user:</p>
    <input type="number" v-model="age">
    <button class="btn btn-primary" v-on:click="changeCurrentUserAge">Click to Add/Edit age</button>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserNormalData">Delete current user's normal Data</button>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserAuthData">Delete current user's Auth Data</button>
    <br><br>
    <button class="btn btn-danger" v-on:click="deleteAllUsersNormalData">Delete all users normal Data</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        age:''
      }
    },
    computed:{
      users(){
        //console.log("users:"+this.$store.getters.users[0]);
        return this.$store.getters.users?  this.$store.getters.users : false;
      }
    },
    methods:{
      deleteCurrentUserNormalData(){
          this.$store.dispatch('deleteCurrentUserNormalData');
      },
      changeCurrentUserAge(){
          this.$store.dispatch('changeCurrentUserAge', this.age);
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