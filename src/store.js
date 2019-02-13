import Vue from 'vue'
import Vuex from 'vuex'
import authAxios from './Custom-axion'; //the REST API of firebase for authentication
import globalAxios from 'axios'; // the URL in the main.js file
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken:null,
    userId:null,
    user:null
  },
  mutations: {
    authUser(state, userData){
        state.idToken=userData.token;
        state.userId=userData.userId;
    },
    storeUser(state, user){
      state.user=user;
    },
    clearAuthData(state){
      state.idToken=null;
      state.userId=null;
    }
  },

  actions: {
    signup({commit, dispatch}, authData){
      authAxios.post('/signupNewUser?key=AIzaSyDgx-TqVIEcws5Yp3_R5sCH5V6j0HnZAEE', {email:authData.email, password:authData.password, returnSecureToken:true})
          .then(res=>{
            console.log(res);
            commit('authUser', {token:res.data.idToken, userId:res.data.localId}); //first authenticate
            dispatch('storeUser', authData); //then save all the data in the normal database
          }).catch(err=>console.log(err));
    },

    login({commit}, authData){
      authAxios.post('/verifyPassword?key=AIzaSyDgx-TqVIEcws5Yp3_R5sCH5V6j0HnZAEE', {email:authData.email, password:authData.password, returnSecureToken:true})
          .then(res=>{
            console.log(res);
            commit('authUser', {token:res.data.idToken, userId:res.data.localId});
          }).catch(err=>console.log(err));
    },



    storeUser({commit, state}, formData){
      if(!state.idToken)
      {
        return;
      }
      globalAxios.post('/userData.json'+'?auth='+state.idToken, formData).then(res=> console.log(res)).catch(err=>console.log(err));
    },


    fetchUser({commit, state}){
      if(!state.idToken)
      {
        return;
      }
      globalAxios.get('/userData.json'+'?auth='+state.idToken)
          .then(res=>{
            console.log(res);
            const data=res.data;
            const users=[];
            for(let key in data){
              const user=data[key];
              user.id=key;
              users.push(user);
            }
            //this.email=users[0].email;
            commit('storeUser', users[0]);
          }).catch(err=>console.log(err));
    },

    logout({commit}){
      commit('clearAuthData');
      router.replace('/signin');
    }
  },
  getters: {
    user(state){
      return state.user;
    },
    isAuthenticated(state){
      return state.idToken !== null;
    }
  }
})