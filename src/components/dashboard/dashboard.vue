<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <h3 style="color:black; text-align: center">Users info:</h3><hr><br><br>
    <div class="container" v-for="(x, index) in users">
      <p style="color: blue"><b>User #{{index}}:</b></p>
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
    <br><br>
    <input type="number" v-model="age">
    <button class="btn btn-primary" v-on:click="changeCurrentUserAgePatch">Click to Add/replace age (PATCH())</button>
    <br><br>
    <input type="number" v-model="age">
    <button class="btn btn-primary" v-on:click="changeCurrentUserAgePut">Click to Add/Overwrite age (PUT())</button>
    <br><br>
    <button class="btn btn-primary" v-on:click="deleteCurrentUserAccount">Delete current user's Account(Normal+Auth Data)</button>
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
      deleteCurrentUserAge(){
        this.$store.dispatch('deleteCurrentUserAge');
      },
      changeCurrentUserAgePatch(){
          this.$store.dispatch('changeCurrentUserAgePatch', this.age);
      },
      changeCurrentUserAgePut(){
        this.$store.dispatch('changeCurrentUserAgePut', this.age);
      },
      deleteCurrentUserAccount(){
        this.$store.dispatch('deleteCurrentUserAccount');
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