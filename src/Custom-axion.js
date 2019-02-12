import axios from 'axios'

const instance=axios.create({
    //baseURL:'https://vue-axios-78d11.firebaseio.com' //without authentication, send the request directly to fire base.

    baseURL:'https://www.googleapis.com/identitytoolkit/v3/relyingparty' //firebase REST api for authentication
});

//instance.defaults.headers.common['cunstom-axios']='im local axios'; //will not work with REST api for authentication

export default instance;