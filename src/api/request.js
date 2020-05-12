import axios from 'axios';
import qs from 'qs' 
import { getUserInfo } from '@/data/common.js';

const service = axios.create({
    timeout: 10000,
});
service.interceptors.request.use(config => {
    if(getUserInfo().isLogin){
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': getUserInfo().LoginSession
        }
    }else{
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    config.data = qs.stringify(config.data)
    
    // config.url = config.url.indexOf('/server') !== -1 ? config.url : 'http://106.52.216.92:8082' + config.url
    
    return config
}, error => {
    Promise.reject(error)
});

service.interceptors.response.use(res => {
    if (res.data.errorCode) {
        // ...
    }
    //request config meta : default data
    if (res.config.meta && res.config.meta['returnType'] === 'res') {
        return res;
    }
    return res.data || res;
}, error => {
    // Toast('系统繁忙,请稍后重试');
    return Promise.reject(error)
});

export { service };
