import axios from 'axios'

const instance=axios.create({
    baseURL:'https://vue-axios-78d11.firebaseio.com'
});

instance.defaults.headers.common['cunstom-axios']='im local axios';

export default instance;